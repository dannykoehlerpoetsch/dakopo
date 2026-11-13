# Portfolio DaKoPo

**Live:** [dakopo.vercel.app](https://dakopo.vercel.app)

---

[English]

## Personal portfolio of Danny Köhler-Poetsch – Frontend Developer from Leipzig.

Originally built with React in September 2024, the portfolio has since been migrated to Next.js 16 (App Router) and is continuously expanded. It showcases my projects, tech stack and professional background.

### Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** JavaScript
- **Styling:** CSS Modules, CSS Custom Properties
- **UI Primitives:** Radix UI (Accordion, Switch, Dialog, Popover)
- **Icons:** react-icons (Font Awesome 6)
- **Deployment:** Vercel
- **Package Manager:** Bun
- **Quality Gates:** ESLint (flat config), GitHub Actions CI

### Features

- Responsive design across all viewports
- Dark mode / light mode with persistent preference and no pre-hydration flash
- Bilingual content (German / English) with a matching `lang` attribute
- Sticky header with a Radix Popover settings panel (Escape, focus trap, focus return)
- Keyboard accessible project lightbox based on Radix Dialog
- Accordion components with expand/collapse all
- Skip link and visible focus indicators
- Contact form with client-side validation (via Formspree)
- Dynamic sitemap and robots.txt, canonical URLs and Open Graph image for SEO
- Static prerendering of all pages
- Smooth page transitions
- Back-to-top button
- Imprint & privacy policy page

### Pages

- **Home** – Introduction with portrait and bio
- **About** – Professional background, working style, personal qualities
- **Projects** – Project showcase with descriptions and links
- **Tech-Stack** – Categorized overview of technologies
- **Contact** – Contact form, email button and social media links
- **Imprint** – Legal information and privacy policy

### Local development

```bash
bun install
bun run dev       # http://localhost:3000
bun run lint
bun run build
```

---

[Deutsch]

## Persönliches Portfolio von Danny Köhler-Poetsch – Frontendentwickler aus Leipzig.

Ursprünglich im September 2024 mit React erstellt, wurde das Portfolio seitdem auf Next.js 16 (App Router) migriert und wird kontinuierlich weiterentwickelt. Es gibt Einblick in meine Projekte, meinen Tech-Stack und meinen beruflichen Hintergrund.

### Tech-Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Sprache:** JavaScript
- **Styling:** CSS Modules, CSS Custom Properties
- **UI-Primitive:** Radix UI (Accordion, Switch, Dialog, Popover)
- **Icons:** react-icons (Font Awesome 6)
- **Deployment:** Vercel
- **Paketmanager:** Bun
- **Qualitätssicherung:** ESLint (Flat Config), GitHub Actions CI

### Features

- Responsives Design für alle Viewports
- Dark Mode / Light Mode mit gespeicherter Einstellung ohne Flash vor der Hydration
- Zweisprachige Inhalte (Deutsch / Englisch) mit passendem `lang`-Attribut
- Sticky Header mit Settings-Panel als Radix Popover (Escape, Fokus-Falle, Fokus-Rückgabe)
- Tastaturbedienbare Projekt-Lightbox auf Basis von Radix Dialog
- Akkordeon-Komponenten mit Alle auf-/zuklappen
- Skip-Link und sichtbare Fokus-Ringe
- Kontaktformular mit clientseitiger Validierung (über Formspree)
- Dynamische Sitemap und robots.txt, canonical URLs und Open-Graph-Bild für SEO
- Statisches Prerendering aller Seiten
- Sanfte Seitenübergänge
- Back-to-Top-Button
- Impressum & Datenschutz

### Seiten

- **Home** – Vorstellung mit Portrait und Kurzbiografie
- **Über mich** – Beruflicher Hintergrund, Arbeitsweise, persönliche Eigenschaften
- **Projekte** – Projektübersicht mit Beschreibungen und Links
- **Tech-Stack** – Kategorisierte Übersicht der Technologien
- **Kontakt** – Kontaktformular, E-Mail-Button und Social-Media-Links
- **Impressum** – Rechtliche Informationen und Datenschutz

### Lokale Entwicklung

```bash
bun install
bun run dev       # http://localhost:3000
bun run lint
bun run build
```
