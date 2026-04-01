# Ismael Tristan — Portfolio

Personal developer portfolio built with React, TypeScript, and Vite. Fetches live data from a self-hosted API and supports English/Spanish with full i18n.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and bundler
- **react-i18next** — EN/ES language switching with browser language detection
- **Custom CSS** — design system with CSS variables, fluid typography, and responsive grid

## Features

- Responsive project grid (1 col mobile / 2 col tablet / 3 col desktop)
- Project cards with expandable description, demo and repo links
- Live tech stack and projects fetched from `blog.itr-dev.com/api`
- CV download that switches file based on active language
- Fade-up entrance animations (respects `prefers-reduced-motion`)
- Self-hosted Umami analytics — privacy-focused, cookie-free

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
