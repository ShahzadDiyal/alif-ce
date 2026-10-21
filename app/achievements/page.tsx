import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Award, BadgeCheck, Clock3, DraftingCompass, FlaskConical, Gauge, Leaf, ShieldCheck, Users,
} from "lucide-react";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Achievements — A Record Cast in Numbers | ALIF Engineering & Construction",
  description:
    "ALIF achievements: PEC No-Limit CA category, triple ISO certification, 1.85M LTI-free man-hours, 99.4% concrete strength compliance and delivery 60 days ahead of the baseline programme.",
  alternates: { canonical: "/achievements" },
};

const RECORDS = [
  { icon: Clock3, value: "60", suffix: " Days", title: "Ahead of Baseline CPM", text: "Alif Horizon Commercial Tower was handed over 60 days ahead of the baseline critical-path programme in Q4 2024." },
  { icon: FlaskConical, value: "99.4", suffix: "%", decimals: 1, title: "Concrete Strength Compliance", text: "Across 4,200+ audited 28-day concrete cylinder crush tests, independently validated by UET Lahore laboratories." },
  { icon: ShieldCheck, value: "1.85", suffix: "M", decimals: 2, title: "LTI-Free Man-Hours", text: "Consecutive hours without a Lost Time Injury across 850+ site operatives over three years of high-rise execution." },
  { icon: Gauge, value: "28", suffix: "%", prefix: "−", title: "Energy Utilization Index", text: "Energy performance improvement on Alif Horizon through magnetic chillers, automated solar-tracking blinds and a high-performance envelope." },
];

const STANDARDS = [
  { icon: Clock3, title: "On-Time Delivery", text: "Guaranteed milestone adherence through advanced Primavera P6 resource leveling and rigorous site scheduling." },
  { icon: DraftingCompass, title: "In-House Engineering", text: "Complete structural BIM modeling, value-engineering, and geotechnical domain mastery under one corporate roof." },
  { icon: ShieldCheck, title: "HSE & ISO Standards", text: "Triple-certified ISO 9001, ISO 14001, and ISO 45001 compliance with zero-compromise safety protocols." },
  { icon: Users, title: "Single-Point Accountability", text: "Integrated project management eliminating subcontractor fragmentation from shoring to commissioning." },
];

const CREDENTIALS = [
  { icon: BadgeCheck, tag: "Apex Level", title: "PEC Category CA", text: "No Financial Limit Registration with the Pakistan Engineering Council.", ref: "REG: PEC/CA/ENG-9042" },
  { icon: BadgeCheck, tag: "Certified", title: "ISO 9001:2015", text: "Quality Management System certified by Lloyd's Register.", ref: "CERT: LRQA-QMS-4018" },
  { icon: ShieldCheck, tag: "Certified", title: "ISO 45001:2018", text: "Occupational Health & Safety Management Standard.", ref: "CERT: TUV-OHS-9921" },
  { icon: Leaf, tag: "Certified", title: "ISO 14001:2015", text: "Environmental Stewardship Protocol across all active sites.", ref: "CERT: ENV-LR-7810" },
  { icon: Award, tag: "Affiliation", title: "USGBC Member & LEED", text: "Corporate member of the U.S. Green Building Council; LEED Gold target envelopes.", ref: "MEMBER ID: 109845-US" },
  { icon: Users, tag: "Alliance", title: "ACEP Corporate Partner", text: "Association of Consulting Engineers Pakistan corporate affiliation.", ref: "AFFILIATION: ACEP-PK-044" },
];

const CLIENTS = ["Habib Metro Properties", "Crescent Industrial Group", "Descon Infra", "Engro Capital", "Fauji Developments", "Landmark Tower Development"];

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[136px] pb-12">
          <p className="anim-fade-up flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold live-dot" /> Milestones &amp; Institutional Recognition
          </p>
          <h1 className="anim-fade-up anim-delay-1 mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink">A Record Cast in Numbers.</h1>
          <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            Engineered for reliability, delivered with distinction — the measurable standards behind every ALIF handover:
            scheduling discipline, in-house engineering, certified quality systems and a zero-harm safety culture.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 lg:grid-cols-4">
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={38} suffix="+" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Years of Pedigree — Since 1987</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={24.5} decimals={1} suffix="M" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Sq.Ft Enclosed &amp; Delivered</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={100} suffix="%" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Zero-LTI Benchmark</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink">CA</p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">PEC No-Limit License</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery records */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Verified Delivery Records</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">Performance, Audited</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECORDS.map((r, i) => (
              <div key={r.title} className={`reveal reveal-d${i + 1} lift rounded-card border border-line bg-white p-6`}>
                <r.icon className="h-6 w-6 text-gold-dark" />
                <p className="mt-4 font-display text-4xl text-ink">
                  <CountUp value={parseFloat(r.value)} decimals={r.decimals ?? 0} prefix={r.prefix ?? ""} suffix={r.suffix} />
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((f, i) => (
              <div key={f.title} className={`reveal reveal-d${i + 1} rounded-card bg-cream p-6`}>
                <f.icon className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-3 font-display text-lg text-ink">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="reveal text-center">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Certifications &amp; Recognition</p>
            <h2 className="mt-3 font-display text-4xl text-white">Credentials on Record</h2>
          </div>
          <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <div key={c.title} className={`reveal reveal-d${(i % 3) + 1} rounded-card border border-white/10 bg-pine-deep p-6`}>
                <div className="flex items-center justify-between">
                  <c.icon className="h-6 w-6 text-gold" />
                  <span className="rounded-md bg-gold/15 px-2 py-1 text-[10.5px] font-bold tracking-wider text-gold-light uppercase">{c.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-xl text-white">{c.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{c.text}</p>
                <p className="mt-4 border-t border-white/10 pt-3 font-mono text-[11.5px] tracking-wider text-gold-light">{c.ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="overflow-hidden border-b border-line bg-paper py-10">
        <p className="reveal text-center text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Trusted by Institutional Clients</p>
        <div className="reveal mt-7 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track items-center gap-16 pr-16">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="whitespace-nowrap font-display text-2xl text-ink/45">{c}</span>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-4 text-center">
          <blockquote className="reveal font-display text-[22px] leading-relaxed text-ink italic">
            “True engineering is silent. It is the unyielding strength inside reinforced concrete that stands unharmed
            through earth tremors, time, and changing seasons.”
          </blockquote>
          <p className="reveal mt-3 text-[11px] font-bold tracking-[0.2em] text-gold-dark uppercase">ALIF Engineering Technical Council</p>
          <Link href="/projects" className="reveal mt-8 inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
            See the Work Behind the Numbers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
