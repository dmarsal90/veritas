# CLAUDE.md - Veritas Pest Control Project Instructions

## 🔴 MANDATORY: Memory Persistence Rule
**All context, decisions, and changes MUST be saved to project memory.**

- **Auto**: `opencode-mem` plugin captures via chat hooks
- **Manual**: Update `MEMORY.md` after every significant task
- **Rules**: Store persistent patterns in `.opencode/rules/`

See `.opencode/rules/memory-persistence.md` for full details.

---

## Project Stack
- **Framework**: React 18 + TypeScript + Vite
- **Routing**: React Router v7 (framework mode)
- **Styling**: Tailwind CSS v4 (CSS-first config in `src/index.css`)
- **Animation**: Framer Motion (`motion/react`)
- **State**: React Context (Language, Theme)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Theme System (CRITICAL)
- **Class-based**: `.dark` on `<html>` enables dark mode (NOT media queries)
- **Tokens in `src/index.css`**: 
  - Light: `--color-background: #fafafa`, `--color-text: #1a1a2e`
  - Dark: `--color-background: #0f172a`, `--color-text: #f1f5f9`
- **Always use semantic tokens**: `text-text`, `text-text-muted`, `bg-background`, `border-border`
- **Never hardcode colors** (no `text-white`, `bg-gray-900`, etc.)

## Component Conventions
- **Sections**: `section` + `page-container` wrapper
- **Reveal animations**: `reveal-section` class + Framer Motion `whileInView`
- **Reduced motion**: Respect `useReducedMotion()` hook
- **Buttons**: `btn`, `btn-primary`, `btn-secondary`, `btn-outline`, `btn-magnetic`

## CSS Architecture
- Tailwind v4 `@theme` in `src/index.css` (lines 3-90)
- Dark mode overrides in `.dark` block (lines 92-110)
- Custom utilities after line 250
- **NO arbitrary values** for colors/spacing - use tokens

## Git Workflow
- Branch: `develop` (main development)
- Commits: Conventional format, descriptive messages
- Push: Auto-deploys from `develop`

## Key Files
| File | Purpose |
|------|---------|
| `src/index.css` | All design tokens, Tailwind theme, utilities |
| `src/context/ThemeContext.jsx` | Theme toggle + persistence |
| `src/context/LanguageContext.jsx` | i18n (EN/ES) |
| `src/components/sections/` | Page sections (Hero, Services, CTA, HOA, etc.) |
| `MEMORY.md` | Project memory log |

## Recent Changes (2026-10-12)
- Fixed CTA & HOA gradient backgrounds to use `var(--color-background)` (theme-adaptive)
- CTA text now uses `text-text`/`text-text-muted` instead of hardcoded `text-white`
- CTA buttons updated to theme-aware variants

## Installed Extensions
- `opencode-mem` - Vector memory plugin
- `ocx` + `kdco/notify` - Notifications
- `envsitter-guard` - Env validation
