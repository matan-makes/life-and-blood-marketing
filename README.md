# Life and Blood — Marketing Site

A tiny, single-purpose landing page for **Life and Blood**, a life counter app
for the Flesh and Blood TCG. Built with React 19, TypeScript, Vite, and
Tailwind CSS v4, and deployed to GitHub Pages.

## Before you go live

Edit the three links in **`src/config.js`**:

| Field        | What to put                                                            |
| ------------ | ---------------------------------------------------------------------- |
| `appStore`   | Your App Store URL (e.g. `https://apps.apple.com/app/id0000000000`)     |
| `googlePlay` | Already derived from the package id — verify once the listing is live   |
| `koFi`       | Your Ko-fi page (`https://ko-fi.com/yourhandle`)                       |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

## Deploying to GitHub Pages

1. Push this folder to a new **public** GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
   site and publishes it. The live URL appears in the Actions run summary.

> Routing uses `HashRouter` and Vite's `base: './'`, so the site works at any
> path (`username.github.io` or `username.github.io/repo/`) and deep links like
> `/#/privacy` never 404 on refresh.

## Structure

```
src/
├── config.ts              # ← the only file you normally need to edit
├── main.tsx               # routes: / and /privacy
├── index.css              # Tailwind v4 + brand color tokens
├── components/
│   ├── StoreButtons.tsx
│   └── Footer.tsx
└── pages/
    ├── Home.tsx
    └── Privacy.tsx
```

## Note

This is an unofficial fan-made tool and is not affiliated with or endorsed by
Legend Story Studios.
