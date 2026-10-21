import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, BadgeCheck, CalendarClock, CheckCircle2, Download, Mail, Phone,
} from "lucide-react";
import { IMAGES, SERVICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Six Tectonic Service Pillars | ALIF Engineering & Construction",
  description:
    "Comprehensive engineering capabilities from ground zero to turnkey handover: Turnkey EPC, geotechnical & deep foundations, superstructures & high-rise, façades, integrated MEP and industrial infrastructure.",
  alternates: { canonical: "/services" },
};

const CHIPS = ["EPC Turnkey", "Deep Foundations", "Post-Tensioned Superstructures", "High-Spec MEP", "Industrial PEB", "Fast-Track Fitout"];

const PHASES = [
  { n: "01", title: "Pre-Construction & Value Engineering", text: "Rigorous 3D geotechnical stratigraphy analysis, full BIM structural clash detection, and algorithmic bill-of-quantities optimization to avert mid-stream re-engineering.", out: "Validated 4D Model & Guaranteed Target Price" },
  { n: "02", title: "Procurement & CPM Baseline Scheduling", text: "Primavera P6 resource-loaded baseline construction schedules paired with direct tier-1 mill procurement of rebars, cements, and certified post-tensioning anchors.", out: "Batch QA Mill Certs & Critical Path Map" },
  { n: "03", title: "Precision Execution & Zero-Harm HSE", text: "Sub-millimeter total station laser geometry verification, hydraulic tension monitoring for PT tendons, and daily safety toolbox audits achieving zero lost-time incidents.", out: "Daily Site QA Logs & 0.00 LTI Safety Index" },
  { n: "04", title: "Commissioning & Handover Protocol", text: "Integrated full-load MEP thermal tests, acoustic isolation reviews, comprehensive digital as-built folios, and active 12-to-24 month Defect Liability Period coverage.", out: "Turnkey Commissioning & Complete As-Builts" },
];

const FLEET = [
  { tag: "Lifting & Erection", title: "High-Capacity Tower Cranes", text: "Luffing jib & topless cranes up to 60-ton capacity with 75m working radiuses.", count: "14 Units Available", img: IMAGES.night },
  { tag: "Subterranean Works", title: "Hydraulic Rotary Piling Rigs", text: "Bauer & Casagrande rigs capable of 42m secant piles in dense gravels.", count: "8 Heavy Rigs", img: IMAGES.steel },
  { tag: "High-Rise Placement", title: "Stationary Concrete Pumps", text: "Putzmeister high-pressure pumping lines rated for 250m vertical elevation.", count: "12 Pump Stations", img: IMAGES.crane },
  { tag: "Quality Assurance", title: "Mobile Batching Plants", text: "Fully automated computerized wet-mix plants with 120m³/hr output each.", count: "6 Regional Plants", img: IMAGES.modern },
  { tag: "Logistical Throughput", title: "Transit Mixer Fleet", text: "Dedicated 10m³ heavy-duty drum mixers calibrated for constant slump retention.", count: "32 Heavy Trucks", img: IMAGES.tower },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem", position: i + 1,
      item: { "@type": "Service", name: s.title, url: `${SITE.url}/services/${s.slug}` },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:px-12 pt-[136px] pb-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Integrated Contracting &amp; Technical Disciplines
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              Comprehensive Engineering Capabilities from Ground Zero to Turnkey Handover
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              From complex multi-tier subterranean basements in high-water-table soils to 40+ storey structural diagrids
              and advanced MEP installations, ALIF delivers complete turnkey solutions engineered for multi-generational permanence.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <span key={c} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-semibold text-ink">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pillars" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
                Explore Engineering Disciplines <ArrowDown className="h-4 w-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-btn border border-ink/20 px-5 py-3 text-sm font-bold text-ink hover:bg-white">
                Pre-Qualification Dossier <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-card bg-pine text-cream shadow-sm">
            <div className="relative">
              <Image src={IMAGES.tower} alt="Alif Diagrid Financial Centre" width={900} height={560} priority className="h-60 w-full object-cover" />
              <span className="absolute top-4 right-4 rounded-md bg-gold px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-ink uppercase">PEC CA No-Limit</span>
              <span className="absolute top-4 left-4 text-[10.5px] font-bold tracking-[0.2em] text-white/90 uppercase">Project Highlight</span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl text-white">Alif Diagrid Financial Centre</h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-mist">
                44 storeys, 4-tier secant basement executed in dense alluvial silt stratum with zero groundwater seepage.
              </p>
              <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4 text-center">
                {[["40m", "Sub-Basement"], ["C80", "High-Strength"], ["100%", "BIM 4D Handover"]].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-2xl text-gold-light">{v}</p>
                    <p className="mt-0.5 text-[10.5px] font-bold tracking-wider text-mist uppercase">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Precision Methodologies</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Six Tectonic Service Pillars</h2>
            </div>
            <p className="text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Structured end-to-end contracting practices designed to eliminate subcontractor fragmentation and compress
              multi-year schedules with zero tolerance for structural defects.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="reveal lift flex flex-col overflow-hidden rounded-card border border-line bg-white">
                <div className="relative">
                  <Image src={s.image} alt={s.title} width={800} height={420} className="h-44 w-full object-cover" />
                  <span className="absolute bottom-3 left-4 rounded-md bg-ink/85 px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-gold-light uppercase">Pillar {s.pillar}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[22px] leading-snug text-ink">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.short}</p>
                  <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex gap-2 text-[13px] leading-relaxed text-ink/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" /> {inc}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 pt-1 text-[13px] font-bold tracking-wide text-gold-dark uppercase hover:text-ink">
                    {s.exploreLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance framework */}
      <section className="bg-pine text-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Operational Execution Rigor</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-white">Our Four-Phase Technical Assurance Framework</h2>
          <p className="mt-3 max-w-2xl text-[14.5px] text-mist">
            From bid qualification to formal DLP handover, every ALIF contract adheres to ISO 9001:2015 quality gates and Primavera P6 algorithmic CPM tracking.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((p) => (
              <div key={p.n} className="reveal rounded-card border border-white/10 bg-pine-deep p-7">
                <p className="font-display text-4xl text-gold">{p.n}</p>
                <h3 className="mt-3 font-display text-lg leading-snug text-white">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{p.text}</p>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-[10.5px] font-bold tracking-wider text-gold-light uppercase">Key Output</p>
                  <p className="mt-1 text-[12.5px] font-semibold text-white">{p.out}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-card border border-gold/30 bg-gold/10 px-6 py-4">
            <BadgeCheck className="h-5 w-5 shrink-0 text-gold" />
            <p className="font-display text-[15px] text-white italic">
              “Engineered stability is not an afterthought of commercial aesthetics; it is the mathematical mandate of every structural connection we cast.”
            </p>
            <p className="text-[11px] font-bold tracking-wider text-mist uppercase">ALIF Executive Engineering Council • ISO 9001:2015 &amp; PEC CA Certified</p>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Capital Plant Logistics</p>
              <h2 className="mt-3 font-display text-4xl text-ink">In-House Mechanical Fleet</h2>
            </div>
            <p className="text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Complete self-reliance without third-party machinery bottlenecks. Our dedicated equipment depots guarantee immediate deployment across Pakistan.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FLEET.map((f) => (
              <article key={f.title} className="reveal lift overflow-hidden rounded-card border border-line bg-white">
                <Image src={f.img} alt={f.title} width={600} height={380} className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="text-[10.5px] font-bold tracking-wider text-gold-dark uppercase">{f.tag}</p>
                  <h3 className="mt-1 font-display text-[16px] leading-snug text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{f.text}</p>
                  <p className="mt-3 border-t border-line pt-2.5 text-[11.5px] font-bold text-ink">{f.count}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RFP CTA */}
      <section className="bg-cream pb-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="rounded-card bg-pine px-6 py-10 text-cream sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Commercial Tendering &amp; EPC Invitations</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">Submit a Tendering Inquiry or RFP</h2>
                <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-mist">
                  Whether preparing private equity development packages, high-rise architectural folios, or sovereign
                  infrastructure bids, partner directly with Pakistan&apos;s premier CA No-Limit contracting house.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/services/turnkey-epc-general-contracting#proposal" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
                    <Download className="h-4 w-4" /> Download Prequalification Dossier
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
                    <CalendarClock className="h-4 w-4" /> Schedule Technical Consultation
                  </Link>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-4 self-center">
                {[
                  ["PEC Licensing", "Category CA (No-Limit)"],
                  ["QA Standards", "ISO 9001 / ISO 45001"],
                  ["Direct Hotline", SITE.phone],
                  ["Technical Desk", "tenders@alifconstruction.pk"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-card border border-white/10 bg-pine-deep p-4">
                    <dt className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-wider text-gold-light uppercase">
                      {k === "Direct Hotline" ? <Phone className="h-3.5 w-3.5" /> : k === "Technical Desk" ? <Mail className="h-3.5 w-3.5" /> : <BadgeCheck className="h-3.5 w-3.5" />} {k}
                    </dt>
                    <dd className="mt-1.5 text-[13.5px] font-semibold break-words text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
