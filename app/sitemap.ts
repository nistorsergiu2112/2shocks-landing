import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/terms", "/privacy"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-08-11"), changeFrequency: path ? "yearly" : "monthly", priority: path ? 0.4 : 1 }));
}
