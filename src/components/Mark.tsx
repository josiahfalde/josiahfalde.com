/**
 * The site's own symbol set, drawn like survey and map marks on one 24-unit
 * grid: a summit, a survey station, a structure, a cairn, a hex, a viewpoint,
 * a flag, a pin. One per page; used in the home legend, the page headers,
 * and the menu. Stroke 1.5, no fills except the small centre dots.
 */
export type MarkName =
  | "summit"
  | "station"
  | "structure"
  | "cairn"
  | "hex"
  | "viewpoint"
  | "flag"
  | "pin";

const SHAPES: Record<MarkName, JSX.Element> = {
  summit: (
    <>
      <path d="M12 4.5 20 19H4L12 4.5Z" />
      <circle cx="12" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  station: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  structure: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" />
      <rect x="9" y="9" width="6" height="6" />
    </>
  ),
  cairn: (
    <>
      <path d="M12 3.5 20.5 12 12 20.5 3.5 12 12 3.5Z" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  hex: (
    <>
      <path d="M12 3.5 19.4 7.75v8.5L12 20.5l-7.4-4.25v-8.5L12 3.5Z" />
      <path d="M12 7.5v9" />
    </>
  ),
  viewpoint: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 4.5a7.5 7.5 0 0 0 0 15Z" fill="currentColor" stroke="none" />
    </>
  ),
  flag: (
    <>
      <path d="M7 20.5v-16" />
      <path d="M7 5h11l-2.5 3.5L18 12H7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 20.5v-7" />
      <circle cx="12" cy="8.5" r="5" />
      <circle cx="12" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Mark({
  name,
  size = 20,
  className = "",
}: {
  name: MarkName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={`shrink-0 ${className}`}
    >
      {SHAPES[name]}
    </svg>
  );
}
