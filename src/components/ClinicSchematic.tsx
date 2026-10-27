/** Field schematic of Parakaleo EMR: tablets on the clinic's own Wi-Fi,
 *  a Raspberry Pi holding the records, sync only when a connection exists. */
export default function ClinicSchematic() {
  const label = "fill-current font-mono";
  return (
    <svg
      role="img"
      aria-label="Schematic: iPads on the clinic Wi-Fi talk to a Raspberry Pi server in the clinic bag; records sync to the cloud only when internet is available"
      viewBox="0 0 520 280"
      className="h-auto w-full text-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* tablets */}
      {[0, 1, 2].map((i) => {
        const x = 40;
        const y = 44 + i * 70;
        return (
          <g key={i}>
            <rect x={x} y={y} width="72" height="50" rx="5" />
            <rect x={x + 6} y={y + 6} width="60" height="38" rx="2" opacity="0.35" />
            <line x1={x + 20} y1={y + 17} x2={x + 52} y2={y + 17} opacity="0.5" />
            <line x1={x + 20} y1={y + 25} x2={x + 46} y2={y + 25} opacity="0.5" />
            <line x1={x + 20} y1={y + 33} x2={x + 50} y2={y + 33} opacity="0.5" />
            <path d={`M${x + 72} ${y + 25} H 168`} />
          </g>
        );
      })}
      <text x="40" y="264" className={label} fontSize="11" stroke="none">
        iPads, charting at the bench
      </text>

      {/* clinic network: a bus with the label on top */}
      <path d="M168 40 V209" />
      <circle cx="168" cy="140" r="4.5" fill="currentColor" stroke="none" />
      <text x="176" y="30" className={label} fontSize="11" stroke="none">
        clinic Wi-Fi, no internet needed
      </text>
      <path d="M168 140 H 270" />

      {/* Raspberry Pi */}
      <rect x="270" y="100" width="120" height="80" rx="6" />
      <rect x="282" y="112" width="34" height="26" rx="2" opacity="0.5" />
      <rect x="324" y="112" width="52" height="10" rx="2" opacity="0.5" />
      <rect x="324" y="128" width="52" height="10" rx="2" opacity="0.5" />
      <rect x="282" y="148" width="94" height="20" rx="2" opacity="0.5" />
      <text x="270" y="206" className={label} fontSize="11" stroke="none">
        Raspberry Pi server
      </text>
      <text x="270" y="220" className={label} fontSize="11" stroke="none" opacity="0.7">
        every record, in the bag
      </text>

      {/* sync only when online */}
      <path d="M390 140 H 446" strokeDasharray="4 5" />
      <path d="M452 146c-8 0-12-12-2-14 0-16 28-16 30-2 14-4 22 12 8 16H452Z" />
      <text x="400" y="128" className={label} fontSize="11" stroke="none" opacity="0.7">
        sync
      </text>
      <text x="410" y="176" className={label} fontSize="11" stroke="none">
        cloud backup,
      </text>
      <text x="410" y="190" className={label} fontSize="11" stroke="none">
        only when online
      </text>
    </svg>
  );
}
