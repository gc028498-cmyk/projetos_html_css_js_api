# 🌐 Projetos de Desenvolvimento Web — HTML5, CSS3 & JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Ollama_AI-000000?style=for-the-badge&logo=ollama&logoColor=white" alt="Ollama AI" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
</p>

Este repositório reúne um conjunto completo e diversificado de **projetos práticos de desenvolvimento Front-end**, abrangendo desde os alicerces fundamentais da web (marcação semântica, acessibilidade e design responsivo) até aplicações avançadas com **consumo de APIs REST**, integração com **banco de dados em tempo real (Firebase)** e **assistente inteligente com IA local (Ollama/Gemma)**.

---

## 📌 Sumário

- [Visão Geral dos Projetos](#-visão-geral-dos-projetos)
- [Detalhamento dos Projetos](#-detalhamento-dos-projetos)
  - [1. Livro de Tarefas & Dashboard com IA (Planner)](#1-livro-de-tarefas--dashboard-com-ia-planner)
  - [2. CriptoTracker — Cotações ao Vivo](#2-criptotracker--cotações-ao-vivo)
  - [3. hDC Host — Landing Page de Hospedagem Web](#3-hdc-host--landing-page-de-hospedagem-web)
  - [4. Clone da Tela de Login do Instagram](#4-clone-da-tela-de-login-do-instagram)
  - [5. Blog de Aventuras — HTML5 Semântico & SEO](#5-blog-de-aventuras--html5-semântico--seo)
  - [6. Formulário de Venda de Veículos](#6-formulário-de-venda-de-veículos)
  - [7. Newsletter com Alternância de Tema (Dark/Light)](#7-newsletter-com-alternância-de-tema-darklight)
  - [8. Página de Login com Alternância de Senha](#8-página-de-login-com-alternância-de-senha)
  - [9. Catálogo / Bula de Medicamentos](#9-catálogo--bula-de-medicamentos)
  - [10. Fundamentos e Noções Essenciais de HTML](#10-fundamentos-e-noções-essenciais-de-html)
- [Como Executar os Projetos](#-como-executar-os-projetos)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Autor e Contato](#-autor)

---

## 📊 Visão Geral dos Projetos

| Projeto | Diretório | Nível | Tecnologias Principais | Foco / Destaque |
| :--- | :--- | :---: | :--- | :--- |
| **Livro de Tarefas & IA** | `planner/` | Avançado | HTML5, CSS3, JS Vanilla, Firebase, Ollama AI, Lucide | CRUD Firebase, Dashboard, Calendário & Chatbot |
| **CriptoTracker** | `ferramentadebuscadecripto/` | Intermediário | HTML5, CSS3, JS ES6+, CoinGecko REST API | Cotações em tempo real, busca reativa & auto-refresh |
| **hDC Host** | `hdc_host/` | Intermediário | HTML5, CSS3 (Grid/Flex), FontAwesome 6 | Landing page comercial, tabela de planos & conversão |
| **Clone Instagram Web** | `clone_insta/` | Intermediário | HTML5, CSS3, Flexbox | UI Clone com fidelidade visual de design |
| **Blog de Aventuras** | `blog_projeto_html_semantico/` | Fundamental | HTML5 Semântico, CSS3 | Estruturação semântica, SEO & acessibilidade |
| **Formulário de Veículos** | `form_project/` | Intermediário | HTML5 Forms, CSS3 | Formulário avançado com múltiplos inputs & validação |
| **Newsletter Dark/Light** | `hospedar_site/` | Intermediário | HTML5, CSS3 (Vars), JS Vanilla | Troca dinâmica de tema (`data-tema`) & conversão |
| **Login com Toggle de Senha**| `loginsenha/` | Básico/Interm. | HTML5, CSS3, JS Vanilla | Experiência do usuário (UX) & acessibilidade ARIA |
| **Catálogo de Medicamentos** | `nocoesbasicasessenciais/` | Básico | HTML5, CSS3 | Layout em cards informativos e categorização |
| **Fundamentos de HTML** | `basico.html/` | Básico | HTML5 Puro | Metatags, hierarquia tipográfica e estrutura base |

---

## 🚀 Detalhamento dos Projetos

---

### 1. Livro de Tarefas & Dashboard com IA (Planner)
> 📂 **Diretório:** `planner/`

Aplicação web completa de alta produtividade (SPA) para gerenciamento diário de tarefas e planejamento de rotinas, equipada com persistência em nuvem e assistente conversacional alimentado por Inteligência Artificial local.

* **Funcionalidades Principais:**
  * **CRUD Completo em Tempo Real:** Criação, leitura, atualização e exclusão de tarefas integradas ao **Firebase Realtime Database** via requisições REST assíncronas.
  * **Dashboard de Produtividade Interativo:**
    * Indicadores visuais de métricas: Total de Tarefas, Pendentes e Concluídas.
    * Barra de progresso dinâmica calculando a taxa percentual de conclusão em tempo real.
    * Cards interativos que funcionam como atalhos para filtragem rápida.
  * **Sistema de Filtros Multicritério:** Filtragem instantânea por status (*Todas, Pendentes, Concluídas*) e por nível de prioridade (*Alta, Média, Baixa*), com contadores atualizados em tempo real.
  * **Calendário Mensal Dinâmico:**
    * Navegação entre meses e anos.
    * Identificação visual de dias com tarefas programadas.
    * Seleção de dia com exibição detalhada de compromissos daquela data.
  * **Assistente Inteligente Flutuante (Ollama Chatbot):**
    * Chatbot integrado à API do **Ollama** utilizando o modelo `gemma4`.
    * Histórico persistido localmente (`localStorage`) com opção de limpeza.
    * Respostas renderizadas em tempo real para tirar dúvidas e auxiliar na rotina.
  * **Alternância de Tema (Dark / Light Mode):**
    * Suporte a temas claro e escuro com persistência de preferência no `localStorage`.
    * Detecção automática da preferência do sistema operacional (`prefers-color-scheme`).
  * **Design & Tipografia Premium:** Uso de fontes Google Fonts (*Fraunces*, *JetBrains Mono*, *Inter*) e ícones vetoriais modernos com a biblioteca **Lucide Icons**.
* **Tecnologias:**
  * **HTML5** & **CSS3 Avançado** (CSS Grid, Flexbox, Custom Properties/Variáveis CSS, Efeitos Glassmorphism, Microinterações).
  * **JavaScript Vanilla (ES6+)** (`async/await`, `fetch` API, manipulação de DOM, gerenciamento de estado, `localStorage`).
  * **Firebase Realtime Database REST API**.
  * **Ollama REST API** (integração local com LLM).
* **Aplicações no Mercado:**
  * Plataformas de gerenciamento de projetos e tarefas (estilo Notion, Trello ou Todoist).
  * Dashboards operacionais corporativos com métricas de desempenho em tempo real.
  * Aplicações web modernas potencializadas por recursos de IA Generativa.

---

### 2. CriptoTracker — Cotações ao Vivo
> 📂 **Diretório:** `ferramentadebuscadecripto/`

Aplicação financeira interativa voltada para o monitoramento contínuo das principais criptomoedas do mercado global, consumindo dados em tempo real de uma API REST pública.

* **Funcionalidades Principais:**
  * **Consumo de API REST Externa:** Requisições assíncronas para a API CoinGecko obtendo os dados das 50 maiores criptomoedas por valor de mercado.
  * **Busca e Filtro em Tempo Real:** Filtragem instantânea e reativa por nome ou símbolo (ex.: *Bitcoin*, *BTC*, *Ethereum*, *ETH*) conforme a digitação.
  * **Atualização Programada & Sob Demanda:** Auto-refresh configurado a cada 60 segundos via `setInterval` com botão para atualização manual imediata.
  * **Formatação Monetária Internacional:** Tratamento numérico em Dólares (`USD`), cálculo de variação percentual nas últimas 24h com badges dinâmicos (verde para alta, vermelho para baixa), volume transacionado e Market Cap abreviados em Bilhões e Trilhões.
  * **Experiência de Usuário e Feedback:** *Loading spinner* estilizado durante requisições e exibição amigável de mensagens em caso de indisponibilidade de rede.
* **Tecnologias:**
  * **HTML5** & **CSS3** (CSS Grid, Flexbox, Animações, Google Fonts: *Space Grotesk* e *Space Mono*).
  * **JavaScript (ES6+)** (`fetch` API, Promises, `async/await`, `toLocaleString`, manipulação dinâmica de elementos).
* **Aplicações no Mercado:**
  * Dashboards e terminais de investimentos para corretoras ou investidores individuais.
  * Módulos de cotação para portais de notícias de finanças e Web3.

---

### 3. hDC Host — Landing Page de Hospedagem Web
> 📂 **Diretório:** `hdc_host/`

Landing page institucional e comercial completa para uma empresa fictícia de infraestrutura em nuvem e hospedagem de sites, desenvolvida com forte foco em taxas de conversão e clareza de proposta de valor.

* **Funcionalidades Principais:**
  * **Hero Section de Alto Impacto:** Apresentação visual dos diferenciais da empresa acompanhada por call-to-action (CTA).
  * **Grade de Benefícios:** Apresentação de pilares essenciais (Segurança, Performance e Suporte Especializado 24/7) utilizando ícones da biblioteca FontAwesome 6.
  * **Tabela Comparativa de Planos:** Grade de ofertas (*Básico, Dedicado, Dedicado Plus, Cloud*) com destaque cromático no plano recomendado.
  * **Verificador de Domínios:** Seção de pesquisa para consulta de disponibilidade de registros web.
  * **Formulário de Contato e Captação:** Seção para recebimento de leads e solicitação de propostas personalizadas.
* **Tecnologias:**
  * **HTML5**, **CSS3** (Flexbox, CSS Grid, Efeitos Hover, Transições suaves) e **FontAwesome 6**.
* **Aplicações no Mercado:**
  * Sites institucionais de empresas SaaS, agências digitais e provedores de hospedagem/servidores.

---

### 4. Clone da Tela de Login do Instagram
> 📂 **Diretório:** `clone_insta/`

Reprodução fiel da interface web de autenticação do Instagram, exercitando precisão visual (*pixel-perfect*), alinhamentos complexos e identidade visual corporativa.

* **Funcionalidades Principais:**
  * **Interface Fiel:** Composição idêntica ao design oficial do Instagram Web, contendo logotipo, inputs de formulário estilizados e botão de ação.
  * **Fluxo de Autenticação Visual:** Botão de login integrado via Facebook, divisor textual "OU", links de recuperação de senha e link para criação de nova conta.
  * **Download de Aplicativo:** Badges visuais oficiais redirecionando para as lojas App Store e Google Play.
  * **Rodapé Institucional:** Links com diretrizes da Meta, termos de serviço, opções de idioma e créditos de copyright.
* **Tecnologias:**
  * **HTML5** e **CSS3** (Flexbox, Posicionamento Relativo/Absoluto, Box-Shadow e tipografia nativa do sistema).
* **Aplicações no Mercado:**
  * Telas de autenticação (Sign In/Sign Up) para sistemas web, intranet e redes sociais.
  * Exercício avançado de replicação de UI/UX e fidelidade a design systems (Figma/Adobe XD).

---

### 5. Blog de Aventuras — HTML5 Semântico & SEO
> 📂 **Diretório:** `blog_projeto_html_semantico/`

Projeto de blog de viagens estruturado sob as diretrizes mais rigorosas de semântica web, acessibilidade digital e otimização para motores de busca (SEO).

* **Funcionalidades Principais:**
  * **Arquitetura Semântica Pura:** Emprego consistente das tags semânticas do padrão HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<footer>`).
  * **Feed de Publicações:** Listagem de artigos contendo imagens de capa, títulos dinâmicos, resumos de conteúdo e metadados de autoria/data.
  * **Sidebar Interativa:** Campo de busca, lista categorizada de tópicos e nuvem de tags de navegação rápida.
  * **Distribuição Visual em Colunas:** Layout harmonioso separando a área de leitura e o menu lateral auxiliar.
* **Tecnologias:**
  * **HTML5 Semântico** e **CSS3** (Organização de containers, espaçamentos, tipografia fluida e estilização de links).
* **Aplicações no Mercado:**
  * Portais de notícias, blogs de conteúdo editorial e páginas institucionais com meta de ranqueamento no Google.

---

### 6. Formulário de Venda de Veículos
> 📂 **Diretório:** `form_project/`

Formulário completo e robusto voltado para o cadastro e anúncio de automóveis em plataformas de classificados e concessionárias digitais.

* **Funcionalidades Principais:**
  * **Entrada de Dados Abrangente:** Campos de texto, numéricos e datas para título do anúncio, preço de venda, descrição detalhada, marca, modelo, quilometragem e ano/data de aquisição.
  * **Seleção de Transmissão:** Botões de rádio (*radio buttons*) para escolha exclusiva entre câmbio manual ou automático.
  * **Lista de Acessórios e Opcionais:** Seleção múltipla via *checkboxes* (Airbag, Alarme, Ar Condicionado, Câmera de Ré, Assistente de Pista, Sensor de Estacionamento, Conectividade Bluetooth, Bancos de Couro).
  * **Upload de Imagens:** Entrada para envio de múltiplas fotos restrita por extensão a arquivos de imagem (`.png`, `.jpg`, `.jpeg`).
  * **Validação Nativa HTML5:** Emprego de regras como `required`, `minlength`, `maxlength` e tipagens específicas de input para validação no lado do cliente sem dependências externas.
* **Tecnologias:**
  * **HTML5 Form Controls** e **CSS3** (Estilização de caixas de entrada, estados de foco, botões de submissão e agrupamento com `fieldset` e `legend`).
* **Aplicações no Mercado:**
  * Portais automotivos, plataformas de e-commerce e sistemas ERP de cadastro de estoques.

---

### 7. Newsletter com Alternância de Tema (Dark/Light)
> 📂 **Diretório:** `hospedar_site/`

Página de captura (*lead magnet*) moderna para assinatura de newsletter com suporte completo a alternância de paleta de cores.

* **Funcionalidades Principais:**
  * **Dark / Light Mode Toggle:** Mecanismo dinâmico de troca de tema manipulando atributos customizados no elemento raiz (`data-tema="dark"` / `data-tema="light"`) acoplado a variáveis CSS (*Custom Properties*).
  * **Ano Vigente Dinâmico:** Script em JavaScript que preenche automaticamente o ano atual nos direitos autorais através de `new Date().getFullYear()`.
  * **Design Focado em Conversão:** Layout enxuto, limpo e direto, enfatizando a proposta de valor e a política de "Sem Spam".
* **Tecnologias:**
  * **HTML5**, **CSS3** (Variáveis CSS / Temas) e **JavaScript Vanilla**.
* **Aplicações no Mercado:**
  * Páginas de lançamento de produtos, captura de leads em campanhas de marketing digital e sites centrados em conforto visual.

---

### 8. Página de Login com Alternância de Senha
> 📂 **Diretório:** `loginsenha/`

Interface de autenticação projetada com foco em experiência do usuário (UX), acessibilidade e prevenção de erros durante a digitação de credenciais.

* **Funcionalidades Principais:**
  * **Revelação Dinâmica de Senha:** Botão interativo que alterna instantaneamente o atributo do campo entre `type="password"` (caracteres mascarados) e `type="text"` (texto visível), sincronizado com ícones indicativos (👁️ / 🙈).
  * **Acessibilidade Digital (A11y):** Atualização dinâmica de atributos `aria-label` para correta leitura por leitores de tela.
  * **Manutenção de Sessão:** Opção de checkbox "Lembrar de mim" e layout centralizado com imagem de plano de fundo e estética profissional.
* **Tecnologias:**
  * **HTML5**, **CSS3** e **JavaScript Vanilla** (Tratamento de eventos e manipulação de propriedades de elementos).
* **Aplicações no Mercado:**
  * Portais corporativos, sistemas administrativos (CMS/ERP) e fluxos de login em aplicações web.

---

### 9. Catálogo / Bula de Medicamentos
> 📂 **Diretório:** `nocoesbasicasessenciais/`

Vitrine digital e informativa com apresentação de medicamentos, dosagens e orientações terapêuticas em grade de cartões.

* **Funcionalidades Principais:**
  * **Cards Informativos de Produtos:** Apresentação visual contendo fotografia da embalagem, badge de categoria (ex.: *Analgésico*), nome comercial, finalidade do tratamento e botão de chamada para ação ("Ver bula").
  * **Header e Navegação Institucional:** Cabeçalho com logotipo da marca e links de acesso rápido.
* **Tecnologias:**
  * **HTML5** e **CSS3** (Estrutura de cards, flexbox, badges e tipografia legível).
* **Aplicações no Mercado:**
  * E-commerces farmacêuticos, diretórios de saúde e catálogos online de produtos hospitalares.

---

### 10. Fundamentos e Noções Essenciais de HTML
> 📂 **Diretório:** `basico.html/`

Projeto de referência prática para compreensão e consolidação da base de qualquer projeto de desenvolvimento web.

* **Funcionalidades Principais:**
  * Estruturação fundamental de documentos (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
  * Inclusão e configuração de metatags essenciais (`charset`, `viewport`, `description`, `keywords`, `author`).
  * Aplicação prática da hierarquia de títulos (`<h1>` a `<h6>`), quebras e estilização básica de texto e parágrafos.
* **Tecnologias:**
  * **HTML5**.
* **Aplicações no Mercado:**
  * Base fundamental para criação de qualquer aplicação ou página web em conformidade com os padrões do W3C.

---

## 💻 Como Executar os Projetos

Por serem construídos com **tecnologias puras da web (Vanilla HTML, CSS e JavaScript)**, os projetos não necessitam de instalação de gerenciadores de pacotes (`npm`, `yarn`) nem compilação de código.

### Opção 1: Execução com Servidor Local (Recomendado)

O uso de um servidor local é altamente recomendado, principalmente para os projetos que realizam requisições assíncronas via `fetch` (**CriptoTracker** e **Planner**), evitando bloqueios de CORS:

1. Clone o repositório na sua máquina:
   ```bash
   git clone https://github.com/gc028498-cmyk/html.css.git
   ```
2. Abra a pasta do repositório no seu editor de código preferido (como o **VS Code**).
3. Instale a extensão **Live Server** (caso ainda não possua).
4. Clique com o botão direito sobre o arquivo `.html` do projeto que deseja executar (ex.: `planner/index.html` ou `ferramentadebuscadecripto/cripto.html`) e escolha **"Open with Live Server"**.
5. O navegador abrirá automaticamente o projeto no endereço local (geralmente `http://127.0.0.1:5500`).

### Opção 2: Abertura Direta no Navegador

Para os projetos estáticos que não exigem chamadas de API externas:
1. Navegue até a pasta do projeto desejado no seu explorador de arquivos.
2. Dê um duplo clique no arquivo `index.html` correspondente para visualizá-lo em qualquer navegador moderno (Chrome, Edge, Firefox, Brave, Safari).

> 💡 **Nota sobre o Chatbot com IA no Planner (`planner/`):**
> O assistente de inteligência artificial utiliza a API local do [Ollama](https://ollama.ai/) com o modelo `gemma4`. Para utilizá-lo com um modelo local:
> 1. Certifique-se de que o Ollama esteja rodando na sua máquina: `ollama run gemma4`
> 2. Se necessário, ajuste a constante `OLLAMA_API_URL` em [planner/script.js](file:///c:/Users/gc028/Desktop/Pasta%20de%20trabalho%20ads/projetos_html_css_js_api/planner/script.js) para apontar para o seu endpoint local (`http://localhost:11434/api/chat`).

---

## 📁 Estrutura do Repositório

```plaintext
├── basico.html/                   # 10. Fundamentos de marcação HTML e metatags
│   └── index.html
├── blog_projeto_html_semantico/   # 5. Blog de Aventuras com HTML5 Semântico e SEO
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── clone_insta/                   # 4. Clone da interface web de Login do Instagram
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── ferramentadebuscadecripto/     # 2. CriptoTracker com CoinGecko REST API em tempo real
│   ├── cripto.css
│   ├── cripto.html
│   └── cripto.js
├── form_project/                  # 6. Formulário avançado para venda e anúncio de veículos
│   ├── index.html
│   └── style.css
├── hdc_host/                      # 3. Landing page comercial da hDC Host com planos e serviços
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── hospedar_site/                 # 7. Newsletter com alternância de tema Dark/Light
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── index.html
├── loginsenha/                    # 8. Login corporativo com alternância dinâmica de senha
│   ├── imagem-fundo.png
│   ├── imagem-fundo1.png
│   ├── index.html
│   └── style.css
├── nocoesbasicasessenciais/       # 9. Catálogo e vitrine de medicamentos em cards
│   ├── ache.png
│   ├── dorflex.png
│   ├── novalgina.jpeg
│   ├── paracetamol.png
│   ├── index.html
│   └── style.css
├── planner/                       # 1. Livro de Tarefas: CRUD Firebase, Dashboard & Chatbot IA
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md                      # Documentação completa do repositório
```

---

## 👨‍💻 Autor

Desenvolvido com dedicação por **Gabriel Carvalho**.

* **GitHub:** [@gc028498-cmyk](https://github.com/gc028498-cmyk)
* **LinkedIn:** [Gabriel Carvalho de Oliveira](https://www.linkedin.com/in/gabriel-carvalho-de-oliveira-36394016a/)

---

<p align="center">
  ⭐ Se este repositório te ajudou ou serviu de inspiração, deixe uma estrela no projeto!
</p>
