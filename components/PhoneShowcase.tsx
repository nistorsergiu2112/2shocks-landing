"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { features } from "@/data/site";
import s from "@/app/home.module.css";
const labels = ["Motorcycle passport", "Service history", "Your collection"];
const compactLabels = ["Passport", "History", "Collection"];
export function PhoneShowcase() {
  const [active, setActive] = useState(0);
  const [keyboard, setKeyboard] = useState(false);
  const tour = useRef<HTMLDivElement>(null);
  function select(index: number, fromKeyboard = false) {
    setKeyboard(fromKeyboard);
    setActive(index);
    if (!fromKeyboard && window.matchMedia("(max-width: 600px)").matches) {
      tour.current?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  }
  return <div className={s.showcase} ref={tour} data-input={keyboard ? "keyboard" : "pointer"}>
    <div className={s.tabs} role="tablist" aria-label="Explore the app">
      {features.map((feature, index) => <button key={feature.id} id={`tab-${feature.id}`} role="tab" type="button" aria-label={labels[index]} aria-selected={active === index} aria-controls={`panel-${feature.id}`} tabIndex={active === index ? 0 : -1} onClick={event => select(index, event.detail === 0)} onKeyDown={(event) => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % features.length;
        else if (event.key === "ArrowLeft") next = (index + features.length - 1) % features.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = features.length - 1;
        else return;
        event.preventDefault(); select(next, true); document.getElementById(`tab-${features[next].id}`)?.focus();
      }}><span className={s.fullTabLabel}>{labels[index]}</span><span className={s.compactTabLabel}>{compactLabels[index]}</span></button>)}
    </div>
    {features.map((feature, index) => <div key={feature.id} id={`panel-${feature.id}`} role="tabpanel" aria-labelledby={`tab-${feature.id}`} hidden={active !== index} tabIndex={0} className={s.featurePanel}>
      <div className={s.featureText}><p className={s.kicker}>{feature.eyebrow}</p><h3>{feature.title}</h3><p>{feature.description}</p><ul>{feature.points.map(point => <li key={point}>{point}</li>)}</ul>{feature.id === "plus" && <p className={s.tierNote}>Free includes one active motorcycle.<br />Up to 20 with 2Shocks Plus.</p>}</div>
      <div className={s.featureScreen}><div><div className={s.device}><Image src={feature.screen.src} alt={feature.screen.alt} width={1206} height={2622} sizes="(max-width: 600px) 75vw, 340px" /></div><a className={s.screenLink} href={feature.screen.src}>View full-size preview</a></div></div>
    </div>)}
  </div>;
}
