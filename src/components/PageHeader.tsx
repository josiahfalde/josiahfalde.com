import type { ReactNode } from "react";
import Mark, { type MarkName } from "./Mark";

/** Inner-page header: title and lead on the left, the page's own map mark on the right. */
export default function PageHeader({
  title,
  lead,
  mark,
  children,
}: {
  title: string;
  lead?: string;
  mark: MarkName;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-content px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-20">
      <div className="flex items-start justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p>
          )}
          {children}
        </div>
        <Mark name={mark} size={72} className="mt-2 hidden text-navy/40 sm:block" />
      </div>
    </div>
  );
}
