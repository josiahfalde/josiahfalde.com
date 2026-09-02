import PageHeader from "../components/PageHeader";

type Entry = {
  when: string;
  title: string;
  where?: string;
  items?: string[];
  body?: string;
};

const CLINICAL: Entry[] = [
  {
    when: "Summer 2024",
    title: "Surgical First Assist",
    where: "Emmanuel Medical Center, Haiti",
    items: [
      "First assist in 40+ surgeries: hernia repairs, lipoma removals, and a laparotomy with bowel resection",
      "Prepared surgical tools, sutured incisions, and managed post-operative transitions",
      "Adapted to a resource-limited operating room in rural Haiti",
    ],
  },
  {
    when: "2018 to present",
    title: "Medical Translator",
    where: "Rural mobile clinics, Haiti and the Dominican Republic",
    items: [
      "Translated in Haitian Creole for physicians, PAs, and NPs across 15+ clinics",
      "Facilitated consultations, diagnoses, and treatment plans between patients and providers",
    ],
  },
  {
    when: "Pensacola, FL",
    title: "Clinical Shadowing",
    where: "Baptist Healthcare",
    body: "30 hours shadowing Dr. Matthew Butters.",
  },
];

const ENGINEERING: Entry[] = [
  {
    when: "2025 to 2026",
    title: "Senior Capstone: Off-Grid Home",
    where: "Pensacola Christian College",
    items: [
      "Led the team that designed a fully off-grid home: generation, storage, and systems integration",
      "Awarded first place among capstone projects",
    ],
  },
  {
    when: "Aug 2024 to May 2025",
    title: "Competition Vehicle, Electrical System",
    where: "Team design project",
    items: [
      "Designed the electrical system end to end: battery configuration, wiring layout, safety features",
      "Ran motor and battery trade studies against cost, performance, and energy density to meet budget",
      "Integrated the system into the chassis with mechanical and structural teams; tested and troubleshot for competition reliability",
    ],
  },
  {
    when: "Summer 2025",
    title: "Hospital Scale Models",
    where: "Haiti",
    body: "Modeled the hospital under construction in the mountains of Haiti in SolidWorks and 3D-printed scale replicas.",
  },
];

const PROJECTS: Entry[] = [
  {
    when: "In use",
    title: "ParakaleoMMC",
    body: "Offline-first medical charting for mobile clinics: iPads on a local Raspberry Pi server, fully functional with no internet. Gives clinic patients a lasting medical record. Built with a nurse and a cybersecurity specialist.",
  },
  {
    when: "Live",
    title: "Flywheel",
    body: "Options-trading analytics web app for a Wheel-strategy portfolio: position tracking, benchmarks, performance analysis.",
  },
  {
    when: "Ongoing",
    title: "Website design and hosting",
    body: "Design, build, and host websites for small home-service businesses.",
  },
];

function Block({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <section aria-label={heading} className="break-inside-avoid">
      <h2 className="font-serif text-2xl tracking-tight text-navy print:text-xl">{heading}</h2>
      <div className="mt-5 space-y-7 print:mt-3 print:space-y-4">
        {entries.map((e) => (
          <article key={e.title} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6 print:grid-cols-[8rem_1fr]">
            <p className="text-sm text-ink-faint sm:pt-0.5">{e.when}</p>
            <div>
              <h3 className="font-medium">{e.title}</h3>
              {e.where && <p className="text-sm text-ink-faint">{e.where}</p>}
              {e.body && <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{e.body}</p>}
              {e.items && (
                <ul className="mt-1.5 space-y-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {e.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-navy" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Side({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section aria-label={heading}>
      <h2 className="font-serif text-lg tracking-tight text-navy">{heading}</h2>
      <div className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default function Resume() {
  return (
    <>
      <div className="print:hidden">
        <PageHeader
          mark="flag"
          title="Resume"
          lead="Mechanical engineering graduate and EMT, preparing to apply to osteopathic medical schools."
        >
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-6 text-sm font-medium text-navy transition-colors hover:text-ink"
          >
            Print this page
          </button>
        </PageHeader>
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8 print:max-w-none print:px-0">
        <header className="hidden print:block">
          <h1 className="font-serif text-3xl tracking-tight">Josiah Falde</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Mechanical engineering graduate, EMT. josiahfalde@proton.me. josiahfalde.com
          </p>
        </header>

        <div className="grid gap-14 lg:grid-cols-[1fr_16rem] lg:gap-20 print:mt-6 print:grid-cols-[1fr_12rem] print:gap-10">
          <div className="space-y-14 print:space-y-8">
            <section aria-label="Education" className="break-inside-avoid">
              <h2 className="font-serif text-2xl tracking-tight text-navy print:text-xl">Education</h2>
              <article className="mt-5 grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6 print:mt-3 print:grid-cols-[8rem_1fr]">
                <p className="text-sm text-ink-faint sm:pt-0.5">2022 to 2026</p>
                <div>
                  <h3 className="font-medium">B.S. Mechanical Engineering</h3>
                  <p className="text-sm text-ink-faint">
                    Pensacola Christian College, ABET-accredited. Graduated May 2026.
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                    Passed the Fundamentals of Engineering (FE) exam. First-place senior capstone.
                  </p>
                </div>
              </article>
            </section>
            <Block heading="Clinical experience" entries={CLINICAL} />
            <Block heading="Engineering experience" entries={ENGINEERING} />
            <Block heading="Projects" entries={PROJECTS} />
          </div>

          <aside className="space-y-8 lg:pt-1 print:space-y-5">
            <Side heading="Certifications">
              <p>NREMT-B, Emergency Medical Technician (RC Health Services, 2024)</p>
              <p className="mt-1">FE exam, passed</p>
            </Side>
            <Side heading="Skills">
              <p>SolidWorks, AutoCAD, 3D printing, MATLAB</p>
              <p className="mt-1">Solar panel installation, construction and renovation</p>
            </Side>
            <Side heading="Languages">
              <p>English, Haitian Creole</p>
            </Side>
            <Side heading="Service">
              <p>
                Medical missions with{" "}
                <a href="https://parakaleo.com" className="text-navy hover:text-ink print:text-ink">
                  Parakaleo International
                </a>
                , Haiti and the Dominican Republic, since 2018
              </p>
            </Side>
            <Side heading="Contact">
              <p>
                <a href="mailto:josiahfalde@proton.me" className="text-navy hover:text-ink print:text-ink">
                  josiahfalde@proton.me
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="https://www.linkedin.com/in/josiah-falde-1a6137254/"
                  className="text-navy hover:text-ink print:text-ink"
                >
                  LinkedIn
                </a>
              </p>
            </Side>
          </aside>
        </div>
      </div>
    </>
  );
}
