import type { MetadataRoute } from "next";
import { PROJECTS, SECTORS, SERVICES, SITE } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, freq: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${SITE.url}${path}`, lastModified: now, changeFrequency: freq, priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/about", 0.8), page("/services", 0.9), page("/sectors", 0.9),
    page("/projects", 0.9), page("/achievements", 0.7), page("/careers", 0.6), page("/contact", 0.8),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...SECTORS.map((s) => page(`/sectors/${s.slug}`, 0.8)),
    ...PROJECTS.map((p) => page(`/projects/${p.slug}`, 0.85)),
  ];
}
