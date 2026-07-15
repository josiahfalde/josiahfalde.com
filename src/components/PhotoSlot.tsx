import { useState } from "react";

interface PhotoSlotProps {
  /** Path relative to site root, e.g. "./photos/headshot.jpg" */
  src: string;
  alt: string;
  /** Small monospace label shown on the placeholder (e.g. coordinates). */
  label?: string;
  /** Show a large serif monogram (used for the headshot slot). */
  monogram?: boolean;
  /** Aspect/size classes, e.g. "aspect-[4/5]" */
  className?: string;
  /** Extra classes for the <img>, e.g. "object-bottom" to bias the crop. */
  imgClassName?: string;
}

/**
 * A photo slot that renders the real image when the file exists in
 * public/photos/, and an intentional contour-line graphic panel when it
 * doesn't. Dropping a correctly-named file into public/photos/ is all it
 * takes to fill the slot (see public/photos/README.md).
 */
export default function PhotoSlot({
  src,
  alt,
  label,
  monogram = false,
  className = "",
  imgClassName = "",
}: PhotoSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-raised ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName} ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <svg
            className="absolute inset-0 h-full w-full text-navy"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.18"
          >
            <path d="M-20 60 C 80 20, 140 110, 240 70 S 380 30, 440 80" />
            <path d="M-20 110 C 70 70, 150 160, 250 120 S 370 80, 440 130" />
            <path d="M-20 160 C 60 125, 160 210, 260 170 S 360 135, 440 185" />
            <path d="M-20 215 C 55 180, 165 260, 265 220 S 355 190, 440 240" />
            <path d="M-20 270 C 65 235, 155 310, 255 270 S 365 245, 440 295" />
            <path d="M-20 325 C 75 290, 145 360, 245 320 S 375 300, 440 350" />
            <path d="M-20 380 C 85 345, 135 410, 235 370 S 385 355, 440 405" />
          </svg>
          {monogram && (
            <span className="relative font-serif text-6xl tracking-tight text-navy/70">
              JF
            </span>
          )}
          {label && (
            <span className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
