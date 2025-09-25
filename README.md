# Crypto Run Tracker (PWA)

Static build ready for GitHub Pages.

## Files
- `index.html` — app (no bundler, pure HTML/JS/CSS + Tailwind CDN)
- `manifest.json` — PWA manifest
- `service-worker.js` — offline & cache
- `offline.html` — offline fallback
- `icons/` — app icons

## Deploy to GitHub Pages
1. Create a repository (e.g., `crypto-run-tracker`).
2. Upload these files to the repo root.
3. Settings → Pages → Deploy from branch → `main` / `/root`.
4. Open: `https://<username>.github.io/crypto-run-tracker/`
   - If the SW is cached, hard-refresh with `Ctrl+F5` (or pull-to-refresh on mobile).

## PWA install
- Android/Chrome: Menu `⋮` → *Install app*.
- iOS/Safari: *Share* → *Add to Home Screen*.

> Note: for the TradingView widget and Binance APIs to work, the site must be served via HTTPS (GitHub Pages is fine).
