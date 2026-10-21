"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, MapPin, Search } from "lucide-react";
import { PORTFOLIO_COUNTS, PROJECT_FILTERS, PROJECTS, type Project } from "@/lib/data";

const REGIONS = ["All Regions", "Lahore", "Karachi", "Islamabad", "Punjab"];

function ArchiveCard({ project }: { project: Project }) {
  return (
    <article className="card anim-fade-up group flex flex-col overflow-hidden">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" className="h-44 w-full object-cover" />
        <span className={`absolute left-4 top-4 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
          project.status === "Completed" ? "bg-gold-500 text-pine-950" : "bg-pine-950/85 text-gold-300"
        }`}>
          {project.statusLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-500">
          <MapPin size={13} className="text-gold-600" /> {project.location}
        </p>
        <p className="eyebrow mt-3 !text-[10px] text-gold-600">{project.category}</p>
        <h3 className="mt-2 font-display text-xl leading-snug text-pine-800">
          <Link href={`/projects/${project.slug}`} className="hover:text-gold-700">{project.title}</Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[13px] leading-6 text-ink-500">{project.cardText}</p>
        <dl className="mt-4 space-y-1.5 border-t border-cream-400 pt-3.5">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline justify-between gap-3 text-[12.5px]">
              <dt className="text-ink-500">{m.label}:</dt>
              <dd className="text-right font-bold text-ink-900">{m.value}</dd>
            </div>
          ))}
        </dl>
        <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
          Technical Data <ArrowRight size={14} />
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
      <section className="border-b border-cream-400 bg-cream-100">
        <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center gap-2">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-xl px-3.5 py-2 text-[12px] font-bold tracking-wide transition-colors ${
                  filter === f.key ? "bg-pine-800 text-gold-300" : "bg-white text-ink-900 border border-cream-400 hover:border-gold-500"
                }`}
              >
                {f.label} ({counts[f.key] ?? 0})
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="relative min-w-[220px] flex-1 sm:max-w-xs">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500" />
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
            <div className="flex overflow-hidden rounded-xl border border-cream-400 bg-white" role="group" aria-label="Status">
              {(["All", "Ongoing", "Completed"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-4 py-2.5 text-[12.5px] font-bold ${status === s ? "bg-gold-500 text-pine-950" : "text-ink-900 hover:bg-cream-100"}`}
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
        <section className="bg-cream-50">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow text-gold-600">Featured Masterpiece</p>
                <h2 className="mt-2 font-display text-3xl text-pine-800">Flagship High-Rise Engineering</h2>
              </div>
              <span className="rounded-lg bg-gold-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-700">
                PEC No-Limit CA Classified
              </span>
            </div>
            <article className="card anim-fade-up mt-8 overflow-hidden lg:grid lg:grid-cols-2">
              <div className="relative min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-md bg-pine-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-300">
                  PEC No-Limit CA Classified
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="flex items-center gap-1.5 text-[13px] font-semibold text-ink-500">
                  <MapPin size={14} className="text-gold-600" /> {featured.location}
                </p>
                <p className="eyebrow mt-4 !text-[10px] text-gold-600">{featured.category} · {featured.statusLabel}</p>
                <h3 className="mt-2 font-display text-3xl leading-tight text-pine-800">{featured.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-500">{featured.cardText}</p>
                <dl className="mt-5 grid gap-4 border-t border-cream-400 pt-5 sm:grid-cols-2">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] font-bold uppercase tracking-widest text-ink-500">{m.label}</dt>
                      <dd className="mt-1 font-display text-xl text-pine-800">{m.value}</dd>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-ink-500">Scope of Work</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink-900">{featured.scope}</dd>
                  </div>
                </dl>
                <p className="mt-5 flex gap-2.5 rounded-xl bg-cream-100 p-4 text-[13px] leading-6 text-ink-900">
                  <Building2 size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <span><strong>Engineering Feat:</strong> Rigorous deep raft foundation with 3 basements executed in a high-water-table zone using secant pile cut-off walls and post-tensioned beam slabs.</span>
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <Link href={`/projects/${featured.slug}`} className="btn-gold">
                    View Technical Case Study <ArrowUpRight size={16} />
                  </Link>
                  <span className="text-[12px] font-bold tracking-widest text-ink-500">ID: {featured.id}</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ARCHIVE */}
      <section className="bg-cream-200/50">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow text-gold-600">Portfolio Archive</p>
              <h2 className="mt-2 font-display text-3xl text-pine-800">Major Executed Works</h2>
            </div>
            <p className="max-w-md text-[13px] leading-6 text-ink-500">
              Structured execution under PEC Category CA (No-Limit) licensing across high-density urban centres and strategic industrial zones.
            </p>
          </div>
          {archive.length > 0 ? (
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {archive.map((p) => <ArchiveCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="card mt-9 p-8 text-center text-sm text-ink-500">
              No projects match the current filters. Clear the search or choose another sector.
            </p>
          )}
          <p className="mt-8 text-[13px] font-semibold text-ink-500">
            Showing {filtered.length > 0 ? 1 : 0} to {filtered.length} of {PORTFOLIO_COUNTS.total} National Contracts
          </p>
        </div>
      </section>
    </>
  );
}
