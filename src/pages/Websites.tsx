import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SiteCard from "../components/SiteCard";

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
    monthly: 59,
    build: 750,
    featured: false,
    tagline: "The site stays up, fast, and secure.",
    includes: "",
    features: [
      "Hosting and SSL",
      "Daily backups",
      "Security updates",
      "Uptime monitoring",
      "Your Google reviews on the site, kept current",
    ],
    note: "Content changes are $40 each.",
    proof: "",
    cta: "Start with Foundation",
  },
  {
    name: "Growth",
    monthly: 149,
    build: 750,
    featured: true,
    tagline: "Get found, get calls, get booked.",
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
  {
    name: "Market Leader",
    monthly: 279,
    build: 1500,
    featured: false,
    tagline: "Own the search results in your area.",
    includes: "Everything in Growth, plus",
    features: [
      "A landing page for every service",
      "Ongoing local SEO work",
      "Priority response",
    ],
    note: "",
    proof:
      "Code 3 Property Solutions, above, is built this way: a page for every service and a site that keeps earning calls.",
    cta: "Start with Market Leader",
  },
];

/* Add-ons: a rate sheet, set as dot-leader ledgers. `per` marks a monthly rate. */
const ADDONS = [
  {
    heading: "Monthly",
    items: [
      {
        name: "Lead text alerts",
        price: 15,
        per: true,
        note: "A tap or form fill on your site texts your phone within seconds. Included in Growth.",
      },
      {
        name: "Call tracking number",
        price: 15,
        per: true,
        note: "A number for your ads and truck that forwards to your cell and logs every call. Included in Growth.",
      },
      {
        name: "Monthly performance report",
        price: 19,
        per: true,
        note: "Visits, calls, texts, and where they came from, emailed on the first of the month. Included in Growth.",
      },
    ],
  },
  {
    heading: "One time",
    items: [
      { name: "Extra page or city landing page", price: 100, per: false, note: "" },
      {
        name: "Online estimate calculator",
        price: 250,
        per: false,
        note: "Customers price their own job on your site, like the square-foot tool on cleanscenehouse.com.",
      },
      {
        name: "Business email setup",
        price: 75,
        per: false,
        note: "you@yourbusiness.com on Google Workspace. Google bills $7 a month for the mailbox.",
      },
      {
        name: "Google Business Profile setup",
        price: 150,
        per: false,
        note: "Services, hours, photos, and the questions customers ask, filled in properly once.",
      },
      {
        name: "Content edit",
        price: 40,
        per: false,
        note: "Free once a month on Growth and up.",
      },
    ],
  },
];

const usd = (n: number) => "$" + n.toLocaleString("en-US");

const STEPS = [
  {
    n: "1",
    title: "Free preview",
    body: "I build a design preview of your site first, at no cost. You see exactly what you'd be paying for before any money changes hands.",
  },
  {
    n: "2",
    title: "Build",
    body: "If you like it, I build and launch the full site for a one-time flat fee.",
  },
  {
    n: "3",
    title: "Hosting and maintenance",
    body: "A flat monthly plan keeps the site online, secure, and working for you. Pay a year up front and get two months free.",
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
              Two costs, both flat and both fixed before the work starts: a one-time fee to
              build the site, and a monthly plan that keeps it online and working for you. Pay
              a year up front on any plan and get two months free. Add-ons stack onto any plan.
              The domain and everything on the site are yours, and you can cancel the monthly at
              any time.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {PLANS.map((t) => (
                <div
                  key={t.name}
                  className={`grid grid-rows-[auto_auto_auto_1fr_auto_auto] gap-0 lg:row-span-6 lg:grid-rows-subgrid ${
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
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-ink">{t.name}</h3>
                    <p className="mt-1 text-ink-soft">{t.tagline}</p>
                  </div>

                  {/* Row 3: price */}
                  <div className="mt-6">
                    <p className="font-serif text-5xl leading-none tracking-tight text-navy">
                      {usd(t.monthly)}
                      <span className="ml-1.5 font-sans text-base font-normal text-ink-faint">
                        /mo
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      or {usd(t.monthly * 10)} a year, two months free
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {usd(t.build)} to build, once
                    </p>
                  </div>

                  {/* Row 4: what you get */}
                  <div className="mt-7">
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

                  {/* Row 5: proof, where there is some */}
                  <p
                    className={`mt-6 text-sm leading-relaxed text-ink-faint ${t.proof ? "" : "hidden lg:block"}`}
                  >
                    {t.proof}
                  </p>

                  {/* Row 6: the one action, anchored to the bottom */}
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

          {/* Add-ons: a rate sheet in two dot-leader ledgers. The leader is an empty
              flex item, so its bottom edge is its baseline and the dots sit on the
              text baseline; `last baseline` keeps them on the final line if a name wraps. */}
          <Reveal delay={120}>
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
                          <div className="flex items-baseline gap-x-3 [align-items:last_baseline]">
                            <span className="min-w-0 text-ink">{a.name}</span>
                            <span
                              aria-hidden="true"
                              className="h-[3px] min-w-6 flex-1 bg-[radial-gradient(circle,rgb(var(--c-ink)/0.4)_1px,transparent_1.5px)] bg-[length:5px_3px] bg-bottom bg-repeat-x"
                            />
                            <span className="shrink-0 whitespace-nowrap font-serif text-xl leading-none tracking-tight text-navy">
                              {usd(a.price)}
                              {a.per && (
                                <span className="ml-0.5 font-sans text-sm font-normal tracking-normal text-ink-faint">
                                  /mo
                                </span>
                              )}
                            </span>
                          </div>
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

          {/* Beyond the menu: quoted work */}
          <Reveal delay={160}>
            <div className="mt-16 grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12 lg:mt-20 lg:px-1">
              <h3 className="font-serif text-2xl tracking-tight text-ink md:text-[1.7rem]">Bigger operation?</h3>
              <div className="max-w-xl">
                <p className="leading-relaxed text-ink-soft">
                  Multiple locations, an established name, or specific goals in mind? Your
                  website should carry the weight your business already does. I&rsquo;ll quote it
                  on what it&rsquo;s actually worth to you, not on a checklist.
                </p>
                <a
                  href="#mockup"
                  className="mt-4 inline-block py-2.5 font-medium text-navy transition-colors hover:text-ink"
                >
                  Let&rsquo;s talk
                </a>
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
