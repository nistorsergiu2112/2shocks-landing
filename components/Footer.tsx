import Link from "next/link";
import { Brand } from "./Brand";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Brand /><p>A clearer record of motorcycle ownership.</p></div>
        <div className="footer-links">
          <div><span>Contact</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div><span>Legal</span><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link></div>
        </div>
      </div>
      <div className="footer-base"><span>© {new Date().getFullYear()} 2Shocks</span><span>Built for riders in the United Kingdom</span></div>
    </footer>
  );
}
