# Photos

Drop image files into this folder with **exactly these filenames** and they will
appear on the site automatically, no code changes needed. Until a file exists,
its slot renders as an intentional graphic panel (monogram / contour motif), so
the site looks finished either way.

## In place (already on the site)

| Filename                  | Where it appears                        |
| ------------------------- | --------------------------------------- |
| `headshot.jpg`            | Home, below the map, 4:5 portrait frame |
| `clinic.jpg`              | /story, sticky sidebar, 4:5 frame       |
| `capstone-team.jpg`       | /engineering, capstone, landscape       |
| `capstone-presenting.jpg` | /engineering, capstone, tall frame      |
| `surgical.jpg`            | /medicine, surgical first assist, 16:10 |
| `translator.jpg`          | /medicine, medical translator, 16:10    |

## Open slots (drop a file and it appears)

| Filename                          | Where it appears                     | Suggested content                        |
| --------------------------------- | ------------------------------------ | ---------------------------------------- |
| `prints.jpg`                      | /engineering, hospital scale models  | Printed models or printer at work (16:9) |
| `photography/01.jpg` to `06.jpg`  | /hobbies, photography gallery        | Six favorite shots; tiles crop to square (center crop), any orientation works |

## On disk but not displayed (spares)

`portrait-steps.jpg` and `portrait-casual.jpg` are kept here as spare
portraits. They aren't wired to any slot; usable later if a layout spot
opens up (e.g. an About/Contact accent).

## Notes

- `.jpg` extension expected. If you have a `.png`/`.webp`, either rename it or
  update the `src` in the matching page under `src/pages/`.
- The photography gallery reads `photography/01.jpg` through `06.jpg`, zero-
  padded, in display order. Create the `photography/` subfolder on first drop.
  Partial drops are fine: filled tiles show photos, the rest stay contour
  panels.
- Keep files under ~400 KB each (resize to ~1600px on the long edge) so the
  page stays fast.
- After adding photos: `npm run deploy`.
