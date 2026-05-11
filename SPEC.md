# ScriptFlow — Specification

## 1. Concept & Vision

ScriptFlow is a purpose-built scriptwriting workspace for YouTubers and podcasters who are done cobbling together scripts in Google Docs. It brings structure, AI assistance, and team collaboration into one focused tool — then lets you export straight to Descript, Premiere, or Final Cut. The vibe is a serious creative tool that doesn't feel like enterprise software.

## 2. Design Language

- **Aesthetic:** Dark creative workspace — GitHub-dark meets Notion-clean. Professional, not flashy.
- **Color Palette:**
  - Background: `#0d1117`
  - Surface: `#161b22`
  - Border: `#30363d`
  - Primary: `#58a6ff` (blue)
  - Secondary: `#3fb950` (green)
  - Text: `#e6edf3`
  - Muted: `#8b949e`
- **Typography:** Inter (Google Fonts), clean sans-serif
- **Spatial System:** Generous padding, consistent 8px grid
- **Motion:** Subtle fade-ins on scroll, smooth hover transitions (150-200ms ease)
- **Visual Assets:** Lucide React icons, no emoji

## 3. Layout & Structure

### NavBar
Fixed top bar: Logo left | Nav links center | Login + CTA right

### Hero Section
Headline + subheadline + CTA buttons + script preview mockup

### Script Preview (Mock Editor UI)
Split 3-panel mock:
- Left sidebar: template list
- Center: editor area with sample script text
- Right: AI assist panel

### Features Grid
6-card grid: Structured Templates, AI Research Assist, Team Collaboration, Outline-to-Full Script, One-Click Export, Version History

### How It Works
4-step horizontal flow: Pick Template → Write → AI Assists → Export

### Stats Bar
3-4 key metrics in a row (scripts written, creators, exports)

### Testimonials
3-card testimonial row with avatar, name, handle, quote

### Pricing
3-column pricing cards: Free / Starter $15 / Studio $39

### CTA Section
Full-width call to action

### Footer
Logo, links, social, copyright

## 4. Features & Interactions

- **Pricing toggle:** None (displayed as monthly)
- **Nav links:** Smooth scroll anchors
- **CTA buttons:** Primary (blue fill), Secondary (bordered)
- **Pricing cards:** Middle card highlighted as "Popular"
- **Mock editor:** Static HTML/CSS representation — no real interactivity needed
- **Hover states:** Subtle brightness/scale on cards, buttons

## 5. Component Inventory

| Component | States |
|-----------|--------|
| NavBar | Default, scrolled (shadow) |
| Button Primary | Default, hover (brightness up) |
| Button Secondary | Default, hover (border color brightens) |
| Feature Card | Default, hover (slight lift) |
| Pricing Card | Default, highlighted (border + badge) |
| Testimonial Card | Default |
| CTA Section | Default |

## 6. Technical Approach

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme {}`)
- **Icons:** Lucide React
- **Font:** Inter via `next/font/google`
- **Build:** `next build`
- **Deploy:** Vercel CLI with token

## 7. File Structure

```
script-flow/
├── SPEC.md
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── public/
    └── (empty)
```
