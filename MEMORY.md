# Veritas Pest Control — Project Memory

## Project Overview
- **Stack**: React 19 + Vite 8 + Tailwind CSS v4 (CSS-first `@theme` config)
- **Routing**: React Router v7 (`BrowserRouter`, lazy-loaded route components)
- **State**: React Context — `LanguageContext` (en/es, client-side only, defaults to `en`), `ThemeContext` (light/dark via `.dark` class on `<html>`)
- **Animation**: Framer Motion (`motion/react`)
- **Icons**: inline SVGs (no icon library)
- **Package manager**: pnpm (CLAUDE.md says pnpm; `npm run` scripts also work)
- **Deployment**: Netlify, auto-deploys from `develop` branch. `netlify.toml` is the single source of truth for headers/redirects.

## What this project is
A React/Tailwind rebuild of the live site at veritaservicesllc.com (same business —
Veritas HomeServices LLC, same phone/license/email — different implementation). The
home page keeps its original hand-built styling. Every other page was brought in line
with the live site's URL structure and rewritten to use plain Tailwind utilities
instead of the custom `@layer` classes in `index.css`/`critical.css`.

## URL structure (matches the live site)
| Route | Old short path (still redirects) |
|---|---|
| `/` | — |
| `/pest-control-fort-myers` | `/services` |
| `/spider-control-fort-myers` | `/spider-control` |
| `/german-roach-cleanup-fort-myers` | `/roach-cleanup` |
| `/rodent-control-fort-myers` | `/rodent-control` |
| `/bed-bug-treatment-fort-myers` | `/bed-bug-treatment` |
| `/flea-tick-treatment-fort-myers` | `/flea-tick-treatment` |
| `/mosquito-control-fort-myers` | `/mosquito-control` |
| `/pest-control-san-carlos-park` | `/san-carlos-park` |
| `/pest-control-estero` | `/estero` |
| `/pest-control-bonita-springs` | `/bonita-springs` |
| `/hoa-property-management-pest-control` | `/communities` |
| `/request-service` | `/quote` |
| `/spider-control-bonita-springs` | (unchanged) |
| `/spider-control-naples` | (unchanged) |

Legacy paths are `<Navigate replace>` routes in `src/App.jsx`. Unknown paths hit a
catch-all `*` route rendering `NotFoundPage` (404, `noindex,follow`). `public/_redirects`
(`/* /index.html 200`) is required for Netlify to serve the SPA shell on any of these
paths at all — **do not remove it**, deep links 404 on Netlify without it.

## Page architecture — shared templates
Several near-duplicate pages were consolidated into parametrized templates under
`src/components/pages/templates/` (previously each page hand-duplicated ~150-230
lines, including the full services grid JSX with inline SVG icons):
- `TreatmentPageTemplate` — bed bug / rodent / flea & tick / mosquito pages (`pestKey` prop)
- `LocationPageTemplate` — San Carlos Park / Estero / Bonita Springs (`cityKey` prop)
- `SpiderControlCityTemplate` — Fort Myers / Bonita Springs / Naples spider pages (`cityKey` prop)

`ServicesPage`, `RoachCleanupPage`, `CommunitiesPage` remain standalone (genuinely
unique layouts). The shared service catalog (icons, links) lives in
`src/constants/services.jsx` (`.jsx` because it holds inline SVG JSX — a plain `.js`
file won't parse JSX in this Vite config). `src/constants/index.js` only holds
`SERVICE_OPTIONS` (quote-form dropdown labels) now — the other exports there were
unused dead code and were removed (`NAV_ITEMS`, `SERVICE_AREAS`, `FAQ_ITEMS`,
`AI_RESPONSES`, etc. all had live duplicates driven by `LanguageContext` instead).

## Styling convention
- **Home page sections** (`src/components/sections/*`: Hero, Services, WhyVeritas,
  QuickStart, Process, HOA, ServiceAreas, FAQ, CTA) — left exactly as they were,
  including their use of the custom `index.css` classes (`page-container`, `section`,
  `btn`, `card`, etc.). Do not "clean these up" — that was an explicit instruction.
- **Everywhere else** (shared components, page components, QuoteForm, ErrorBoundary) —
  plain Tailwind utility classes only. No `page-container`/`section`/`section-header`/
  `section-title`/`section-description`/`btn*`/`card`/`glass-card`/`card-volume`/
  `icon-wrapper`/`badge*`/`link-arrow`/`prose`. Reference conversions:
  - `page-container` → `w-full max-w-[85%] mx-auto px-6`
  - `section` → `py-16 md:py-20 overflow-x-hidden`
  - `btn btn-primary` → `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-700 text-white shadow-sm hover:bg-green-800 ...`
  - `card glass-card card-volume` → `bg-surface/90 backdrop-blur-md border border-border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300`
  - Semantic color tokens (`text-text`, `bg-primary`, `border-border`, etc.) are Tailwind
    v4 `@theme` tokens, not custom classes — keep using them everywhere.
- `src/index.css` and `src/critical.css` are hand-duplicated (critical.css is inlined
  into `<head>` at build time by a custom Vite plugin for LCP). **Any fix to a rule in
  one must be mirrored in the other** — this is exactly how the sticky-header bug
  below slipped through once already.

## Known bug classes fixed this pass (watch for recurrences)
1. **Translation-key lookups with baked-in prefixes.** Several components stored a
   fully-qualified dotted key (e.g. `'hero.trust.licensed'`, `'process.step1Title'`,
   `'serviceAreas.fortMyers'`) and then looked it up as `t.hero.trust[key]` —
   double-prefixing, so the lookup always missed and the UI rendered the literal key
   string. Fixed in `TrustBadges`, `ProcessSteps`, `ServiceAreaLinks`, `FeatureCards`,
   `ChecklistBox` (roach + hoa variants). When adding a new component that maps an
   array item to a translation, prefer indexing an existing array
   (`t.process.steps[index]`) over a flat key lookup, or keep keys un-prefixed and
   double check the matching translation object actually has that key.
2. **Framer Motion `viewport={{ amount: 0.3 }}` is unsatisfiable for tall containers.**
   `amount` is the fraction of the *target element* that must be inside the viewport
   simultaneously. For a stagger container taller than roughly `viewport-height / amount`
   (e.g. an 8-card grid stacked to ~3000px on a 390x844 mobile viewport needs 900px of
   itself visible at once — impossible), `whileInView` never fires and the content stays
   at `opacity: 0` forever — invisible, but still taking up layout space, so the page just
   looks like a huge blank gap. This hit the home page's 8-card services grid on every
   real mobile device the user tested (not reproducible via Lighthouse's default
   desktop-only checks — only showed up once we captured a real 390x844 screenshot via
   Playwright). Fixed by lowering `amount` to `0.1` everywhere this pattern is used
   (`ProcessSteps`, `FAQSection`, `FeatureCards`, `ChecklistBox`, `ServiceDetailCard`,
   `ServicePageLayout`, and the home sections). Prefer a small `amount` (or Framer
   Motion's `"some"`) over `0.3`+ for any container whose height scales with item count.
3. **`overflow-x: hidden` on `html, body` breaks `position: sticky`** on descendants
   (classic Chromium behavior — any non-`visible` overflow value makes the UA treat
   the element as a scroll container, which changes what "stuck" is relative to).
   Fixed by switching to `overflow-x: clip` in both `index.css` and `critical.css`.
   Don't reintroduce `overflow-x: hidden` on `html`/`body`.
4. **Missing `public/_redirects`** — Netlify static hosting 404s on any path other than
   `/` without an SPA fallback rule. Always keep `/* /index.html 200` in that file.

## Translations
`src/context/LanguageContext.jsx` now has full `en`/`es` coverage for every page
(`t.pages.*`), the 404/500 pages (`t.notFound`, `t.serverError`), and the quote form
(including success state, radio labels, placeholders, consent text). Language is
**client-side only** (`localStorage`, no `/es/` URLs) — there is intentionally no
hreflang alternate block in `index.html`/`sitemap.xml` for this reason (hreflang
implies a distinct crawlable URL per language, which doesn't exist here).

## SEO
- `src/components/shared/Seo.jsx` — tiny effect-based component (no react-helmet
  dependency) that sets `document.title`, meta description, canonical link, and
  robots meta per route. Every page component renders its own `<Seo title=... description=... path=... />`.
- `public/sitemap.xml` — rewritten to the canonical URLs above; no fake `/es/` entries.
- Single CSP, kept in sync across `index.html` (meta) and `netlify.toml` (header) —
  `public/_headers` was deleted (it duplicated/contradicted the other two, including a
  leftover `'sha256-0'` placeholder hash that did nothing).

## Contact info
Phone/email are obfuscated (base64) in `src/utils/contactObfuscation.js`, consumed via
`useContactInfo()`. The real values resolve to `239-227-0624` /
`arthur@veritaservicesllc.com` (matches the live site). Always use the hook — don't
hardcode contact info in translations or components.

## Verification habits for this repo
- `pnpm build` must succeed and `pnpm lint` (oxlint) should show no new warnings.
- Since this is a CSR SPA, grep for `t\.\w+\[` after touching translation-driven
  components and confirm every dynamic key actually resolves — that bug class has
  bitten this project more than once (see above).
- The Playwright MCP server in this environment has been unreliable (connection
  timeouts); `claude-in-chrome` (browser automation skill) works and caught real
  rendering bugs (blank hero on first paint, raw translation keys, non-sticky header)
  that a code read-through missed. `resize_window` does not actually change the
  viewport in this sandbox (reports success, `window.innerWidth` doesn't change) — it
  cannot be used for a true mobile screenshot.
- **For real mobile-viewport testing, use the `playwright` devDependency directly**
  (`node -e "const {chromium}=require('playwright'); ..."`, `newPage({viewport:{width:390,
  height:844}, isMobile:true, hasTouch:true})`), not the claude-in-chrome tool's
  `resize_window`. This is what actually caught the `amount: 0.3` bug above — Lighthouse's
  own mobile run scored the page fine and its stitched `fullPageScreenshot` looked
  plausible, but only a direct Playwright screenshot at the real device viewport showed
  the services grid rendering as a blank gap.
- Lighthouse CLI (already used in this project: `lighthouse-report*.json` at repo root)
  works well for category scores and a11y/SEO audit details (`--screenEmulation.*` flags
  for mobile), but don't fully trust its full-page screenshot for visual bug-hunting on
  pages with a `position: sticky` header — prefer a direct Playwright screenshot instead.

## Known remaining debt (not fixed this pass, intentionally out of scope)
- `index.css` / `critical.css` duplication (see above) — a real refactor would
  auto-extract critical CSS instead of hand-maintaining two files.
- `src/utils/security.js` is unused (its own comment says "for server-side use if
  adding a backend") — dead code reserved for a future API, left alone.
- Client-side rate limiting in `QuoteForm`/`validation.js` is cosmetic only — there's
  no backend in this repo to enforce it server-side.
- Stray root-level scripts (`analyze-*.cjs`, `crawl-site.cjs`, `audit-links.mjs`,
  `check-mobile.*`, `test-mobile.mjs`, `check-5173.png`, `vite.config.simple.js`) are
  untracked debugging artifacts, not part of the app — left alone, not mine to delete.
