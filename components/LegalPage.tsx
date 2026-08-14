import { ReactNode } from "react";
import { legalEntity } from "@/data/site";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <dl><div><dt>Effective</dt><dd>11 August 2026</dd></div><div><dt>Operator</dt><dd>{legalEntity.name}</dd></div></dl>
      </header>
      {legalEntity.isMock && <aside className="draft-notice" role="note"><strong>Draft operator details</strong><span>The company name, number and address on this page are temporary and must be replaced before public launch.</span></aside>}
      <article className="legal-content">{children}</article>
    </main>
  );
}
