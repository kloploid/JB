# SomaSensus

Trilingual marketing site for **Yana Belova** — massage therapist and manual-therapy practitioner in Tallinn, Estonia. A single-page experience presenting services, pricing, locations and online booking in Estonian, Russian and English.

🌐 [www.somasensus.ee](https://www.somasensus.ee)

---

## Highlights

- **Trilingual (ET / RU / EN)** — locale is inferred from the browser's `Accept-Language` header and reflected in the URL (`/et`, `/ru`, `/en`). Estonian is the default.
- **Content-driven** — all copy lives in a single [`content/site-content.json`](content/site-content.json), typed and re-exported through [`content/site-content.ts`](content/site-content.ts). No text is hard-coded in components.
- **SEO-first** — per-locale metadata, canonical + `hreflang` alternates, `sitemap.xml`, `robots.txt`, a dynamic OpenGraph image and `MassageTherapy` JSON-LD (addresses, geo, opening hours, reviews).
- **Interactive locations map** — Leaflet map with CARTO basemaps marking both treatment rooms.
- **Online booking** — Calendly widget, loaded lazily so it never blocks the critical path.
- **Privacy-aware analytics** — Vercel Analytics & Speed Insights, Google Analytics and Microsoft Clarity, all gated behind a Google Consent Mode v2 cookie banner (default: denied).
- **Performance-minded** — AVIF/WebP images, hero background video (`webm` + `mp4`), on-demand font subsets (latin / latin-ext / cyrillic via `unicode-range`) and DNS-prefetch hints for third parties.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, RSC) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Fonts | Inter + Cormorant Garamond (`next/font/google`) |
| Map | Leaflet 1.9 |
| Booking | Calendly embed |
| Analytics | Vercel Analytics · Speed Insights · GA4 · MS Clarity |
| Language | TypeScript 5 |
| Hosting | Vercel |

## Project structure

```
app/
  [lang]/                  # Locale-scoped routes (et | ru | en)
    layout.tsx             # Metadata, JSON-LD, fonts, analytics, consent scripts
    page.tsx               # Renders <Site>
    privacy/               # Privacy policy page
  _components/
    Site.tsx               # The full single-page site
    LocationsMap.tsx       # Leaflet map of both locations
    CookieConsent.tsx      # Consent banner (Consent Mode v2)
    AnalyticsTracker.tsx   # Page-view tracking
  opengraph-image.tsx      # Dynamic OG image
  sitemap.ts · robots.ts · manifest.ts · icon
content/
  site-content.json        # Single source of truth for all copy
  site-content.ts          # Types, locale config, helpers
proxy.ts                   # Locale detection & redirect (Accept-Language → /:lang)
public/                    # Images, hero video, logo
```

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to your best-matching locale.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.somasensus.ee` | Canonical base URL for metadata, sitemap and JSON-LD |

## Editing content

To change any text, service, price or location, edit [`content/site-content.json`](content/site-content.json) under the relevant language key — the types in [`content/site-content.ts`](content/site-content.ts) keep all three locales in sync. Service images are mapped by id via `SERVICE_IMG` in the same file.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` build and ship automatically; set `NEXT_PUBLIC_SITE_URL` in the project's environment variables so absolute URLs resolve correctly.

---

> ⚠️ This project tracks a recent **Next.js 16** release whose APIs and conventions differ from older versions — consult the bundled docs in `node_modules/next/dist/docs/` before making framework-level changes (see [`AGENTS.md`](AGENTS.md)).
