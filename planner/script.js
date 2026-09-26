// ==========================================================
// script.js — Vanilla JS (Sem Frameworks)
// CRUD Firebase RTDB + Lucide Icons + Dark Mode +
// Dashboard Interativo + Chatbot Ollama (gemma4)
// ==========================================================

// Configuração do Firebase Realtime Database
const FIREBASE_BASE_URL = 'https://gerenciador-de-tarefas-3b3e2-default-rtdb.firebaseio.com/';
const TASKS_URL = `${FIREBASE_BASE_URL}/tasks.json`;

// Configurações do Chatbot Ollama
const OLLAMA_API_URL = 'http://10.136.43.122:11434/api/chat';
const OLLAMA_MODEL = 'gemma4';
const CHAT_STORAGE_KEY = 'planner_chat_history';
const THEME_STORAGE_KEY = 'planner_theme';

// ----------------------------------------------------------
// 1. Estado da Aplicação
// ----------------------------------------------------------
let tasks = [];
let filtroAtual = 'all'; // 'all' | 'pendentes' | 'concluidas' | 'alta' | 'media' | 'baixa'
let chatHistory = [];

// ----------------------------------------------------------
// 2. Referências do DOM
// ----------------------------------------------------------
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskTitleInput = document.getElementById('task-title');
const taskDateInput = document.getElementById('task-date');
const taskPriorityInput = document.getElementById('task-priority');
const taskDescInput = document.getElementById('task-desc');

const todayLabel = document.getElementById('today-label');
const calendarGrid = document.getElementById('calendar-grid');
const calendarLabel = document.getElementById('calendar-label');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const dayDetail = document.getElementById('day-detail');

// Elementos de Tema
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');

// Elementos do Dashboard
const statTotal = document.getElementById('stat-total');
const statPending = document.getElementById('stat-pending');
const statCompleted = document.getElementById('stat-completed');
const statRate = document.getElementById('stat-rate');
const statProgressBar = document.getElementById('stat-progress-bar');
const activeFilterBadge = document.getElementById('active-filter-badge');

const filterCountAll = document.getElementById('filter-count-all');
const filterCountPending = document.getElementById('filter-count-pending');
const filterCountCompleted = document.getElementById('filter-count-completed');
const filterCountAlta = document.getElementById('filter-count-alta');
const filterCountMedia = document.getElementById('filter-count-media');
const filterCountBaixa = document.getElementById('filter-count-baixa');

// Elementos do Chatbot
const chatbotWidget = document.getElementById('chatbot-widget');
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
const chatbotClearBtn = document.getElementById('chatbot-clear-btn');

// Calendário
const NOMES_MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const hoje = new Date();
let mesAtual = hoje.getMonth();   // 0 a 11
let anoAtual = hoje.getFullYear();
let dataSelecionada = null;       // string ISO 'YYYY-MM-DD' ou null

// ----------------------------------------------------------
// Helper: Atualização de Ícones Lucide
// ----------------------------------------------------------
function updateLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// ----------------------------------------------------------
// 3. Módulo de Tema (Dark / Light Mode)
// ----------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Preferência do sistema operacional
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  if (themeIcon) {
    // Se estiver no tema dark, o ícone mostra o sol para voltar ao light
    // Se estiver no light, mostra a lua para alternar ao dark
    themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    updateLucideIcons();
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// ----------------------------------------------------------
// 4. Módulo de Dashboard Interativo de Tarefas
// ----------------------------------------------------------
function renderDashboard() {
  const total = tasks.length;
  const concluidas = tasks.filter(t => t.concluida).length;
  const pendentes = total - concluidas;
  const taxa = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  const alta = tasks.filter(t => t.prioridade === 'alta').length;
  const media = tasks.filter(t => t.prioridade === 'media').length;
  const baixa = tasks.filter(t => t.prioridade === 'baixa').length;

  if (statTotal) statTotal.textContent = total;
  if (statPending) statPending.textContent = pendentes;
  if (statCompleted) statCompleted.textContent = concluidas;
  if (statRate) statRate.textContent = `${taxa}%`;
  if (statProgressBar) statProgressBar.style.width = `${taxa}%`;

  if (filterCountAll) filterCountAll.textContent = total;
  if (filterCountPending) filterCountPending.textContent = pendentes;
  if (filterCountCompleted) filterCountCompleted.textContent = concluidas;
  if (filterCountAlta) filterCountAlta.textContent = alta;
  if (filterCountMedia) filterCountMedia.textContent = media;
  if (filterCountBaixa) filterCountBaixa.textContent = baixa;

  // Atualiza botões ativos na barra de filtros
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filtroAtual);
  });

  // Atualiza badge de filtro ativo no painel de tarefas
  if (activeFilterBadge) {
    if (filtroAtual === 'all') {
      activeFilterBadge.style.display = 'none';
      activeFilterBadge.textContent = '';
    } else {
      activeFilterBadge.style.display = 'inline-flex';
      const labels = {
        pendentes: 'Filtro: Pendentes',
        concluidas: 'Filtro: Concluídas',
        alta: 'Prioridade: Alta',
        media: 'Prioridade: Média',
        baixa: 'Prioridade: Baixa'
      };
      activeFilterBadge.textContent = labels[filtroAtual] || `Filtro: ${filtroAtual}`;
    }
  }
}

// Interatividade dos filtros do Dashboard e Pílulas
function initFilterControls() {
  // Pílulas de filtro
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      filtroAtual = btn.dataset.filter;
      renderTasks();
      renderDashboard();
    });
  });

  // Cards interativos do Dashboard
  document.querySelectorAll('.stat-card[data-filter]').forEach(card => {
    card.addEventListener('click', () => {
      filtroAtual = card.dataset.filter;
      renderTasks();
      renderDashboard();
    });
  });

  // Clicar no badge de filtro limpa o filtro
  if (activeFilterBadge) {
    activeFilterBadge.addEventListener('click', () => {
      filtroAtual = 'all';
      renderTasks();
      renderDashboard();
    });
    activeFilterBadge.style.cursor = 'pointer';
    activeFilterBadge.title = 'Clique para remover o filtro';
  }
}

// ----------------------------------------------------------
// 5. Renderização da Lista de Tarefas
// ----------------------------------------------------------
function getFilteredTasks() {
  if (filtroAtual === 'pendentes') {
    return tasks.filter(t => !t.concluida);
  }
  if (filtroAtual === 'concluidas') {
    return tasks.filter(t => t.concluida);
  }
  if (['alta', 'media', 'baixa'].includes(filtroAtual)) {
    return tasks.filter(t => t.prioridade === filtroAtual);
  }
  return tasks;
}

function renderTasks() {
  taskList.innerHTML = '';
  const filtered = getFilteredTasks();

  if (filtered.length === 0) {
    const mensagemVazia = tasks.length === 0
      ? 'Nenhuma tarefa registrada ainda.'
      : 'Nenhuma tarefa corresponde ao filtro selecionado.';
    taskList.innerHTML = `<li class="task-list__empty">${mensagemVazia}</li>`;
    return;
  }

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.concluida ? ' task-item--done' : '');
    li.dataset.id = task.id;

    li.innerHTML = `
      <input type="checkbox" class="task-item__checkbox" ${task.concluida ? 'checked' : ''} aria-label="Marcar tarefa como concluída">
      <div class="task-item__body">
        <div class="task-item__title">${escapeHtml(task.titulo)}</div>
        <div class="task-item__meta">
          <span>${formatDate(task.data)}</span>
          <span class="task-item__priority task-item__priority--${task.prioridade}">${task.prioridade}</span>
          <button type="button" class="task-item__delete" aria-label="Excluir tarefa" title="Excluir tarefa">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateLucideIcons();
}

function formatDate(isoDate) {
  if (!isoDate) return '';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ----------------------------------------------------------
// 6. Calendário
// ----------------------------------------------------------
function paraISO(ano, mesIndex, dia) {
  const mm = String(mesIndex + 1).padStart(2, '0');
  const dd = String(dia).padStart(2, '0');
  return `${ano}-${mm}-${dd}`;
}

function renderCalendar() {
  if (!calendarLabel || !calendarGrid) return;

  calendarLabel.textContent = `${NOMES_MESES[mesAtual]} ${anoAtual}`;
  calendarGrid.innerHTML = '';

  const primeiroDiaDaSemana = new Date(anoAtual, mesAtual, 1).getDay(); // 0 (dom) a 6 (sáb)
  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const isoHoje = paraISO(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

  // Células vazias antes do dia 1
  for (let i = 0; i < primeiroDiaDaSemana; i++) {
    const vazio = document.createElement('div');
    vazio.className = 'calendar-day calendar-day--muted';
    calendarGrid.appendChild(vazio);
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const isoDia = paraISO(anoAtual, mesAtual, dia);
    const temTarefa = tasks.some(t => t.data === isoDia);

    const celula = document.createElement('div');
    celula.className = 'calendar-day';
    celula.textContent = dia;
    celula.dataset.date = isoDia;

    if (isoDia === isoHoje) celula.classList.add('calendar-day--today');
    if (temTarefa) celula.classList.add('calendar-day--has-task');
    if (isoDia === dataSelecionada) celula.classList.add('calendar-day--selected');

    calendarGrid.appendChild(celula);
  }
}

if (calendarGrid) {
  calendarGrid.addEventListener('click', (e) => {
    const celula = e.target.closest('.calendar-day:not(.calendar-day--muted)');
    if (!celula) return;

    dataSelecionada = celula.dataset.date;
    renderCalendar();
    renderDayDetail();
  });
}

function renderDayDetail() {
  if (!dayDetail) return;

  if (!dataSelecionada) {
    dayDetail.innerHTML = '<p class="calendar-panel__hint">Selecione um dia para ver as tarefas.</p>';
    return;
  }

  const tarefasDoDia = tasks.filter(t => t.data === dataSelecionada);

  if (tarefasDoDia.length === 0) {
    dayDetail.innerHTML = `<p class="calendar-panel__hint">Nenhuma tarefa em ${formatDate(dataSelecionada)}.</p>`;
    return;
  }

  dayDetail.innerHTML = tarefasDoDia
    .map(t => `<p><strong>${escapeHtml(t.titulo)}</strong> — <span class="task-item__priority task-item__priority--${t.prioridade}">${t.prioridade}</span></p>`)
    .join('');
}

if (prevMonthBtn) {
  prevMonthBtn.addEventListener('click', () => {
    mesAtual--;
    if (mesAtual < 0) { mesAtual = 11; anoAtual--; }
    renderCalendar();
  });
}

if (nextMonthBtn) {
  nextMonthBtn.addEventListener('click', () => {
    mesAtual++;
    if (mesAtual > 11) { mesAtual = 0; anoAtual++; }
    renderCalendar();
  });
}

// ----------------------------------------------------------
// 7. Integração Firebase: Buscar, Criar, Toggle e Excluir
// ----------------------------------------------------------
async function loadTasks() {
  try {
    const response = await fetch(TASKS_URL);
    if (!response.ok) throw new Error('Falha ao buscar tarefas');

    const data = await response.json();

    tasks = data
      ? Object.entries(data).map(([id, campos]) => ({ id, ...campos }))
      : [];

    renderTasks();
    renderDashboard();
    renderCalendar();
    renderDayDetail();
  } catch (err) {
    console.error(err);
    if (taskList) {
      taskList.innerHTML = '<li class="task-list__empty">Não foi possível conectar ao Firebase. Confira a URL no topo do script.js.</li>';
    }
  }
}

if (taskForm) {
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const camposNovaTarefa = {
      titulo: taskTitleInput.value.trim(),
      data: taskDateInput.value,
      prioridade: taskPriorityInput.value,
      descricao: taskDescInput.value.trim(),
      concluida: false
    };

    try {
      const response = await fetch(TASKS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(camposNovaTarefa)
      });

      if (!response.ok) throw new Error('Falha ao criar tarefa');

      const { name: novoId } = await response.json();
      tasks.push({ id: novoId, ...camposNovaTarefa });

      renderTasks();
      renderDashboard();
      renderCalendar();
      renderDayDetail();
      taskForm.reset();
    } catch (err) {
      console.error(err);
      alert('Não foi possível salvar a tarefa. Veja o console para detalhes.');
    }
  });
}

if (taskList) {
  taskList.addEventListener('click', (e) => {
    const li = e.target.closest('.task-item');
    if (!li) return;

    const id = li.dataset.id;

    if (e.target.classList.contains('task-item__checkbox')) {
      toggleTask(id);
    } else if (e.target.closest('.task-item__delete')) {
      deleteTask(id);
    }
  });
}

async function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const novoValor = !task.concluida;

  try {
    const response = await fetch(`${FIREBASE_BASE_URL}/tasks/${id}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ concluida: novoValor })
    });

    if (!response.ok) throw new Error('Falha ao atualizar tarefa');

    task.concluida = novoValor;
    renderTasks();
    renderDashboard();
  } catch (err) {
    console.error(err);
    alert('Não foi possível atualizar a tarefa.');
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`${FIREBASE_BASE_URL}/tasks/${id}.json`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Falha ao excluir tarefa');

    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
    renderDashboard();
    renderCalendar();
    renderDayDetail();
  } catch (err) {
    console.error(err);
    alert('Não foi possível excluir a tarefa.');
  }
}

// ----------------------------------------------------------
// 8. Módulo Chatbot Ollama (Q&A e Tradução com Memória)
// ----------------------------------------------------------
function initChatbot() {
  loadChatHistory();
  renderChatMessages();

  if (chatbotToggleBtn) {
    chatbotToggleBtn.addEventListener('click', () => toggleChat());
  }

  if (chatbotCloseBtn) {
    chatbotCloseBtn.addEventListener('click', () => toggleChat(false));
  }

  if (chatbotClearBtn) {
    chatbotClearBtn.addEventListener('click', clearChatHistory);
  }

  if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleChatSubmit();
    });
  }
}

function loadChatHistory() {
  try {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY);
    if (saved) {
      chatHistory = JSON.parse(saved);
    } else {
      // Mensagem inicial de acolhimento do assistente
      chatHistory = [
        {
          role: 'assistant',
          content: 'Olá! Sou seu assistente de inteligência artificial com o modelo Gemma4. Posso ajudar a planejar suas tarefas, responder dúvidas gerais ou fazer traduções de qualquer texto. Como posso te ajudar hoje?',
          timestamp: Date.now()
        }
      ];
      saveChatHistory();
    }
  } catch (e) {
    console.error('Erro ao ler histórico do chat:', e);
    chatHistory = [];
  }
}

function saveChatHistory() {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatHistory));
  } catch (e) {
    console.error('Erro ao salvar histórico do chat:', e);
  }
}

function toggleChat(forceOpen) {
  if (!chatbotWindow) return;
  const shouldOpen = forceOpen !== undefined ? forceOpen : !chatbotWindow.classList.contains('open');

  chatbotWindow.classList.toggle('open', shouldOpen);
  chatbotWindow.setAttribute('aria-hidden', !shouldOpen);

  if (shouldOpen) {
    chatbotInput?.focus();
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
}

function renderChatMessages() {
  if (!chatbotMessages) return;
  chatbotMessages.innerHTML = '';

  chatHistory.forEach(msg => {
    const msgEl = document.createElement('div');
    msgEl.className = `chat-msg ${msg.role === 'user' ? 'chat-msg--user' : 'chat-msg--bot'}`;
    msgEl.textContent = msg.content;
    chatbotMessages.appendChild(msgEl);
  });

  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function handleChatSubmit() {
  const query = chatbotInput.value.trim();
  if (!query) return;

  // 1. Adiciona a mensagem do usuário no histórico local
  const userMsg = {
    role: 'user',
    content: query,
    timestamp: Date.now()
  };
  chatHistory.push(userMsg);
  saveChatHistory();
  renderChatMessages();

  // Limpa o campo de entrada
  chatbotInput.value = '';

  // 2. Indicador visual de digitação ("digitando...")
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-typing';
  typingIndicator.id = 'chat-typing';
  typingIndicator.innerHTML = `
    <span class="chat-typing-dot"></span>
    <span class="chat-typing-dot"></span>
    <span class="chat-typing-dot"></span>
  `;
  chatbotMessages.appendChild(typingIndicator);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // 3. Monta o contexto para a API do Ollama
  // Instrução de sistema inicial para capacitar Q&A e Tradução
  const systemPrompt = {
    role: 'system',
    content: 'Você é um assistente de produtividade e idioma inteligente integrado ao aplicativo Livro de Tarefas. Você responde perguntas de forma clara, amigável e direta, e realiza traduções precisas entre português e qualquer outro idioma solicitado. Responda em português por padrão, a menos que o usuário peça outro idioma.'
  };

  // Envia as mensagens anteriores (histórico) para manter a memória multi-turn
  const messagesPayload = [
    systemPrompt,
    ...chatHistory.map(m => ({ role: m.role, content: m.content }))
  ];

  try {
    const response = await fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: messagesPayload,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na resposta do servidor Ollama (${response.status})`);
    }

    const data = await response.json();
    const assistantReply = data?.message?.content || 'Não foi possível obter uma resposta do modelo.';

    // Remove o indicador de digitação
    document.getElementById('chat-typing')?.remove();

    // 4. Adiciona a resposta do assistente ao histórico
    chatHistory.push({
      role: 'assistant',
      content: assistantReply,
      timestamp: Date.now()
    });
    saveChatHistory();
    renderChatMessages();

  } catch (error) {
    console.error('Erro ao conectar ao Ollama:', error);
    document.getElementById('chat-typing')?.remove();

    const errorMsg = {
      role: 'assistant',
      content: `⚠️ Não foi possível se comunicar com o Ollama em ${OLLAMA_API_URL}.\n\nCertifique-se de que:\n1. O serviço Ollama está rodando na máquina 10.136.43.122:11434.\n2. O Ollama foi iniciado com suporte a CORS (variável OLLAMA_ORIGINS="*" configurada no servidor).\n3. O modelo "${OLLAMA_MODEL}" está baixado no servidor (ex: "ollama run ${OLLAMA_MODEL}").`,
      timestamp: Date.now()
    };
    chatHistory.push(errorMsg);
    saveChatHistory();
    renderChatMessages();
  }
}

function clearChatHistory() {
  if (confirm('Deseja limpar todo o histórico desta conversa?')) {
    chatHistory = [
      {
        role: 'assistant',
        content: 'Histórico reiniciado! Como posso ajudar você agora?',
        timestamp: Date.now()
      }
    ];
    saveChatHistory();
    renderChatMessages();
  }
}

// ----------------------------------------------------------
// 9. Inicialização da Aplicação
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Configura data de hoje no header com ícone
  if (todayLabel) {
    todayLabel.innerHTML = `
      <i data-lucide="calendar" class="btn-icon-inside"></i>
      <span>${hoje.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })}</span>
    `;
  }

  initTheme();
  initFilterControls();
  initChatbot();

  renderCalendar();
  renderDayDetail();
  loadTasks();
  updateLucideIcons();
});

// Fallback se o DOM já tiver carregado antes do script
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  updateLucideIcons();
}