import { Link } from "react-router-dom";
import ROUTES from "../routes.json";
import Mark, { type MarkName } from "../components/Mark";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-5 pt-16 sm:px-8 sm:pt-24">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Off the map</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        There is no page at this address. Everything that exists is listed below.
      </p>
      <ul className="mt-10 grid gap-2 sm:grid-cols-2">
        {ROUTES.map((r) => (
          <li key={r.path}>
            <Link to={r.path} className="group flex items-center gap-3 py-1.5">
              <Mark name={r.mark as MarkName} className="text-navy" />
              <span className="font-serif text-lg text-ink transition-colors group-hover:text-navy">
                {r.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
