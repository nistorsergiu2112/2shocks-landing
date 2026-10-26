import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { guides } from "@/data/guides";
import { editorialDates } from "@/data/editorial";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Editorial dates: update only when the page content changes, not on every build.
  return [
    { url: `${siteUrl}/`, lastModified: editorialDates.home },
    { url: `${siteUrl}/guides`, lastModified: editorialDates.guideIndex },
    ...guides.map(({ slug, updatedAt }) => ({ url: `${siteUrl}/guides/${slug}`, lastModified: updatedAt })),
    ...["terms", "privacy", "app-terms", "app-privacy", "delete-account", "support"].map(path => ({ url: `${siteUrl}/${path}`, lastModified: path === "privacy" ? editorialDates.websitePrivacy : editorialDates.policies })),
  ];
}
