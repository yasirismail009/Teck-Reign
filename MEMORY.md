# TekReign Project Memory

## Overview
Marketing / agency site for TekReign (Next.js 15 App Router). Domain: `https://tekreign.com`.

## Architecture
- `src/app/` — routes and page UI
- `src/lib/seo.js` — shared SEO helpers (`createPageMetadata`, static route list, service category SEO)
- `src/app/sitemap.js` — dynamic XML sitemap (static pages + all case studies)
- `src/app/robots.js` — robots.txt generation
- Client-heavy pages use route `layout.js` files for metadata (client `page.js` cannot export metadata)

## SEO Decisions (2026-07-19)
- Removed sitewide `canonical: '/'` from root layout (was consolidating all URLs to homepage — critical indexing bug)
- Per-route unique titles, descriptions, canonicals, OG/Twitter via layouts + `generateMetadata` for dynamic routes
- Replaced stale `public/sitemap.xml` / `public/robots.txt` with App Router generators
- Organization + FAQ JSON-LD on homepage; fixed invalid phone placeholder and LinkedIn slug mismatch (`tek-reign`)
- Interim OG image: `/web-app-manifest-512x512.png` until a proper 1200×630 `og-image.jpg` is added
- Service category deep-links use URL hashes (not `?section=`), matching nav links

## Indexable Routes
- `/`, `/about-us`, `/services`, `/services/{software-development,digital-marketing,design-ux}`, `/services/{digital,financial,strategic}`
- `/case-studies`, `/case-studies/[id]` (IDs from `src/app/data/caseStudies.js`; note id `22` is missing in data)
- `/careers`, `/contact-us`, `/work-together`
- Legal: `/privacy-policy`, `/terms-and-services`, `/cookies-policy`

## New case studies (2026-07-19)
- id **32** KAMPALO AI marketing — `/case-studies/32` — images in `public/case-studies/kampalo/`
- id **33** **AuditQA** — AI FS quality review (tools-first + Ollama LLM, bilingual cross-check, learning loop) — `/case-studies/33` — `public/case-studies/audit_qa_ai/`
- id **34** AI Financial Analysis — `/case-studies/34` — `public/case-studies/financial_analysis_ai/`
- Case studies list order: AI first — **32** KAMPALO → **33** AuditQA → **35** TerraSkyAI → **28** Hey Iris → **34** Financial Analysis AI → rest
- TerraSkyAI (`/case-studies/35`): positioned as **ML & computer vision** on drone imagery (detection, stand count, yield); client TerraSkyAI; live https://www.terraskyai.com/
- Services nav / homepage /services: **AI Solutions** card/column first, then Software, Marketing, Design
- Software Development detail page: Agentic AI, ML, LLMs, Modern AI Solutions listed before web/mobile/API

- Core highlights: **Agentic AI**, **ML**, **LLMs / GenAI**, **modern AI solutions**
- KAMPALO / Kai positioning: supervisor + specialist mini-agents (LangGraph), suite agents (search/analytics/google_ads/meta_ads/meta_insights), DB-only synced tools, hybrid ROAS/CTR/CPC decision engine + LLM synth, Ollama/Groq via LangChain, FastMCP tool surface, chat HTTP/SSE/WebSocket
- Homepage SEO title/meta, Organization + SoftwareApplication (KAMPALO) JSON-LD, and FAQ reflect AI + KAMPALO
- Software Development service page includes Agentic AI, Machine Learning, LLMs & GenAI, Modern AI Solutions sections

## Favicon / Google SERP (2026-07-19)
- Google showed generic globe: SVG text favicon is unreliable; primary icon is now `/favicon-48x48.png` (multiples of 48px required)
- App Router file icons: `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`
- Public PNGs: `favicon-48x48.png`, `favicon-32x32.png`, `favicon-96x96.png`
- `site.webmanifest` purpose split (`any` / `maskable` separately — combined value is invalid)
- Live `tekreign.com/favicon.ico` previously returned **503** — hosting must serve icons with 200 or Google keeps the globe; SERP favicon can take days after re-crawl

## Known Issues / Next Steps
- Add real `og-image.jpg` (1200×630) and `twitter-image.jpg`
- Confirm production serves `/favicon-48x48.png` and `/favicon.ico` with HTTP 200 (not 503) after deploy; request reindex in GSC
- Many marketing pages are `'use client'` — prefer server components for critical copy long-term
- Case study detail page still uses sync `params` in a client component (Next 15 prefers async params / `use()`)
- Submit updated sitemap in Google Search Console after deploy
- Consider Service / BreadcrumbList schema on service and case-study templates
- Align dual service taxonomies (`digital|financial|strategic` vs `software-development|digital-marketing|design-ux`) for clearer IA
- Prove or remove large marketing stats (500+ clients, patents, API calls) when ready
