import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader
        mark="pin"
        title="Get in touch"
        lead="Whether it's medicine, engineering, or the places they overlap, I'd be glad to hear from you."
      />
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <a
              href="mailto:josiahfalde@proton.me"
              className="inline-block rounded-md bg-navy px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-ink"
            >
              josiahfalde@proton.me
            </a>
            <p className="mt-6">
              <a
                href="https://www.linkedin.com/in/josiah-falde-1a6137254/"
                className="inline-flex items-center gap-2.5 font-medium text-navy transition-colors hover:text-ink"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45z" />
                </svg>
                LinkedIn
              </a>
            </p>
          </div>
          <div className="space-y-4 leading-relaxed text-ink-soft">
            <p>
              Small business owner looking for a website? Start on the{" "}
              <Link to="/websites" className="font-medium text-navy hover:text-ink">
                Websites
              </Link>{" "}
              page; the first design preview is free.
            </p>
            <p>
              Interested in the mobile clinics or the hospital in Haiti? That work runs through{" "}
              <a href="https://parakaleo.com" className="font-medium text-navy hover:text-ink">
                Parakaleo International
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
