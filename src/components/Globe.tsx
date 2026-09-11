import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { geoDistance, geoGraticule10, geoOrthographic, geoPath } from "d3-geo";
import landUrl from "world-atlas/land-110m.json?url";

export interface GlobePlace {
  id: string;
  /** Label drawn next to the mark on the globe. */
  label: string;
  lon: number;
  lat: number;
  /** Which side of the mark the label sits on (defaults to right). */
  side?: "left" | "right";
}

const SIZE = 600;
/** Horizontal margin so labels next to marks near the limb are never clipped. */
const PAD = 70;
const R = 286;
const GRATICULE = geoGraticule10();
/** Marks farther than this (radians) from the centre are behind the limb or too foreshortened. */
const VISIBLE = 1.32;
const DEG_PER_UNIT = 180 / (Math.PI * R);

type Rotation = [number, number];
type LandFeature = Parameters<ReturnType<typeof geoPath>>[0];

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const shortest = (from: number, to: number) => ((to - from + 540) % 360) - 180;

/**
 * The page's signature: an orthographic globe drawn in the site's map
 * language (paper sphere, faint graticule, navy coastlines, survey marks at
 * each place). Drag or use the arrow keys to spin it; it turns on its own
 * until touched. Land is Natural Earth 1:110m, fetched once on mount, so the
 * sphere and graticule are on screen immediately either way.
 */
export default function Globe({
  places,
  active,
  onSelect,
}: {
  places: GlobePlace[];
  active: string | null;
  onSelect: (id: string) => void;
}) {
  const [land, setLand] = useState<LandFeature | null>(null);
  const [rot, setRotState] = useState<Rotation>([75, -28]);
  const rotRef = useRef<Rotation>(rot);
  const setRot = useCallback((r: Rotation) => {
    rotRef.current = r;
    setRotState(r);
  }, []);

  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const lastDragMoved = useRef(false);
  const touched = useRef(false);
  const flight = useRef(0);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // Coastlines
  useEffect(() => {
    let alive = true;
    Promise.all([fetch(landUrl).then((r) => r.json()), import("topojson-client")])
      .then(([topo, { feature }]) => {
        if (alive) setLand(feature(topo, topo.objects.land) as unknown as LandFeature);
      })
      .catch(() => {
        /* the sphere still draws without coastlines */
      });
    return () => {
      alive = false;
    };
  }, []);

  // Idle spin until the first interaction, and only while on screen.
  useEffect(() => {
    if (reduced) return;
    const el = svgRef.current;
    if (!el) return;
    let id = 0;
    let visible = false;
    const tick = () => {
      if (visible && !touched.current && !drag.current) {
        setRot([rotRef.current[0] - 0.045, rotRef.current[1]]);
      }
      id = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [reduced, setRot]);

  // Fly to the selected place.
  useEffect(() => {
    if (!active) return;
    const p = places.find((x) => x.id === active);
    if (!p) return;
    touched.current = true;
    cancelAnimationFrame(flight.current);
    const from: Rotation = [rotRef.current[0], rotRef.current[1]];
    const to: Rotation = [-p.lon, -p.lat];
    const dLon = shortest(from[0], to[0]);
    const dLat = to[1] - from[1];
    if (reduced) {
      setRot(to);
      return;
    }
    const start = performance.now();
    const dur = 900;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const k = easeInOut(t);
      setRot([from[0] + dLon * k, from[1] + dLat * k]);
      if (t < 1) flight.current = requestAnimationFrame(step);
    };
    flight.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(flight.current);
  }, [active, places, reduced, setRot]);

  // Drag to spin
  const onPointerDown = (e: PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, moved: false };
    touched.current = true;
    cancelAnimationFrame(flight.current);
  };
  const onPointerMove = (e: PointerEvent<SVGSVGElement>) => {
    const d = drag.current;
    if (!d) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const k = ((SIZE + 2 * PAD) / rect.width) * DEG_PER_UNIT;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true;
    d.x = e.clientX;
    d.y = e.clientY;
    const [lam, phi] = rotRef.current;
    setRot([lam + dx * k, Math.max(-75, Math.min(75, phi - dy * k))]);
  };
  const onPointerUp = (e: PointerEvent<SVGSVGElement>) => {
    if (drag.current && e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    // A drag that moved must not count as a click on the mark underneath.
    lastDragMoved.current = Boolean(drag.current?.moved);
    drag.current = null;
    setTimeout(() => (lastDragMoved.current = false), 0);
  };

  const onKeyDown = (e: KeyboardEvent<SVGSVGElement>) => {
    const [lam, phi] = rotRef.current;
    const s = 6;
    const map: Record<string, Rotation> = {
      ArrowLeft: [lam + s, phi],
      ArrowRight: [lam - s, phi],
      ArrowUp: [lam, Math.min(75, phi + s)],
      ArrowDown: [lam, Math.max(-75, phi - s)],
    };
    const next = map[e.key];
    if (!next) return;
    e.preventDefault();
    touched.current = true;
    cancelAnimationFrame(flight.current);
    setRot(next);
  };

  const projection = geoOrthographic().scale(R).translate([SIZE / 2, SIZE / 2]).rotate(rot).clipAngle(90);
  const path = geoPath(projection);
  const centre: [number, number] = [-rot[0], -rot[1]];

  return (
    <svg
      ref={svgRef}
      viewBox={`${-PAD} 0 ${SIZE + 2 * PAD} ${SIZE}`}
      role="img"
      tabIndex={0}
      aria-label="Globe marking the places on this page. Drag to spin it, or use the arrow keys."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
      className="block h-auto w-full cursor-grab select-none text-navy [touch-action:none] active:cursor-grabbing"
    >
      <defs>
        <radialGradient id="globe-limb" cx="50%" cy="50%" r="50%">
          <stop offset="72%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.14" />
        </radialGradient>
      </defs>

      {/* Sphere */}
      <circle cx={SIZE / 2} cy={SIZE / 2} r={R} className="fill-raised" />
      <path d={path(GRATICULE) ?? ""} className="stroke-navy/20" strokeWidth="0.6" fill="none" />
      {land && (
        <path
          d={path(land) ?? ""}
          className="fill-navy/10 stroke-navy/60"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      )}
      <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="url(#globe-limb)" />
      <circle cx={SIZE / 2} cy={SIZE / 2} r={R} className="stroke-navy/40" strokeWidth="1" fill="none" />

      {/* Marks */}
      {places.map((p) => {
        if (geoDistance([p.lon, p.lat], centre) > VISIBLE) return null;
        const pt = projection([p.lon, p.lat]);
        if (!pt) return null;
        const [x, y] = pt;
        const isActive = p.id === active;
        const left = p.side === "left";
        return (
          <g
            key={p.id}
            role="button"
            tabIndex={-1}
            aria-label={`Center the globe on ${p.label}`}
            onClick={() => {
              if (!lastDragMoved.current) onSelect(p.id);
            }}
            className="cursor-pointer"
          >
            {isActive && <circle cx={x} cy={y} r="11" className="stroke-navy/40" strokeWidth="1" fill="none" />}
            <circle cx={x} cy={y} r={isActive ? 6 : 4.5} className="fill-paper stroke-navy" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="1.7" className="fill-navy" />
            <text
              x={left ? x - 11 : x + 11}
              y={y}
              textAnchor={left ? "end" : "start"}
              dominantBaseline="central"
              className={`font-mono text-[22px] sm:text-[17px] lg:text-[15px] ${isActive ? "fill-ink" : "fill-ink-soft"}`}
              paintOrder="stroke"
              stroke="rgb(var(--c-raised))"
              strokeWidth="3"
              strokeLinejoin="round"
            >
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
