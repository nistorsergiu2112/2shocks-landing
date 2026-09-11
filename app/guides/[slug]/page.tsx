import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { siteUrl } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

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
    <header className="legal-hero"><nav aria-label="Breadcrumb"><Link href="/">2Shocks</Link><span aria-hidden="true"> / </span><Link href="/guides">Rider guides</Link></nav><h1>{guide.title}</h1><p>{guide.description}</p><p className="guide-byline">By 2Shocks · Updated <time dateTime="2026-09-11">11 September 2026</time></p></header>
    <article className="legal-content">{guide.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
      {guide.source && <section><h2>Official source</h2><p><a href={guide.source.url}>{guide.source.label}</a></p></section>}
      <section><h2>Keep exploring</h2>{guides.filter(item => item.slug !== slug).map(item => <p key={item.slug}><Link href={`/guides/${item.slug}`}>{item.title} →</Link></p>)}<p><Link href="/">Explore the 2Shocks motorcycle app →</Link></p></section>
    </article>
  </main>;
}
