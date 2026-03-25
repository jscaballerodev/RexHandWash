# AGENTS.md — Rex Hand Wash Website Blueprint

## Project Overview

Professional single-page website for **Rex Hand Wash**, a family-owned hand car wash in Tampa, FL.
EN/ES bilingual. Mobile-first responsive design.

## Tech Stack

| Layer         | Technology                        | Version   |
|---------------|-----------------------------------|-----------|
| Framework     | React                             | 19        |
| Build tool    | Vite                              | 8         |
| Language      | TypeScript                        | ~5.9      |
| Styling       | Tailwind CSS                      | 4         |
| Icons         | lucide-react                      | ^1.6      |
| Animations    | framer-motion                     | ^12       |
| Smooth scroll | lenis (`lenis/react`)             | ^1.3      |
| UI primitives | shadcn/ui (Radix + CVA)           | —         |
| Carousel      | embla-carousel-react + autoplay   | ^8.6      |

## Critical Rules

### Imports & Libraries

- **Lenis**: Import from `lenis/react`, NOT `@studio-freight/react-lenis`.
  The latter bundles React 18 internally and causes "Invalid hook call" errors with React 19.
- **Social icons**: `lucide-react` no longer exports `Instagram` or `Facebook`.
  Use inline SVGs (see `Navbar.tsx` and `FooterSection.tsx` for reference).
- **Vite config**: `@tailwindcss/vite` plugin MUST be in `vite.config.ts`.
  Without it, Tailwind v4 at-rules (`@source`, `source(none)`) cause lightningcss minifier failures in production builds.

### Images

- All local images live in `public/images/` and are referenced as string paths: `"/images/home.png"`.
- Do NOT use ES module imports (`import img from "..."`) for images.
- Do NOT use `figma:asset/` protocol — it does not work in Vite.
- Gallery supplements local images with Unsplash CDN; all other sections use local assets only.

### Component Architecture

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Root: ReactLenis → LangProvider → Navbar + sections + Footer
├── context/
│   └── LangContext.tsx         # EN/ES toggle via React Context (useLang hook)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, mobile menu with AnimatePresence
│   │   └── FooterSection.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── WhyRexSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PaintProtectionSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── GallerySection.tsx
│   ├── shared/
│   │   ├── ScrollReveal.tsx    # framer-motion useInView wrapper
│   │   └── ImageWithFallback.tsx
│   └── ui/                     # shadcn/ui components (Accordion, Carousel, Button actively used)
└── styles/
    ├── index.css               # Google Fonts + Tailwind directives + theme import
    └── theme.css               # CSS custom properties + @theme inline Tailwind registration
```

### i18n Pattern

- Use `useLang()` hook from `src/context/LangContext.tsx`.
- NO prop drilling of `lang`. Every component that needs the language reads from context directly.
- Translation pattern: inline ternary (`isEn ? "English" : "Español"`) or local `t` object per component.

### Brand Design Tokens

Defined as CSS custom properties in `src/styles/theme.css`, registered as Tailwind utilities via `@theme inline`:

| Token          | CSS Variable     | Tailwind Class    | Value     |
|----------------|------------------|-------------------|-----------|
| Primary blue   | `--rex-blue`     | `bg-rex-blue`     | `#3b4d8c` |
| Dark navy      | `--rex-navy`     | `text-rex-navy`   | `#1d2d5c` |
| CTA red        | `--rex-red`      | `bg-rex-red`      | `#e63946` |
| Accent amber   | `--rex-amber`    | `text-rex-amber`  | `#fca311` |

| Font           | CSS Variable     | Tailwind Class    | Usage            |
|----------------|------------------|-------------------|------------------|
| Bangers        | `--font-bangers` | `font-bangers`    | Headings, CTAs   |
| Permanent Marker | `--font-marker` | `font-marker`   | Hero subtitle    |
| Inter          | `--font-inter`   | `font-inter`      | Body text, nav   |

### Animation Patterns

- **Scroll reveal**: Use `<ScrollReveal direction="up|left|right|none" delay={n}>` wrapper.
  Stagger manually with per-item `delay` (e.g., `delay={i * 0.1}`).
- **Page transitions**: `<ReactLenis root>` wraps the app with `lerp: 0.1, duration: 1.2`.
- **Mobile menu**: `AnimatePresence` + `motion.div` for height/opacity animation.
- **Hover interactions**: `transition-all` with Tailwind hover utilities (`hover:scale-105`, `hover:-translate-y-1`, `hover:shadow-2xl`).

### shadcn/ui

- Components live in `src/components/ui/`. Utility function in `src/components/ui/utils.ts`.
- Actively used: `accordion.tsx`, `carousel.tsx`, `button.tsx`.
- Many Radix packages are installed for future use. Do not remove them without checking for active imports.
- The `pagination.tsx` component has a known TS warning about duplicate `size` prop — it compiles fine and is not blocking.

### Build & Verification

```bash
# Development
npm run dev

# Production build (must pass with 0 errors)
npm run build    # runs: tsc -b && vite build

# Preview production build
npm run preview
```

### Public Assets

- `public/logo.svg` — Brand logo (used in Navbar)
- `public/favicon.png`
- `public/images/` — 14 images for sections (home, services, reviews, paint protection, FAQ, gallery, why-rex)

## AI Directives

- Always check this file before making architectural decisions.
- Prefer editing existing files over creating new ones.
- Run `npm run build` after any change to verify 0 errors.
- Consult `.agents/skills/web-design-guidelines/` for UI/UX best practices.
- When adding new sections or components, follow the existing pattern: functional component, `useLang()` for i18n, `ScrollReveal` for entrance animations, Tailwind for styling.
