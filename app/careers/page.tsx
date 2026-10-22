import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, BadgeCheck, Building2, GraduationCap, Landmark, ShieldCheck, Sparkles,
} from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import CareersExplorer from "@/components/CareersExplorer";
import CountUp from "@/components/CountUp";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Build Your Engineering Legacy | ALIF Engineering & Construction",
  description:
    "Open engineering requisitions at ALIF: senior resident engineers, geotechnical, MEP commissioning, project controls and HSE roles, plus the 24-month Management Trainee Engineer (MTE) cadre program.",
  alternates: { canonical: "/careers" },
};

const WHY = [
  { icon: Building2, tag: "Unprecedented Magnitude", title: "Mega-Scale Structural Exposure", text: "Manage 35-storey reinforced post-tensioned superstructures, 40-meter diaphragm walls, and monumental civic infrastructure across Karachi, Lahore, and Islamabad." },
  { icon: Sparkles, tag: "Industry 4.0 Construction", title: "Algorithmic Project Controls", text: "Deploy integrated Primavera P6 enterprise portfolios, 5D BIM synchronization with Revit, high-definition terrestrial LiDAR surveys, and live automated structural health sensors." },
  { icon: ShieldCheck, tag: "Zero Compromise Doctrine", title: "Institutional Safety & QA/QC", text: "We run ISO 45001 & ISO 9001 accredited sites. Every engineer possesses unilateral authority to halt operations should safety tolerances or concrete curing metrics deviate." },
  { icon: GraduationCap, tag: "Lifetime Technical Pedigree", title: "Fellows & Mentorship", text: "Work alongside distinguished Fellows of the Pakistan Engineering Council and international consulting directors, fostering rapid evolution toward PE registration and site mastery." },
];

const ROTATIONS = [
  { n: "01", period: "Months 1–6", title: "Substructure, Piling & Earthwork Geotechnics", text: "Active field immersion in continuous flight auger (CFA) piling, anchor stressing, and ground improvement tests." },
  { n: "02", period: "Months 7–12", title: "High-Rise Superstructure & Post-Tensioning", text: "Core wall jump-form management, high-volume concrete pumping hydraulics, and PT tendon layout QA/QC." },
  { n: "03", period: "Months 13–18", title: "MEP Services, Fire Systems & BMS Integration", text: "3D BIM clash detection, HVAC riser installation, and life-safety commission protocols." },
  { n: "04", period: "Months 19–24", title: "Commercial Controls & Primavera P6 Scheduling", text: "Direct apprenticeship under Corporate Tendering Directors, FIDIC contract administration, and project scheduling." },
];

export default function CareersPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="bg-pine text-cream">
        <div className="mx-auto w-full px-4 pt-[136px] pb-16 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="anim-fade-up text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Talent Acquisition &amp; Engineering Cadre</p>
              <h1 className="anim-fade-up anim-delay-1 mt-5 font-display text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.05] text-white">
                Build Your Engineering Legacy with Pakistan&apos;s Preeminent Contractor.
              </h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-mist">
                We invite licensed civil engineers, geotechnical practitioners, MEP directors, and controls managers who
                revere structural rigor, algorithmic accuracy, and uncompromised physical science.
              </p>
              <div className="anim-fade-up anim-delay-3 mt-7 flex flex-wrap gap-3">
               <a
  href="#vacancies"
  className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light max-md:w-full max-md:justify-center max-md:text-center"
>
  Explore Open Vacancies <ArrowDown className="h-4 w-4" />
</a>
<a
  href="#mte"
  className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 max-md:w-full max-md:justify-center max-md:text-center"
>
  Graduate Cadre Cohort <ArrowRight className="h-4 w-4" />
</a>
              </div>
            </div>
            <div className="anim-fade-up anim-delay-2 relative hidden overflow-hidden rounded-card lg:block">
              <Image src={IMAGES.engineer} alt="PEC Registered Chartered Engineers on site" width={900} height={640} priority className="hero-zoom h-72 w-full object-cover" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-ink/85 px-3 py-2 text-[11.5px] font-bold text-gold-light backdrop-blur">
                <BadgeCheck className="h-4 w-4" /> PEC Registered Chartered Engineers
              </span>
            </div>
          </div>
          <div className="anim-fade-up anim-delay-4 mt-11 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 lg:grid-cols-4">
            <div>
              <p className="font-display text-5xl text-white"><CountUp value={450} suffix="+" /></p>
              <p className="mt-1 text-[12px] font-bold text-gold-light">Engineers &amp; Technologists</p>
              <p className="mt-1 text-[12px] text-mist">Licensed resident, structural, and field specialists nationwide.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-white"><CountUp value={100} suffix="%" /></p>
              <p className="mt-1 text-[12px] font-bold text-gold-light">PEC CPD Sponsorship</p>
              <p className="mt-1 text-[12px] text-mist">Continuous professional training and certification fully covered.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-white"><CountUp value={0} decimals={2} /></p>
              <p className="mt-1 text-[12px] font-bold text-gold-light">Lost-Time Injury (LTI) Rate</p>
              <p className="mt-1 text-[12px] text-mist">Strict BS 5975 temporary works governance and safety culture.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-white"><CountUp value={30} suffix="+" /></p>
              <p className="mt-1 text-[12px] font-bold text-gold-light">Mega Superstructures</p>
              <p className="mt-1 text-[12px] text-mist">Direct assignments on landmark towers and civic facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ALIF */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div className="reveal">
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">The ALIF Standard</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Why Visionary Engineers Entrust Their Careers to ALIF.</h2>
            </div>
            <p className="reveal reveal-d2 text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              We operate at the convergence of heavy structural permanence and high-velocity digital engineering. Here,
              responsibility is absolute, calculations are audited down to the milliradian, and leadership is grounded in the field.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <div key={w.title} className={`reveal reveal-d${i + 1} lift rounded-card border border-line bg-white p-7`}>
                <w.icon className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-4 font-display text-lg leading-snug text-ink">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{w.text}</p>
                <p className="mt-4 border-t border-line pt-3 text-[11px] font-bold tracking-wider text-gold-dark uppercase">{w.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section id="vacancies" className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Active Opportunities</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">Engineering Cadre Requisitions.</h2>
          <p className="reveal mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Open appointments for technical directors, superintendents, and certified specialists across our operational centers.
          </p>
          <div className="mt-9">
            <CareersExplorer />
          </div>
          <p className="reveal mt-8 flex items-center gap-2.5 rounded-card border border-line bg-white px-5 py-4 text-[13.5px] text-muted">
            <Landmark className="h-5 w-5 shrink-0 text-gold-dark" />
            <span><strong className="text-ink">University Alliances:</strong> Structured annual talent pipelines directly from UET Lahore, NUST Islamabad, and NED Karachi.</span>
          </p>
        </div>
      </section>

      {/* MTE program */}
      <section id="mte" className="bg-paper">
        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:px-12 py-24 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal relative overflow-hidden rounded-card">
            <Image src={IMAGES.hero} alt="Management Trainee Engineers on an ALIF site" width={1000} height={900} className="h-full min-h-[320px] w-full object-cover" />
            <span className="absolute bottom-4 left-4 rounded-md bg-gold px-3 py-1.5 text-[11px] font-bold tracking-wider text-ink uppercase">Young Professional Program</span>
          </div>
          <div>
            <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Young Professional Program</p>
            <h2 className="reveal mt-3 font-display text-4xl leading-tight text-ink">The ALIF Management Trainee Engineer (MTE) Cadre.</h2>
            <p className="reveal mt-4 text-[14.5px] leading-relaxed text-muted">
              An immersive, 24-month rotational fellowship engineered to forge Pakistan&apos;s future project directors.
              Fresh graduates rotate through Subsurface Geotechnics, Tower Superstructures, Electromechanical Coordination, and Commercial Tendering.
            </p>
            <div className="mt-8 space-y-4">
              {ROTATIONS.map((r, i) => (
                <div key={r.n} className={`reveal reveal-d${i + 1} flex gap-4 rounded-card border border-line bg-white p-5`}>
                  <span className="font-display text-3xl text-gold-dark">{r.n}</span>
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-gold-dark uppercase">{r.period}</p>
                    <h3 className="mt-0.5 font-display text-lg leading-snug text-ink">{r.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#apply" className="reveal mt-7 inline-flex items-center gap-2 text-[13.5px] font-bold text-gold-dark hover:text-ink">
              Apply to the 2025 MTE Cohort (Class of 2024–2025 Graduates) <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="reveal">
            <ApplicationForm />
          </div>
          <figure className="mx-auto mt-14 max-w-3xl text-center">
            <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Institutional Heritage</p>
            <blockquote className="reveal mt-4 font-display text-[26px] leading-relaxed text-ink italic">
              “We do not merely erect buildings. We forge the permanent physical skeleton of Pakistan.”
            </blockquote>
            <figcaption className="reveal mt-4 text-[13.5px] leading-relaxed text-muted">
              If you possess the uncompromising work ethic and structural mastery demanded by projects of national
              significance, your place is among the ALIF cadre.
            </figcaption>
            <Link href="/about" className="reveal mt-6 inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-gold-dark uppercase hover:text-ink">
              Meet the Leadership <ArrowRight className="h-4 w-4" />
            </Link>
          </figure>
        </div>
      </section>
    </>
  );
}
