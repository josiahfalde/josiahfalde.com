import PhotoSlot from "../components/PhotoSlot";
import Reveal from "../components/Reveal";

const STATS = [
  { value: "40+", label: "surgeries first-assisted" },
  { value: "15+", label: "rural clinics served" },
  { value: "NREMT-B", label: "certified EMT" },
  { value: "1st", label: "place capstone design" },
];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction">
      <div className="mx-auto max-w-content px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Pensacola, FL · Haiti · Dominican Republic
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Josiah Falde
            </h1>
            <p className="mt-4 text-xl text-ink-soft sm:text-2xl">
              Mechanical engineer heading into medicine.
            </p>
            <blockquote className="mt-7 max-w-xl border-l-2 border-copper pl-5 font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
              “Engineering gave me the foundation; medicine gives it a
              purpose.”
            </blockquote>
            <p className="mt-7 max-w-xl leading-relaxed text-ink-soft">
              I’m a mechanical engineering graduate, EMT, and aspiring
              osteopathic physician. I’ve first-assisted in a rural Haitian
              operating room, translated in mobile medical clinics across
              Haiti and the Dominican Republic since 2018, and built the
              offline charting software our clinics carry so patients keep a
              lasting medical record. Currently in a gap year — studying for
              the MCAT and preparing to apply to osteopathic medical schools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#story"
                className="rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Read the story
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper-deep"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="mx-auto w-full max-w-xs lg:max-w-sm">
            <PhotoSlot
              src="./photos/headshot.jpg"
              alt="Portrait of Josiah Falde"
              monogram
              label="18.54° N · 72.31° W"
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>

        <Reveal delay={250}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-raised px-5 py-4">
                <dt className="order-2 text-sm text-ink-soft">{stat.label}</dt>
                <dd className="font-serif text-2xl text-copper-deep sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
