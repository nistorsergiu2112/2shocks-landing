import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { guides } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Editorial dates: update only when the page content changes, not on every build.
  return [
    { url: `${siteUrl}/`, lastModified: "2026-09-11" },
    { url: `${siteUrl}/guides`, lastModified: "2026-09-11" },
    ...guides.map(({ slug }) => ({ url: `${siteUrl}/guides/${slug}`, lastModified: "2026-09-11" })),
    ...["terms", "privacy"].map(path => ({ url: `${siteUrl}/${path}`, lastModified: "2026-09-09" })),
  ];
}
