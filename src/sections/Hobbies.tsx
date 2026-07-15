import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

/** Drop-in contract: public/photos/photography/01.jpg … 06.jpg */
const FRAMES = ["01", "02", "03", "04", "05", "06"];

export default function Hobbies() {
  return (
    <Section
      id="hobbies"
      eyebrow="05 · Hobbies"
      title="Off the clock"
      lead="Away from the clinics and the CAD files, two habits stick: a camera and a piano."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h3 className="font-serif text-2xl tracking-tight">Photography</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A camera comes along almost everywhere I go. Six favorite frames
              live here, and they rotate as new ones earn the spot.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="font-serif text-2xl tracking-tight">Piano</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The other standing habit — sitting down at the piano and
              recording the pieces I keep coming back to.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {FRAMES.map((n) => (
              <li key={n}>
                <PhotoSlot
                  src={`./photos/photography/${n}.jpg`}
                  alt={`Photography by Josiah Falde — frame ${n} of 6`}
                  label={`${n} / 06`}
                  className="aspect-square"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
