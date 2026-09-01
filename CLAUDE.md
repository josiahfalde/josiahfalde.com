# josiahfalde.com

Personal site for Josiah Falde: mechanical engineering graduate, EMT, aspiring
osteopathic physician. Multi-page (since 2026-09-01). The unifying narrative is
"engineer heading into medicine"; the thesis line ("Engineering gave me the
foundation; medicine gives it a purpose.") is the one sentence deliberately
shared with his AACOMAS personal statement. Do NOT copy any other sentence from
that essay onto this site.

## Stack and commands

- Vite + React 18 + TypeScript + Tailwind CSS 3 + react-router-dom 7. Static,
  no backend, no analytics, no webfonts.
- `npm run dev` dev server (client routing works out of the box)
- `npm run build` = `tsc && vite build && node scripts/postbuild.mjs`. The
  postbuild step writes `dist/<route>/index.html` for every entry in
  `src/routes.json` with that page's title/description/canonical/OG baked in,
  plus `dist/404.html`, so GitHub Pages serves every page with a 200.
- `npm run deploy` builds then publishes `dist/` to the `gh-pages` branch
  (apex domain via `public/CNAME`). Only deploy when the owner says to.

## Structure

```
index.html             base meta/OG tags (rewritten per route at build), pre-paint theme script
scripts/postbuild.mjs  per-route static HTML + 404.html
public/
  CNAME, favicon.svg, og.png
  photos/              drop-in photo slots, see photos/README.md
  work/                screenshots of live sites and apps (1600x1000 jpg; phone shots 780x1688)
src/
  routes.json          THE route manifest: path, nav name, mark, title, description, blurb.
                       Nav, Footer, home Index legend, Seo, NotFound and postbuild all read it.
  data/contours.ts     generated contour paths (see Signature below); do not hand-edit
  index.css            design tokens (CSS vars), reveal motion, print styles
  App.tsx              routes: / story medicine engineering projects websites hobbies resume contact
                       (/sites redirects to /projects; * = NotFound)
  components/          Nav (desktop links + phone Menu panel), Footer, PageHeader, Mark (symbol set),
                       Contour (the map), PhotoSlot, SiteCard (+ Ext arrow), Reveal, Seo, ThemeToggle
  pages/               one file per route; content lives inline
```

Adding a page: add an entry to `src/routes.json`, a file in `src/pages/`, and
a `<Route>` in `App.tsx`. Everything else picks it up.

## Design system

- **Signature**: a real topographic map. `src/data/contours.ts` holds 100 m
  contours of the Massif de la Hotte (southern Haiti, Pic Macaya area) derived
  from SRTM 30 m elevations via OpenTopoData; index contours every 500 m.
  It fills the home hero (fading out at the bottom) and stands in for missing
  photos in `PhotoSlot`. Regenerate only if the window changes.
- **Marks**: `Mark.tsx` is the site's own symbol set (summit, station,
  structure, cairn, hex, viewpoint, flag, pin), one per page, drawn like survey
  marks. No icon packs.
- **Palette** (CSS vars in `src/index.css`, RGB triplets consumed by Tailwind
  as `paper/raised/ink/ink-soft/ink-faint/line/copper/copper-deep/navy`): warm
  paper + ink, blueprint navy `#1D3A57`, copper `#C0764D` / text-safe
  `#9A4F2B`. Dark theme is a warm charcoal (`#161411`), navy becomes steel blue.
  Use token classes only, never hex, so both themes stay correct.
- **Type**: system serif stack (Iowan Old Style / Palatino / Georgia) for
  display, system sans for body, monospace only for genuine data (dates,
  places, the map caption, schematic labels). No tracked-out uppercase labels.
- **Surfaces**: no hairline-bordered cards, no pill chips, no dividers as
  decoration. Structure comes from spacing, tonal `bg-raised` panels, and the
  screenshots themselves (`SiteCard`: crisp `ring-ink/10` edge + one tight
  navy-tinted downward shadow).
- **Motion**: `Reveal` slides up on scroll (translate only; content is always
  visible), disabled under `prefers-reduced-motion`.
- **Print**: `/resume` prints as a plain document (`@media print` in index.css,
  `print:` classes in Resume.tsx).
- Design law: `~/.claude/CLAUDE.md` (anti-slop). Check new work against it.

## Content rules (owner's explicit choices)

- Contact = `josiahfalde@proton.me` + LinkedIn ONLY on personal pages. Never
  street address, GPA, GitHub links, or resume PDFs. The one exception: the
  phone number `(443) 402-7171` appears on `/websites` for the web business.
- Status phrasing: "gap year, studying for the MCAT and preparing to apply to
  osteopathic medical schools". No application-cycle specifics or test dates.
- Drone delivery is a clearly labeled future aspiration, not a project.
- Facts only from his resumes and his corrections. Do not invent numbers.
- No em dashes anywhere in copy. Plain, factual, middle register.
- `/websites`: "Live" only for paying customers (Code 3). Prospect previews are
  labeled "Preview build". Add each new live customer site there and to
  `public/work/`.
