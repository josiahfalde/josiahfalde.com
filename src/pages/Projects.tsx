import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SiteCard from "../components/SiteCard";
import ClinicSchematic from "../components/ClinicSchematic";

export default function Projects() {
  return (
    <>
      <PageHeader
        mark="cairn"
        title="Software I build and run"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* Parakaleo EMR */}
        <Reveal>
          <article className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Parakaleo EMR</h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                An offline-first medical charting system for rural mobile clinics: iPads talking to
                a Raspberry Pi local server, fully functional with zero internet. Built with my
                sister, a nurse, and my brother, a cybersecurity specialist.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                It exists because I&rsquo;ve translated in those clinics since 2018 and saw
                patients arrive with no record of their own history. It travels with the mobile
                clinics we bring to rural Haiti and the Dominican Republic, giving patients a
                lasting medical history for the first time, so care can build from one visit to
                the next.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The name comes from{" "}
                <a href="https://parakaleo.com" className="font-medium text-navy hover:text-ink">
                  Parakaleo International
                </a>
                , my family&rsquo;s missions organization behind the clinics. The real system runs
                on the clinic network only, never the public internet.
              </p>
              <p className="mt-5">
                <a
                  href="https://parakaleoemr.josiahfalde.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
                >
                  Try the demo
                </a>
              </p>
            </div>
            <div className="flex items-center rounded-lg bg-raised p-6 sm:p-8">
              <ClinicSchematic />
            </div>
          </article>
        </Reveal>

        {/* Senior design */}
        <Reveal>
          <div className="mt-28 [&_p]:max-w-2xl">
            <SiteCard
              src="/work/gr8-housing.jpg"
              alt="Section Gr-8 Housing site: the house, solar array and shed drawn as an orange, blue and red point cloud"
              name="Section Gr-8 Housing"
              meta="gr8.josiahfalde.com"
              href="https://gr8.josiahfalde.com/"
            >
              My senior design project, where I led ten other engineers through an off-grid house for a
              family of five: under $260,000 and 12 kWh a day. The site turns our Revit models into a
              102,400-point cloud that rebuilds itself into the structural, mechanical and power
              designs, and lights up the parts each engineer designed.
            </SiteCard>
          </div>
        </Reveal>

        {/* Apps */}
        <div className="mt-28 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          <Reveal>
            <SiteCard
              src="/work/flywheel.jpg"
              alt="Flywheel dashboard with realized premium, win rate, annualized yield, and a cumulative premium chart"
              name="Flywheel"
              meta="flywheel.josiahfalde.com"
              href="https://flywheel.josiahfalde.com/"
            >
              Options premium analytics for the Wheel strategy. Import broker history and see
              momentum, yield, wheel cycles, allocation, and a calendar of every trade. I built it
              to run my own portfolio.
            </SiteCard>
          </Reveal>
          <Reveal delay={80}>
            <SiteCard
              src="/work/farescout.jpg"
              alt="FareScout home page with a flight search, fare stats, and a route map"
              name="FareScout"
              meta="farescout-app.vercel.app"
              href="https://farescout-app.vercel.app/"
            >
              Flight-deal scanner for East Coast departures to Europe and Asia. Cash fares
              rescanned twice a day and priced against Chase transfer partners.
            </SiteCard>
          </Reveal>
          <Reveal>
            <SiteCard
              src="/work/macro-tracker.jpg"
              alt="Macro Tracker settings screen on a phone"
              name="Macro Tracker"
              meta="fuel75.vercel.app"
              href="https://fuel75.vercel.app/"
              contain
            >
              Phone-first macro tracker with barcode and nutrition-label scanning. Works offline.
            </SiteCard>
          </Reveal>
          <Reveal delay={80}>
            <SiteCard
              src="/work/vaultfall.jpg"
              alt="Vaultfall title screen"
              name="Vaultfall"
              meta="vaultfall.vercel.app"
              href="https://vaultfall.vercel.app/"
            >
              Four-player co-op browser shooter with proximity voice, built for a few friends.
            </SiteCard>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-20 max-w-2xl text-sm leading-relaxed text-ink-faint">
            On the drawing board, not built: drone delivery of medical supplies to rural Haiti,
            where reaching patients is often the hardest part of care.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-faint">
            I also build websites for small businesses, at{" "}
            <a href="https://josiahfaldeweb.com" className="font-medium text-navy hover:text-ink">
              josiahfaldeweb.com
            </a>
            .
          </p>
        </Reveal>
      </div>
    </>
  );
}
