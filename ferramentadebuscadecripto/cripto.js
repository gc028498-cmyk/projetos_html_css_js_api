// =============================================
// CRIPTO.JS — toda a lógica do site
// =============================================

// ─── CONFIGURAÇÕES ───────────────────────────
// Constantes ficam aqui em cima para fácil ajuste

const MOEDAS   = 50;      // quantas criptomoedas buscar
const INTERVALO = 60000;  // atualizar a cada 60 segundos (em milissegundos)

// URL da API CoinGecko — gratuita, sem cadastro
// vs_currency=usd     → preços em dólar
// order=market_cap_desc → ordena por valor de mercado
// per_page=20          → 20 moedas por página
const URL_API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${MOEDAS}&page=1&sparkline=false&price_change_percentage=24h`;


// ─── REFERÊNCIAS AOS ELEMENTOS DO HTML ───────
// document.getElementById() encontra um elemento pelo id
// Guardamos em variáveis para não repetir a busca

const grid              = document.getElementById('grid');
const estado            = document.getElementById('estado');
const btnAtualizar      = document.getElementById('btn-atualizar');
const iconeRefresh      = document.getElementById('icone-refresh');
const ultimaAtualizacao = document.getElementById('ultima-atualizacao');
const campoBusca        = document.getElementById('busca');


// ─── ESTADO DA APLICAÇÃO ─────────────────────
// Variável que guarda os dados atuais das moedas
// Usamos ela para filtrar sem precisar buscar novamente

let dadosAtuais = [];


// ─── FUNÇÕES AUXILIARES ───────────────────────
// Funções pequenas que fazem uma coisa só
// Deixamos fora do fluxo principal para organização

// Formata número como preço em dólar
// Exemplos: 65432.12 → "$65,432.12" / 0.00045 → "$0.000450"
function formatarPreco(numero) {
  if (numero >= 1) {
    // toLocaleString formata com separador de milhar
    return '$' + numero.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else {
    // Para moedas muito baratas, mostra 6 casas decimais
    return '$' + numero.toFixed(6);
  }
}

// Formata números grandes com sufixo B (bilhão) e T (trilhão)
// Exemplos: 1500000000 → "$1.50B" / 500000000000 → "$500.00B"
function formatarGrande(numero) {
  if (numero >= 1e12) return '$' + (numero / 1e12).toFixed(2) + 'T';
  if (numero >= 1e9)  return '$' + (numero / 1e9).toFixed(2) + 'B';
  if (numero >= 1e6)  return '$' + (numero / 1e6).toFixed(2) + 'M';
  return '$' + numero.toLocaleString('en-US');
}

// Retorna a hora atual formatada: "14:32:05"
function horaAtual() {
  return new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}


// ─── CRIAR CARD ──────────────────────────────
// Recebe o objeto de uma moeda e retorna o HTML completo do card
// Template literals (crases) permitem escrever HTML dentro do JS

function criarCard(moeda) {
  // Pega a variação de 24h (pode ser positiva ou negativa)
  const variacao  = moeda.price_change_percentage_24h || 0;
  const positivo  = variacao >= 0;

  // Escolhe a classe CSS e a seta com base no sinal da variação
  const classeVar    = positivo ? 'positivo' : 'negativo';
  const setaVar      = positivo ? '▲' : '▼';
  const variacaoText = Math.abs(variacao).toFixed(2) + '%';

  // Retorna o HTML do card como string
  // Cada propriedade de "moeda" vem direto da API
  return `
    <div class="card" id="card-${moeda.id}" data-id="${moeda.id}">

      <!-- Topo: ícone, nome, símbolo e ranking -->
      <div class="card__topo">
        <img class="card__icone" src="${moeda.image}" alt="${moeda.name}">
        <div>
          <div class="card__nome">${moeda.name}</div>
          <div class="card__simbolo">${moeda.symbol}</div>
        </div>
        <span class="card__rank">#${moeda.market_cap_rank}</span>
      </div>

      <!-- Preço atual em destaque -->
      <div class="card__preco">${formatarPreco(moeda.current_price)}</div>

      <!-- Badge de variação nas últimas 24 horas -->
      <div class="card__variacao ${classeVar}">
        ${setaVar} ${variacaoText}
        <span style="font-weight:400;opacity:.7">24h</span>
      </div>

      <!-- Linha divisória -->
      <div class="card__divisor"></div>

      <!-- Market cap e volume -->
      <div class="card__dados">
        <div>
          <div class="card__dado-label">Market Cap</div>
          <div class="card__dado-valor">${formatarGrande(moeda.market_cap)}</div>
        </div>
        <div>
          <div class="card__dado-label">Volume nas ultimas 24h</div>
          <div class="card__dado-valor">${formatarGrande(moeda.total_volume)}</div>
        </div>
      </div>

    </div>
  `;
}


// ─── RENDERIZAR CARDS ────────────────────────
// Recebe um array de moedas e coloca os cards no HTML

function renderizarCards(moedas) {
  // Se não encontrou nada na busca, mostra mensagem
  if (moedas.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px 0">
        Nenhuma moeda encontrada para o que foi digitado"<strong>${campoBusca.value}</strong>"
      </div>
    `;
    return; // para a função aqui
  }

  // .map() percorre cada moeda e chama criarCard()
  // .join('') une todos os HTMLs em uma string só
  grid.innerHTML = moedas.map(criarCard).join('');
}


// ─── BUSCAR DADOS DA API ──────────────────────
// async/await = forma moderna de lidar com operações
// que levam tempo (como buscar dados da internet)
// "async" marca a função como assíncrona
// "await" pausa e espera o resultado antes de continuar

async function buscarDados() {
  try {
    // Anima o ícone de refresh
    iconeRefresh.classList.add('girando');
    setTimeout(() => iconeRefresh.classList.remove('girando'), 600);

    // fetch() faz uma requisição HTTP para a URL da API
    // await espera a resposta chegar
    const resposta = await fetch(URL_API);

    // Se a API retornou erro (ex: limite de requisições atingido)
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    // .json() converte o texto JSON em objeto JavaScript
    // await espera a conversão terminar
    const dados = await resposta.json();

    // Salva os dados na variável global para usar no filtro
    dadosAtuais = dados;

    // Esconde o loading e mostra o grid
    estado.style.display = 'none';
    grid.style.display   = 'grid';

    // Renderiza respeitando o filtro atual de busca
    filtrar();

    // Atualiza o texto da última atualização
    ultimaAtualizacao.textContent = `Atualizado às ${horaAtual()}`;

  } catch (erro) {
    // catch captura qualquer erro que ocorrer no try
    console.error('Erro ao buscar dados:', erro);

    // Exibe mensagem de erro amigável na tela
    estado.style.display = 'block';
    grid.style.display   = 'none';
    estado.innerHTML = `
      <p style="font-size:32px;margin-bottom:12px">⚠️</p>
      <p style="margin-bottom:8px;color:#e2e8f0">
        Não foi possível carregar as cotações.
      </p>
      <p style="font-size:13px">
        A API gratuita tem limite de requisições. 
        Aguarde 1 minuto e tente novamente.
      </p>
    `;
  }
}


// ─── FILTRO DE BUSCA ─────────────────────────
// Filtra os dadosAtuais com base no que o usuário digitou

function filtrar() {
  // .toLowerCase() converte para minúsculo — assim "BTC" e "btc" funcionam igual
  // .trim() remove espaços no início e no fim
  const termo = campoBusca.value.toLowerCase().trim();

  // .filter() percorre o array e mantém só os que passam no teste
  const filtrado = dadosAtuais.filter(moeda =>
    moeda.name.toLowerCase().includes(termo) ||    // busca no nome
    moeda.symbol.toLowerCase().includes(termo)     // busca no símbolo
  );

  renderizarCards(filtrado);
}


// ─── EVENTOS ──────────────────────────────────
// addEventListener() "escuta" ações do usuário
// Quando a ação acontece, executa a função

// Clique no botão "Atualizar" → busca os dados novamente
btnAtualizar.addEventListener('click', buscarDados);

// Digitação no campo de busca → filtra em tempo real
// 'input' dispara a cada tecla pressionada
campoBusca.addEventListener('input', filtrar);


// ─── INICIALIZAÇÃO ────────────────────────────
// Essas linhas rodam quando o script é carregado

// Busca os dados imediatamente ao abrir a página
buscarDados();

// setInterval executa uma função repetidamente
// a cada X milissegundos (60000ms = 60 segundos)
setInterval(buscarDados, INTERVALO);
