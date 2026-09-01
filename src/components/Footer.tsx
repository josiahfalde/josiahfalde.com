import { Link } from "react-router-dom";
import ROUTES from "../routes.json";

const PAGES = ROUTES.filter((r) => r.path !== "/");

export default function Footer() {
  return (
    <footer className="mt-24 bg-raised/70 print:hidden">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl tracking-tight text-navy">Josiah Falde</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
            Mechanical engineer heading into medicine. Pensacola, Florida; Haiti;
            the Dominican Republic.
          </p>
        </div>
        <nav aria-label="Pages">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {PAGES.map((p) => (
              <li key={p.path}>
                <Link to={p.path} className="text-ink-soft transition-colors hover:text-ink">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="mailto:josiahfalde@proton.me"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              josiahfalde@proton.me
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/josiah-falde-1a6137254/"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://parakaleo.com" className="text-ink-soft transition-colors hover:text-ink">
              Parakaleo International
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-content px-5 pb-8 text-xs text-ink-faint sm:px-8">
        &copy; {new Date().getFullYear()} Josiah Falde
      </div>
    </footer>
  );
}
