import { useState } from "react";
import Contour from "./Contour";

interface PhotoSlotProps {
  /** Root-relative path, e.g. "/photos/headshot.jpg" */
  src: string;
  alt: string;
  /** Small label shown on the placeholder panel. */
  label?: string;
  /** Aspect/size classes, e.g. "aspect-[4/5]" */
  className?: string;
  /** Extra classes for the <img>, e.g. "object-bottom" to bias the crop. */
  imgClassName?: string;
}

/**
 * Renders the photo when the file exists in public/photos/, otherwise an
 * intentional panel cut from the site's contour map. Dropping a correctly
 * named file into public/photos/ fills the slot (see public/photos/README.md).
 */
export default function PhotoSlot({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
}: PhotoSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-lg bg-raised ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName} ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {!loaded && (
        <div aria-hidden="true" className="absolute inset-0">
          <Contour className="h-full w-full text-navy" minor={0.2} index={0.38} />
          {label && (
            <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-wide text-ink-faint">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
