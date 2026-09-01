import PageHeader from "../components/PageHeader";
import PhotoSlot from "../components/PhotoSlot";
import Reveal from "../components/Reveal";

const SKILLS = [
  "SolidWorks",
  "AutoCAD",
  "3D printing",
  "MATLAB",
  "Solar panel installation",
  "Construction and renovation",
];

export default function Engineering() {
  return (
    <>
      <PageHeader
        mark="structure"
        title="Trained to think in systems"
        lead="A B.S. in Mechanical Engineering, and the projects that put it to work."
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* Degree + capstone */}
        <Reveal>
          <article className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs text-ink-faint">2022 to 2026, Pensacola Christian College</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">B.S. Mechanical Engineering</h2>
              <p className="mt-1 text-ink-faint">ABET-accredited, graduated May 2026</p>

              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="font-serif text-xl tracking-tight">Capstone: first place</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">
                    Led the team that designed a fully off-grid home (generation, storage, and
                    systems integration), awarded first place among capstone projects.
                  </dd>
                </div>
                <div>
                  <dt className="font-serif text-xl tracking-tight">FE exam: passed</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">
                    Passed the Fundamentals of Engineering exam, the first step toward professional
                    licensure.
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <div className="grid grid-cols-[5fr_3fr] gap-3 sm:gap-4">
                <PhotoSlot
                  src="/photos/capstone-team.jpg"
                  alt="The eight-person capstone team, Section GR-8, in suits holding first-place certificates"
                  label="Section GR-8"
                  className="aspect-[4/3]"
                />
                <PhotoSlot
                  src="/photos/capstone-presenting.jpg"
                  alt="Josiah presenting the capstone project's financial and power budget allocations"
                  label="Defense"
                  imgClassName="object-[center_40%]"
                  className="h-full"
                />
              </div>
              <p className="mt-3 text-sm text-ink-faint">
                Section GR-8 with the first-place result, and the final presentation of the
                off-grid home&rsquo;s budget allocations.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Competition vehicle */}
        <Reveal>
          <article className="mt-28 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs text-ink-faint">Aug 2024 to May 2025, team design project</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">
                Competition vehicle: electrical system
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              <p className="leading-relaxed text-ink-soft">
                Designed the vehicle&rsquo;s electrical system end to end: battery configuration,
                wiring layout, and safety features. Ran motor and battery trade studies against
                cost, performance, and energy density to hit a hard budget.
              </p>
              <p className="leading-relaxed text-ink-soft">
                Worked across mechanical and structural teams to integrate the electrical system
                into the chassis, then tested and troubleshot the assembled system for competition
                reliability.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Hospital models */}
        <Reveal>
          <article className="mt-28 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs text-ink-faint">Summer 2025, Haiti</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">Hospital scale models</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Modeled the hospital being built in the mountains of Haiti in SolidWorks, then
                3D-printed miniature scale replicas of it.
              </p>
            </div>
            <PhotoSlot
              src="/photos/prints.jpg"
              alt="3D-printed scale model of the hospital being built in the mountains of Haiti"
              label="Scale model"
              className="aspect-[16/9]"
            />
          </article>
        </Reveal>

        {/* Toolbox */}
        <Reveal>
          <article className="mt-28 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <h2 className="font-serif text-3xl tracking-tight">Toolbox</h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-lg text-ink-soft sm:grid-cols-3">
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </>
  );
}
