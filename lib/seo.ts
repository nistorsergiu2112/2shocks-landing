import type { Metadata } from "next";
import { contact, legalEntity, siteUrl } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string, absolute = false): Metadata {
  const url = new URL(path, siteUrl).href;
  const socialTitle = absolute ? title : `${title} | 2Shocks`;
  const images = [{ url: `${siteUrl}/brand/social-preview.png`, width: 1200, height: 630, alt: "2Shocks — motorcycle maintenance and MOT history. Coming soon for UK riders." }];
  return {
    title: absolute ? { absolute: title } : title, description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_GB", siteName: "2Shocks", url, title: socialTitle, description, images },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "2Shocks", legalName: legalEntity.name, url: `${siteUrl}/`, logo: `${siteUrl}/brand/2shocks-symbol-512.png`, email: contact.email },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "2Shocks", alternateName: ["2shocks.com", "2 Shocks"], url: `${siteUrl}/`, inLanguage: "en-GB", publisher: { "@id": `${siteUrl}/#organization` } },
    { "@type": "WebPage", "@id": `${siteUrl}/#webpage`, url: `${siteUrl}/`, name: "2Shocks | Motorcycle Maintenance & MOT History App", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#app` }, inLanguage: "en-GB" },
    { "@type": "MobileApplication", "@id": `${siteUrl}/#app`, name: "2Shocks", operatingSystem: "iOS, Android", applicationCategory: "UtilitiesApplication", url: `${siteUrl}/`, description: "A coming-soon UK motorcycle maintenance app for MOT history, service records and service planning. Not yet available to download.", publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};
