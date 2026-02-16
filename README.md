# E-Commerce

Uma aplicação moderna de e-commerce desenvolvida com Vue 3, Vuetify e Vite.

## 🚀 Tecnologias

- **Vue 3** - Framework JavaScript progressivo
- **Vuetify 3** - Framework de componentes Material Design
- **Vue Router** - Roteamento oficial do Vue.js
- **Vite** - Build tool de última geração
- **ESLint** - Linter para manter a qualidade do código

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm, yarn, pnpm ou bun

## 💿 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/ewertonsiqueira/e-commerce.git
cd ecommerce
```

2. Instale as dependências usando seu gerenciador de pacotes preferido:

| Gerenciador de Pacotes | Comando        |
| ---------------------- | -------------- |
| npm                    | `npm install`  |
| yarn                   | `yarn install` |
| pnpm                   | `pnpm install` |
| bun                    | `bun install`  |

## 💡 Scripts Disponíveis

### Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor estará acessível em [http://localhost:3000](http://localhost:3000)

### Build de Produção

Gere a versão otimizada para produção:

```bash
npm run build
```

### Preview da Build

Visualize a build de produção localmente:

```bash
npm run preview
```

### Lint

Execute o ESLint para verificar e corrigir problemas no código:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
ecommerce/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Recursos (imagens, ícones, etc.)
│   ├── components/     # Componentes Vue reutilizáveis
│   │   ├── AppFooter.vue
│   │   ├── CardProducts.vue
│   │   ├── HeaderApp.vue
│   │   └── NavigationDrawer.vue
│   ├── composables/    # Composables Vue (lógica reutilizável)
│   │   └── userCart.js
│   ├── pages/          # Páginas da aplicação
│   ├── plugins/        # Plugins Vue (Vuetify, etc.)
│   ├── router/         # Configuração de rotas
│   ├── styles/         # Estilos globais e configurações SCSS
│   ├── utils/          # Funções utilitárias
│   ├── App.vue         # Componente raiz
│   └── main.js         # Ponto de entrada da aplicação
├── database.json       # Dados mockados
├── package.json
└── vite.config.mjs     # Configuração do Vite
```

## ✨ Funcionalidades

- 🖼️ **Interface Moderna**: Utilizando Vue 3 e Vuetify 3 para uma experiência reativa e responsiva
- 🛒 **Carrinho de Compras**: Sistema de carrinho implementado com composables Vue
- 🎨 **Material Design**: Interface baseada em Material Design 3 via Vuetify
- 🚦 **Roteamento Automático**: Via unplugin-vue-router para navegação SPA
- 🧩 **Auto-importação de Componentes**: Componentes importados automaticamente conforme uso
- ⚡ **Hot Module Replacement**: Desenvolvimento rápido com Vite e HMR instantâneo
- 📱 **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- 🎯 **Navigation Drawer**: Menu lateral para navegação
- 🏷️ **Catálogo de Produtos**: Sistema de exibição de produtos com cards

## 🛠️ Configuração

O projeto utiliza diversas ferramentas modernas:

- **Auto-importação de componentes** via `unplugin-vue-components`
- **Roteamento automático** via `unplugin-vue-router`
- **Fontes customizadas** via `unplugin-fonts` com Roboto
- **Tema Vuetify** configurável em `src/styles/settings.scss`
- **Material Design Icons** via `@mdi/font`

## 📝 Licença

Este projeto é privado.

## 👨‍💻 Autor

**Ewerton Siqueira**

- GitHub: [@ewertonsiqueira](https://github.com/ewertonsiqueira)

## 📚 Links Importantes

- 📄 [Documentação Vue 3](https://v3.vuejs.org/)
- 📄 [Documentação Vuetify 3](https://vuetifyjs.com/)
- 📄 [Documentação Vite](https://vitejs.dev/)
- 🎮 [Vuetify Playground](https://play.vuetifyjs.com/)

---

Desenvolvido com ❤️ usando Vue 3 e Vuetify
Once the build process is completed, your application will be ready for deployment in a production environment.

## 💪 Support Vuetify Development

This project is built with [Vuetify](https://vuetifyjs.com/en/), a UI Library with a comprehensive collection of Vue components. Vuetify is an MIT licensed Open Source project that has been made possible due to the generous contributions by our [sponsors and backers](https://vuetifyjs.com/introduction/sponsors-and-backers/). If you are interested in supporting this project, please consider:

- [Requesting Enterprise Support](https://support.vuetifyjs.com/)
- [Sponsoring John on Github](https://github.com/users/johnleider/sponsorship)
- [Sponsoring Kael on Github](https://github.com/users/kaelwd/sponsorship)
- [Supporting the team on Open Collective](https://opencollective.com/vuetify)
- [Becoming a sponsor on Patreon](https://www.patreon.com/vuetify)
- [Becoming a subscriber on Tidelift](https://tidelift.com/subscription/npm/vuetify)
- [Making a one-time donation with Paypal](https://paypal.me/vuetify)

## 📑 License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
