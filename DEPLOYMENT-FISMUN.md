# FISMUN 2026 — Deployment

## GitHub Pages + fismun.in

1. Push this project to the GitHub repository's `main` branch.
2. GitHub Actions will run `npm ci`, `npm run build`, and publish only `dist/`.
3. The `public/CNAME` file and workflow `cname: fismun.in` configure the custom domain.
4. In GitHub: Settings → Pages, keep the Pages source configured for GitHub Actions if prompted.
5. DNS for `fismun.in` must point to GitHub Pages. Do not point the domain to a server that serves the React source files.

## If using cPanel/normal hosting instead

Run:

    npm ci
    npm run build

Then upload the **contents of `dist/`** into `public_html/`. Do not upload the source `src/` folder as the live site.

## Expected production entry

The live HTML should reference a generated file similar to:

    /assets/index-XXXXXXXX.js

It should NOT request:

    /src/main.jsx
