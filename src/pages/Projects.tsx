import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SiteCard from "../components/SiteCard";

/** Field schematic of ParakaleoMMC: tablets on the clinic's own Wi-Fi,
 *  a Raspberry Pi holding the records, sync only when a connection exists. */
function ClinicSchematic() {
  const label = "fill-current font-mono";
  return (
    <svg
      role="img"
      aria-label="Schematic: iPads on the clinic Wi-Fi talk to a Raspberry Pi server in the clinic bag; records sync to the cloud only when internet is available"
      viewBox="0 0 520 280"
      className="h-auto w-full text-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* tablets */}
      {[0, 1, 2].map((i) => {
        const x = 40;
        const y = 44 + i * 70;
        return (
          <g key={i}>
            <rect x={x} y={y} width="72" height="50" rx="5" />
            <rect x={x + 6} y={y + 6} width="60" height="38" rx="2" opacity="0.35" />
            <line x1={x + 20} y1={y + 17} x2={x + 52} y2={y + 17} opacity="0.5" />
            <line x1={x + 20} y1={y + 25} x2={x + 46} y2={y + 25} opacity="0.5" />
            <line x1={x + 20} y1={y + 33} x2={x + 50} y2={y + 33} opacity="0.5" />
            <path d={`M${x + 72} ${y + 25} H 168`} />
          </g>
        );
      })}
      <text x="40" y="264" className={label} fontSize="11" stroke="none">
        iPads, charting at the bench
      </text>

      {/* clinic network: a bus with the label on top */}
      <path d="M168 40 V209" />
      <circle cx="168" cy="140" r="4.5" fill="currentColor" stroke="none" />
      <text x="176" y="30" className={label} fontSize="11" stroke="none">
        clinic Wi-Fi, no internet needed
      </text>
      <path d="M168 140 H 270" />

      {/* Raspberry Pi */}
      <rect x="270" y="100" width="120" height="80" rx="6" />
      <rect x="282" y="112" width="34" height="26" rx="2" opacity="0.5" />
      <rect x="324" y="112" width="52" height="10" rx="2" opacity="0.5" />
      <rect x="324" y="128" width="52" height="10" rx="2" opacity="0.5" />
      <rect x="282" y="148" width="94" height="20" rx="2" opacity="0.5" />
      <text x="270" y="206" className={label} fontSize="11" stroke="none">
        Raspberry Pi server
      </text>
      <text x="270" y="220" className={label} fontSize="11" stroke="none" opacity="0.7">
        every record, in the bag
      </text>

      {/* sync only when online */}
      <path d="M390 140 H 446" strokeDasharray="4 5" />
      <path d="M452 146c-8 0-12-12-2-14 0-16 28-16 30-2 14-4 22 12 8 16H452Z" />
      <text x="400" y="128" className={label} fontSize="11" stroke="none" opacity="0.7">
        sync
      </text>
      <text x="410" y="176" className={label} fontSize="11" stroke="none">
        cloud backup,
      </text>
      <text x="410" y="190" className={label} fontSize="11" stroke="none">
        only when online
      </text>
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <PageHeader
        mark="cairn"
        title="Software I build and run"
        lead="Where the engineering and the medicine actually meet, and a few things built because I wanted them to exist."
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* ParakaleoMMC */}
        <Reveal>
          <article className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs text-ink-faint">In use in our mobile clinics</p>
              <h2 className="mt-2 font-serif text-4xl tracking-tight">ParakaleoMMC</h2>
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
                , my family&rsquo;s missions organization behind the clinics. It runs on the
                clinic network only, not the public internet.
              </p>
            </div>
            <div className="flex items-center rounded-lg bg-raised p-6 sm:p-8">
              <ClinicSchematic />
            </div>
          </article>
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
        </Reveal>
      </div>
    </>
  );
}
