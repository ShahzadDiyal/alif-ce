import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Award, Briefcase, CheckCircle2, ClipboardCheck, DraftingCompass, HardHat,
  HeartPulse, Mail, ShieldCheck, TrendingUp,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Join Pakistan's Most Rigorous Engineering Cadre | ALIF",
  description:
    "Careers at ALIF Engineering & Construction: site engineering, design & planning, MEP and QA/QC-HSE roles across Lahore, Islamabad and Karachi, with PEC CPD hours and a meritocratic cadre track.",
  alternates: { canonical: "/careers" },
};

const AREAS = [
  { icon: HardHat, title: "Site Engineering & Execution", text: "Civil engineers, site managers and foremen delivering structures, finishes and external works on live projects nationwide." },
  { icon: DraftingCompass, title: "Design, Planning & QS", text: "Structural and BIM engineers, Primavera planners, estimators and quantity surveyors at our Lahore head office." },
  { icon: Briefcase, title: "MEP & Commissioning", text: "Mechanical, electrical and plumbing engineers and technicians for installation, testing and commissioning teams." },
  { icon: ShieldCheck, title: "QA/QC & HSE", text: "Quality inspectors, materials engineers and safety officers holding our zero-harm and ISO standards on every site." },
];

const PERKS = [
  { icon: Award, title: "PEC Continuing CPD Hours", text: "Structured continuing professional development credited toward your PEC registration renewal." },
  { icon: TrendingUp, title: "Meritocratic Cadre Track", text: "Promotion on audited project performance — measured in tolerances held and milestones met, not tenure." },
  { icon: HeartPulse, title: "Full Medical & Life Indemnity", text: "Comprehensive medical cover and life indemnity for every cadre member, from day one." },
];

const STEPS = [
  { title: "Send Your CV", text: "Email your CV with your discipline, PEC registration (if applicable) and years of experience to our head office." },
  { title: "Technical Assessment & Panel", text: "Shortlisted engineers sit a discipline assessment and a panel interview with the Technical Directorate." },
  { title: "Project Mobilisation", text: "Selected profiles are mobilised to a live project or held on file and contacted the moment a matching position opens." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <p className="anim-fade-up flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold live-dot" /> Academic Recruitment &amp; Professional Cadre
          </p>
          <h1 className="anim-fade-up anim-delay-1 mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink">
            Join Pakistan&apos;s Most Rigorous Engineering Cadre.
          </h1>
          <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            We actively recruit high-achieving civil, structural, geotechnical, and MEP engineers who prioritize
            uncompromising physics over expedient shortcuts — and give them nationally transformative megastructures,
            BIM 5D workflows, advanced tensile laboratories, and overseas technical workshops.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Career Application — CV")}`} className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
              <Mail className="h-4 w-4" /> Email Your CV
            </a>
            <a href="#disciplines" className="rounded-btn border border-ink/20 px-5 py-3 text-sm font-bold text-ink hover:bg-white">View Disciplines</a>
          </div>
          <div className="anim-fade-up anim-delay-4 mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 lg:grid-cols-4">
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={850} suffix="+" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Site Operatives on Flagship Projects</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={4} /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Discipline Tracks</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={3} /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Regional Offices — Lahore, Islamabad, Karachi</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink"><CountUp value={38} suffix="+" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">Years of Engineering Pedigree</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section id="disciplines" className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Where You Can Work</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">Career Areas</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a, i) => (
              <div key={a.title} className={`reveal reveal-d${i + 1} lift rounded-card border border-line bg-white p-6`}>
                <a.icon className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-4 font-display text-lg leading-snug text-ink">{a.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </div>

          {/* Perks */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PERKS.map((p, i) => (
              <div key={p.title} className={`reveal reveal-d${i + 1} flex gap-4 rounded-card bg-cream p-6`}>
                <p.icon className="h-6 w-6 shrink-0 text-gold-dark" />
                <div>
                  <h3 className="font-display text-lg text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How hiring works + openings */}
      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">How Hiring Works</p>
          <h2 className="reveal mt-3 font-display text-4xl text-white">Three Steps Into the Cadre</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className={`reveal reveal-d${i + 1} rounded-card border border-white/10 bg-pine-deep p-6`}>
                <p className="font-display text-4xl text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg text-white">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-col items-start justify-between gap-5 rounded-card bg-gold px-6 py-6 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl text-ink">
                <ClipboardCheck className="h-6 w-6" /> Current Openings
              </h3>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-ink/75">
                Specific vacancies are announced as projects mobilise. To be considered for upcoming roles, send your CV
                with your discipline, PEC registration (if applicable) and years of experience — suitable profiles are
                kept on file and contacted when a matching position opens.
              </p>
            </div>
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Career Application — CV")}`} className="inline-flex shrink-0 items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-pine-deep">
              Email Your CV <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="reveal mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-mist">
            {["PEC Continuing CPD Hours", "Meritocratic Cadre Track", "Full Medical & Life Indemnity"].map((t) => (
              <span key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {t}</span>
            ))}
          </p>
          <p className="mt-8 text-[13px] text-mist">
            Prefer to talk first? Call the head office on{" "}
            <Link href={SITE.phoneHref} className="font-bold text-gold-light">{SITE.phone}</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
