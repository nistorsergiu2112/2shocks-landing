import { Brand } from "./Brand";
import { contact } from "@/data/site";

const links = [
  ["How it works", "#how-it-works"],
  ["Features", "#features"],
  ["Coming soon", "#coming-soon"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className="nav-contact" href={`mailto:${contact.email}`}>Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href={`mailto:${contact.email}`}>Contact</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
