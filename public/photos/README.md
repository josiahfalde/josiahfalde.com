# Photos

Drop image files into this folder with **exactly these filenames** and they will
appear on the site automatically — no code changes needed. Until a file exists,
its slot renders as an intentional graphic panel (monogram / contour motif), so
the site looks finished either way.

| Filename           | Where it appears                  | Suggested content                          |
| ------------------ | --------------------------------- | ------------------------------------------ |
| `headshot.jpg`     | Hero (top of page)                | Professional headshot                      |
| `surgical.jpg`     | Clinical → Surgical First Assist  | OR / surgical team photo, Haiti            |
| `clinic.jpg`       | Clinical → Medical Translator     | Mobile clinic / translating photo          |
| `parakaleo.jpg`    | Projects → ParakaleoMMC           | App in use at a clinic (iPad / Pi setup)   |
| `prints.jpg`       | Projects → Hospital 3D prints     | Printed parts or printer at work           |
| `haiti.jpg`        | Story section                     | Haiti — hospital, landscape, or ministry   |

Notes

- `.jpg` extension expected. If you have a `.png`/`.webp`, either rename it or
  update the `src` in the matching component under `src/sections/`.
- Landscape orientation works best everywhere except `headshot.jpg`, which is
  displayed in a 4:5 portrait frame.
- Keep files under ~400 KB each (resize to ~1600px on the long edge) so the
  page stays fast.
- After adding photos: `npm run deploy`.
