"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { features } from "@/data/site";

export function PhoneShowcase() {
  const [active, setActive] = useState(features[0].id);

  useEffect(() => {
    const nodes = features.map((feature) => document.getElementById(`feature-${feature.id}`)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive((entry.target as HTMLElement).dataset.feature ?? features[0].id)),
      { rootMargin: "-35% 0px -45%", threshold: 0.05 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="feature-showcase">
      <div className="phone-stage" aria-live="polite">
        <div className="phone-shadow" />
        <div className="phone-shell">
          <div className="phone-speaker" />
          <div className="phone-screen">
            {features.map((feature) => (
              <Image
                key={feature.id}
                src={feature.screen.src}
                alt={feature.screen.alt}
                width={390}
                height={844}
                className={active === feature.id ? "active" : ""}
                sizes="(max-width: 900px) 76vw, 320px"
              />
            ))}
          </div>
        </div>
        <div className="screen-caption"><span>{String(features.findIndex((item) => item.id === active) + 1).padStart(2, "0")}</span>{features.find((item) => item.id === active)?.screen.label}</div>
      </div>
      <div className="feature-copy-list">
        {features.map((feature) => (
          <article id={`feature-${feature.id}`} data-feature={feature.id} className="feature-copy" key={feature.id}>
            <p className="eyebrow">{feature.eyebrow}</p>
            <h3>{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <ul>{feature.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="mobile-phone">
              <div className="phone-shell"><div className="phone-speaker" /><div className="phone-screen"><Image src={feature.screen.src} alt={feature.screen.alt} width={390} height={844} sizes="82vw" /></div></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
