import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/** Small up-right arrow used on every outbound link. */
export function Ext({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
    >
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}

interface SiteCardProps {
  src: string;
  alt: string;
  name: string;
  /** Short line under the name: place, status, host. */
  meta?: string;
  children?: ReactNode;
  /** External URL (opens the live site) or an internal route. */
  href: string;
  /** Show the screenshot whole on a raised ground instead of cropping (phone shots). */
  contain?: boolean;
  /** Override the frame aspect, default 16:10. */
  aspect?: string;
}

/**
 * A screenshot of a real, populated site or app with its name and a line of
 * context. The screenshot is the object; the frame is a crisp edge and one
 * tight downward shadow, nothing else.
 */
export default function SiteCard({
  src,
  alt,
  name,
  meta,
  children,
  href,
  contain = false,
  aspect = "aspect-[16/10]",
}: SiteCardProps) {
  const external = /^https?:/.test(href);
  const frame = (
    <div
      className={`${aspect} overflow-hidden rounded-md bg-raised ring-1 ring-ink/10 shadow-[0_6px_14px_-10px_rgb(var(--c-navy)/0.45)] transition-shadow group-hover:shadow-[0_8px_18px_-10px_rgb(var(--c-navy)/0.6)]`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full ${contain ? "object-contain p-4" : "object-cover object-top"}`}
      />
    </div>
  );
  const title = (
    <span className="font-serif text-xl tracking-tight text-ink transition-colors group-hover:text-copper-deep">
      {name}
      {external && <Ext className="ml-1.5 -translate-y-px text-ink-faint" />}
    </span>
  );
  const body = (
    <>
      {frame}
      <div className="mt-3">
        {title}
        {meta && <p className="mt-0.5 text-sm text-ink-faint">{meta}</p>}
        {children && (
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{children}</p>
        )}
      </div>
    </>
  );
  return external ? (
    <a href={href} className="group block" target="_blank" rel="noopener">
      {body}
    </a>
  ) : (
    <Link to={href} className="group block">
      {body}
    </Link>
  );
}
