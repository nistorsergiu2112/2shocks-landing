"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import s from "@/app/home.module.css";

const screens = [
  { name: "home", title: "Your record. Your next service.", tier: "Included in Free", description: "MOT information and your saved service plan, together.", alt: "Illustrative Honda motorcycle passport with MOT information and a saved service plan" },
  { name: "add-bike", title: "Start with your number plate.", tier: "Included in Free", description: "Save your first plate and confirm the model or variant.", alt: "2Shocks number-plate lookup screen for adding a motorcycle" },
  { name: "bike-record", title: "Know your motorcycle’s history.", tier: "Included in Free", description: "Review available MOT records and motorcycle details.", alt: "Illustrative Honda motorcycle details with MOT status, expiry and recorded mileage" },
  { name: "service-work", title: "Choose the work to discuss.", tier: "Included in Free", description: "Create, edit, complete or cancel your service plans.", alt: "2Shocks service planner with maintenance, tyres, brakes and other requested work" },
  { name: "plan-summary", title: "Keep the work and parts together.", tier: "Included in Free", description: "Save your plan with notes and suggested parts to confirm with a garage.", alt: "Illustrative saved service-plan summary with parts guidance and a reminder that nothing is sent automatically" },
  { name: "add-history", title: "Remember the work you’ve done.", tier: "Included in Free", description: "Add service-history records with dates, mileage and notes.", alt: "2Shocks screen for adding a completed motorcycle service-history record" },
  { name: "ready-for-garage", title: "Prepare for your next garage visit.", tier: "Included in Free", description: "Save a sheet, find a garage on Google Maps, then review and send an enquiry in your email app.", alt: "Illustrative 2Shocks service screen showing Find a garage and Create garage sheet" },
  { name: "collection", title: "Room for your collection.", tier: "2Shocks Plus", description: "Up to 20 active motorcycles. Remove bikes and switch plates.", alt: "2Shocks motorcycle collection with separate bike records and capacity for multiple motorcycles" },
  { name: "notification-center", title: "Your alerts, in one place.", tier: "Automatic alerts included in Free", description: "MOT reminders, mileage check-ins and saved-parts updates. Custom reminders require Plus.", alt: "Illustrative notification centre with MOT, chain maintenance and mileage reminders" },
];

export function HeroScreens() {
  const [active, setActive] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [drag, setDrag] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number; time: number; pointerId: number } | null>(null);
  const [keyboard, setKeyboard] = useState(false);
  const [manual, setManual] = useState(false);
  const select = (index: number, fromKeyboard = false) => {
    setKeyboard(fromKeyboard);
    setManual(true);
    setActive((index + screens.length) % screens.length);
    setDrag(0);
  };

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 601px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setDesktop(wide.matches); setReducedMotion(reduced.matches); };
    const visibility = () => setVisible(!document.hidden);
    update(); visibility();
    wide.addEventListener("change", update); reduced.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .2 });
    if (root.current) observer.observe(root.current);
    return () => {
      wide.removeEventListener("change", update); reduced.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility); observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!desktop || reducedMotion || interacting || hovered || focused || !inView || !visible) return;
    const timer = window.setTimeout(() => {
      setKeyboard(false);
      setManual(false);
      setActive(index => (index + 1) % screens.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, desktop, reducedMotion, interacting, hovered, focused, inView, visible]);

  const current = screens[active];
  return <div ref={root} className={s.heroCarousel} data-input={keyboard ? "keyboard" : "pointer"} role="region" aria-roledescription="carousel" aria-label="2Shocks feature screens"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className={s.carouselStage} data-dragging={drag !== 0} style={{ "--drag": `${drag}px` } as CSSProperties}
      onPointerDown={event => { if (event.pointerType === "mouse" || gesture.current) return; gesture.current = { x: event.clientX, y: event.clientY, time: performance.now(), pointerId: event.pointerId }; setInteracting(true); event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={event => {
        if (!gesture.current || gesture.current.pointerId !== event.pointerId) return;
        const x = event.clientX - gesture.current.x;
        const y = event.clientY - gesture.current.y;
        if (Math.abs(y) > Math.abs(x) && Math.abs(y) > 12) { gesture.current = null; setDrag(0); setInteracting(false); return; }
        if (Math.abs(x) > 8) setDrag(Math.max(-180, Math.min(180, x)));
      }}
      onPointerUp={event => {
        if (gesture.current && gesture.current.pointerId !== event.pointerId) return;
        if (gesture.current?.pointerId === event.pointerId) {
          const x = event.clientX - gesture.current.x;
          const y = event.clientY - gesture.current.y;
          const velocity = Math.abs(x) / Math.max(1, performance.now() - gesture.current.time);
          if ((Math.abs(x) > 45 || (Math.abs(x) > 12 && velocity > .35)) && Math.abs(x) > Math.abs(y)) select(active + (x < 0 ? 1 : -1));
        }
        gesture.current = null; setDrag(0); setInteracting(false);
      }} onPointerCancel={() => { gesture.current = null; setDrag(0); setInteracting(false); }}>
      {screens.map((screen, index) => {
        let offset = (index - active + screens.length) % screens.length;
        if (offset > screens.length / 2) offset -= screens.length;
        return <div key={screen.name} className={s.carouselPhone} data-position={offset === 0 ? "active" : offset === -1 ? "previous" : offset === 1 ? "next" : "hidden"}
          aria-hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${screens.length}: ${screen.title}`}>
          <div className={s.device}><Image src={`/screens/${screen.name}.webp`} alt={screen.alt} width={1170} height={2532}
            priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 600px) 280px, (max-width: 1312px) 315px, (max-width: 1500px) 24vw, 360px" draggable={false} /></div>
        </div>;
      })}
    </div>
    <div className={s.carouselCaption} aria-live={manual ? "polite" : "off"} aria-atomic="true">
      <span>{current.tier}</span><h2>{current.title}</h2><p>{current.description}</p>
    </div>
    <div className={s.carouselControls}>
      <div className={s.carouselDots} aria-label="Choose an app screen">{screens.map((screen, index) => <button key={screen.name} type="button" aria-label={`Show ${screen.title}`} aria-current={active === index ? "true" : undefined} onClick={event => select(index, event.detail === 0)}><span /></button>)}</div>
    </div>
    <p className={s.carouselHint}>{desktop ? "Explore the app, one screen at a time" : "Swipe to explore · 9 app screens"}</p>
  </div>;
}
