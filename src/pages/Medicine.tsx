import PageHeader from "../components/PageHeader";
import PhotoSlot from "../components/PhotoSlot";
import Reveal from "../components/Reveal";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
      <span>{children}</span>
    </li>
  );
}

export default function Medicine() {
  return (
    <>
      <PageHeader
        mark="station"
        title="Hands-on medicine in resource-limited settings"
        lead="Surgical first assist, medical translation, EMT certification, and clinical shadowing."
      />

      <div className="mx-auto max-w-content space-y-20 px-5 sm:px-8 sm:space-y-28">
        {/* Surgical first assist */}
        <Reveal>
          <article className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <PhotoSlot
              src="/photos/surgical.jpg"
              alt="Josiah in scrubs assisting during a procedure at Emmanuel Medical Center, Haiti"
              label="Emmanuel Medical Center"
              className="aspect-[16/10]"
            />
            <div className="lg:pt-2">
              <p className="font-mono text-xs text-ink-faint">Summer 2024, Haiti</p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">Surgical first assist</h2>
              <p className="mt-1 text-ink-faint">Emmanuel Medical Center</p>
              <ul className="mt-5 space-y-3 leading-relaxed text-ink-soft">
                <Bullet>
                  First assist in 40+ surgeries: hernia repairs, lipoma removals, and a laparotomy
                  with bowel resection
                </Bullet>
                <Bullet>
                  Prepared surgical tools, sutured incisions, and managed post-operative
                  transitions
                </Bullet>
                <Bullet>Adapted to a resource-limited operating room in rural Haiti</Bullet>
              </ul>
            </div>
          </article>
        </Reveal>

        {/* Medical translator */}
        <Reveal>
          <article className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div className="lg:order-1 lg:pt-2">
              <p className="font-mono text-xs text-ink-faint">
                2018 to present, Haiti and the Dominican Republic
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">Medical translator</h2>
              <p className="mt-1 text-ink-faint">Rural mobile clinics</p>
              <ul className="mt-5 space-y-3 leading-relaxed text-ink-soft">
                <Bullet>
                  Translated in Haitian Creole for physicians, PAs, and NPs across 15+ clinics
                </Bullet>
                <Bullet>
                  Facilitated consultations, diagnoses, and treatment plans between patients and
                  providers
                </Bullet>
                <Bullet>
                  Saw firsthand how paper charts left patients with no lasting medical record, the
                  problem that became ParakaleoMMC
                </Bullet>
              </ul>
            </div>
            <PhotoSlot
              src="/photos/translator.jpg"
              alt="Mobile medical clinic in rural Haiti"
              label="Mobile clinic"
              className="aspect-[16/10] lg:order-2"
            />
          </article>
        </Reveal>

        {/* EMT and shadowing */}
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
            <article>
              <p className="font-mono text-xs text-ink-faint">2024, RC Health Services</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight">
                Emergency Medical Technician
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Nationally registered EMT (NREMT-B), certified through RC Health Services in 2024.
              </p>
            </article>
            <article>
              <p className="font-mono text-xs text-ink-faint">Baptist Healthcare, Pensacola, FL</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight">Clinical shadowing</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                30 hours shadowing Dr. Matthew Butters at Baptist Healthcare in Pensacola.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </>
  );
}
