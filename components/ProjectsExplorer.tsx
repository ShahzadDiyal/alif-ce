"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, MapPin, Search } from "lucide-react";
import { PORTFOLIO_COUNTS, PROJECT_FILTERS, PROJECTS, type Project } from "@/lib/data";

const REGIONS = ["All Regions", "Lahore", "Karachi", "Islamabad", "Punjab"];

function ArchiveCard({ project }: { project: Project }) {
  return (
    <article className="anim-fade-up lift group flex flex-col overflow-hidden rounded-card border border-line bg-white">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" className="h-44 md:h-80 w-full object-cover" />
        <span className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-[10.5px] font-bold tracking-wider uppercase ${
          project.status === "Completed" ? "bg-gold text-ink" : "bg-ink/85 text-gold-light backdrop-blur"
        }`}>
          {project.statusLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10.5px] font-bold tracking-[0.16em] text-gold-dark uppercase">{project.category}</p>
        <h3 className="mt-1.5 font-display text-xl leading-snug text-ink">
          <Link href={`/projects/${project.slug}`} className="hover:text-gold-dark">{project.title}</Link>
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-[12.5px] font-semibold text-muted">
          <MapPin className="h-3.5 w-3.5 text-gold-dark" /> {project.location}
        </p>
        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted">{project.cardText}</p>
        <dl className="mt-4 space-y-1.5 border-t border-line pt-3.5">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline justify-between gap-3 text-[12.5px]">
              <dt className="text-muted">{m.label}:</dt>
              <dd className="text-right font-bold text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
        <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-dark hover:text-ink">
          Technical Data <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState("all");
  const [region, setRegion] = useState("All Regions");
  const [status, setStatus] = useState<"All" | "Ongoing" | "Completed">("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PROJECTS.length };
    for (const f of PROJECT_FILTERS.slice(1)) {
      map[f.key] = PROJECTS.filter((p) => p.filters.includes(f.key)).length;
    }
    return map;
  }, []);

  const matches = (p: Project) =>
    (filter === "all" || p.filters.includes(filter)) &&
    (region === "All Regions" || p.region === region) &&
    (status === "All" || p.status === status) &&
    (query.trim() === "" ||
      `${p.title} ${p.location} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()));

  const filtered = PROJECTS.filter(matches);
  const featured = PROJECTS[0];
  const showFeatured = matches(featured);
  const archive = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <>
      {/* FILTER BAR */}
      <section id="portfolio" className="scroll-mt-28 border-b border-line bg-cream">
        <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[12px] font-bold tracking-wider text-muted uppercase max-md:mb-1 max-md:w-full">Filter Projects:</span>
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition max-md:px-3.5 max-md:py-1.5 max-md:text-[12px] ${
                  filter === f.key ? "bg-gold text-ink" : "border border-line bg-white text-ink hover:border-gold"
                }`}
              >
                {f.label} ({counts[f.key] ?? 0})
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="relative min-w-[220px] flex-1 sm:max-w-xs">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or city"
                className="field !pl-10"
                aria-label="Search projects or city"
              />
            </label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="field !w-auto" aria-label="Region">
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
            <div className="flex overflow-hidden rounded-full border border-line bg-white" role="group" aria-label="Status">
              {(["All", "Ongoing", "Completed"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-4 py-2.5 text-[12.5px] font-bold transition ${status === s ? "bg-gold text-ink" : "text-ink hover:bg-cream"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {showFeatured && (
        <section className="bg-paper">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Featured Masterpiece</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Flagship High-Rise Engineering</h2>
              </div>
              <p className="flex items-center gap-1.5 text-[12px] font-semibold text-gold-dark lg:justify-self-end">
                <BadgeCheck className="h-4 w-4" /> PEC No-Limit CA Classified
              </p>
            </div>
            <article className="anim-fade-up mt-10 overflow-hidden rounded-card border border-line bg-white lg:grid lg:grid-cols-2">
              <div className="relative min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-md bg-ink/85 px-3 py-1.5 text-[10.5px] font-bold tracking-wider text-gold-light uppercase backdrop-blur">
                  PEC No-Limit CA Classified
                </span>
              </div>
              <div className="p-7 max-sm:p-5 sm:p-9">
                <p className="text-[11px] font-bold tracking-[0.2em] text-gold-dark uppercase">{featured.category} • {featured.statusLabel}</p>
                <h3 className="mt-2.5 font-display text-[28px] leading-tight text-ink max-sm:text-[23px]">{featured.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-semibold text-muted">
                  <MapPin className="h-3.5 w-3.5 text-gold-dark" /> {featured.location}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{featured.cardText}</p>
                <dl className="mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[10.5px] font-bold tracking-wider text-muted uppercase">{m.label}</dt>
                      <dd className="mt-1 font-display text-xl text-ink">{m.value}</dd>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-[10.5px] font-bold tracking-wider text-muted uppercase">Scope of Work</dt>
                    <dd className="mt-1 text-[13.5px] font-semibold text-ink">{featured.scope}</dd>
                  </div>
                </dl>
                <p className="mt-5 flex gap-2.5 rounded-card bg-cream p-4 text-[13px] leading-relaxed text-ink/85">
                  <Building2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-dark" />
                  <span><strong>Engineering Feat:</strong> Rigorous deep raft foundation with 3 basements executed in a high-water-table zone using secant pile cut-off walls and post-tensioned beam slabs.</span>
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 max-md:flex-col max-md:items-stretch">
                  <Link href={`/projects/${featured.slug}`} className="inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-[13px] font-bold text-white hover:bg-pine max-md:w-full max-md:justify-center">
                    View Technical Case Study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <span className="text-[11.5px] font-bold tracking-wide text-gold-dark uppercase">ID: {featured.id}</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ARCHIVE */}
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Portfolio Archive</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Major Executed Works</h2>
            </div>
            <p className="text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Structured execution under PEC Category CA (No-Limit) licensing across high-density urban centres and strategic industrial zones.
            </p>
          </div>
          {archive.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {archive.map((p) => <ArchiveCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="mt-10 rounded-card border border-line bg-white p-8 text-center text-sm text-muted">
              No projects match the current filters. Clear the search or choose another sector.
            </p>
          )}
          <p className="mt-8 text-[12px] font-bold tracking-wider text-muted uppercase">
            Showing {filtered.length > 0 ? 1 : 0} to {filtered.length} of {PORTFOLIO_COUNTS.total} National Contracts
          </p>
        </div>
      </section>
    </>
  );
}
