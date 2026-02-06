# Astria — Vite + React + Tailwind gallery

This repository is a complete Vite + React + Tailwind project scaffolded for Netlify.

Key points
- Router: React Router (client-side)
- Styling: Tailwind CSS, refined aesthetic
- Content: JSON files in `src/content/`
  - `artists.json`
  - `artworks.json`
- Images served from `public/uploads/` and referenced as `/uploads/filename.jpg`
- Netlify CMS: `public/admin/` with git-gateway backend
- Netlify config: `netlify.toml`
- Node pinned to 20 via `.nvmrc` and `package.json` engines

Install & run locally
1. Node: install Node 20.x (nvm use 20)
2. Install dependencies:
```bash
npm ci
```
3. Development:
```bash
npm run dev
# open http://localhost:5173
```
4. Build:
```bash
npm run build
npm run preview
```

Netlify build settings (exact)
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Base directory: (leave blank / repo root)
- Environment: Node version pinned via `NODE_VERSION=20` in `netlify.toml` but Netlify reads package.json engines too.

Netlify CMS
- Admin: `https://<your-site>/.netlify/admin/`
- Config uses `git-gateway` backend and edits `src/content/artists.json` and `src/content/artworks.json`.
- Media folder: `public/uploads`

Replace existing project
- Replace the repo's files with the files provided here, commit, and push to the main branch.
- Ensure Netlify has repository access and netlify identity/git-gateway is enabled (Netlify admin -> Identity -> Enable -> Services -> Git Gateway).

Notes
- The `public/uploads/*` entries are placeholders (JPEGs). Add real artwork images there and update `src/content/*.json` if needed.
- The JSON files are simple arrays; the site reads them at runtime via fetch from `import` (Vite supports importing JSON).