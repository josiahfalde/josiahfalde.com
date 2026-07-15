import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

const SKILLS = [
  "SolidWorks",
  "AutoCAD",
  "3D printing",
  "MATLAB",
  "Solar panel installation",
  "Construction & renovation",
];

export default function Engineering() {
  return (
    <Section
      id="engineering"
      eyebrow="03 · Engineering"
      title="Trained to think in systems"
      lead="A B.S. in Mechanical Engineering, and the projects that put it to work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="h-full rounded-xl border border-line bg-raised p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              2022–2026 · Pensacola Christian College
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              B.S. Mechanical Engineering
            </h3>
            <p className="mt-1 text-sm text-ink-faint">
              ABET-accredited · graduated May 2026
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-line p-5">
                <h4 className="font-medium">Capstone — 1st place</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Led the team that designed a fully off-grid home —
                  generation, storage, and systems integration — awarded first
                  place among capstone projects.
                </p>
              </div>
              <div className="rounded-lg border border-line p-5">
                <h4 className="font-medium">FE Exam — passed</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Passed the Fundamentals of Engineering exam, the first step
                  toward professional licensure.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-[5fr_3fr] gap-3 sm:gap-4">
              <PhotoSlot
                src="./photos/capstone-team.jpg"
                alt="The eight-person capstone team, Section GR-8, in suits holding first-place certificates"
                label="Section GR-8"
                className="aspect-[4/3]"
              />
              <PhotoSlot
                src="./photos/capstone-presenting.jpg"
                alt="Josiah presenting the capstone project's financial and power budget allocations"
                label="Defense"
                imgClassName="object-[center_40%]"
                className="h-full"
              />
            </div>
            <p className="mt-3 text-sm text-ink-faint">
              Section GR-8 with the first-place result — and the final
              presentation of the off-grid home&rsquo;s budget allocations.
            </p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="h-full rounded-xl border border-line bg-raised p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              Toolbox
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">Skills</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <article className="rounded-xl border border-line bg-raised p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
              Aug 2024 – May 2025 · Team design project
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight">
              Competition vehicle — electrical system
            </h3>
            <div className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              <p className="leading-relaxed text-ink-soft">
                Designed the vehicle’s electrical system end to end: battery
                configuration, wiring layout, and safety features. Ran motor
                and battery trade studies against cost, performance, and
                energy density to hit a hard budget.
              </p>
              <p className="leading-relaxed text-ink-soft">
                Worked across mechanical and structural teams to integrate the
                electrical system into the chassis, then tested and
                troubleshot the assembled system for competition reliability.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
