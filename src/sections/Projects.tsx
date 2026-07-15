import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Things I’ve built"
      lead="Where the engineering and the medicine actually meet."
      raised
    >
      {/* Flagship: ParakaleoMMC */}
      <Reveal>
        <article className="overflow-hidden rounded-xl border border-line bg-paper lg:grid lg:grid-cols-[1.2fr_1fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              Flagship · In use in our mobile clinics
            </p>
            <h3 className="mt-2 font-serif text-3xl tracking-tight">
              ParakaleoMMC
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              An offline-first medical charting system for rural mobile
              clinics: iPads talking to a Raspberry Pi local server, fully
              functional with zero internet. Built with my sister, a nurse,
              and my brother, a cybersecurity specialist.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              It exists because I&rsquo;ve translated in those clinics since
              2018 and saw patients arrive with no record of their own
              history. It travels with the mobile clinics we bring to rural
              Haiti and the Dominican Republic — giving patients a lasting
              medical history for the first time, so care can build from one
              visit to the next.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["Offline-first", "iPad + Raspberry Pi", "Local server", "Field-deployed"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft"
                  >
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </div>
          <PhotoSlot
            src="./photos/parakaleo.jpg"
            alt="ParakaleoMMC charting app in use at a mobile clinic"
            label="Clinic charting · offline"
            className="min-h-56 rounded-none border-0 border-t border-line lg:border-l lg:border-t-0"
          />
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Reveal delay={80}>
          <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              Live · Web app
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              Flywheel
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
              An options-trading analytics app I built and run — position
              tracking, benchmarks, and performance analysis for a
              wheel-strategy portfolio.
            </p>
            <a
              href="https://flywheel.josiahfalde.com"
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-copper-deep hover:underline"
            >
              flywheel.josiahfalde.com
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" />
              </svg>
            </a>
          </article>
        </Reveal>

        <Reveal delay={140}>
          <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper">
            <PhotoSlot
              src="./photos/prints.jpg"
              alt="3D-printed scale model of the hospital being built in the mountains of Haiti"
              label="Scale model"
              className="aspect-[16/9] rounded-none border-0 border-b border-line"
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
                Summer 2025 · Haiti
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">
                Hospital scale models
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Modeled the hospital being built in the mountains of Haiti in
                SolidWorks, then 3D-printed miniature scale replicas of it.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={200}>
          <article className="flex h-full flex-col rounded-xl border border-dashed border-copper/50 bg-paper p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Future aspiration
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              Medical supply drones
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
              A future goal: drone delivery of medical supplies to rural
              Haiti, where reaching patients is often the hardest part of
              care.
            </p>
            <span className="mt-4 inline-flex w-fit items-center rounded-full border border-copper/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-copper-deep">
              On the drawing board
            </span>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
