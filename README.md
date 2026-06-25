# cadido-website

Candango's public **marketing website** — a standalone **Astro + Tailwind** static site, separate from the product app (`apps/web`). Implements the approved **Website Design System** (docs vault → `06 - Delivery/Website Design System.md`).

## Develop

```bash
cd cadido-website
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the build
```

## Structure

- `tailwind.config.mjs` — the design tokens (terracotta / sand / pine, type scale, radius, shadows).
- `src/styles/global.css` — base, button/card component classes, reveal-on-scroll.
- `src/layouts/Base.astro` — head, fonts (Bricolage Grotesque · Inter · Space Mono), OG meta, reveal script.
- `src/components/` — `Nav`, `Footer`.
- `src/pages/` — `index.astro` (landing), `privacy.astro`, `terms.astro`, `contact.astro`.

## Before launch (see docs vault → Launch & Legal Requirements)

- Set the real **domain** in `astro.config.mjs` (`site`) and the app URL in `Nav.astro` / `index.astro`.
- Replace **legal page** placeholders with counsel-approved text (keep the Google **Limited Use** section).
- Swap the product-shot placeholders for real screenshots in browser frames.
- Add OG/social images and a real favicon set.
