"use client";

import { useState } from "react";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";

export type Job = {
  discipline: string;
  filter: string;
  location: string;
  exp: string;
  title: string;
  text: string;
};

export const JOBS: Job[] = [
  { discipline: "Superstructures", filter: "Structural & Civil", location: "Lahore Central", exp: "12+ Years Exp • PEC Registered PE",
    title: "Senior Resident Engineer — High-Rise Superstructures",
    text: "Lead full-scale site governance for our flagship 34-storey commercial tower in Gulberg. Responsible for post-tensioned slab sequencing, high-performance concrete (60-80 MPa) quality, and trade subcontract synchronization." },
  { discipline: "Substructure & Marine", filter: "Geotechnical & Piling", location: "Karachi Coastal Region", exp: "10+ Years Exp • M.Sc Geotech Required",
    title: "Principal Geotechnical & Deep Foundations Engineer",
    text: "Architect and supervise 1200mm bored secant piles, multi-level tieback anchor ground installation, deep dewatering calculations, and seismic soil-structure interaction along coastal alluvial strata." },
  { discipline: "Building Systems", filter: "MEP & Commissioning", location: "Islamabad Diplomatic Enclave", exp: "8+ Years Exp • Tier-3/4 Facility Background",
    title: "Lead MEP & BMS Commissioning Manager",
    text: "Direct complete electromechanical coordination: multi-chiller plants, dynamic smoke extraction systems, MV electrical distribution substations, and SCADA-integrated building automation testing." },
  { discipline: "Analytics & BIM", filter: "Project Controls (BIM/P6)", location: "Lahore Corporate HQ", exp: "6+ Years Exp • Primavera P6 & Navisworks Certified",
    title: "Senior Primavera P6 Project Controls Engineer",
    text: "Develop baseline WBS structures, quantitative schedule risk assessments (Monte Carlo), earned value metrics (EVM), and 4D BIM construction clash simulations across multiple concurrent EPC packages." },
  { discipline: "Quality Integrity", filter: "HSE & QA/QC", location: "Karachi Site Division", exp: "7+ Years Exp • ACI / UET Concrete Technology Certified",
    title: "QA/QC Lead Inspector — High-Strength Concrete & PT",
    text: "Oversee batching plant audits, post-tensioning elongation verifications, ultrasonic pulse velocity tests, core sampling, and strict adherence to ASTM C39 / ACI 318-19 criteria." },
  { discipline: "Safety Governance", filter: "HSE & QA/QC", location: "Nationwide Deployment", exp: "8+ Years Exp • NEBOSH Diploma / IOSH Certified",
    title: "Chief HSE & Site Safety Superintendent",
    text: "Direct institutional safety regimes for 2,000+ tradesmen: heavy tower crane kinematics, deep trench shoring stability, confined space protocols, and hazard mitigation matrices." },
];

const FILTERS = ["All Disciplines (6)", "Structural & Civil", "Geotechnical & Piling", "MEP & Commissioning", "Project Controls (BIM/P6)", "HSE & QA/QC"];

export function applyForRole(title: string) {
  window.dispatchEvent(new CustomEvent("alif:apply", { detail: title }));
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
}

export default function CareersExplorer() {
  const [active, setActive] = useState(FILTERS[0]);
  const shown = active === FILTERS[0] ? JOBS : JOBS.filter((j) => j.filter === active);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition ${active === f ? "bg-ink text-white" : "border border-line bg-white text-ink hover:border-gold"}`}>
            {f}
          </button>
        ))}
        <span className="ml-auto hidden items-center gap-1.5 text-[12px] text-muted sm:flex">
          <BadgeCheck className="h-4 w-4 text-gold-dark" /> PEC registration mandatory for all engineering posts.
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {shown.map((j) => (
          <article key={j.title} className="anim-fade-up lift grid gap-4 rounded-card border border-line bg-white p-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] font-bold tracking-wide uppercase">
                <span className="text-gold-dark">{j.discipline}</span>
                <span className="flex items-center gap-1 text-muted"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                <span className="flex items-center gap-1 text-muted"><BadgeCheck className="h-3.5 w-3.5 text-gold-dark" /> {j.exp}</span>
              </div>
              <h3 className="mt-2.5 font-display text-[22px] leading-snug text-ink">{j.title}</h3>
              <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-muted">{j.text}</p>
            </div>
            <button onClick={() => applyForRole(j.title)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-btn bg-ink px-5 py-3 text-[13px] font-bold text-white hover:bg-pine">
              Apply For Role <ArrowUpRight className="h-4 w-4" />
            </button>
          </article>
        ))}
        {shown.length === 0 && <p className="rounded-card border border-line bg-white p-7 text-sm text-muted">No open requisitions in this discipline right now — submit a general dossier below.</p>}
      </div>
    </div>
  );
}
