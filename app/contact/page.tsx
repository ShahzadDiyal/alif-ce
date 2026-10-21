import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck, Bolt, Clock3, FileSignature, Landmark, Mail, MapPin, Phone, ShieldCheck, Siren,
} from "lucide-react";
import TenderForm from "@/components/TenderForm";
import { IMAGES, OFFICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Initiate a Project Tendering Inquiry | ALIF Engineering & Construction",
  description:
    "Engage ALIF's principal estimating engineers for institutional EPC bidding, joint ventures and mega-scale turnkey contracts. Regional offices in Lahore, Islamabad and Karachi — +92 42 3578 9000.",
  alternates: { canonical: "/contact" },
};

const DESKS = [
  { icon: Landmark, dept: "Estimating & Tenders Desk", wing: "Pre-Construction & BOQ Costings", mandate: "Institutional bidding, cost model audits, and RFP evaluations for contractors and developers.", email: "tenders@alifconstruction.pk", hours: "Ext. 201 • 8:30 AM – 6:00 PM PKT" },
  { icon: FileSignature, dept: "Procurement & Vendor Enlistment", wing: "Supply Chain & Specialist Subcontractors", mandate: "Steel, cement, MEP subcontractors, facade fabricators, and earthmoving plant suppliers.", email: "vendors@alifconstruction.pk", hours: "Ext. 315 • Central Yard Office" },
  { icon: BadgeCheck, dept: "Careers & Engineering Cadre", wing: "Talent Acquisition & Site PMs", mandate: "Resident engineers, quantity surveyors, HSE inspectors, and senior construction managers.", email: "careers@alifconstruction.pk", hours: "Human Capital Wing • Lahore HQ" },
  { icon: ShieldCheck, dept: "Corporate Governance & Investors", wing: "Media & Institutional Consortiums", mandate: "International FIDIC joint ventures, board communications, regulatory PEC audits, and press releases.", email: "corporate@alifconstruction.pk", hours: "Secretariat • Executive Floor 14" },
];

const GUIDELINES = [
  { icon: BadgeCheck, title: "PEC CA Category Certified", text: "Zero upper financial ceiling under Pakistan Engineering Council regulations, eligible for national landmark bids." },
  { icon: FileSignature, title: "Mutual NDA Protection", text: "All architectural designs, structural models, and financial feasibility data are safeguarded under strict bilateral non-disclosure terms." },
  { icon: Clock3, title: "Turnaround Guarantee", text: "Preliminary estimating assessment within 4 working days. Full Bill of Quantities (BOQ) audit within 14 working days." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 pt-[136px] pb-16 sm:px-6 lg:px-8">
          <p className="anim-fade-up text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Headquarters &amp; Regional Offices — Pakistan</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              <h1 className="anim-fade-up anim-delay-1 font-display text-5xl leading-[1.05] text-ink">
                Initiate a Project <em className="text-gold-dark not-italic underline decoration-gold/50 underline-offset-8">Tendering</em> Inquiry or Direct Consultation.
              </h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                Engage ALIF&apos;s principal estimating engineers, pre-construction directors, and executive leadership
                for institutional EPC bidding, joint ventures, and mega-scale turnkey structural contracts across Pakistan.
              </p>
            </div>
            <div className="anim-fade-up anim-delay-2 rounded-card border border-line bg-white p-5">
              <p className="flex items-center gap-2 text-[12px] font-bold tracking-wider text-ink uppercase">
                <BadgeCheck className="h-4 w-4 text-gold-dark" /> PEC Accredited Status
              </p>
              <p className="mt-1.5 font-display text-lg text-ink">Category CA (No Upper Limit)</p>
              <p className="mt-3 border-t border-line pt-3 text-[12.5px] leading-relaxed text-muted">
                <strong className="text-ink">Response window:</strong> Within 4 working days for pre-qualification
              </p>
            </div>
          </div>
          <div className="reveal relative mt-9 overflow-hidden rounded-card">
            <Image src={IMAGES.facade} alt="ALIF Corporate Central Tower, Gulberg III Lahore" width={1600} height={640} priority className="hero-zoom h-[280px] w-full object-cover sm:h-[340px]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-16">
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.2em] text-gold-light uppercase">Tendering Nexus</p>
                <p className="mt-1 font-display text-xl text-white">ALIF Corporate Central Tower • Gulberg III Lahore</p>
                <p className="mt-0.5 text-[12.5px] text-white/75">Direct dispatch point for North, Central &amp; South geotechnical and structural tender boards.</p>
              </div>
              <span className="flex items-center gap-2 rounded-md bg-gold px-3 py-1.5 text-[11px] font-bold tracking-wider text-ink uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-pine live-dot" /> Tendering Registry Open
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div className="reveal">
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Territorial Deployment</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Regional Offices &amp; Engineering Yards</h2>
            </div>
            <p className="reveal reveal-d2 text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Four fully-mobilized regional technical centers equipped with local estimating wings, site surveyors, and heavy plant logistical yards.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o, i) => (
              <article key={o.label} className={`reveal reveal-d${i + 1} lift flex flex-col rounded-card border border-line bg-white p-5`}>
                <p className="text-[10.5px] font-bold tracking-[0.16em] text-gold-dark uppercase">{o.tag}</p>
                <h3 className="mt-1.5 font-display text-xl text-ink">{o.label}</h3>
                <div className="relative mt-4 flex h-24 items-center justify-center overflow-hidden rounded-[10px] bg-pine/5" style={{ backgroundImage: "linear-gradient(#0e2f2912 1px, transparent 1px), linear-gradient(90deg, #0e2f2912 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                  <MapPin className="h-7 w-7 text-gold-dark" />
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">{o.address}</p>
                <div className="mt-3 space-y-1.5 text-[13px] font-semibold text-ink">
                  <a href={`tel:${o.phone?.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold-dark"><Phone className="h-3.5 w-3.5 text-gold-dark" /> {o.phone}</a>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 break-all hover:text-gold-dark"><Mail className="h-3.5 w-3.5 shrink-0 text-gold-dark" /> {o.email}</a>
                </div>
                <p className="mt-4 border-t border-line pt-3 text-[12px] text-muted">
                  <span className="block text-[10.5px] font-bold tracking-wider uppercase">{o.role}</span>
                  <span className="mt-0.5 block font-bold text-ink">{o.person}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines + form */}
      <section id="enquiry" className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 py-24 lg:grid-cols-[1fr_1.35fr]">
          <div className="reveal">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Formal RFP Protocol</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Institutional Tendering Guidelines</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
              ALIF Engineering undertakes large-scale commercial, high-rise, institutional healthcare, and heavy civil
              infrastructure projects with contract values typically exceeding PKR 350 Million.
            </p>
            <div className="mt-7 space-y-5">
              {GUIDELINES.map((g) => (
                <div key={g.title} className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <g.icon className="h-5 w-5 text-gold-dark" />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">{g.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{g.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-card bg-pine p-6 text-cream">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-light uppercase">
                <Bolt className="h-4 w-4" /> Expedited Bidding Desk
              </p>
              <h3 className="mt-2.5 font-display text-xl text-white">Urgent Pre-Tender Inquiries?</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mist">
                Contact our Chief Estimating Officer directly for ongoing public tenders, international FIDIC contracts, or expedited EOI submissions.
              </p>
              <a href={SITE.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-btn bg-gold px-4 py-2.5 text-[13px] font-bold text-ink hover:bg-gold-light">
                <Phone className="h-4 w-4" /> Call Desk Direct
              </a>
              <span className="ml-3 font-mono text-[12px] text-mist">Ext. 401 &amp; 402</span>
            </div>
          </div>
          <div className="reveal reveal-d2">
            <p className="mb-4 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Project Tender Dossier</p>
            <TenderForm />
          </div>
        </div>
      </section>

      {/* Department desks */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div className="reveal">
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Organizational Directory</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Departmental Inquiries &amp; Desks</h2>
            </div>
            <p className="reveal reveal-d2 text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Route your specific requirement directly to the competent functional directorate at ALIF Headquarters.
            </p>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-card border border-line bg-white">
            <div className="hidden grid-cols-[240px_1fr_230px_210px] gap-4 border-b border-line bg-pine px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-gold-light uppercase lg:grid">
              <span>Department / Wing</span><span>Primary Mandate</span><span>Direct Email Route</span><span>Operating Desk</span>
            </div>
            {DESKS.map((d) => (
              <div key={d.dept} className="grid gap-2 border-b border-line px-6 py-5 last:border-0 lg:grid-cols-[240px_1fr_230px_210px] lg:gap-4">
                <div>
                  <p className="flex items-center gap-2 text-[14px] font-bold text-ink"><d.icon className="h-4.5 w-4.5 shrink-0 text-gold-dark" /> {d.dept}</p>
                  <p className="mt-1 text-[12px] text-muted">{d.wing}</p>
                </div>
                <p className="text-[13px] leading-relaxed text-muted">{d.mandate}</p>
                <a href={`mailto:${d.email}`} className="flex items-start gap-1.5 text-[13px] font-semibold break-all text-gold-dark hover:text-ink">
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {d.email}
                </a>
                <p className="font-mono text-[12px] text-ink/70">{d.hours}</p>
              </div>
            ))}
          </div>

          {/* Emergency band */}
          <div className="reveal mt-8 grid gap-6 rounded-card bg-pine px-6 py-6 text-cream sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-red-300 uppercase">
                <Siren className="h-4 w-4" /> 24/7 Rapid Response Protocol
              </p>
              <h3 className="mt-2 font-display text-2xl text-white">Active Construction Sites Emergency Safety Hotline</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mist">
                For operational emergencies, structural geotechnical alerts, or urgent safety notifications across active ALIF job sites nationwide.
              </p>
            </div>
            <a href="tel:+924235789099" className="flex items-center gap-3 rounded-card border border-white/15 bg-pine-deep px-5 py-4 hover:border-gold/50">
              <Phone className="h-6 w-6 shrink-0 text-gold" />
              <span>
                <span className="block font-display text-xl text-white">+92 42 3578 9099</span>
                <span className="text-[11px] font-bold tracking-wider text-mist uppercase">HSE Command Center (Toll-Free Priority)</span>
              </span>
            </a>
            <div className="text-[13px] leading-relaxed text-mist">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span><strong className="text-white">ALIF Corporate Central</strong><br />Main Boulevard, Gulberg III, Lahore • Accessible via Ring Road</span>
              </p>
              <a href="https://maps.google.com/?q=Gulberg+III+Main+Boulevard+Lahore" target="_blank" rel="noreferrer" className="mt-2 inline-block font-bold text-gold-light hover:text-white">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
