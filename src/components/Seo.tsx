import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ROUTES from "../routes.json";

const ORIGIN = "https://josiahfalde.com";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps title, description, canonical and OG tags in step with the route,
 *  and scrolls to the top on navigation. The build also bakes these into a
 *  static HTML file per route (scripts/postbuild.mjs) for crawlers. */
export default function Seo() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const route =
      ROUTES.find((r) => r.path === pathname.replace(/\/+$/, "") || (r.path === "/" && pathname === "/")) ??
      ROUTES[0];
    const url = ORIGIN + (route.path === "/" ? "/" : route.path + "/");
    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
