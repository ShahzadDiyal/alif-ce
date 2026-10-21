import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, ClipboardCheck, PackageCheck, ShieldCheck,
} from "lucide-react";
import { ProjectCard } from "@/components/Sections";
import { PROCESS_STEPS, SECTORS, SITE, projectsForSector } from "@/lib/data";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SECTORS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} Contracting | ALIF Engineering & Construction`,
    description: s.description,
    alternates: { canonical: `/sectors/${s.slug}` },
  };
}

const STANDARDS = [
  "Specialist sector leadership: engineers who build only in this sector's codes and risk profile.",
  "Single-point EPC accountability: one contract from excavation to commissioning.",
  "In-house plant & fleet: cranes, piling rigs and batching plants owned, never hired in.",
  "Laboratory-verified QA/QC: in-situ testing with UET & NESPAK third-party validation.",
];

export default async function SectorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = SECTORS.find((x) => x.slug === slug);
  if (!sector) notFound();
  const projects = projectsForSector(slug);
  const others = SECTORS.filter((x) => x.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-semibold text-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/sectors" className="hover:text-ink">Sectors</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold-dark">{sector.title}</span>
          </nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">
                <BadgeCheck className="h-4 w-4" /> Sector Specialization • {projects.length} Portfolio Project{projects.length === 1 ? "" : "s"}
              </p>
              <h1 className="anim-fade-up anim-delay-1 mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">{sector.title}</h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{sector.description}</p>
              <div className="anim-fade-up anim-delay-3 mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">Discuss a {sector.title} Project</Link>
                <Link href="/projects" className="rounded-btn border border-ink/20 px-5 py-3 text-sm font-bold text-ink hover:bg-white">View Portfolio</Link>
              </div>
            </div>
            <aside className="reveal h-fit rounded-card border border-line bg-white p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">
                <ShieldCheck className="h-4 w-4" /> Sector Delivery Standard
              </p>
              <ul className="mt-4 space-y-3.5">
                {STANDARDS.map((std) => {
                  const [head, ...rest] = std.split(": ");
                  return (
                    <li key={std} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      <span><strong className="font-bold text-ink">{head}:</strong> {rest.join(": ")}</span>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
          <div className="reveal relative mt-10 overflow-hidden rounded-card">
            <Image src={sector.image} alt={sector.title} width={1600} height={700} priority className="hero-zoom h-[300px] w-full object-cover sm:h-[380px]" />
          </div>
        </div>
      </section>

      {/* Scope & deliverables */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="reveal">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
                <ClipboardCheck className="h-4 w-4" /> Scope of Capability
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">What We Deliver in {sector.title}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {sector.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-card border border-line bg-white px-4 py-3.5 text-[13.5px] font-semibold text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal-d2">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
                <PackageCheck className="h-4 w-4" /> Handover Package
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">Deliverables at Completion</h2>
              <ul className="mt-6 space-y-3">
                {sector.deliverables.map((d, i) => (
                  <li key={d} className="flex items-center gap-4 rounded-card bg-cream px-5 py-4">
                    <span className="font-display text-2xl text-gold-dark">0{i + 1}</span>
                    <span className="text-[14px] font-semibold text-ink">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="bg-pine text-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Executed in This Sector</p>
                <h2 className="mt-3 font-display text-4xl text-white">{sector.title} Portfolio</h2>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide text-gold-light uppercase hover:text-white">
                Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">How We Deliver</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">From Enquiry to Aftercare</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className={`reveal reveal-d${i + 1} rounded-card border border-line bg-white p-6`}>
                <p className="font-display text-4xl text-gold-dark">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4 rounded-card bg-pine px-6 py-6 sm:px-8">
            <div>
              <p className="font-display text-2xl text-white">Planning a {sector.title.toLowerCase()} development?</p>
              <p className="mt-1 text-[13.5px] text-mist">Talk directly with our estimating engineers — {SITE.phone}.</p>
            </div>
            <Link href="/contact" className="ml-auto inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {others.length > 0 && (
            <p className="mt-8 text-[13px] text-muted">
              Other sectors:{" "}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={`/sectors/${o.slug}`} className="font-bold text-gold-dark hover:text-ink">{o.title}</Link>
                  {i < others.length - 1 ? " • " : ""}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
