import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck, Building2, Download, Landmark, Mail, MapPin, Phone, ShieldCheck, Upload,
} from "lucide-react";
import SectorsExplorer from "@/components/SectorsExplorer";
import { IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sectors — Multi-Disciplinary Contracting Across Pakistan's Vital Sectors | ALIF",
  description:
    "Eight specialized ALIF divisions: high-rise towers, commercial plazas, residential enclaves, healthcare & cleanrooms, academic campuses, heavy industrial, deep geotechnics, and infrastructure & heavy civil works.",
  alternates: { canonical: "/sectors" },
};

const MATRIX: [string, string, string, string, string][] = [
  ["High-Rise Skyscraper Towers", "LOD 400 (Fabrication Ready)", "ACI 318-19 / UBC 97 Zone 4", "High (Climbing MEP, BMS)", "LDA / CDA / Civil Aviation"],
  ["Commercial Plazas & HQ", "LOD 350 (Coordination)", "AISC 360 / Eurocode 4", "High (HVAC VAV, Data Center)", "Municipal Corps / Cantonment"],
  ["Master-Planned Enclaves", "LOD 300 (Documentation)", "ACI 318 / BCP 2021", "Medium (Underground Grids)", "DHA / Bahria Master Authorities"],
  ["Healthcare & Cleanrooms", "LOD 400 (Facility Ops)", "ACI 318 / Barite Shielding", "Critical (HTM 02-01, HEPA)", "DRAP / PHC / JCI"],
  ["Academic & Research Hubs", "LOD 350", "BS EN 1992 / AISC 360", "Medium-High (Labs, Acoustic)", "HEC / EPA"],
  ["Heavy Industrial & Power", "LOD 400 (Erection Sequencing)", "AISC 360-16 / ACI 351", "High (Heavy Power, Piping)", "SEZ Authorities / BoI"],
  ["Geotechnical & Deep Piling", "Geotechnical 3D FEA", "FHWA-NHI / BS 8004", "Specialized (Dewatering Grid)", "PEC Geotechnical Cadre"],
  ["Bridges & Heavy Civil Works", "LOD 350 Civil Infrastructure", "AASHTO LRFD Bridge Spec", "Civil/SCADA Lighting", "National Highway Authority (NHA)"],
];

const LICENSES = [
  { icon: Landmark, title: "PEC Category CA", text: "No Financial Limit" },
  { icon: Building2, title: "LDA Lahore", text: "Special Category" },
  { icon: MapPin, title: "CDA Islamabad", text: "Grade-1 Contractor" },
  { icon: ShieldCheck, title: "ML&C / DHA", text: "Cantonment Pre-Qualified" },
  { icon: BadgeCheck, title: "NHA Pakistan", text: "Class A Bridge / Highway" },
  { icon: ShieldCheck, title: "ISO 45001:2018", text: "HSE Gold Certified" },
];

export default function SectorsPage() {
  return (
    <>
      {/* Dark hero + explorer */}
      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-7xl px-4 pt-[136px] pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="anim-fade-up text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Specialized Divisions • Domestic &amp; Industrial Horizons</p>
              <h1 className="anim-fade-up anim-delay-1 mt-5 font-display text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.05] text-white">
                Multi-Disciplinary Contracting Across Pakistan&apos;s Vital Sectors.
              </h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-mist">
                Executing sovereign infrastructure, ultra-tall structural forms, and precision-engineered cleanrooms.
                With our PEC Category CA (No-Limit) licensing, ALIF delivers integrated Turnkey EPC services backed by
                four decades of geotechnical mastery and structural rigour.
              </p>
              <div className="anim-fade-up anim-delay-3 mt-6 flex flex-wrap gap-2.5">
                <span className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[12px] font-bold text-gold-light">
                  <BadgeCheck className="h-4 w-4" /> 8 Specialized Divisions
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-[12px] font-bold text-white">
                  <Landmark className="h-4 w-4 text-gold" /> PEC No-Limit CA Category
                </span>
              </div>
            </div>
            <div className="anim-fade-up anim-delay-2 relative hidden overflow-hidden rounded-card lg:block">
              <Image src={IMAGES.tower} alt="Gulberg Twin Tower Axis flagship commission" width={900} height={620} priority className="hero-zoom h-64 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 to-transparent p-4 pt-12">
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.18em] text-gold-light uppercase">Flagship Commission</p>
                  <p className="mt-0.5 font-display text-lg text-white">Gulberg Twin Tower Axis</p>
                </div>
                <p className="text-right">
                  <span className="font-display text-3xl text-gold-light">38</span>
                  <span className="block text-[10px] font-bold tracking-wider text-white/80 uppercase">Storeys Cast</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <SectorsExplorer />
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Technical Specification Comparison</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">Cross-Sector Engineering Deliverables Matrix</h2>
          <p className="reveal mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Every specialized vertical is governed by specific technical codes, modeling parameters, and dedicated quality assurance metrics.
          </p>
          <div className="reveal mt-9 overflow-x-auto rounded-card border border-line bg-white">
            <table className="w-full min-w-[880px] text-left text-[13px]">
              <thead>
                <tr className="bg-pine text-[11px] font-bold tracking-[0.14em] text-gold-light uppercase">
                  <th className="px-5 py-4.5">Sector Vertical</th>
                  <th className="px-5 py-4.5">BIM LOD Model</th>
                  <th className="px-5 py-4.5">Structural Design Code</th>
                  <th className="px-5 py-4.5">MEP Complexity</th>
                  <th className="px-5 py-4.5">Primary Statutory Body</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr key={row[0]} className="border-t border-line hover:bg-cream/60">
                    <td className="px-5 py-4.5 font-bold text-ink">{row[0]}</td>
                    <td className="px-5 py-4.5 font-mono text-[12px] text-ink/75">{row[1]}</td>
                    <td className="px-5 py-4.5 font-mono text-[12px] text-ink/75">{row[2]}</td>
                    <td className="px-5 py-4.5 text-muted">{row[3]}</td>
                    <td className="px-5 py-4.5 font-semibold text-gold-dark">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Licensing strip */}
          <div className="reveal mt-12 text-center">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Unrestricted Statutory Clearances</p>
            <h3 className="mt-2.5 font-display text-3xl text-ink">Licensing, Registrations &amp; Authority Pre-Qualifications</h3>
            <p className="mx-auto mt-2.5 max-w-2xl text-[13.5px] text-muted">
              ALIF holds non-restricted &apos;CA No-Limit&apos; tendering capacity across all major governmental, military cantonment, and provincial urban development authorities.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {LICENSES.map((l, i) => (
              <div key={l.title} className={`reveal reveal-d${(i % 3) + 1} lift rounded-card border border-line bg-white p-5 text-center`}>
                <l.icon className="mx-auto h-6 w-6 text-gold-dark" />
                <h4 className="mt-3 text-[13.5px] font-bold text-ink">{l.title}</h4>
                <p className="mt-0.5 text-[11.5px] text-muted">{l.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal mt-12 grid gap-8 rounded-card bg-pine px-6 py-9 text-cream sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-gold-light uppercase">Tendering &amp; EPC Consultation</p>
              <h3 className="mt-2.5 font-display text-3xl leading-tight text-white">Commence Your Sovereign or Commercial Project With ALIF.</h3>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mist">
                Directly connect with our Principal Engineers and Tendering Officers for preliminary structural assessments, BOQ estimations, and full sector capability dossiers.
              </p>
              <div className="mt-5 space-y-2 text-[13.5px]">
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-semibold text-white hover:text-gold-light">
                  <Phone className="h-4 w-4 text-gold" /> {SITE.phone} (Direct Tendering Desk)
                </a>
                <a href="mailto:contracts@alifconstruction.pk" className="flex items-center gap-2.5 font-semibold text-white hover:text-gold-light">
                  <Mail className="h-4 w-4 text-gold" /> contracts@alifconstruction.pk
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact#enquiry" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
                <Download className="h-4 w-4" /> Request Sector Capability Dossier
              </Link>
              <Link href="/services/turnkey-epc-general-contracting#proposal" className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
                <Upload className="h-4 w-4" /> Submit RFP / Tender Documents
              </Link>
              <p className="text-[12px] text-mist">Typical response within 24 business hours • NDA secured</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
