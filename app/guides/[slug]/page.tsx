import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { siteUrl } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { formatEditorialDate } from "@/data/editorial";
import { GooglePlayBadge } from "@/components/StoreBadges";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  return pageMetadata(guide.title, guide.description, `/guides/${slug}`);
}
export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "2Shocks", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Rider guides", item: `${siteUrl}/guides` },
    { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/guides/${slug}` },
  ] };
  return <main id="main-content" tabIndex={-1} className="legal-page guide-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className="legal-hero"><nav aria-label="Breadcrumb"><Link href="/">2Shocks</Link><span aria-hidden="true"> / </span><Link href="/guides">Rider guides</Link></nav><h1>{guide.title}</h1><p>{guide.description}</p><p className="guide-byline">By 2Shocks · Updated <time dateTime={guide.updatedAt}>{formatEditorialDate(guide.updatedAt)}</time></p></header>
    <article className="legal-content">{guide.sections.map(section => <section key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.checklist && <ul>{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}
      {section.table && <>
        {section.table.headers.length > 2 && <p className="guide-table-hint">On a small screen, scroll the table sideways.</p>}
        <div className="guide-table-scroll" role="region" aria-label={section.table.caption} tabIndex={0}>
          <table className="guide-table" data-columns={section.table.headers.length}>
            <caption>{section.table.caption}</caption>
            <thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead>
            <tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell || "\u00a0"}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </>}
      {section.links?.map(link => <p key={link.href}><Link href={link.href}>{link.label} →</Link></p>)}
    </section>)}
      {guide.source && <section><h2>Official source</h2><p><a href={guide.source.url}>{guide.source.label}</a></p></section>}
      <section className="guide-download"><h2>Your motorbike’s service book, on your phone.</h2><p>Start free with one active motorcycle. Keep your service history, available MOT records, mileage and maintenance plans together.</p><GooglePlayBadge location="guide" /><p>An account and internet connection are required. Coverage varies by motorcycle. iOS coming soon.</p></section>
      <section><h2>Keep exploring</h2>{guides.filter(item => item.slug !== slug).map(item => <p key={item.slug}><Link href={`/guides/${item.slug}`}>{item.title} →</Link></p>)}<p><Link href="/">Explore the 2Shocks motorcycle app →</Link></p></section>
    </article>
  </main>;
}
