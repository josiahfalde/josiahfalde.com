import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SiteCard, { Ext } from "../components/SiteCard";

const WORK = [
  {
    src: "/work/lydia-brianne.jpg",
    alt: "Homepage of Lydia Brianne Photo, a candid photographer in Gulf Breeze, Florida",
    name: "Lydia Brianne Photo",
    meta: "Live. Gulf Breeze, FL. lydiabrianne.photos",
    href: "https://lydiabrianne.photos/",
    blurb:
      "Candid photography for couples, families, and weddings on the Florida Panhandle. The homepage is a camera viewfinder: press the shutter and it advances through a roll of her recent sessions. Nine albums open straight into her client galleries, plus a booking page.",
  },
  {
    src: "/work/code3.jpg",
    alt: "Homepage of Code 3 Property Solutions, a property services company in Mobile, Alabama",
    name: "Code 3 Property Solutions",
    meta: "Live. Mobile, AL. code3solution.com",
    href: "https://www.code3solution.com/",
    blurb:
      "Firefighter-owned lawn care, junk removal, and pressure washing. Seven pages, one per service, Google reviews on the page, a text-a-photo quote form, and a hiring page. Replaced a Canva one-pager.",
  },
  {
    src: "/work/clean-scene.jpg",
    alt: "Homepage of Clean Scene Housekeeping & Property Services in Pace, Florida",
    name: "Clean Scene Housekeeping & Property Services",
    meta: "Live. Pace, FL. cleanscenehouse.com",
    href: "https://cleanscenehouse.com/",
    blurb:
      "Housekeeping and vacation-rental turnover service. Before-and-after sliders from real jobs, reviews, and a straightforward quote path.",
  },
];

const PLANS = [
  {
    name: "Foundation",
    featured: false,
    includes: "",
    features: [
      "Hosting and SSL",
      "Daily backups",
      "Security updates",
      "Uptime monitoring",
      "Your Google reviews on the site, kept current",
    ],
    note: "",
    proof: "",
    cta: "Start with Foundation",
  },
  {
    name: "Growth",
    featured: true,
    includes: "Everything in Foundation, plus",
    features: [
      "Lead text alerts: a tap on your site texts your phone",
      "A call tracking number",
      "Monthly performance report",
      "One content edit a month",
    ],
    note: "",
    proof: "",
    cta: "Start with Growth",
  },
];

/* Build sizes, each with a live example. Every build is quoted, never listed. */
const BUILDS = [
  {
    name: "One page",
    body: "Everything on one scrolling page: services, photos, reviews, pricing, and a way to reach you.",
    example: "Clean Scene",
    href: "https://cleanscenehouse.com/",
  },
  {
    name: "Full site",
    body: "A page for every service and every city you work in, built to be found on Google.",
    example: "Code 3",
    href: "https://www.code3solution.com/",
  },
  {
    name: "Bigger operation",
    body: "Multiple locations, an established name, or specific goals in mind? Built around what you need.",
    example: "",
    href: "#mockup",
  },
];

/* Add-ons, grouped by how they bill. Priced in the quote, not listed. */
const ADDONS = [
  {
    heading: "Monthly",
    items: [
      {
        name: "Lead text alerts",
        note: "A tap or form fill on your site texts your phone within seconds. Included in Growth.",
      },
      {
        name: "Call tracking number",
        note: "A number for your ads and truck that forwards to your cell and logs every call. Included in Growth.",
      },
      {
        name: "Monthly performance report",
        note: "Visits, calls, texts, and where they came from, emailed on the first of the month. Included in Growth.",
      },
    ],
  },
  {
    heading: "One time",
    items: [
      { name: "Extra page or city landing page", note: "" },
      {
        name: "Online estimate calculator",
        note: "Customers price their own job on your site, like the square-foot tool on cleanscenehouse.com.",
      },
      {
        name: "Business email setup",
        note: "you@yourbusiness.com on Google Workspace. Google bills $7 a month for the mailbox.",
      },
      {
        name: "Google Business Profile setup",
        note: "Services, hours, photos, and the questions customers ask, filled in properly once.",
      },
      {
        name: "Content edit",
        note: "Free once a month on Growth and up.",
      },
    ],
  },
];

const STEPS = [
  {
    n: "1",
    title: "Free preview",
    body: "I build a design preview of your site first, at no cost. You see exactly what you'd be paying for before any money changes hands.",
  },
  {
    n: "2",
    title: "Build",
    body: "If you like it, I build and launch the full site for a one-time fee, quoted up front.",
  },
  {
    n: "3",
    title: "Hosting and maintenance",
    body: "A monthly plan keeps the site online, secure, and working for you. Pay a year up front and get two months free.",
  },
];

export default function Websites() {
  return (
    <>
      <PageHeader
        mark="hex"
        title="Websites for small businesses"
        lead="I design, build, and host websites for small businesses, mostly home-service companies like plumbers, HVAC contractors, electricians, landscapers, and roofers that need a clean, professional web presence that brings in calls."
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#mockup"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
          >
            Get a free preview
          </a>
          <a href="#work" className="text-sm font-medium text-navy transition-colors hover:text-ink">
            See the work
          </a>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* Work */}
        <section id="work" aria-label="Recent work" className="scroll-mt-20">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight">Recent work</h2>
          </Reveal>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {WORK.map((w, i) => (
              <Reveal key={w.name} delay={i * 80} className="sm:col-span-2">
                <SiteCard
                  src={w.src}
                  alt={w.alt}
                  name={w.name}
                  meta={w.meta}
                  href={w.href}
                  aspect="aspect-[16/9] sm:aspect-[21/10]"
                >
                  {w.blurb}
                </SiteCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section aria-label="How it works" className="mt-28">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight">How it works</h2>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <p className="font-serif text-6xl leading-none tracking-tight text-navy">{s.n}</p>
                <h3 className="mt-4 font-serif text-xl tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" aria-label="Pricing" className="mt-28 scroll-mt-20">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight">Pricing</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Every quote is sized to the business: how many services and towns you cover, how
              much the site has to do, and how much work it should bring in. A three-truck shop
              and a one-man crew get different numbers, and both know theirs before any work
              starts: one fee to build the site and one monthly plan. Pay a year up front and get
              two months free. The domain and everything on the site are yours, and you can cancel
              the monthly at any time.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-y-10 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
              {PLANS.map((t) => (
                <div
                  key={t.name}
                  className={`grid grid-rows-[auto_auto_1fr_auto_auto] gap-0 lg:row-span-5 lg:grid-rows-subgrid ${
                    t.featured
                      ? "rounded-lg bg-raised px-6 py-8 ring-1 ring-ink/10 shadow-[0_6px_14px_-10px_rgb(var(--c-navy)/0.45)] sm:px-7 lg:-my-4 lg:py-12"
                      : "lg:px-1 lg:py-8"
                  }`}
                >
                  {/* Row 1: the featured line. Every column holds the slot so rows stay level. */}
                  <p
                    className={`mb-3 text-sm font-medium text-navy ${t.featured ? "" : "hidden lg:block"}`}
                    aria-hidden={!t.featured}
                  >
                    {t.featured ? "Most popular with contractors" : "\u00a0"}
                  </p>

                  {/* Row 2: name */}
                  <h3 className="font-serif text-2xl tracking-tight text-ink">{t.name}</h3>

                  {/* Row 3: what you get */}
                  <div className="mt-6">
                    {t.includes && <p className="text-sm font-medium text-ink">{t.includes}</p>}
                    <ul
                      className={`space-y-2 text-[0.95rem] leading-relaxed text-ink-soft ${
                        t.includes ? "mt-3" : ""
                      }`}
                    >
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-navy/60"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {t.note && <p className="mt-3 text-sm text-ink-faint">{t.note}</p>}
                  </div>

                  {/* Row 4: proof, where there is some */}
                  <p
                    className={`mt-6 text-sm leading-relaxed text-ink-faint ${t.proof ? "" : "hidden lg:block"}`}
                  >
                    {t.proof}
                  </p>

                  {/* Row 5: the one action, anchored to the bottom */}
                  <div className="mt-6 self-end">
                    {t.featured ? (
                      <a
                        href="#mockup"
                        className="inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
                      >
                        {t.cta}
                      </a>
                    ) : (
                      <a
                        href="#mockup"
                        className="inline-block py-2.5 text-sm font-medium text-navy transition-colors hover:text-ink"
                      >
                        {t.cta}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Build: sizes, each with a live example. Subgrid keeps the name, body and
              link rows level across the three columns. */}
          <Reveal delay={120}>
            <div className="mt-16 lg:mt-20 lg:px-1">
              <h3 className="font-serif text-2xl tracking-tight text-ink md:text-[1.7rem]">Build</h3>
              <div className="mt-8 grid gap-y-8 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
                {BUILDS.map((b) => (
                  <div
                    key={b.name}
                    className="grid grid-rows-[auto_1fr_auto] lg:row-span-3 lg:grid-rows-subgrid"
                  >
                    <h4 className="font-serif text-xl tracking-tight text-ink">{b.name}</h4>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{b.body}</p>
                    <p className="mt-4">
                      {b.example ? (
                        <a
                          href={b.href}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center py-1 text-sm font-medium text-navy transition-colors hover:text-ink"
                        >
                          Like {b.example}
                          <Ext className="ml-1.5 -translate-y-px" />
                        </a>
                      ) : (
                        <a
                          href={b.href}
                          className="inline-block py-1 text-sm font-medium text-navy transition-colors hover:text-ink"
                        >
                          Let&rsquo;s talk
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Add-ons: two short lists, monthly and one time. */}
          <Reveal delay={160}>
            <div className="mt-16 lg:mt-20 lg:px-1">
              <h3 className="font-serif text-2xl tracking-tight text-ink md:text-[1.7rem]">
                Add to any plan
              </h3>
              <div className="mt-8 grid gap-x-16 gap-y-10 lg:grid-cols-2">
                {ADDONS.map((group) => (
                  <div key={group.heading}>
                    <h4 className="font-serif text-xl tracking-tight text-ink">{group.heading}</h4>
                    <ul className="mt-5 space-y-5">
                      {group.items.map((a) => (
                        <li key={a.name}>
                          <p className="text-ink">{a.name}</p>
                          {a.note && (
                            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                              {a.note}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </section>

        {/* Mockup */}
        <section
          id="mockup"
          aria-label="Get a free preview"
          className="mt-24 scroll-mt-20 rounded-lg bg-raised px-6 py-10 sm:px-10 sm:py-12"
        >
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight">Get a free preview</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Email me with your business name and what you do, and I&rsquo;ll send back a design
              preview of your new site. Or call or text.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="mailto:josiahfalde@proton.me?subject=Free%20website%20preview"
                className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                josiahfalde@proton.me
              </a>
              <a
                href="tel:+14434402717"
                className="font-serif text-xl tracking-tight text-ink transition-colors hover:text-navy"
              >
                (443) 440-2717
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
