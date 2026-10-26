"use client";
import { useRef } from "react";
import { googlePlayUrl } from "@/data/site";
import { Brand } from "./Brand";

const links = [
  ["How it works", "/#how-it-works"],
  ["Features", "/#features"],
  ["Free & Plus", "/#plans"],
  ["Website privacy", "/privacy"],
  ["App privacy", "/app-privacy"],
  ["Website terms", "/terms"],
  ["App terms", "/app-terms"],
  ["Account deletion", "/delete-account"],
  ["Support", "/support"],
];

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.filter(([, href]) => ["/#how-it-works", "/#features", "/#plans", "/support"].includes(href)).map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className="nav-contact" href={googlePlayUrl}>Get it on Google Play</a>
        </nav>
        <details className="mobile-nav" ref={menu} onKeyDown={(event) => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation" onClick={() => { if (menu.current) menu.current.open = false; }}>
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href={googlePlayUrl}>Get it on Google Play</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
