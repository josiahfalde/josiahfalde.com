// After `vite build`: write one static HTML file per route so GitHub Pages
// serves every page with a 200 and its own title/description/OG tags, plus a
// 404.html so unknown paths still load the app (which renders NotFound).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const routes = JSON.parse(readFileSync(new URL("../src/routes.json", import.meta.url), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");
const ORIGIN = "https://josiahfalde.com";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render(route) {
  const url = ORIGIN + (route.path === "/" ? "/" : route.path + "/");
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`);
}

for (const route of routes) {
  const html = render(route);
  if (route.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
  } else {
    const dir = join(dist, route.path.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
}
writeFileSync(join(dist, "404.html"), render(routes[0]));
console.log(`postbuild: wrote ${routes.length} route pages + 404.html`);
