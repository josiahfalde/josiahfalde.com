import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ROUTES from "../routes.json";
import Mark, { type MarkName } from "./Mark";
import ThemeToggle from "./ThemeToggle";

const PAGES = ROUTES.filter((r) => r.path !== "/");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/90 backdrop-blur-md transition-shadow print:hidden ${
        scrolled || open ? "shadow-[0_1px_0_rgb(var(--c-line))]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-content items-center gap-2 px-5 sm:px-8">
        <Link
          to="/"
          className="mr-auto font-serif text-lg tracking-tight text-navy"
          aria-label="Josiah Falde, home"
        >
          Josiah Falde
        </Link>

        <nav aria-label="Pages" className="hidden items-center gap-0.5 md:flex">
          {PAGES.map((p) => (
            <NavLink
              key={p.path}
              to={p.path}
              className={({ isActive }) =>
                `rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  isActive ? "font-medium text-ink" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {p.name}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="rounded-md px-2 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="site-menu"
          aria-label="Pages"
          className="mx-auto max-w-content px-5 pb-5 pt-1 sm:px-8 md:hidden"
        >
          <ul className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 sm:gap-x-8">
            {PAGES.map((p) => (
              <li key={p.path}>
                <NavLink
                  to={p.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-md px-2 py-2.5 ${
                      isActive ? "text-ink" : "text-ink-soft"
                    }`
                  }
                >
                  <Mark name={p.mark as MarkName} className="text-navy" />
                  <span className="font-serif text-lg">{p.name}</span>
                  <span className="ml-auto hidden text-xs text-ink-faint min-[420px]:inline">{p.blurb}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
