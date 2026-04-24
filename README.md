# Lobox

A small React demo showing theme switching via the Context API with SCSS-based design tokens.

## Features

- 🎨 Theme provider (light / dark) wrapping the whole app
- 🧩 Reusable components (Card, Button, etc.) styled with SCSS modules
- 🗂️ Simple page-based layout in `src/pages`
- ✅ TypeScript throughout

## Stack

- React 19
- TypeScript 4.9
- Sass / SCSS
- Create React App

## Getting Started

```bash
npm install
npm start       # dev server on http://localhost:3000
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Dev server with HMR |
| `npm test` | Jest test runner (watch mode) |
| `npm run build` | Production build in `build/` |

## Project Structure

```
src/
├── App.tsx
├── index.tsx
├── components/     # Reusable UI pieces
├── contexts/       # ThemeContext + provider
├── pages/          # Home page
└── styles/         # SCSS themes and variables
```

## Author

Hesam Hadadi — [hesamhaddadi.com](https://hesamhaddadi.com)

