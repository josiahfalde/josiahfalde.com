import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { id: "story", label: "Story" },
  { id: "clinical", label: "Clinical" },
  { id: "engineering", label: "Engineering" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center gap-3 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3"
          aria-label="Josiah Falde — back to top"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-navy font-serif text-sm font-semibold text-paper"
          >
            JF
          </span>
          <span className="hidden font-serif text-lg tracking-tight md:block">
            Josiah Falde
          </span>
        </a>

        <nav
          aria-label="Sections"
          className="nav-scroll ml-auto flex items-center gap-1 overflow-x-auto"
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm transition-colors sm:px-3 ${
                active === link.id
                  ? "font-medium text-copper-deep"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
