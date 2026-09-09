import { ReactNode } from "react";
import { legalEntity } from "@/data/site";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <dl><div><dt>Last updated</dt><dd>9 September 2026</dd></div><div><dt>Operator</dt><dd>{legalEntity.name}</dd></div></dl>
      </header>
      <article className="legal-content">{children}</article>
    </main>
  );
}
