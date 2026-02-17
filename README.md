# Dokos Web

Sitio web oficial y landing de **[Dokos](https://dokos.app)** — el lector de documentos de escritorio para desarrolladores. Una app, más de 60 formatos (Markdown con LaTeX y Mermaid, JSON, YAML, CSV, PDF, Jupyter Notebooks y más), construida con Tauri 2 y Rust.

## Stack

- **[Astro](https://astro.build)** 5 — sitio estático y SSG
- **[Tailwind CSS](https://tailwindcss.com)** — estilos
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap automático
- **astro-seo** — meta tags y Open Graph
- **i18n** — 10 idiomas (en, es, pt, zh, fr, hi, de, ja, ru, ko)

## Requisitos

- **Node.js** 18+
- **npm** (o pnpm / yarn)

## Instalación

```bash
npm install
```

## Comandos

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build`   | Build de producción en `./dist/`                 |
| `npm run preview` | Vista previa del build antes de desplegar       |
| `npm run astro`   | CLI de Astro (p. ej. `astro add`, `astro check`) |

## Estructura del proyecto

```
dokos-web/
├── public/                 # Assets estáticos (favicon, imágenes, robots.txt)
├── src/
│   ├── assets/             # SVGs e imágenes fuente
│   ├── components/         # Componentes Astro (Hero, Navbar, Footer, etc.)
│   ├── i18n/               # Traducciones (JSON) y utilidades (utils.ts)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── [...lang]/      # Rutas por idioma (/, /es, /pt, …)
│   │       └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

- Las páginas se generan en **rutas por idioma**: `/` (inglés), `/es`, `/pt`, `/zh`, etc.
- Los textos se cargan desde `src/i18n/*.json` según el locale.
- El sitemap y la configuración de sitio (`site: 'https://dokos.app'`) están en `astro.config.mjs`.

## Idiomas

Idiomas soportados: **en**, **es**, **pt**, **zh**, **fr**, **hi**, **de**, **ja**, **ru**, **ko**.  
Para añadir uno nuevo:

1. Crear `src/i18n/<codigo>.json` (copiando `en.json` y traduciendo).
2. Registrar el locale en `src/i18n/utils.ts` y en `astro.config.mjs` → `i18n.locales`.
3. Añadir la ruta estática en `getStaticPaths()` de `src/pages/[...lang]/index.astro`.

## Build y despliegue

El build genera archivos estáticos en `dist/`, listos para cualquier hosting (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

La URL base configurada es **https://dokos.app**.

## Enlaces

- [Dokos — Sitio oficial](https://dokos.app)
- [Documentación de Astro](https://docs.astro.build)
