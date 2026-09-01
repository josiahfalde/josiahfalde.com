import { INDEX, MINOR, VIEWBOX } from "../data/contours";

/**
 * The site's signature: real 100 m contours of the Massif de la Hotte in
 * southern Haiti (SRTM 30 m elevations, generated into src/data/contours.ts).
 * Index contours (every 500 m) are drawn heavier, the way a printed
 * topographic sheet does it. Strokes stay 1 px at any scale.
 */
export default function Contour({
  className = "",
  minor = 0.16,
  index = 0.3,
}: {
  className?: string;
  /** opacity of the 100 m contours */
  minor?: number;
  /** opacity of the 500 m index contours */
  index?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox={VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <g opacity={minor} strokeWidth="1" vectorEffect="non-scaling-stroke">
        {MINOR.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      <g opacity={index} strokeWidth="1.75">
        {INDEX.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
