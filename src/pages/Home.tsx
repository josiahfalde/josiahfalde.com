import { Link } from "react-router-dom";
import ROUTES from "../routes.json";
import Contour from "../components/Contour";
import Mark, { type MarkName } from "../components/Mark";
import PhotoSlot from "../components/PhotoSlot";
import Reveal from "../components/Reveal";
import SiteCard from "../components/SiteCard";

const LEGEND = ROUTES.filter((r) => r.path !== "/" && r.path !== "/contact");

const STATS = [
  { value: "40+", label: "surgeries first-assisted" },
  { value: "15+", label: "rural clinics served" },
  { value: "NREMT-B", label: "certified EMT" },
  { value: "1st", label: "place capstone design" },
];

export default function Home() {
  return (
    <>
      {/* Hero: the map owns the first screen. */}
      <section aria-label="Introduction" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 text-navy [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
        >
          <Contour className="h-full w-full" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-content items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Josiah Falde
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-snug text-ink-soft sm:text-2xl">
              Mechanical engineer heading into medicine.
            </p>
            <p className="mt-8 max-w-md font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
              &ldquo;Engineering gave me the foundation; medicine gives it a purpose.&rdquo;
            </p>
          </div>

          <nav
            aria-label="Site index"
            className="rounded-lg bg-raised/85 p-2 ring-1 ring-raised backdrop-blur-sm dark:ring-line"
          >
            <p className="px-3 pb-1 pt-2 font-serif text-sm italic text-ink-faint">Index</p>
            <ul>
              {LEGEND.map((r) => (
                <li key={r.path}>
                  <Link
                    to={r.path}
                    className="group flex items-center gap-3.5 rounded-md px-3 py-2.5 transition-colors hover:bg-paper"
                  >
                    <Mark name={r.mark as MarkName} className="text-navy" />
                    <span className="font-serif text-lg leading-none tracking-tight text-ink transition-colors group-hover:text-copper-deep">
                      {r.name}
                    </span>
                    <span className="ml-auto hidden text-right text-sm text-ink-faint sm:inline">{r.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="pointer-events-none absolute bottom-4 right-5 hidden items-center gap-3 font-mono text-[11px] text-ink-faint sm:right-8 md:flex">
          <span aria-hidden="true" className="inline-block h-px w-16 bg-ink-faint/70" />
          Massif de la Hotte, Haiti. 100 m contours from 30 m SRTM.
        </p>
      </section>

      {/* Who */}
      <section aria-label="About" className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <PhotoSlot
              src="/photos/headshot.jpg"
              alt="Portrait of Josiah Falde"
              className="aspect-[4/5] w-full max-w-sm"
            />
          </Reveal>
          <Reveal delay={100} className="lg:pt-6">
            <p className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
              I&rsquo;m a mechanical engineering graduate, EMT, and aspiring osteopathic
              physician.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              I&rsquo;ve first-assisted in a rural Haitian operating room, translated in mobile
              medical clinics across Haiti and the Dominican Republic since 2018, and built the
              offline charting software our clinics carry so patients keep a lasting medical
              record. Currently in a gap year, studying for the MCAT and preparing to apply to
              osteopathic medical schools.
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dd className="whitespace-nowrap font-serif text-3xl tracking-tight text-copper-deep">{s.value}</dd>
                  <dt className="mt-1 text-sm leading-snug text-ink-soft">{s.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/story"
                className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                Read the story
              </Link>
              <Link
                to="/resume"
                className="text-sm font-medium text-copper-deep transition-colors hover:text-ink"
              >
                See the resume
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Currently building */}
      <section aria-label="Current work" className="mx-auto mt-28 max-w-content px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl tracking-tight sm:text-4xl">
            Three things I&rsquo;m building right now.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Reveal>
            <SiteCard
              src="/work/flywheel.jpg"
              alt="Flywheel dashboard: realized premium, win rate, and cumulative premium chart"
              name="Flywheel"
              meta="Options analytics, live"
              href="/projects"
            >
              Tracks a Wheel-strategy options portfolio: premium, wheels, benchmarks.
            </SiteCard>
          </Reveal>
          <Reveal delay={80}>
            <SiteCard
              src="/work/code3.jpg"
              alt="Homepage of Code 3 Property Solutions, Mobile, Alabama"
              name="Websites for small businesses"
              meta="Code 3 Property Solutions, Mobile, AL"
              href="/websites"
            >
              Design and hosting for home-service companies. Free preview first.
            </SiteCard>
          </Reveal>
          <Reveal delay={160}>
            <SiteCard
              src="/work/farescout.jpg"
              alt="FareScout: Europe and Asia flight fares priced in Chase points"
              name="FareScout"
              meta="Flight-deal scanner, live"
              href="/projects"
            >
              Every route, every day, priced in cash and transfer-partner points.
            </SiteCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
