import Section from "../components/Section";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 · Contact"
      title="Get in touch"
      lead="Whether it’s medicine, engineering, or the places they overlap — I’d be glad to hear from you."
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:josiahfalde@proton.me"
            className="inline-flex items-center gap-2.5 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6L22 7" />
            </svg>
            josiahfalde@proton.me
          </a>
          <a
            href="https://www.linkedin.com/in/josiah-falde-1a6137254/"
            className="inline-flex items-center gap-2.5 rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper-deep"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
