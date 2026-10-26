import Link from "next/link";
import { guides } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Motorcycle Ownership Guides", "Practical guides from 2Shocks on checking motorcycle MOT history, keeping service records and preparing for your next garage visit.", "/guides");

export default function Guides() {
  return <main id="main-content" tabIndex={-1} className="legal-page guide-page">
    <header className="legal-hero"><p className="eyebrow">2Shocks / Rider guides</p><h1>Know your bike’s history.</h1><p>Practical ways to keep your motorcycle’s records useful, from an MOT check to your next conversation with a garage.</p></header>
    <div className="legal-content">{guides.map(guide => <section key={guide.slug}><h2><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2><p>{guide.description}</p><Link href={`/guides/${guide.slug}`}>Read the guide →</Link></section>)}<section><h2>A record you can build on</h2><p>2Shocks is a motorcycle maintenance app for UK riders, available on Google Play. iOS is coming soon.</p><Link href="/">Explore the 2Shocks app →</Link></section></div>
  </main>;
}
