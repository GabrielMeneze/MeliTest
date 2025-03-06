# 📌 Documentação do Projeto - My Mercado Livre

## 📖 Visão Geral
Este projeto é uma aplicação front-end desenvolvida em **Next.js** para consumir a API do Mercado Livre e exibir produtos com funcionalidades de busca e detalhes do item.

## 🚀 Tecnologias Utilizadas
- **Next.js** 15
- **React** 19
- **TypeScript**
- **Redux Toolkit** (para gerenciamento de estado)
- **Material-UI** (para componentes visuais)
- **Axios** (para requisições HTTP)
- **Jest & Testing Library** (para testes)

## 📂 Estrutura do Projeto
O projeto segue uma estrutura modularizada dentro do diretório **`features`**, separando busca, detalhes de produto e navegação breadcrumb. A arquitetura facilita escalabilidade e manutenção do código.

## 🔧 Configuração e Execução

### 1️⃣ Clonar o Repositório
```sh
  git clone https://github.com/GabrielMeneze/MeliTest
```

### 2️⃣ Instalar Dependências
```sh
  npm install
```

### 3️⃣ Rodar o Projeto
```sh
  npm run dev
```
O projeto será iniciado em `http://localhost:3000/`.

## 🔗 Configuração do Backend
Este projeto depende de um backend que consome a API do Mercado Livre.
Para configurar, clone o backend e siga as instruções:
```sh
  git clone https://github.com/GabrielMeneze/MeliBack.git
  npm install
  npm run dev
```
O backend será iniciado em `http://localhost:5000/`.
O swagger pode ser acessado em `http://localhost:5000/api-docs/`.

## 🛠 Funcionalidades Principais
- **Barra de pesquisa** (usuário pode buscar produtos)
- **Exibição de resultados** com categorias e preços
- **Detalhes do produto** com preço, descrição e imagem
- **Redirecionamento entre páginas** via Next.js
- 
---

## 📂 Project Structure

```
/src
│
├── /app                         # Diretório principal do App Router do Next.js 13+
│   ├── layout.tsx               # Layout global (inclui cabeçalho, rodapé e tema)
│   └── page.tsx                 # Página inicial da aplicação ("/")
│
├── /features                    # Conjunto de funcionalidades independentes do sistema
│   ├── /search                  # Funcionalidade de busca 🔍
│   │   ├── screens/             # Telas relacionadas à busca
│   │   │   └── SearchScreen.tsx # Tela principal da busca
│   │   ├── components/          # Componentes específicos da busca
│   │   │   ├── SearchBar.tsx    # Barra de pesquisa
│   │   │   └── SearchResultsList.tsx # Lista de resultados da pesquisa
│   │   ├── hooks/               # Hooks personalizados para busca
│   │   │   └── useDebouncedSearch.ts # Hook para busca com debounce
│   │   ├── services/            # Serviços de API para busca
│   │   │   └── searchService.ts # Serviço que faz requisições relacionadas à busca
│   │   ├── slices/              # Gerenciamento de estado da busca com Redux
│   │   │   └── searchSlice.ts   # Slice do Redux para armazenar o estado da busca
│   │   └── types.ts             # Modelos de dados e tipos relacionados à busca
│
│   ├── /productDetail           # Funcionalidade de detalhes do produto 🛒
│   │   ├── screens/             # Tela de detalhes do produto
│   │   │   └── ProductDetailScreen.tsx # Tela principal dos detalhes do produto
│   │   ├── components/          # Componentes específicos dos detalhes do produto
│   │   │   ├── ProductDetail.tsx # Informações do produto
│   │   │   └── ProductImage.tsx  # Componente de imagem do produto
│   │   ├── hooks/               # Hooks personalizados para detalhes do produto
│   │   │   └── useProductDetails.ts # Hook para obter detalhes do produto
│   │   ├── services/            # Serviços de API para detalhes do produto
│   │   │   └── productService.ts # Serviço que obtém informações do produto
│   │   ├── slices/              # Gerenciamento de estado dos detalhes do produto
│   │   │   └── productDetailSlice.ts # Redux slice para armazenar o estado do produto
│   │   └── types.ts             # Modelos e interfaces para detalhes do produto
│
│   └── /breadcrumb              # Funcionalidade de navegação breadcrumb 🔗
│       ├── components/          # Componentes relacionados ao breadcrumb
│       │   └── Breadcrumbs.tsx  # Componente de navegação breadcrumb
│       ├── hooks/               # Hooks personalizados para breadcrumb
│       │   └── useBreadcrumbs.ts # Hook para manipular breadcrumbs dinamicamente
│       ├── slices/              # Gerenciamento de estado do breadcrumb com Redux
│       │   └── breadcrumbSlice.ts # Slice do Redux para armazenar breadcrumbs
│       └── index.ts             # Arquivo de exportação para facilitar importações
│
├── /components                  # Componentes reutilizáveis de UI (globais) 🧩
│   ├── Header.tsx               # Cabeçalho do site
│   ├── Footer.tsx               # Rodapé do site
│   ├── Loader.tsx               # Indicador de carregamento
│   ├── ErrorBoundary.tsx        # Componente para capturar e exibir erros
│   └── Pagination.tsx           # Componente de paginação
│
├── /layouts                     # Layouts compartilhados 📐
│   ├── MainLayout.tsx           # Layout principal utilizado nas páginas
│   └── ProductLayout.tsx        # Layout específico para páginas de produto
│
├── /services                    # Configurações e chamadas de API compartilhadas 🌊
│   ├── axiosConfig.ts           # Instância global e configuração do Axios
│   └── apiRoutes.ts             # Definição centralizada dos endpoints da API
│
├── /store                       # Configuração do Redux e hooks tipados 🏪
│   ├── store.ts                 # Configuração da store do Redux
│   ├── rootReducer.ts           # Combinação de todos os slices do Redux
│   └── hooks.ts                 # Hooks tipados useAppDispatch e useAppSelector
│
├── /hooks                       # Hooks personalizados globais 🪝
│   └── useSSR.ts                # Hook para detectar se o código está rodando no servidor ou cliente
│
├── /styles                      # Estilos globais e temas 🎨
│   ├── theme.ts                 # Tema customizado do Material UI (MUI)
│   ├── global.css               # Estilos globais do projeto
│   └── darkTheme.ts             # Configuração para tema escuro (opcional)
│
├── /utils                       # Funções utilitárias 🔧
│   ├── formatPrice.ts           # Função para formatar preços
│   └── debounce.ts              # Função para debounce (evitar múltiplas chamadas seguidas)
│
├── /tests                       # Estrutura de testes 🧪
│   ├── /unit                    # Testes unitários
│   ├── /integration             # Testes de integração
│   └── /mocks                   # Mocks para testes
│
└── /public                      # Arquivos estáticos 🌐
    └── favicon.ico              # Ícone da aba do navegador
```
