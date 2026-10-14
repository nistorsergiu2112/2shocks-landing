import Link from "next/link";
import { Brand } from "./Brand";
import { contact, legalEntity } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Brand /><p>Your bike’s history.<br />Your next service. Together.</p>
          <div className="footer-socials" aria-label="Social profiles coming soon">
            <span className="social-placeholder" role="img" aria-label="X — coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" /></svg></span>
            <span className="social-placeholder" role="img" aria-label="Facebook — coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.3A23 23 0 0 0 15 2c-2.8 0-4.7 1.7-4.7 4.9v2.6H7V13h3.3v9H14Z" /></svg></span>
            <span className="social-caption">Find us here soon</span>
          </div>
        </div>
        <div className="footer-links">
          <div><span>Say hello</span><a className="footer-email" href={`mailto:${contact.email}`}>{contact.email}</a><p>Questions about 2Shocks?<br />We’re an email away.</p></div>
          <div><span>The details</span><Link href="/guides">Rider guides</Link><Link href="/privacy">Website privacy</Link><Link href="/app-privacy">App privacy</Link><Link href="/terms">Website terms</Link><Link href="/app-terms">App terms</Link></div>
        </div>
      </div>
      <div className="footer-company"><div><strong>{legalEntity.name}</strong><span>Registered in England & Wales · No. {legalEntity.companyNumber}</span></div><p><span>Registered office</span>{legalEntity.registeredOffice}</p></div>
      <div className="footer-base"><span>© {new Date().getFullYear()} 2Shocks</span><span>Built for riders. Starting in the UK.</span></div>
    </footer>
  );
}
