import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SiteCard from "../components/SiteCard";

const WORK = [
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
    monthly: 79,
    build: 750,
    featured: false,
    tagline: "The site stays up, fast, and secure.",
    includes: "",
    features: ["Hosting and SSL", "Daily backups", "Security updates", "Uptime monitoring"],
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
      "One content edit a month",
      "Google Business Profile management",
      "Your Google reviews on the site, kept current",
      "Seasonal photo and service updates",
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
      "A call-tracking number",
      "Priority response",
    ],
    note: "",
    proof:
      "Code 3 Property Solutions, above, is built this way: a page for every service and a Google Business Profile that stays current.",
    cta: "Start with Market Leader",
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
              a year up front on any plan and get two months free. The domain and everything on
              the site are yours, and you can cancel the monthly at any time.
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

          {/* Beyond the menu: quoted work */}
          <Reveal delay={120}>
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
