import { ReactNode } from "react";
import { legalEntity } from "@/data/site";

export function LegalPage({ eyebrow, title, intro, children, lastUpdated = "3 October 2026" }: { eyebrow: string; title: string; intro: string; children: ReactNode; lastUpdated?: string }) {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <dl><div><dt>Last updated</dt><dd>{lastUpdated}</dd></div><div><dt>Operator</dt><dd>{legalEntity.name}</dd></div></dl>
      </header>
      <article className="legal-content">{children}</article>
    </main>
  );
}
