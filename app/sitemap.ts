import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { guides } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Editorial dates: update only when the page content changes, not on every build.
  return [
    { url: `${siteUrl}/`, lastModified: "2026-10-08" },
    { url: `${siteUrl}/guides`, lastModified: "2026-09-11" },
    ...guides.map(({ slug }) => ({ url: `${siteUrl}/guides/${slug}`, lastModified: slug === "motorcycle-service-history" ? "2026-10-08" : "2026-09-11" })),
    ...["terms", "privacy", "app-terms", "app-privacy"].map(path => ({ url: `${siteUrl}/${path}`, lastModified: path.startsWith("app-") ? "2026-10-08" : "2026-10-03" })),
  ];
}
