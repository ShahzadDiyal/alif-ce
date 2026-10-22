import type { MetadataRoute } from "next";
import { PROJECTS, SECTORS, SERVICES, SITE } from "@/lib/data";

export const dynamic = "force-static";

// Update when site content changes meaningfully (keeps lastmod stable between builds).
const LAST_UPDATED = new Date("2026-10-22");

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, freq: Freq = "monthly", images?: string[]) => ({
    url: `${SITE.url}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: freq,
    priority,
    ...(images?.length ? { images } : {}),
  });
  return [
    page("/", 1, "weekly"),
    page("/about", 0.8),
    page("/services", 0.9),
    page("/sectors", 0.9),
    page("/projects", 0.9, "weekly"),
    page("/achievements", 0.7),
    page("/careers", 0.6, "weekly"),
    page("/contact", 0.8),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8, "monthly", [s.image])),
    ...SECTORS.map((s) => page(`/sectors/${s.slug}`, 0.8, "monthly", [s.image])),
    ...PROJECTS.map((p) => page(`/projects/${p.slug}`, 0.85, "monthly", [p.image])),
  ];
}
