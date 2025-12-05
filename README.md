# 🚀 Portfólio Pessoal

Meu portfólio pessoal desenvolvido com Next.js 16, React 19 e Tailwind CSS 4. Um projeto moderno e responsivo que apresenta minha trajetória profissional, habilidades técnicas e projetos desenvolvidos.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)](https://tailwindcss.com/)

## ✨ Características

- **Design Moderno**: Interface limpa e responsiva com animações suaves usando Framer Motion
- **Mobile First**: Totalmente responsivo para todos os dispositivos
- **Performance Otimizada**: Construído com as melhores práticas do Next.js
- **Navegação Intuitiva**: Menu de navegação com scroll spy para melhor UX
- **Formulário de Contato**: Integração com Telegram para receber mensagens
- **Galeria de Projetos**: Showcase interativo de projetos com popup de detalhes

## 🛠️ Tecnologias Utilizadas

### Core

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first

### UI Components

- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e consistentes
- **Framer Motion** - Animações suaves e performáticas
- **Shadcn UI** - Sistema de componentes baseado em Radix UI

### Validação & HTTP

- **Zod** - Validação de schemas TypeScript-first
- **Axios** - Cliente HTTP para requisições

### DevOps & Qualidade

- **ESLint** - Linter para garantir qualidade do código
- **PostCSS** - Processamento de CSS

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## 🚀 Como Executar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
# Crie a build otimizada
pnpm build

# Inicie o servidor de produção
pnpm start
```

### Linting

```bash
# Execute o linter
pnpm lint
```

## 📁 Estrutura do Projeto

```
portfolio/
├── public/                 # Arquivos estáticos
│   ├── projects/          # Imagens dos projetos
│   └── favicons/          # Ícones do site
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── (app)/        # Grupo de rotas principal
│   │   │   ├── HeroSection/
│   │   │   ├── AboutSection/
│   │   │   ├── SkillsSection/
│   │   │   ├── ProjectsSection/
│   │   │   └── ContactSection/
│   │   ├── api/          # API Routes
│   │   └── layout.tsx    # Layout raiz
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   └── ui/           # Componentes UI base
│   ├── constants/         # Constantes e dados
│   ├── hooks/            # Custom hooks
│   ├── http/             # Serviços HTTP
│   ├── lib/              # Utilitários e helpers
│   └── styles/           # Estilos globais
├── components.json        # Configuração Shadcn UI
├── next.config.ts        # Configuração Next.js
├── tailwind.config.ts    # Configuração Tailwind
└── tsconfig.json         # Configuração TypeScript
```

## 🎨 Seções do Portfólio

### 🏠 Hero Section

Introdução com apresentação pessoal e call-to-action.

### 👨‍💻 Sobre Mim

Destaque de experiências e trajetória profissional.

### 💻 Habilidades

- **Front-end**: React, Next.js, TypeScript, Tailwind CSS, Material UI
- **Mobile**: React Native, Expo
- **Back-end**: Node.js, NestJS, Django, Python
- **Banco de Dados**: PostgreSQL, MongoDB
- **Ferramentas**: Git, Docker, Redis, RabbitMQ

### 🚀 Projetos

Showcase de projetos profissionais e pessoais:

- Sistema de Produção de Pacotes
- Sistema de Atendimento
- Serviço de Faturamento
- Integração de Boletos
- Plataforma de Promoções (AchadosPromo)
- Pomodoro.Dev

### 📬 Contato

Formulário integrado com notificação via Telegram.

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=seu_token_do_bot
TELEGRAM_CHAT_ID=seu_chat_id
```

## 📞 Contato

Desenvolvido por **Thiago Cabral**

- 💼 LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-usuario)
- 🐙 GitHub: [seu-github](https://github.com/seu-usuario)
- 📧 Email: seu-email@exemplo.com

---

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela!

Feito com ❤️ e ☕
