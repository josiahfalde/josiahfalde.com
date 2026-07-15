# josiahfalde.com

Personal portfolio/resume site for Josiah Falde — mechanical engineering
graduate, EMT, aspiring osteopathic physician. Single scrolling page. The
unifying narrative is "engineer heading into medicine"; the thesis line
("Engineering gave me the foundation; medicine gives it a purpose.") is the
one sentence deliberately shared with his AACOMAS personal statement — do NOT
copy any other sentences from that essay onto this site.

## Stack & commands

- Vite + React 18 + TypeScript + Tailwind CSS 3 (same stack as FlywheelTrades
  so both stay maintainable together). Static SPA, no backend, no analytics.
- `npm run dev` — dev server
- `npm run build` — `tsc && vite build` (type-check + bundle to `dist/`)
- `npm run deploy` — build then publish `dist/` to the `gh-pages` branch
  (GitHub Pages, apex domain via `public/CNAME` = `josiahfalde.com`)

## Structure

```
index.html              meta/OG tags, pre-paint theme script
public/
  CNAME, favicon.svg, og.png
  photos/               drop-in photo slots — see photos/README.md for filenames
src/
  index.css             design tokens (CSS vars) + base styles
  App.tsx               section order: Hero → Story → Clinical → Engineering → Projects → Contact
  components/           Nav (scroll-spy), ThemeToggle, Section, Reveal, PhotoSlot
  sections/             one file per page section; content lives inline in these
```

## Design system

- **Palette** (CSS variables in `src/index.css`, RGB triplets consumed by
  Tailwind as `paper/raised/ink/ink-soft/ink-faint/line/copper/copper-deep/navy`):
  warm paper + ink neutrals, **blueprint navy** `#1D3A57` (engineering) and
  **copper** `#C0764D` / text-safe `#9A4F2B` (hands-on warmth). Dark theme
  flips every token (navy becomes steel blue `#8FB0CD`); components should use
  token classes only — never hardcode hex — so both themes stay correct.
  `copper-deep` is the AA-contrast accent for text; `copper` is decorative.
- **Type**: serif display stack (Iowan Old Style / Palatino / Georgia) for
  headings and pull-quotes; system sans for body; monospace for eyebrow
  labels. No webfonts — zero font bytes.
- **Motifs**: contour-line SVG panels (terrain/engineering-drawing feel) stand
  in for missing photos via `PhotoSlot`, which auto-swaps to the real image
  when the file exists in `public/photos/`. Keep placeholders looking
  intentional, never "image coming soon".
- **Motion**: `Reveal` fade-up on scroll + CSS smooth scrolling, both fully
  disabled under `prefers-reduced-motion`.
- Theme: `dark` class on `<html>`, set pre-paint in `index.html`, persisted to
  `localStorage("theme")`, defaults to `prefers-color-scheme`.

## Content rules (owner's explicit choices)

- Contact = email `josiahfalde@proton.me` + LinkedIn ONLY. Never publish
  phone, street address, GPA, GitHub links, or the resume PDFs.
- Status phrasing: "gap year — studying for the MCAT and preparing to apply to
  osteopathic medical schools". No application-cycle specifics or test dates.
- Drone delivery is a clearly-labeled future aspiration, not a project.
- Facts only from his resumes/personal statement — do not invent numbers.
