# Emoji Critic (Projeto React Router Demo)

Este é um aplicativo **React** simples criado com **Vite**, desenvolvido para demonstrar o
uso do **React Router (v6)** no bootcamp de **Desenvolvimento Web da TripleTen**.

O projeto faz parte do processo de aprendizado e consolidação dos conceitos fundamentais
de roteamento, incluindo **SPA (Single Page Application)**, navegação declarativa entre
páginas, organização de rotas, rotas aninhadas e tratamento de páginas não encontradas
(404).

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-acesse_aqui-green)](https://vanessayuriab.github.io/react-router-demo-pt/)

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- React Router DOM (v6)
- JavaScript (ES6+)
- CSS3
- HTML5

## 📚 Funcionalidades

### Roteamento e Navegação

- Configuração de rotas com `BrowserRouter`, `Routes` e `Route`
- Navegação declarativa usando `Link` e `NavLink`
- Destaque visual automático para rotas ativas (`NavLink`)
- Navegação programática com `useNavigate`

### Rotas Aninhadas

- Estrutura hierárquica de rotas para melhor organização e semântica de URLs
- Exemplos práticos em:
  - **AboutMe** (`/about-me`)
    - `/about-me/my-story`
    - `/about-me/hobbies`
    - `/about-me/contact`
  - **AboutUs** (`/about-us`)
    - `/about-us/site-history`
    - `/about-us/site-mission`
- Uso do componente `<Outlet />` para renderização das rotas filhas

### Reviews (Rotas Dinâmicas)

- Consumo de API externa para obtenção das avaliações
- Listagem dinâmica das avaliações disponíveis
- Criação de rotas dinâmicas baseadas em parâmetros de URL
  - Exemplo: `/reviews/:reviewId`
- Página individualizada para cada avaliação
- Uso do hook `useParams` para capturar dados da rota

### Tratamento de Erros

- Página personalizada de **404 — Page Not Found**
- Rota curinga (`*`) para capturar caminhos inexistentes
- Link de retorno para a página inicial

## 📁 Estrutura do Projeto

```Shell
react-router-demo-pt/
├── src/
│   ├── assets/
│   │ └── react.svg
│   ├── components/
│   │ ├── AboutMe/
│   │ ├── AboutUs/
│   │ ├── Content/
│   │ ├── Dashboard/
│   │ ├── Header/
│   │ ├── Logo/
│   │ ├── NavBar/
│   │ ├── PageNotFound/
│   │ ├── Review/
│   │ ├── Reviews/
│   │ ├── App.css
│   │ └── App.jsx
│   ├── fonts/
│   │ └── Roboto.woff
│   ├── index.css
│   └── main.jsx
```

### Organização

- Cada pasta dentro de `components` representa uma funcionalidade ou seção da aplicação
- O roteamento principal é configurado em `App.jsx` que centraliza a configuração das
  rotas
- `main.jsx` é o ponto de entrada da aplicação, onde está configurado o `BrowserRouter`

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```Shell
git clone git@github.com:VanessaYuriAB/react-router-demo-pt.git
```

2. Instale as dependências:

```Shell
npm install
npm audit
```

3. Execute o projeto em modo de desenvolvimento:

```Shell
npm run dev
```

4. O projeto será aberto no navegador via **Vite**, no endereço indicado (configurado, no
   `vite.config.js`, para `http://localhost:3000` com abertura automática).

## 🔗 Projeto Online

A página está disponível via **GitHub Pages**.

➜ https://vanessayuriab.github.io/react-router-demo-pt/

## 🎯 Objetivo Educacional

Este projeto tem fins **educacionais** e foi desenvolvido para consolidar:

- Conceitos de **Single Page Applications (SPA)**
- Funcionamento e boas práticas do **React Router**
- Organização e escalabilidade de rotas
- Separação de responsabilidades entre componentes
- Integração entre dados dinâmicos e navegação

## 📄 Licença

Projeto com finalidade educacional e demonstrativa. Sinta-se à vontade para estudar,
modificar e reutilizar o código.
