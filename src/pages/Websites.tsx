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
    src: "/work/bay-landscaping.jpg",
    alt: "Homepage of Bay Landscaping, a commercial landscaper in Mobile, Alabama",
    name: "Bay Landscaping",
    meta: "Preview build. Mobile, AL",
    href: "https://bay-landscaping.vercel.app/",
    blurb:
      "Commercial landscape installation and maintenance company with 60+ staff. A 25-page redesign built around their own crew and job photos.",
  },
  {
    src: "/work/affordable-car-tires.jpg",
    alt: "Homepage of Affordable Car Tires in Theodore, Alabama",
    name: "Affordable Car Tires",
    meta: "Preview build. Theodore, AL",
    href: "https://affordable-car-tires.vercel.app/",
    blurb:
      "New and used tire shop with 146 Google reviews and no website. One page: services, reviews, hours, and a call button that matters more than anything else.",
  },
  {
    src: "/work/raders.jpg",
    alt: "Homepage of Rader's Builders Express, a lumber yard in Lafayette, Louisiana",
    name: "Rader's Builders Express",
    meta: "Preview build. Lafayette, LA",
    href: "https://raders-builders-express.vercel.app/",
    blurb: "Old-school lumber and hardware counter. The site looks like the place.",
  },
  {
    src: "/work/auto-tech.jpg",
    alt: "Homepage of JR Auto-Tech Automotive in Abbeville, Louisiana",
    name: "Auto-Tech Automotive",
    meta: "Preview build. Abbeville, LA",
    href: "https://auto-tech-automotive.vercel.app/",
    blurb: "Independent repair shop. Brakes, A/C, tires, tint, one call button.",
  },
];

const BUILD_TIERS = [
  {
    name: "Single page",
    price: "$495",
    body: "One page that does the job: services, photos, reviews, hours, and call and text buttons that work from a phone. Right for a shop that mostly needs to be found.",
  },
  {
    name: "Business site",
    price: "$895",
    body: "Up to eight pages with a page per service, a quote form that emails you, reviews on the page, and the groundwork for Google to rank each service. The Code 3 build above is one of these.",
  },
  {
    name: "Large site",
    price: "from $1,500",
    body: "Twelve pages or more: photo galleries, careers, service areas, a page per city. Scoped and quoted up front, like the 25-page Bay Landscaping build.",
  },
];

const MONTHLY_TIERS = [
  {
    name: "Hosting",
    price: "$29",
    body: "The site stays online, fast, and secure: hosting, SSL, domain and DNS management, backups, and small text or photo edits when you need them.",
  },
  {
    name: "Care",
    price: "$59",
    body: "Everything in Hosting, plus real upkeep: content changes whenever you ask, seasonal pages, and your latest Google reviews kept current on the site. Same-week turnaround. The plan I recommend for most shops.",
  },
  {
    name: "Insights",
    price: "$129",
    body: "Everything in Care, plus proof the site is working: visitor analytics and heatmaps, tracked links and QR codes for any ads you run, and a plain-English report every month. Visitors, where they came from, what they searched, how many called.",
  },
  {
    name: "Full service",
    price: "$249",
    body: "Everything in Insights, and I run your Google presence too: replies to your reviews in your voice, weekly photo posts, and a Business Profile kept accurate. The whole front door of the business, handled.",
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
    body: "If you like it, I build and launch the full site for a one-time flat fee.",
  },
  {
    n: "3",
    title: "Hosting and maintenance",
    body: "A flat monthly fee keeps the site online, secure, and up to date, content changes included.",
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
              <Reveal key={w.name} delay={(i % 2) * 80} className={i === 0 ? "sm:col-span-2" : ""}>
                <SiteCard
                  src={w.src}
                  alt={w.alt}
                  name={w.name}
                  meta={w.meta}
                  href={w.href}
                  aspect={i === 0 ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[16/10]"}
                >
                  {w.blurb}
                </SiteCard>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-faint">
            Preview builds are the free first step: a finished design the owner can look at before
            deciding anything.
          </p>
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
              Two costs, both flat, both fixed before the work starts: a one-time fee to build
              the site, and a monthly fee to keep it running. No hourly billing. The domain and
              everything on the site are yours, and you can cancel the monthly at any time.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-16">
            {/* The build */}
            <Reveal>
              <h3 className="font-serif text-xl tracking-tight text-ink">The build, once</h3>
              <div className="mt-7 space-y-9">
                {BUILD_TIERS.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-serif text-lg tracking-tight">{t.name}</h4>
                      <span
                        aria-hidden="true"
                        className="mb-[0.3em] flex-1 self-end border-b border-dotted border-ink/25"
                      />
                      <p className="whitespace-nowrap font-serif text-2xl tracking-tight text-navy">
                        {t.price}
                      </p>
                    </div>
                    <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">{t.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-faint">
                For scale: freelancers typically charge $2,500 to $7,000 for the middle one, and
                agencies more. I&rsquo;m early and building a portfolio, so these are launch
                rates. They will rise as the roster fills; the rate you sign at is the rate you
                keep.
              </p>
            </Reveal>

            {/* Every month */}
            <Reveal delay={80}>
              <h3 className="font-serif text-xl tracking-tight text-ink">Every month after</h3>
              <div className="mt-7 space-y-9">
                {MONTHLY_TIERS.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-serif text-lg tracking-tight">{t.name}</h4>
                      <span
                        aria-hidden="true"
                        className="mb-[0.3em] flex-1 self-end border-b border-dotted border-ink/25"
                      />
                      <p className="whitespace-nowrap font-serif text-2xl tracking-tight text-navy">
                        {t.price}
                        <span className="ml-0.5 font-sans text-sm text-ink-faint">/mo</span>
                      </p>
                    </div>
                    <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">{t.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-faint">
                Full-service care like this usually runs $100 to $300 a month. Pay a year up
                front and get two months free. Large sites are quoted individually, build and
                monthly both. Extra pages after launch are $100 each; a tracked phone number for
                a print or radio ad is $15 a month on any plan.
              </p>
            </Reveal>
          </div>
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
                href="tel:+14434027171"
                className="font-serif text-xl tracking-tight text-ink transition-colors hover:text-navy"
              >
                (443) 402-7171
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
