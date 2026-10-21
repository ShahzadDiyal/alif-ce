import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Fan, Layers, Ruler } from "lucide-react";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { PORTFOLIO_COUNTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Engineering Landmarks Across Pakistan",
  description: "ALIF portfolio archive: 7 landmark projects — high-rise towers, luxury residences, specialized healthcare, industrial, academic and infrastructure works across Lahore, Karachi and Islamabad.",
};

const STANDARDS = [
  { icon: Layers, title: "Geotechnical & Deep Works", text: "Diaphragm cut-off walls, secant piling reaching 38.5 m depth, micro-piling, and computerized ground anchor tie-backs for zero subsidence." },
  { icon: Ruler, title: "Superstructure Precision", text: "Placement of high-strength C70+ self-compacting mixes, post-tensioned beam systems, slip-form cores, and self-climbing hydraulic formwork." },
  { icon: Fan, title: "Integrated MEP & Commissioning", text: "Industrial chillers, UL-listed firefighting pumps, certified cleanroom air filtration (ISO 14644-1), and high-capacity electrical substations." },
  { icon: Boxes, title: "BIM & Primavera P6", text: "Full Level-of-Detail (LOD 400) building information modeling, 4D timeline simulation, automated clash elimination, and daily earned value metrics." },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="bg-pine-900 pb-14 pt-[150px] sm:pb-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,230,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,230,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-400">Portfolio &amp; Archive — Nationwide</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-cream-100 sm:text-5xl">
            Engineering Landmarks Across Pakistan
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-mist-300">
            A curated chronicle of complex high-rise towers, specialized healthcare facilities, industrial hubs,
            and national infrastructure delivered with uncompromising technical precision.
          </p>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-cream-100/15 pt-8">
            {[
              { v: String(PORTFOLIO_COUNTS.total), u: "", label: "Structures", sub: "Landmark Mega-Structures Executed" },
              { v: String(PORTFOLIO_COUNTS.completed), u: "", label: "Completed", sub: "Delivered & Handed Over" },
              { v: String(PORTFOLIO_COUNTS.ongoing), u: "", label: "Ongoing", sub: "Currently Under Execution" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-cream-100 sm:text-5xl">
                  {s.v}<span className="ml-1.5 align-middle font-sans text-[11px] font-bold uppercase tracking-widest text-gold-400">{s.label}</span>
                </div>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-mist-300">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsExplorer />

      {/* EXECUTION STANDARDS */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-600">Execution Standards</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-pine-800 sm:text-4xl">
            Engineered to International Quality &amp; Safety Thresholds
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s) => (
              <div key={s.title} className="card p-7">
                <s.icon size={26} className="text-gold-600" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg text-pine-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine-800">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-400">EPC &amp; General Contracting</p>
          <div className="mt-3 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-3xl text-cream-100 sm:text-4xl">Planning a Landmark Construction Project?</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-mist-300">
                Consult our principal structural engineers and chief estimators for turnkey EPC delivery, GC
                contracting, and rigorous BOQ evaluations across Pakistan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-gold">Request Tendering Dossier</Link>
              <Link href="/contact" className="btn-outline-light">Speak with Chief Estimator <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
