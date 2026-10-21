"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { SECTORS } from "@/lib/data";

type Design = {
  division: string;
  group: string;
  heading: string;
  text: string;
  bullets: string[];
  metrics: [string, string][];
  statutory: string;
  caption: string;
  extras?: [string, string][];
};

const DESIGN: Record<string, Design> = {
  "high-rise-buildings": {
    division: "Division 01 • Structural Towers", group: "towers",
    heading: "High-Rise & Commercial Skyscraper Towers",
    text: "Specialized in vertical engineering scaling beyond 30+ floors. We leverage automatic climbing system (ACS) core slip-forming, post-tensioned floor systems, and seismic-tuned mass dampers calibrated to Pakistan's Zone 2B/4 geological fault-lines.",
    bullets: ["Core-Wall Slipforming & Jumpform Climbing Cassettes", "Post-Tensioned (PT) Bonded & Unbonded Multi-Strand Slabs", "Integrated Wind-Tunnel Tested Aerodynamic Structural Diagrids"],
    metrics: [["Max Elevation", "165m+"], ["Concrete Spec", "C70/85"], ["LOD Matrix", "LOD 400"]],
    statutory: "Statutory: LDA • CDA • SBCA High-Rise Byelaws",
    caption: "Tower Cast System • Active Site",
    extras: [["Seismic Code Compliance", "UBC-97 / BCP-2021 Zone 4 — ductile detailing with specialized rebar couplers & shear wall embeds."], ["Turnkey Substructure", "4 to 5 Level Basements — full top-down and semi-top-down structural earthworks capability."]],
  },
  "commercial-complexes": {
    division: "Division 02 • Commercial Real Estate", group: "towers",
    heading: "Commercial Complexes & Corporate Plazas",
    text: "Constructing flagship administrative headquarters, multi-tenant Grade-A corporate towers, and expansive retail atriums. We unify high-speed vertical transportation, structural glass canopies, and sophisticated building skins.",
    bullets: ["Bespoke Column-Free Exhibition & Financial Trading Floors", "Energy Modeling & Thermal Enclosure Verification (ASHRAE 90.1)", "Automated Multi-Tier Basements with Intelligent Guidance Systems"],
    metrics: [["Built-Up Area", "1.2M+ sqft"], ["Floor Plate", "35,000 sqft"], ["Efficiency", "84% NLA"]],
    statutory: "Certification: USGBC LEED • ISO 9001:2015",
    caption: "Grade-A Headquarters • LEED Gold Target",
    extras: [["Envelope Engineering", "Unitized Curtain Walls — Low-E argon double-glazed acoustic panes engineered for thermal loads."], ["HVAC & MEPF Sync", "VAV & BMS Automation — centralized SCADA building management with sub-second fire response."]],
  },
  "residential-communities": {
    division: "Division 03 • Luxury Residential", group: "towers",
    heading: "Master-Planned Enclaves & Residential Towers",
    text: "From signature gated developments in DHA and Bahria to premier waterfront condominiums. We deploy industrial formwork systems ensuring rapid cycle times, seamless concrete finishes, and underground reticulated utility corridors.",
    bullets: ["Aluminium Mivan-Style Monolithic Formwork for Rapid Slabs", "Underground Sub-surface Power, Potable Water & Fiber Reticulation", "Bespoke Clubhouse, Wellness Facilities & Infinity Roof Pools"],
    metrics: [["Scale Handled", "350+ Acres"], ["Floor Cycle", "7 Days"], ["Delivered", "2,800+ Units"]],
    statutory: "Statutory: DHA Bylaws • Cantonment Board Approvals",
    caption: "Enclave Construction • Islamabad / Lahore",
    extras: [["Acoustic Isolation", "STC 55+ Ratings — inter-unit noise attenuation through specialized hollow-core masonry."], ["Integrated Infrastructure", "Stormwater Retention — sustainable urban drainage and aquifer groundwater recharge wells."]],
  },
  "hospitals-pharmaceuticals": {
    division: "Division 04 • Healthcare & Cleanrooms", group: "institutional",
    heading: "Healthcare, Hospitals & Specialized Life Sciences",
    text: "Engineered to stringent international bio-containment and healthcare accreditations. Our medical EPC cadre builds tertiary care hospitals, isolation wings, diagnostic oncology bunkers, and ISO 14644 sterile manufacturing spaces.",
    bullets: ["ISO Class 5 to 8 Cleanroom Partitions & HEPA Laminar Air Flow", "Lead-Lined Gypsum, Steel & Barite Concrete Shielding Protocols", "Dedicated Airborne Infection Isolation Rooms (AIIR) Negative Pressure"],
    metrics: [["Bed Capacity", "600+ Beds"], ["Air Filtration", "99.99%"], ["Compliance", "JCI / DRAP"]],
    statutory: "Standards: JCI Guidelines • DRAP GMP Validated",
    caption: "Tertiary Care Hospital • Specialized EPC",
    extras: [["Radiation Containment", "Heavy Barite Bunkers — dense barite concrete casting for LINAC oncology radiation suites."], ["Life Safety Systems", "HTM 02-01 Gas Piping — degreased copper medical gas infrastructure with manifold redundancy."]],
  },
  "academic-buildings": {
    division: "Division 05 • Academic & Research", group: "institutional",
    heading: "Academic Campuses & High-Tech Research Hubs",
    text: "Constructing forward-thinking civic monuments for universities and institutions of scientific excellence. We specialize in grand acoustically-isolated amphitheatres, vibration-isolated optical laboratories, and sustainable passive libraries.",
    bullets: ["Acoustic Engineering with NRC 0.85+ Tuned Timber Battens", "Inert Gas Fire Suppression & Chemical Fume Hood Exhaust Scrubbers", "High-Load Clear-Span Steel Space Frames for Sports Arenas"],
    metrics: [["Campus Spans", "120 Acres"], ["Auditorium", "2,500 Seats"], ["Solar Array", "2.4 MWp"]],
    statutory: "Statutory: HEC Guidelines • EPA Punjab Clearance",
    caption: "Educational Monument • Federal Territory",
    extras: [["Vibration Control", "VC-C Baseline Labs — isolated inertia slabs for electron microscope calibration."], ["Civil Permanence", "Board-Marked Concrete — fair-faced architectural finishes with zero surface rendering needed."]],
  },
  "industrial-power": {
    division: "Division 06 • Heavy Industrial", group: "industrial",
    heading: "Industrial Plants, Power & Manufacturing",
    text: "Turnkey delivery of massive pre-engineered buildings (PEB), heavy chemical batching units, FMCG automated warehouses, and thermal foundation blocks subjected to severe oscillating dynamic loads.",
    bullets: ["Mass Dynamic Foundations for High-RPM Turbines & Ball Mills", "Clear Span PEB Steel Framing up to 60-meter Unobstructed Bays", "Effluent Treatment Plants (ETP) with Chemical Acid-Proof Linings"],
    metrics: [["Structural Steel", "18,000 MT"], ["Clear Heights", "18.5m"], ["Live Load Spec", "80 kN/m²"]],
    statutory: "Accreditation: AISC Certified Fabricators • OHSAS 18001",
    caption: "Special Economic Zone (SEZ) • Industrial EPC",
    extras: [["Crane Operations", "50-Ton EOT Gantry — high-deflection tolerance crane runways & dynamic fatigue analysis."], ["Flooring Technology", "Laser Screed FM2 Floors — jointless steel-fiber reinforced concrete with metallic hardeners."]],
  },
  "piling-shoring-dewatering": {
    division: "Division 07 • Deep Geotechnics", group: "industrial",
    heading: "Geotechnical, Piling, Shoring & Deep Dewatering",
    text: "The subterranean foundation of every monument. ALIF operates proprietary Bauer rotary hydraulic drilling rigs capable of executing large-diameter bored cast-in-situ piles, continuous diaphragm walls, and multi-tier prestressed tie-back anchors.",
    bullets: ["Large-Diameter Bored Piles up to Ø 2,500mm to 55m Depths", "Secant & Contiguous Piles with Polymer Drilling Fluid Stabilization", "Comprehensive Deep Well Dewatering in High Water-Table Zones"],
    metrics: [["Max Depth", "55 Meters"], ["Piles Sunk", "14,000+"], ["Anchor Load", "1,200 kN"]],
    statutory: "Testing: Cross-hole Sonic Logging • Bidirectional Osterberg Cell",
    caption: "Rotary Drilling • Ravi Riverbed Alluvium",
    extras: [["Ground Anchors", "Prestressed Tendons — multi-strand post-tensioned tie-backs resisting high hydrostatic head."], ["Soil Improvement", "Jet Grouting & Stone Columns — ground liquefaction mitigation for coastal Karachi & riverine deposits."]],
  },
  "infrastructure-civil-works": {
    division: "Division 08 • Heavy Civil & Transport", group: "industrial",
    heading: "Infrastructure, Highway Bridges & Heavy Civil Works",
    text: "Connecting urban arteries and economic corridors. ALIF constructs elevated expressway flyovers, multi-span river bridges, culverts, underpasses, and high-capacity drainage aqueducts built to withstand extreme monsoon hydraulic loads.",
    bullets: ["Post-Tensioned (PT) Precast Concrete I-Girders & Box Sections", "Elastomeric & Pot Bearing Structural Support Installations", "Reinforced Earth (RE) Retaining Walls with Geosynthetic Stabilization"],
    metrics: [["Bridge Deck", "48.5km Total"], ["Max Clear Span", "62 Meters"], ["Design Code", "AASHTO LRFD"]],
    statutory: "Statutory: NHA • C&W • TEPA Approved Contractor",
    caption: "Civic Flyovers • National Highway Authority",
    extras: [["Superstructure Method", "Precast Segmental Launching — balanced cantilever erection minimizing ground traffic disruption."], ["Hydraulic Design", "100-Year Flood Scour — HEC-RAS modeled pier protection and reinforced rip-rap aprons."]],
  },
};

const FILTERS: { label: string; group: string }[] = [
  { label: "All Sectors (08)", group: "all" },
  { label: "Towers & Commercial", group: "towers" },
  { label: "Institutional & Healthcare", group: "institutional" },
  { label: "Industrial & Heavy Civil", group: "industrial" },
];

export default function SectorsExplorer() {
  const [active, setActive] = useState("all");
  const shown = SECTORS.filter((s) => active === "all" || DESIGN[s.slug]?.group === active);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[12px] font-bold tracking-wider text-muted uppercase">Filter Sectors:</span>
        {FILTERS.map((f) => (
          <button key={f.group} onClick={() => setActive(f.group)}
            className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition ${active === f.group ? "bg-gold text-ink" : "border border-white/25 text-white hover:border-gold"}`}>
            {f.label}
          </button>
        ))}
        <span className="ml-auto hidden items-center gap-1.5 text-[12px] font-semibold text-gold-light md:flex">
          <BadgeCheck className="h-4 w-4" /> PEC CA-Registered Standards
        </span>
      </div>

      <div className="mt-10 space-y-8">
        {shown.map((s, idx) => {
          const d = DESIGN[s.slug];
          if (!d) return null;
          const flip = idx % 2 === 1;
          return (
            <article key={s.slug} className="anim-fade-up overflow-hidden rounded-card bg-white text-ink shadow-sm">
              <div className={`grid lg:grid-cols-2 ${flip ? "" : ""}`}>
                <div className={`p-7 sm:p-9 ${flip ? "lg:order-2" : ""}`}>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-gold-dark uppercase">{d.division}</p>
                  <h3 className="mt-2.5 font-display text-[28px] leading-tight text-ink">{d.heading}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{d.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {d.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[13.5px] font-medium leading-relaxed text-ink/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-3 divide-x divide-line border-y border-line py-4 text-center">
                    {d.metrics.map(([label, value]) => (
                      <div key={label} className="px-2">
                        <p className="text-[10.5px] font-bold tracking-wider text-muted uppercase">{label}</p>
                        <p className="mt-1 font-display text-xl text-ink sm:text-2xl">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <p className="text-[11.5px] font-bold tracking-wide text-gold-dark uppercase">{d.statutory}</p>
                    <Link href={`/sectors/${s.slug}`} className="ml-auto inline-flex items-center gap-1.5 rounded-btn bg-ink px-4 py-2.5 text-[12.5px] font-bold text-white hover:bg-pine">
                      View Folio <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className={`relative min-h-[300px] ${flip ? "lg:order-1" : ""}`}>
                  <Image src={s.image} alt={d.heading} width={1000} height={800} className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute top-4 left-4 rounded-md bg-ink/85 px-3 py-1.5 text-[10.5px] font-bold tracking-wider text-gold-light uppercase backdrop-blur">{d.caption}</span>
                  {d.extras && (
                    <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-2">
                      {d.extras.map(([h, t]) => (
                        <div key={h} className="rounded-card bg-ink/85 p-4 backdrop-blur">
                          <h4 className="text-[12.5px] font-bold text-gold-light">{h}</h4>
                          <p className="mt-1 text-[11.5px] leading-relaxed text-white/80">{t}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
