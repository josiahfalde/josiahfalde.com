import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  raised?: boolean;
}

/** Standard page section: numbered eyebrow, serif title, optional lead. */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  raised = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={`scroll-mt-20 ${raised ? "border-y border-line bg-raised/60" : ""}`}
    >
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-copper-deep">
            <span aria-hidden="true" className="h-px w-8 bg-copper" />
            {eyebrow}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {lead}
            </p>
          )}
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
