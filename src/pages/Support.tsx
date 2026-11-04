import { Ext } from "../components/SiteCard";

const KOFI = "https://ko-fi.com/josiahfalde";

/** Unlisted page, linked from ReferDPC. See the note in CLAUDE.md before listing it. */
export default function Support() {
  return (
    <div className="mx-auto max-w-content px-5 pt-8 sm:px-8 sm:pt-14">
      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <img
          src="/photos/portrait-steps.jpg"
          alt="Josiah Falde sitting on brick steps, smiling"
          width={1200}
          height={1600}
          className="aspect-square h-auto w-full rounded-lg object-cover object-[50%_45%] md:aspect-[4/5] md:object-[50%_40%]"
        />
        <div className="md:pb-2">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Buy me a coffee
          </h1>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              I&rsquo;m Josiah. I build{" "}
              <a href="https://referdpc.com" className="font-medium text-navy hover:text-ink">
                ReferDPC
              </a>{" "}
              while finishing prerequisites and applying to osteopathic medical schools.
            </p>
            <p>
              If it has saved you some time, you&rsquo;re welcome to buy me a coffee. I&rsquo;m
              taking organic chemistry, so it will get used.
            </p>
          </div>
          <a
            href={KOFI}
            className="mt-9 inline-flex items-center gap-2.5 rounded-md bg-navy px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-ink"
          >
            Buy me a coffee on Ko-fi
            <Ext />
          </a>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-faint">
            This goes to me personally. It isn&rsquo;t a donation to a charity or to Parakaleo
            International, and it isn&rsquo;t tax deductible. It changes nothing on ReferDPC:
            not a listing, not the order, not a Pro account.
          </p>
        </div>
      </div>
    </div>
  );
}
