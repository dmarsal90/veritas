# Veritas Pest Control - Project Memory

## Project Overview
- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS v4
- **Routing**: React Router v7 (framework mode)
- **State**: React Context (Language, Theme)
- **Animation**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Deployment**: GitHub → Vercel/Cloudflare (develop branch)

## Key Files Modified Recently

### CTA Section (`src/components/sections/CTA.jsx`)
- Fixed theme-adaptive gradient: uses `var(--color-background)` instead of hardcoded dark color
- Text colors now use semantic tokens: `text-text`, `text-text-muted` (adaptive light/dark)
- Buttons: `btn-primary` + `btn-outline` with theme-aware borders
- Gradient now matches section background in both themes

### HOA Section (`src/components/sections/HOA.jsx`)
- Fixed gradient overlay: uses `var(--color-background)` for theme-adaptive background
- Card remains `bg-primary` with white text (intentional brand color)

### CSS Tokens (`src/index.css`)
- Light mode: `--color-background: #fafafa`, `--color-text: #1a1a2e`
- Dark mode (`.dark` class): `--color-background: #0f172a`, `--color-text: #f1f5f9`
- Theme toggled via `ThemeContext` adding/removing `.dark` class on `<html>`

## Theme System
- Class-based (not media query): `.dark` on `<html>` enables dark mode
- Persisted in localStorage via `ThemeContext`
- All semantic tokens (`--color-background`, `--color-text`, `--color-text-muted`, `--color-border`) swap automatically

## Git History
- Latest commit: `c1512c2` - "Fix CTA and HOA sections theme-adaptive backgrounds"
- Branch: `develop` (pushed to origin)

## Installed Tools (Global)
- `opencode-mem` - OpenCode plugin for persistent vector memory
- `envsitter-guard` - Env validation
- `ocx` + `kdco/notify` - OpenCode extensions

## Deployment
- Auto-deploys from `develop` branch
- Check Vercel/Cloudflare dashboard for build status
