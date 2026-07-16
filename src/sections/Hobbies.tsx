import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

/** Drop-in contract: public/photos/photography/01.jpg … 06.jpg.
 *  01 is the featured shot — it spans a 2×2 block in the grid. */
const FRAMES: {
  n: string;
  alt: string;
  featured?: boolean;
  /** object-position override to keep the shot's composition centered */
  pos?: string;
}[] = [
  { n: "01", featured: true, alt: "Sunrise over the Haitian coast — a boat cutting toward cliffs", pos: "object-[10%_center]" },
  { n: "02", alt: "Overlook above a canyon" },
  { n: "03", alt: "Aerial of a fishing pier at sunrise, Pensacola Beach", pos: "object-[15%_center]" },
  { n: "04", alt: "Weathered piano keys in low light" },
  { n: "05", alt: "Golden-hour portrait through a window" },
  { n: "06", alt: "Coastal homes on a cliff at dusk" },
];

export default function Hobbies() {
  return (
    <Section
      id="hobbies"
      eyebrow="05 · Hobbies"
      title="Off the clock"
      lead="Three constants outside the work: photography, piano, and espresso."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h3 className="font-serif text-2xl tracking-tight">Photography</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A camera comes along on most of these trips — and everywhere
              else. These six are current favorites; they&rsquo;ll change as
              better shots replace them.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="font-serif text-2xl tracking-tight">Piano</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The slowest of the three. I learn pieces I love and record them
              once they&rsquo;re ready.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h3 className="font-serif text-2xl tracking-tight">Espresso</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Making espresso — dialing in grind, dose, and time until the
              shot pulls right.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {FRAMES.map((f) => (
              <li key={f.n} className={f.featured ? "col-span-2 row-span-2" : ""}>
                <PhotoSlot
                  src={`./photos/photography/${f.n}.jpg`}
                  alt={f.alt}
                  label={`${f.n} / 06`}
                  imgClassName={f.pos ?? ""}
                  className={f.featured ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-square"}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
