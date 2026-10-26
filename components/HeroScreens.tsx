"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import s from "@/app/home.module.css";

// Approved iPhone captures with illustrative records; source provenance is retained
// in docs/RELEASE-ASSETS-2026-10-26.json. Desktop keeps the static composition.
const phones = [
  { screen: "01-service-history-capture", position: "history", label: "service history", alt: "Illustrative iPhone preview of private service history, mileage and maintenance notes" },
  { screen: "03-service-plan-capture", position: "plan", label: "motorcycle and service plan", alt: "Illustrative iPhone preview of a motorcycle record and next service plan" },
  { screen: "02-mot-history-capture", position: "mot", label: "MOT history", alt: "Illustrative iPhone preview of available MOT results and advisories" },
];

export function HeroScreens() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const gesture = useRef<{ x: number; y: number; id: number } | null>(null);
  const swiped = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 600px)");
    const update = () => { setMobile(query.matches); setDrag(0); gesture.current = null; };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function select(index: number, focus = false) {
    const next = (index + phones.length) % phones.length;
    setActive(next);
    setDrag(0);
    if (focus) links.current[next]?.focus({ preventScroll: true });
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!gesture.current || gesture.current.id !== event.pointerId) return;
    const x = event.clientX - gesture.current.x;
    const y = event.clientY - gesture.current.y;
    if (Math.abs(y) > Math.abs(x) && Math.abs(y) > 12) {
      gesture.current = null;
      setDrag(0);
      return;
    }
    if (Math.abs(x) > 10) {
      swiped.current = true;
      setDrag(Math.max(-100, Math.min(100, x)));
    }
  }

  return <div className={s.heroArtwork} role="group" aria-label="2Shocks iPhone app previews with example records"
    aria-roledescription={mobile ? "carousel" : undefined} data-dragging={drag !== 0}
    style={{ "--swipe-offset": `${drag}px` } as CSSProperties}
    onPointerDown={event => {
      if (!mobile || !event.isPrimary || event.button !== 0) return;
      gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
      swiped.current = false;
    }}
    onPointerMove={move}
    onPointerUp={event => {
      if (!gesture.current || gesture.current.id !== event.pointerId) return;
      const x = event.clientX - gesture.current.x;
      const y = event.clientY - gesture.current.y;
      if (Math.abs(x) >= 40 && Math.abs(x) > Math.abs(y)) {
        swiped.current = true;
        select(active + (x < 0 ? 1 : -1));
      }
      gesture.current = null;
      setDrag(0);
    }}
    onPointerCancel={() => { gesture.current = null; setDrag(0); }}
    onClickCapture={event => {
      if (swiped.current && event.detail !== 0) { event.preventDefault(); event.stopPropagation(); }
      swiped.current = false;
    }}
    onKeyDown={event => {
      if (!mobile || event.altKey || event.ctrlKey || event.metaKey) return;
      const next = event.key === "ArrowRight" ? active + 1 : event.key === "ArrowLeft" ? active - 1 : event.key === "Home" ? 0 : event.key === "End" ? phones.length - 1 : null;
      if (next === null) return;
      event.preventDefault();
      select(next, true);
    }}>
    <div className={s.artworkPlate} aria-hidden="true" />
    {phones.map(({ screen, position, label, alt }, index) => {
      const offset = (index - active + phones.length) % phones.length;
      return <a key={screen} ref={element => { links.current[index] = element; }} className={s.artworkPhone} data-screen={position}
        data-mobile-position={offset === 0 ? "active" : offset === 1 ? "next" : "previous"}
        href={`/screens/store-2026-10-22/${screen}.png`} target="_blank" rel="noopener" draggable={false}
        tabIndex={mobile && index !== active ? -1 : 0}
        onFocus={() => { if (mobile) select(index); }}
        aria-current={mobile && index === active ? "true" : undefined}
        aria-label={`View ${label} at full resolution (opens in a new tab)`}>
        <picture>
          <source srcSet={`/screens/web/${screen}.webp`} type="image/webp" />
          <Image src={`/screens/store-2026-10-22/${screen}.png`} alt={alt} width={1206} height={2622}
            unoptimized loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"}
            sizes="(max-width: 600px) 62vw, (max-width: 1200px) 30vw, 320px" draggable={false} />
        </picture>
      </a>;
    })}
    <span className={s.artworkStatus} aria-live="polite" aria-atomic="true">{mobile ? `${phones[active].label} preview, ${active + 1} of ${phones.length}` : ""}</span>
  </div>;
}
