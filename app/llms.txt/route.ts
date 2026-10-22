import { OFFICES, PROJECTS, SECTORS, SERVICES, SITE } from "@/lib/data";

export const dynamic = "force-static";

// Serves /llms.txt — a plain-Markdown summary of the site for AI assistants and LLM crawlers
// (https://llmstxt.org). Generated from lib/data.ts so it stays in sync with the site.
export function GET() {
  const u = (path: string) => `${SITE.url}${path}`;
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.legalName} is a Pakistan-based general contracting and EPC firm (PEC Category CA, no financial limit) delivering high-rise towers, commercial complexes, residential communities, hospitals, academic campuses, industrial plants, deep foundations and infrastructure. Tagline: "${SITE.tagline}".`,
    "",
    `- Head office: ${SITE.headOffice}`,
    `- Phone: ${SITE.phone}`,
    `- Email: ${SITE.email} (tenders: ${SITE.tenderEmail})`,
    "",
    "## Main pages",
    "",
    `- [Home](${u("/")}): Company overview, sectors, featured projects and enquiry form`,
    `- [About](${u("/about")}): History, leadership, accreditations and owned plant fleet`,
    `- [Services](${u("/services")}): Six engineering service pillars from pre-construction to handover`,
    `- [Sectors](${u("/sectors")}): Eight specialised contracting divisions`,
    `- [Projects](${u("/projects")}): Portfolio of completed and ongoing landmark projects`,
    `- [Achievements](${u("/achievements")}): Licences, ISO certifications, safety record and milestones`,
    `- [Careers](${u("/careers")}): Open engineering roles and the graduate trainee programme`,
    `- [Contact](${u("/contact")}): Regional offices and the project tendering enquiry form`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- [${s.title}](${u(`/services/${s.slug}`)}): ${s.short}`),
    "",
    "## Sectors",
    "",
    ...SECTORS.map((s) => `- [${s.title}](${u(`/sectors/${s.slug}`)}): ${s.short}`),
    "",
    "## Projects",
    "",
    ...PROJECTS.map((p) => `- [${p.title}](${u(`/projects/${p.slug}`)}): ${p.category}, ${p.location} (${p.statusLabel})`),
    "",
    "## Offices",
    "",
    ...OFFICES.map((o) => `- ${o.label} (${o.tag}): ${o.address}; ${o.phone}; ${o.email}`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
