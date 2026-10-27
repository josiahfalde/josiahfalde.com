/** Field sketch of Parakaleo EMR, drawn as a star: iPads are screens on the
 *  clinic Wi-Fi, the Raspberry Pi holds every record, and the cloud backup
 *  only catches up when there is internet. Same sketch language as the
 *  Parakaleo vs BackpackEMR comparison. */
const TABLETS = [
  [55, 42],
  [120, 22],
  [185, 14],
  [250, 22],
  [315, 42],
];

export default function ClinicSchematic() {
  return (
    <svg
      role="img"
      aria-label="Five iPads connect over the clinic Wi-Fi to one Raspberry Pi that holds every record; a cloud backup syncs only when internet is available"
      viewBox="0 0 400 250"
      className="h-auto w-full font-sans"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* wires: every screen runs to the router; one strong line to the Pi */}
      <g className="stroke-ink/25" strokeWidth="1.6">
        {TABLETS.map(([x, y]) => (
          <path key={x} d={`M${x + 15} ${y + 40} L200 118`} />
        ))}
      </g>
      <path d="M200 130 V170" className="stroke-ink" strokeWidth="2.2" />
      <path d="M265 197 H300" className="stroke-ink-faint" strokeWidth="1.4" strokeDasharray="3 5" />

      {/* iPads */}
      {TABLETS.map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          <rect width="30" height="40" rx="5" className="fill-paper stroke-ink" strokeWidth="1.6" />
          <path d="M11 34h8" className="stroke-ink-faint" strokeWidth="1.6" />
        </g>
      ))}

      {/* clinic Wi-Fi */}
      <rect x="152" y="107" width="96" height="23" rx="11.5" className="fill-raised stroke-ink" strokeWidth="1.6" />
      <text x="200" y="118.5" textAnchor="middle" dominantBaseline="central" className="fill-ink" fontSize="12">
        clinic Wi-Fi
      </text>

      {/* the Pi: the one place records live */}
      <rect x="135" y="170" width="130" height="54" rx="8" className="fill-navy" />
      <text x="200" y="189" textAnchor="middle" dominantBaseline="central" className="fill-paper" fontSize="13.5" fontWeight="600">
        Raspberry Pi
      </text>
      <text x="200" y="207" textAnchor="middle" dominantBaseline="central" className="fill-paper" fontSize="11">
        every record
      </text>

      {/* cloud backup, only when online */}
      <rect x="300" y="177" width="92" height="40" rx="20" className="fill-raised stroke-ink-faint" strokeWidth="1.4" strokeDasharray="3 4" />
      <text x="346" y="191" textAnchor="middle" dominantBaseline="central" className="fill-ink-soft" fontSize="11">
        cloud backup
      </text>
      <text x="346" y="204" textAnchor="middle" dominantBaseline="central" className="fill-ink-soft" fontSize="11">
        when online
      </text>
    </svg>
  );
}
