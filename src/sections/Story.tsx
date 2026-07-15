import Section from "../components/Section";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

const CHAPTERS = [
  {
    year: "2021",
    title: "The earthquake",
    body: "I grew up around my family’s ministry in southern Haiti, so when a major earthquake struck in 2021, the losses had names. Sitting at the funeral of two children killed in their home, I ran into the hard limit of what any one person can fix — and decided that the one thing always within my power is whether I walk toward suffering or away from it. That conviction came before any interest in medicine, and it still sits underneath everything on this page.",
  },
  {
    year: "2024",
    title: "The operating room",
    body: "My family’s ministry helped rebuild a hospital near our home. Out of curiosity I asked the general surgeon if I could watch a procedure; instead, he handed me a gown and told me to scrub in. One case became a summer: forty-plus surgeries as first assist — retracting for hernia repairs, assisting lipoma removals, a laparotomy with bowel resection — in an operating room that made do with what it had. That summer reframed the conviction: showing up isn’t enough. I wanted the skill to be genuinely useful.",
  },
  {
    year: "2023–2025",
    title: "The clinics",
    body: "Across three summers I translated in more than fifteen rural mobile clinics in Haiti and the Dominican Republic, sitting between patients and the physicians, PAs, and NPs treating them. From that seat you notice the system problems: paper charts that vanish between visits, patients with no medical history at all. So I treated it like an engineering problem — and with my sister, a nurse, and my brother, a cybersecurity specialist, built ParakaleoMMC, an offline charting system those clinics now use.",
  },
  {
    year: "Now",
    title: "The gap year",
    body: "I graduated with my B.S. in Mechanical Engineering in May 2026. This year I’m studying for the MCAT and preparing to apply to osteopathic medical schools, while continuing medical missions work in Haiti and the Dominican Republic. The goal hasn’t changed since that funeral: step into suffering, and be useful in it.",
  },
];

export default function Story() {
  return (
    <Section
      id="story"
      eyebrow="01 · The story"
      title="From a rebuilt hospital to a calling"
      lead="Why a mechanical engineer is heading to medical school — the short version."
    >
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <ol className="relative space-y-12 border-l border-line pl-8">
          {CHAPTERS.map((chapter, i) => (
            <li key={chapter.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.315rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-copper bg-paper"
              />
              <Reveal delay={i * 80}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
                  {chapter.year}
                </p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight sm:text-2xl">
                  {chapter.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                  {chapter.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={200} className="lg:sticky lg:top-24 lg:self-start">
          <PhotoSlot
            src="./photos/clinic.jpg"
            alt="Josiah speaking into a microphone at an outdoor gathering under a tarp-roofed shelter"
            label="Southern Haiti"
            className="aspect-[4/5] w-full"
          />
          <p className="mt-3 text-sm text-ink-faint">
            Speaking at an outdoor gathering — the ministry work that sits
            underneath the hospital, the OR, and the clinics.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
