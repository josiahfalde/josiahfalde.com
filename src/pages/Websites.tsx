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
          <a href="#work" className="text-sm font-medium text-copper-deep transition-colors hover:text-ink">
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
                <p className="font-serif text-6xl leading-none tracking-tight text-copper-deep">{s.n}</p>
                <h3 className="mt-4 font-serif text-xl tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section aria-label="Pricing" className="mt-28 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight">Pricing</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 leading-relaxed text-ink-soft">
              <p>
                There are two costs, and I want you to know about both before you commit to
                anything. The first is a one-time flat fee to design and build the site. The
                second is a flat monthly fee for hosting and maintenance, which keeps the site
                online, secure, and up to date, with content changes included. The monthly fee is
                ongoing for as long as you want the site up, and you can cancel it at any time.
              </p>
              <p>
                The build fee is priced to what a single new customer is worth to your business.
                A site for a shop where one job is a few hundred dollars costs less than one for a
                contractor whose average job is several thousand. Either way you&rsquo;ll know
                both numbers, the build fee and the monthly fee, up front before the build
                starts. A typical site covers your services, service area, reviews, photos, and a
                clear way for customers to call or request a quote; larger businesses may add
                per-service pages, photo galleries, and quote request forms.
              </p>
              <p>
                Builds are billed as a one-time flat fee. Hosting and maintenance is billed
                monthly and can be canceled anytime. Payment is by card through Stripe&rsquo;s
                secure checkout. Questions about billing or refunds: email me directly.
              </p>
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
                href="tel:+14434027171"
                className="font-serif text-xl tracking-tight text-ink transition-colors hover:text-copper-deep"
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
