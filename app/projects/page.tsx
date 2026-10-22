import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Boxes, Fan, Layers, Ruler } from "lucide-react";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import CountUp from "@/components/CountUp";
import { SiteHeading } from "@/components/Sections";
import { PORTFOLIO_COUNTS, PROJECTS } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Projects — Engineering Landmarks Across Pakistan",
  description:
    "ALIF portfolio archive: 7 landmark projects — high-rise towers, luxury residences, specialized healthcare, industrial, academic and infrastructure works across Lahore, Karachi and Islamabad.",
  path: "/projects",
});

const STANDARDS = [
  { icon: Layers, title: "Geotechnical & Deep Works", text: "Diaphragm cut-off walls, secant piling reaching 38.5 m depth, micro-piling, and computerized ground anchor tie-backs for zero subsidence." },
  { icon: Ruler, title: "Superstructure Precision", text: "Placement of high-strength C70+ self-compacting mixes, post-tensioned beam systems, slip-form cores, and self-climbing hydraulic formwork." },
  { icon: Fan, title: "Integrated MEP & Commissioning", text: "Industrial chillers, UL-listed firefighting pumps, certified cleanroom air filtration (ISO 14644-1), and high-capacity electrical substations." },
  { icon: Boxes, title: "BIM & Primavera P6", text: "Full Level-of-Detail (LOD 400) building information modeling, 4D timeline simulation, automated clash elimination, and daily earned value metrics." },
];

export default function ProjectsPage() {
  const flagship = PROJECTS[0];
  const stats = [
    { v: PORTFOLIO_COUNTS.total, label: "Landmark Structures", sub: "Mega-structures executed across Pakistan's major urban and industrial centres." },
    { v: PORTFOLIO_COUNTS.completed, label: "Completed & Handed Over", sub: "Delivered under PEC Category CA licensing with full as-built documentation." },
    { v: PORTFOLIO_COUNTS.ongoing, label: "Currently Under Execution", sub: "Active sites governed by ISO 9001 quality gates and Primavera P6 controls." },
  ];
  return (
    <>
      {/* Hero */}
      <section className="bg-pine text-cream">
        <div className="mx-auto w-full px-4 pt-[136px] pb-16 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="anim-fade-up text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Portfolio &amp; Archive — Nationwide</p>
              <h1 className="anim-fade-up anim-delay-1 mt-5 font-display text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.05] text-white">
                Engineering Landmarks Across Pakistan.
              </h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-mist">
                A curated chronicle of complex high-rise towers, specialized healthcare facilities, industrial hubs,
                and national infrastructure delivered with uncompromising technical precision.
              </p>
              <div className="anim-fade-up anim-delay-3 mt-7 flex flex-wrap gap-3">
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light max-md:w-full max-md:justify-center max-md:text-center">
                  Browse the Portfolio <ArrowDown className="h-4 w-4" />
                </a>
                <Link href="/contact#enquiry" className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 max-md:w-full max-md:justify-center max-md:text-center">
                  Request Tendering Dossier <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="anim-fade-up anim-delay-2 relative hidden overflow-hidden rounded-card lg:block">
              <Image src={flagship.image} alt={flagship.title} width={900} height={620} priority className="hero-zoom h-72 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-12">
                <div className="min-w-0">
                  <p className="text-[10.5px] font-bold tracking-[0.18em] text-gold-light uppercase">Flagship Commission</p>
                  <p className="mt-0.5 font-display text-lg text-white">{flagship.title}</p>
                </div>
                {flagship.metrics[0] && (
                  <p className="shrink-0 text-right">
                    <span className="font-display text-xl whitespace-nowrap text-gold-light">{flagship.metrics[0].value}</span>
                    <span className="block text-[10px] font-bold tracking-wider text-white/80 uppercase">{flagship.metrics[0].label}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="anim-fade-up anim-delay-4 mt-11 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl text-white"><CountUp value={s.v} /></p>
                <p className="mt-1 text-[12px] font-bold text-gold-light">{s.label}</p>
                <p className="mt-1 max-w-xs text-[12px] text-mist">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsExplorer />

      {/* Execution standards */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SiteHeading eyebrow="Execution Standards" title="Engineered to International Quality & Safety Thresholds" />
            <p className="reveal reveal-d2 text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Every ALIF commission is executed against audited international codes, from deep geotechnics to full MEP commissioning.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s, i) => (
              <div key={s.title} className={`reveal reveal-d${i + 1} lift rounded-card border border-line bg-white p-6`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15">
                  <s.icon className="h-5 w-5 text-gold-dark" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper pb-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="reveal rounded-card bg-pine px-6 py-10 text-cream sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">EPC &amp; General Contracting</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">Planning a Landmark Construction Project?</h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mist">
                  Consult our principal structural engineers and chief estimators for turnkey EPC delivery, GC
                  contracting, and rigorous BOQ evaluations across Pakistan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact#enquiry" className="btn-gold max-md:w-full max-md:justify-center max-md:text-center">
                  Request Tendering Dossier
                </Link>
                <Link href="/contact" className="btn-outline-light max-md:w-full max-md:justify-center max-md:text-center">
                  Speak with Chief Estimator <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
