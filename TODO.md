# Veritas Rebranding — Execution TODO

Source of truth for this pass. Check items off as completed. See MEMORY.md for durable project memory.

## 0. Discovery (done)
- [x] Crawl live site (veritaservicesllc.com) via WebFetch (Playwright MCP was down — connection timeout) — got real URL slugs & nav structure
- [x] Read App.jsx, LanguageContext, Header/Footer/Banner, all 13 page components, all 12 shared components, index.css, index.html, QuoteForm, validation/security/api/contactObfuscation utils
- [x] Found: no `public/_redirects` → deep links 404 on Netlify (critical bug)
- [x] Found: 8 page files duplicate the same ~120-line `services` array (DRY violation)
- [x] Found: translations exist for nav/footer/home sections only; all 13 page components + QuoteForm + ErrorBoundary hardcode English strings
- [x] Found: `ErrorBoundary` uses `process.env.NODE_ENV` (undefined in Vite client bundle)
- [x] Found: 3 divergent CSP definitions (index.html meta, netlify.toml, public/_headers)
- [x] Found: footer translations hardcode `info@veritashomeservices.com`; real obfuscated contact resolves to `arthur@veritaservicesllc.com` (matches live site / user-supplied 404-500 pages) — inconsistent
- [x] Found: sitemap.xml/hreflang reference non-existent `/es/...` URLs (language is client-side only, no localized routes)

## 1. URL map — DONE, all links updated across Header/Footer/Banner/constants/home sections/translations

## 2. Routing & infra — DONE
- [x] `public/_redirects` SPA fallback
- [x] `App.jsx` rewritten: canonical routes + legacy redirects + catch-all 404
- [x] `NotFoundPage.jsx` + `ServerErrorPage.jsx` built (Tailwind + Framer Motion, theme-aware, i18n)
- [x] `ErrorBoundary` renders `ServerErrorPage` inside real site chrome; `process.env` → `import.meta.env.DEV`; moved inside `BrowserRouter` (needed Router context for Link/NavLink)
- [x] `public/sitemap.xml` rewritten, fake `/es/` hreflang removed everywhere
- [x] `Seo` component (title/description/canonical/robots per route), used on every page

## 3. Tailwind-only conversion — DONE
- [x] All `src/components/shared/*`, all page components, QuoteForm, ErrorBoundary converted
- [x] Home sections left untouched (confirmed byte-identical styling, only `/quote`→`/request-service` href fixed — no visual change)

## 4. SOLID / DRY — DONE
- [x] `src/constants/services.jsx` — single service catalog (was duplicated in 8 files)
- [x] 3 page templates (`TreatmentPageTemplate`, `LocationPageTemplate`, `SpiderControlCityTemplate`) replace 10 near-duplicate page files
- [x] Removed dead exports from `src/constants/index.js` (`NAV_ITEMS`, `SERVICE_AREAS`, `FAQ_ITEMS`, `AI_RESPONSES`, etc. — all unused, had live duplicates elsewhere)
- [x] Footer's broken label→slug auto-derivation replaced with explicit `SERVICE_CATALOG` links

## 5. Translations — DONE
- [x] Full `en`/`es` coverage added under `t.pages.*`, `t.notFound`, `t.serverError`, extended `t.quoteForm`
- [x] Fixed real, confirmed-in-browser bugs: `TrustBadges`, `ProcessSteps`, `ServiceAreaLinks`, `FeatureCards`, `ChecklistBox` (roach + hoa variants) were rendering raw translation-key strings instead of text — all had either a doubled key prefix or genuinely missing data

## 6. Security pass — DONE
- [x] `ErrorBoundary` env check fixed
- [x] CSP unified across `index.html` + `netlify.toml`; `public/_headers` deleted (conflicting, had a dead `'sha256-0'` hash, duplicated cache rules already in netlify.toml)
- [x] Added HSTS header to netlify.toml
- [x] Dropped unused `cdn.jsdelivr.net` CSP allowance (nothing in the app references it)

## 7. SEO pass — DONE
- [x] Per-page title/description/canonical via `<Seo>`
- [x] hreflang/sitemap/robots fixed (no fake localized URLs)

## 8. Verification — DONE
- [x] `pnpm build` succeeds, `pnpm lint` clean (only pre-existing warnings, none from this pass)
- [x] Browser-verified every canonical route + two legacy redirects + a 404 path — no console errors
- [x] Caught and fixed 3 real runtime bugs invisible in code review: blank hero on first paint (animation `once:false` vs already-in-view), non-sticky header (`overflow-x:hidden` on html/body in BOTH index.css and critical.css), and the translation-key bugs above
- [ ] True mobile-viewport screenshot — blocked: `resize_window` doesn't change the actual viewport in this sandbox (confirmed via `window.innerWidth`). Responsive classes were reviewed statically instead. Flag to user.

## 9. Follow-up requests handled mid-pass
- [x] Sticky header fix (`overflow-x: clip` instead of `hidden`)
- [x] "Primary service areas" raw-key bug (ServiceAreaLinks translations)
- [x] "Spider Control by City" section redesigned — bigger centered cards, added heading
- [x] Service-grid SVG icons replaced with recognizable per-pest art (spider, roach, mouse, bed bug, tick, mosquito) instead of abstract blobs

## 10. Memory
- [x] Rewrote `MEMORY.md` to reflect current structure, conventions, and bug classes to watch for
