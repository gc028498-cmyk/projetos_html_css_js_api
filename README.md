# 🌐 Projetos de Desenvolvimento Web — HTML5, CSS3 & JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
</p>

Este repositório reúne um conjunto diversificado de **projetos práticos de Front-end**, desenvolvidos para consolidar conceitos essenciais de estruturação web, estilização avançada, responsividade, boas práticas de semântica (SEO), acessibilidade e integração com APIs assíncronas via JavaScript.

---

## 📌 Sumário

1. [CriptoTracker — Cotações ao Vivo](#1-criptotracker--cotações-ao-vivo)
2. [Clone da Tela de Login do Instagram](#2-clone-da-tela-de-login-do-instagram)
3. [hDC Host — Landing Page de Hospedagem Web](#3-hdc-host--landing-page-de-hospedagem-web)
4. [Blog de Aventuras — HTML5 Semântico](#4-blog-de-aventuras--html5-semântico)
5. [Formulário de Venda de Veículos](#5-formulário-de-venda-de-veículos)
6. [Newsletter com Alternância de Tema (Dark/Light Mode)](#6-newsletter-com-alternância-de-tema-darklight-mode)
7. [Página de Login com Alternância de Senha](#7-página-de-login-com-alternância-de-senha)
8. [Catálogo / Bula de Medicamentos](#8-catálogo--bula-de-medicamentos)
9. [Fundamentos e Noções Básicas de HTML](#9-fundamentos-e-noções-básicas-de-html)
10. [Como Executar os Projetos](#-como-executar-os-projetos)
11. [Estrutura do Repositório](#-estrutura-do-repositório)

---

## 🚀 Detalhamento dos Projetos

---

### 1. CriptoTracker — Cotações ao Vivo
> 📂 **Diretório:** `ferramentadebuscadecripto/`

Uma aplicação moderna e dinâmica para monitoramento em tempo real do mercado de criptomoedas, consumindo dados diretamente de uma API REST pública.

* **Funcionalidades:**
  * **Consumo de API Externa:** Requisições assíncronas para a API CoinGecko trazendo as 50 principais criptomoedas por valor de mercado.
  * **Busca e Filtro em Tempo Real:** Filtragem instantânea por nome ou símbolo (ex.: *Bitcoin*, *BTC*, *Ethereum*, *ETH*) conforme o usuário digita.
  * **Atualização Automática & Manual:** Auto-refresh programado a cada 60 segundos com `setInterval` e botão para atualização manual sob demanda.
  * **Formatação de Dados Financeiros:** Tratamento e exibição de preços em dólares (`USD`), variações percentuais nas últimas 24h (com indicadores visuais positivos/negativos), volume e Market Cap abreviados (em Bilhões e Trilhões).
  * **Feedback Visual:** Spinner de carregamento (*loading state*) e tratamento de erros de rede amigável.
* **Tecnologias:**
  * **HTML5** & **CSS3** (CSS Grid, Flexbox, Animações, Google Fonts: *Space Grotesk* e *Space Mono*).
  * **JavaScript (ES6+)** (`fetch` API, `async/await`, manipulação de DOM, formatação com `toLocaleString`).
* **Aplicações no Mundo Real:**
  * Painéis e dashboards de investimentos e finanças pessoais.
  * Portais de notícias com cotação de ativos em tempo real.
  * Widgets para plataformas de trading ou Web3.

---

### 2. Clone da Tela de Login do Instagram
> 📂 **Diretório:** `clone_insta/`

Reprodução fiel da interface web de autenticação do Instagram, focando em precisão de layout, alinhamentos e detalhes visuais da marca.

* **Funcionalidades:**
  * **Interface Fiel:** Disposição idêntica ao Instagram Web, incluindo logotipo oficial, campos de entrada e botão de submissão.
  * **Login Social e Links Auxiliares:** Botão de login integrado via Facebook, divisor estético "OU" e links para recuperação de senha e cadastro.
  * **Download do App:** Seção com redirecionamento visual para download nas lojas App Store e Google Play.
  * **Rodapé Institucional:** Links com políticas da Meta, termos, localização e copyright.
* **Tecnologias:**
  * **HTML5** & **CSS3** (Flexbox, Box-Shadow, alinhamento absoluto/relativo e tipografia do sistema).
* **Aplicações no Mundo Real:**
  * Telas de login e fluxo de onboarding para redes sociais e aplicações web.
  * Prática avançada de *UI Clone* para fidelidade de design em desenvolvimento front-end.

---

### 3. hDC Host — Landing Page de Hospedagem Web
> 📂 **Diretório:** `hdc_host/`

Landing page comercial completa voltada para uma empresa de hospedagem de sites e servidores em nuvem, com estrutura focada em conversão de clientes.

* **Funcionalidades:**
  * **Hero Section:** Banner principal de alto impacto com apresentação dos serviços.
  * **Cards de Serviços & Diferenciais:** Apresentação de pontos fortes (Segurança, Performance e Suporte 24/7) com ícones da biblioteca FontAwesome.
  * **Tabela de Preços e Planos:** Grade de planos (*Básico, Dedicado, Dedicado Plus, Cloud*) com destaque visual para a opção mais recomendada.
  * **Verificador de Domínio:** Seção de pesquisa para consulta de disponibilidade de domínios web.
  * **Formulário de Contato Comercial:** Campos para captação de leads e envio de propostas personalizadas.
* **Tecnologias:**
  * **HTML5**, **CSS3** (Flexbox, CSS Grid, Efeitos Hover, Transições) e **FontAwesome 6**.
* **Aplicações no Mundo Real:**
  * Sites institucionais de provedores de infraestrutura, cloud e hospedagem.
  * Landing pages para produtos SaaS (Software as a Service) com planos por assinatura.

---

### 4. Blog de Aventuras — HTML5 Semântico
> 📂 **Diretório:** `blog_projeto_html_semantico/`

Projeto de blog estruturado com ênfase nas melhores práticas de semântica web, acessibilidade e otimização para mecanismos de busca (SEO).

* **Funcionalidades:**
  * **Arquitetura Semântica:** Uso das tags semânticas do HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<footer>`).
  * **Feed de Artigos:** Listagem de posts com imagens de capa, títulos dinâmicos, resumos e indicação de autoria.
  * **Barra Lateral (Sidebar):** Campo de busca, lista de categorias temáticas e nuvem de tags navegáveis.
  * **Layout em Duas Colunas:** Distribuição harmoniosa entre o conteúdo principal e a barra auxiliar.
* **Tecnologias:**
  * **HTML5 Semântico** e **CSS3** (Estrutura de containers, espaçamentos e estilização de links).
* **Aplicações no Mundo Real:**
  * Portais de notícias, blogs corporativos ou pessoais e plataformas de marketing de conteúdo com foco em SEO.

---

### 5. Formulário de Venda de Veículos
> 📂 **Diretório:** `form_project/`

Formulário completo e detalhado para cadastro e anúncio de automóveis em plataformas de classificados automotivos.

* **Funcionalidades:**
  * **Entrada Abrangente de Dados:** Campos para título do anúncio, preço, descrição detalhada, marca, modelo, quilometragem e data de compra.
  * **Seleção de Transmissão:** Botões de opção (*radio buttons*) para câmbio manual ou automático.
  * **Lista de Opcionais:** Seleção múltipla via *checkboxes* (Airbag, Alarme, Ar Condicionado, Câmera de Ré, Assistente de Pista, Partida Keyless, Integração com Smartphone, Bancos de Couro).
  * **Upload de Fotos:** Entrada de múltiplos arquivos de imagem restrita a formatos de foto (`.png`, `.jpg`).
  * **Validação Nativa:** Uso de atributos como `required`, `minlength`, `maxlength` e tipos de input adequados (`number`, `date`, `file`).
* **Tecnologias:**
  * **HTML5 Form Controls** e **CSS3** (Design limpo, estilização de caixas de entrada e botões de ação).
* **Aplicações no Mundo Real:**
  * Portais de venda de veículos, sistemas de classificados online e cadastros complexos de inventário/produtos.

---

### 6. Newsletter com Alternância de Tema (Dark/Light Mode)
> 📂 **Diretório:** `hospedar_site/`

Página de captura (*lead magnet*) para inscrição em newsletter, com suporte a troca dinâmica de tema visual.

* **Funcionalidades:**
  * **Dark / Light Mode:** Alternância de tema via botão de alternância (*toggle*) manipulando atributos customizados (`data-tema`) no elemento raiz do documento via JavaScript.
  * **Ano Atual Dinâmico:** Preenchimento automático do ano de copyright no rodapé através de `new Date().getFullYear()`.
  * **Design Focado em Conversão:** Layout limpo e direto para maximizar a captura de e-mails com garantia de "Sem Spam".
* **Tecnologias:**
  * **HTML5**, **CSS3** (Variáveis CSS / Custom Properties) e **JavaScript**.
* **Aplicações no Mundo Real:**
  * Páginas de captura de leads, landing pages de lançamento e sites que priorizam conforto visual e personalização do usuário.

---

### 7. Página de Login com Alternância de Senha
> 📂 **Diretório:** `loginsenha/`

Interface de autenticação projetada para oferecer uma excelente experiência de usuário (UX) e segurança na digitação de credenciais.

* **Funcionalidades:**
  * **Visualização de Senha Dinâmica:** Botão interativo que alterna a visibilidade da senha entre caracteres ocultos (`type="password"`) e texto puro (`type="text"`), acompanhado pela troca de ícones (👁️ / 🙈).
  * **Acessibilidade:** Atualização dinâmica de atributos `aria-label` para leitores de tela.
  * **Opção Lembrar-me:** Checkbox para salvar a sessão do usuário.
* **Tecnologias:**
  * **HTML5**, **CSS3** e **JavaScript** (Manipulação de propriedades de elementos e eventos de clique).
* **Aplicações no Mundo Real:**
  * Módulos de autenticação de sistemas corporativos, portais de clientes e painéis administrativos.

---

### 8. Catálogo / Bula de Medicamentos
> 📂 **Diretório:** `nocoesbasicasessenciais/`

Vitrine digital de medicamentos com layout em cartões informativos e cabeçalho de navegação institucional.

* **Funcionalidades:**
  * **Cards Informativos:** Apresentação visual de remédios com imagem, tag de categoria (ex.: *Analgésico*), nome, indicação terapêutica e botão de ação ("Ver bula").
  * **Header Institucional:** Logotipo e menu de links rápidos.
* **Tecnologias:**
  * **HTML5** e **CSS3** (Organização de cards, badges e tipografia limpa).
* **Aplicações no Mundo Real:**
  * E-commerces farmacêuticos, diretórios de bulas e catálogos de produtos de saúde.

---

### 9. Fundamentos e Noções Básicas de HTML
> 📂 **Diretório:** `basico.html/`

Projeto introdutório que serve como guia de referência rápida para a estruturação básica de documentos web.

* **Funcionalidades:**
  * Estruturação fundamental com `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`.
  * Configuração de metatags essenciais (charset, viewport, description, keywords e author).
  * Demonstração prática da hierarquia de títulos e cabeçalhos (`<h1>` até `<h6>`) e formatação de parágrafos.
* **Tecnologias:**
  * **HTML5**.
* **Aplicações no Mundo Real:**
  * Base indispensável para o desenvolvimento de qualquer página web moderna.

---

## 💻 Como Executar os Projetos

Como os projetos foram desenvolvidos com tecnologias puras da web (**HTML5, CSS3 e JavaScript Vanilla**), não é necessário instalar gerenciadores de pacotes ou compiladores.

### Opção 1: Abrir diretamente no navegador
1. Clone este repositório ou faça o download dos arquivos:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```
2. Navegue até a pasta do projeto desejado (ex.: `ferramentadebuscadecripto/`).
3. Dê um duplo clique no arquivo `.html` (ex.: `cripto.html` ou `index.html`) para abri-lo no seu navegador padrão.

### Opção 2: Utilizando a extensão Live Server (VS Code / VSCodium)
1. Abra a pasta do repositório no seu editor de código.
2. Com a extensão **Live Server** instalada, clique com o botão direito sobre o arquivo `.html` que deseja visualizar.
3. Selecione **"Open with Live Server"**. O projeto será executado em um servidor local (geralmente em `http://127.0.0.1:5500`).

> 💡 **Nota:** Para projetos que consom APIs (como o **CriptoTracker**), o uso de um servidor local como o Live Server é altamente recomendado para evitar problemas de CORS e garantir a melhor execução das requisições assíncronas.

---

## 📁 Estrutura do Repositório

```plaintext
├── basico.html/                   # Introdução ao HTML e tags estruturais
│   └── index.html
├── blog_projeto_html_semantico/   # Blog de Viagens com HTML Semântico e SEO
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── clone_insta/                   # Interface de Login do Instagram Web
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── ferramentadebuscadecripto/     # CriptoTracker com API CoinGecko em tempo real
│   ├── cripto.css
│   ├── cripto.html
│   └── cripto.js
├── form_project/                  # Formulário completo para venda de veículos
│   ├── index.html
│   └── style.css
├── hdc_host/                      # Landing Page para serviços de hospedagem
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── index.html
├── hospedar_site/                 # Newsletter com alternância de tema Dark/Light
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── index.html
├── loginsenha/                    # Login corporativo com toggle para mostrar senha
│   ├── index.html
│   └── style.css
├── nocoesbasicasessenciais/       # Catálogo/Bula de remédios em cards
│   ├── index.html
│   └── style.css
└── README.md                      # Documentação completa do repositório
```

---

## 👨‍💻 Autor

Desenvolvido por **Gabriel Carvalho**  
Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/gabriel-carvalho-de-oliveira-36394016a/)! 🚀
