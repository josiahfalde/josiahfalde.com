import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

export default function Clinical() {
  return (
    <Section
      id="clinical"
      eyebrow="02 · Clinical"
      title="Hands-on medicine, resource-limited settings"
      lead="Not observation hours — scrubbed in, translating, certified, and accountable."
      raised
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Surgical First Assist */}
        <Reveal>
          <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper">
            <PhotoSlot
              src="./photos/surgical.jpg"
              alt="Operating room at Emmanuel Medical Center, Haiti"
              label="Emmanuel Medical Center"
              className="aspect-[16/9] rounded-none border-0 border-b border-line"
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
                Summer 2024 · Haiti
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">
                Surgical First Assist
              </h3>
              <p className="mt-1 text-sm text-ink-faint">
                Emmanuel Medical Center
              </p>
              <ul className="mt-4 space-y-2.5 text-ink-soft">
                <li className="flex gap-3">
                  <Tick />
                  First assist in 40+ surgeries — hernia repairs, lipoma
                  removals, and a laparotomy with bowel resection
                </li>
                <li className="flex gap-3">
                  <Tick />
                  Prepared surgical tools, sutured incisions, and managed
                  post-operative transitions
                </li>
                <li className="flex gap-3">
                  <Tick />
                  Adapted to a resource-limited operating room, where
                  improvisation is part of the standard of care
                </li>
              </ul>
            </div>
          </article>
        </Reveal>

        {/* Medical Translator */}
        <Reveal delay={100}>
          <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper">
            <PhotoSlot
              src="./photos/translator.jpg"
              alt="Mobile medical clinic in rural Haiti"
              label="Mobile clinic"
              className="aspect-[16/9] rounded-none border-0 border-b border-line"
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
                Summers 2023–2025 · Haiti & Dominican Republic
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">
                Medical Translator
              </h3>
              <p className="mt-1 text-sm text-ink-faint">
                Rural mobile clinics
              </p>
              <ul className="mt-4 space-y-2.5 text-ink-soft">
                <li className="flex gap-3">
                  <Tick />
                  Translated in Haitian Creole for physicians, PAs, and NPs
                  across 15+ clinics
                </li>
                <li className="flex gap-3">
                  <Tick />
                  Facilitated consultations, diagnoses, and treatment plans —
                  the bridge between patient and provider
                </li>
                <li className="flex gap-3">
                  <Tick />
                  Saw the paper-charting bottleneck firsthand — the problem
                  that became ParakaleoMMC
                </li>
              </ul>
            </div>
          </article>
        </Reveal>

        {/* EMT + Shadowing, compact row */}
        <Reveal delay={150}>
          <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              2024 · RC Health Services
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              Emergency Medical Technician
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              NREMT-B certified. Trained for the moments when medicine has to
              happen right now, with whatever is on hand — the same instinct
              the Haitian OR demanded.
            </p>
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
              NREMT-B
            </span>
          </article>
        </Reveal>

        <Reveal delay={200}>
          <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              Baptist Healthcare · Pensacola, FL
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              Clinical Shadowing
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              30 hours shadowing Dr. Matthew Butters — stateside medicine as a
              counterpart to the resource-limited settings abroad: same
              patients, same stakes, different constraints.
            </p>
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
              30 hours
            </span>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

function Tick() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1.5 h-3 w-3 shrink-0 text-copper"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 6.5 5 9.5 10 2.5" />
    </svg>
  );
}
