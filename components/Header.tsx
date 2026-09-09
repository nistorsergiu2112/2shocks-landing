"use client";
import { useRef } from "react";
import Link from "next/link";
import { Brand } from "./Brand";

const links = [
  ["How it works", "/#how-it-works"],
  ["Features", "/#features"],
  ["Free & Plus", "/#plans"],
  ["Privacy", "/privacy"],
  ["Terms & conditions", "/terms"],
];

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <Link className="nav-contact" href="/#launch">Contact us</Link>
        </nav>
        <details className="mobile-nav" ref={menu} onKeyDown={(event) => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation" onClick={() => { if (menu.current) menu.current.open = false; }}>
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <Link href="/#launch">Contact us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
