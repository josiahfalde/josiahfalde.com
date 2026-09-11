import { lazy, Suspense, useState } from "react";
import type { GlobePlace } from "../components/Globe";
import Mark from "../components/Mark";
import PageHeader from "../components/PageHeader";
import PhotoSlot from "../components/PhotoSlot";
import Reveal from "../components/Reveal";

// d3-geo and the coastline data only load on this page.
const Globe = lazy(() => import("../components/Globe"));

interface Place extends GlobePlace {
  name: string;
  when: string;
  note: string;
  /**
   * Root-relative photo paths (public/photos/...). Leave empty until there
   * are real shots; the entry then renders as text only, never as an empty
   * frame. See public/photos/README.md for the drop-in slots.
   */
  photos: { src: string; alt: string; portrait?: boolean }[];
}

const PLACES: Place[] = [
  {
    id: "haiti",
    name: "Haiti",
    label: "Haiti",
    when: "Home base",
    lon: -72.53,
    lat: 18.23,
    side: "left",
    note: "More home than a place I have been. My family's ministry is based in southern Haiti, and the mobile clinics, the rebuilt hospital, and the contour map on this site's front page (the coast at Cayes-Jacmel) all come from here.",
    photos: [{ src: "/photos/photography/01.jpg", alt: "Sunrise over the Haitian coast, a boat cutting toward cliffs" }],
  },
  {
    id: "dominican-republic",
    name: "Dominican Republic",
    label: "Dominican Republic",
    when: "Since 2021",
    lon: -70.3,
    lat: 18.9,
    note: "The other half of the island. Mobile clinics and church plants with Parakaleo, translating between patients and providers.",
    photos: [
      {
        src: "/photos/clinic.jpg",
        alt: "Josiah preaching at a church plant during a medical clinic in the Dominican Republic",
        portrait: true,
      },
    ],
  },
  {
    id: "states",
    name: "45 states and counting",
    label: "45 states",
    when: "Deputation",
    lon: -98.5,
    lat: 39.5,
    note: "Most of these came on deputation, traveling with my family from church to church across the country to raise support for the work in Haiti. Five to go.",
    photos: [],
  },
  {
    id: "norway",
    name: "Norway",
    label: "Norway",
    when: "Summer 2026",
    lon: 8.5,
    lat: 61.5,
    note: "The trip I took right after graduating, a senior trip of sorts.",
    photos: [],
  },
  {
    id: "alaska",
    name: "Alaska",
    label: "Alaska",
    when: "Senior trip",
    lon: -150.5,
    lat: 63.5,
    side: "left",
    note: "My high school senior trip.",
    photos: [],
  },
  {
    id: "spain-france",
    name: "Spain and France",
    label: "Spain & France",
    when: "For fun",
    lon: 0.5,
    lat: 43.0,
    note: "Two countries in one go, purely for the fun of it.",
    photos: [],
  },
];

/** Photo strip: 1 wide shot fills the width; 2 sit side by side; 3 go portrait. */
function Photos({ place }: { place: Place }) {
  const n = place.photos.length;
  const cols = n === 1 ? "" : n === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  const aspect = n === 1 ? "aspect-[3/2] sm:aspect-[21/9]" : n === 2 ? "aspect-[3/2]" : "aspect-[4/5]";
  return (
    <ul className={`grid gap-3 sm:gap-4 ${cols}`}>
      {place.photos.map((ph, i) => (
        <li key={ph.src}>
          <PhotoSlot src={ph.src} alt={ph.alt} label={`${place.name}, ${i + 1} / ${n}`} className={aspect} />
        </li>
      ))}
    </ul>
  );
}

function Caption({ place, className = "" }: { place: Place; className?: string }) {
  return (
    <div className={className}>
      <h2 className="font-serif text-3xl tracking-tight">{place.name}</h2>
      <p className="mt-2 font-mono text-xs text-ink-faint">{place.when}</p>
    </div>
  );
}

/** One entry per place. Wide photos sit above the note; a single portrait
 *  photo sits beside it; no photos yet means the note stands on its own. */
function Entry({ place }: { place: Place }) {
  const single = place.photos.length === 1 ? place.photos[0] : null;
  if (single?.portrait) {
    return (
      <article id={place.id} className="grid gap-6 scroll-mt-24 sm:grid-cols-[1fr_1.7fr] sm:gap-10 lg:grid-cols-[1fr_1.2fr_1.4fr]">
        <PhotoSlot src={single.src} alt={single.alt} className="aspect-[4/5] w-full max-w-md" />
        <Caption place={place} className="sm:pt-1" />
        <p className="max-w-xl leading-relaxed text-ink-soft sm:col-start-2 lg:col-start-3 lg:pt-1">{place.note}</p>
      </article>
    );
  }
  return (
    <article id={place.id} className="scroll-mt-24">
      {place.photos.length > 0 && <Photos place={place} />}
      <div className={`grid gap-3 sm:grid-cols-[1fr_1.7fr] sm:gap-10 ${place.photos.length ? "mt-5 sm:mt-6" : ""}`}>
        <Caption place={place} />
        <p className="max-w-xl leading-relaxed text-ink-soft sm:pt-1">{place.note}</p>
      </div>
    </article>
  );
}

export default function Places() {
  const [active, setActive] = useState<string | null>(null);
  const current = PLACES.find((p) => p.id === active);

  return (
    <>
      <PageHeader
        mark="globe"
        title="Where I’ve been"
        lead="Most of it came with the work: my family’s ministry took us through Haiti, the Dominican Republic, and forty-five states. A few trips were just for the trip."
      />

      {/* The globe and its index */}
      <section aria-label="Map of places" className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <Reveal>
            <div className="mx-auto w-full max-w-[720px]">
              <Suspense fallback={<div aria-hidden="true" className="aspect-square w-full rounded-full bg-raised" />}>
                <Globe places={PLACES} active={active} onSelect={setActive} />
              </Suspense>
              <p className="mt-4 text-center font-mono text-[11px] text-ink-faint" aria-live="polite">
                {current ? `${current.name}. ${current.when}.` : "Drag to spin. Pick a place to center it."}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol>
              {PLACES.map((p) => {
                const on = p.id === active;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => setActive(p.id)}
                      aria-pressed={on}
                      className="group flex w-full items-center gap-3.5 rounded-md px-3 py-3 text-left transition-colors hover:bg-raised"
                    >
                      <Mark
                        name="station"
                        className={on ? "text-navy" : "text-navy/45 transition-colors group-hover:text-navy"}
                      />
                      <span
                        className={`font-serif text-xl leading-none tracking-tight sm:text-2xl ${
                          on ? "text-navy" : "text-ink transition-colors group-hover:text-navy"
                        }`}
                      >
                        {p.name}
                      </span>
                      <span className="ml-auto shrink-0 pl-4 font-mono text-xs text-ink-faint">{p.when}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* One entry per place: the photos first, then a short note */}
      <section
        aria-label="Places"
        className="mx-auto mt-24 max-w-content space-y-20 px-5 sm:mt-32 sm:space-y-28 sm:px-8"
      >
        {PLACES.map((p) => (
          <Reveal key={p.id}>
            <Entry place={p} />
          </Reveal>
        ))}
        <p className="text-sm text-ink-faint">
          Not the whole list. Canada and a few others did not get a section.
        </p>
      </section>
    </>
  );
}
