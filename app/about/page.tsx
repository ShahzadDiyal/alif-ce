import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, Building2, CheckCircle2, ClipboardCheck, Download, Factory,
  HardHat, Landmark, Leaf, Ruler, ShieldCheck, Sparkle, Truck,
} from "lucide-react";
import { IMAGES, SITE } from "@/lib/data";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About ALIF — Shaping the Architectural Destiny of Pakistan",
  description:
    "Founded on uncompromised structural integrity, ALIF Engineering & Construction has evolved from a pioneering geotechnical specialist into one of Pakistan's preeminent No-Limit Category CA turnkey contractors.",
  alternates: { canonical: "/about" },
};

const HERITAGE = [
  { value: "38+", label: "Years of Pedigree", text: "Continuous mega-structural execution across all federated provinces since 1987." },
  { value: "24.5M", label: "Sq.Ft Enclosed", text: "Class-A commercial complexes, healthcare campuses, and luxury residential towers." },
  { value: "100%", label: "Zero-LTI Benchmark", text: "Strict OSHA and ISO 45001:2018 verified site safety protocols across 65 concurrent sites." },
  { value: "CA", label: "No-Limit License", text: "Pakistan Engineering Council apex registration for unlimited capital values." },
];

const PILLARS = [
  { icon: Ruler, n: "01", title: "Structural Perfectionism", text: "Zero allowance for dimensional deviation. We deploy real-time Leica robotic total stations and laser concrete screeds ensuring millimeter-precise elevation tolerances." },
  { icon: ClipboardCheck, n: "02", title: "Primavera CPM Rigor", text: "Every critical path schedule is integrated with Oracle Primavera P6 and BIM 5D workflows, affording institutional stakeholders fully audited progress milestones." },
  { icon: Leaf, n: "03", title: "Life Safety & Stewardship", text: "Pioneering low-carbon slag replacement cements, green roof heat moderation systems, and an unbending zero-fatality culture certified across all ISO rubrics." },
];

const LEADERS = [
  { badge: "PE • FIEP", name: "Engr. Tariq Mahmood", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", bio: "Former Chief Engineer at NESPAK. Over 35 years directing landmark motorways, hydro-structures, and 40+ storey structural concrete cores.", cred: "B.Sc. Civil Eng. (UET Lahore)", exp: "35+ Yrs Exp" },
  { badge: "PE • CEng", name: "Engr. M. Salman", role: "COO & Head of Structures", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", bio: "Post-tensioning authority and tall-building seismic design specialist. Consulted on deep-basement shoring for major financial centers.", cred: "M.Sc. Structural Eng. (NUS)", exp: "22+ Yrs Exp" },
  { badge: "Ph.D. (Imperial)", name: "Dr. Kamran Rashid", role: "Geotechnical Directorate", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", bio: "Pioneered Pakistan's modern deep bored cast-in-situ secant piling methodologies and heavy dynamic compaction models.", cred: "Imperial College London", exp: "28+ Yrs Exp" },
  { badge: "PMP • LEED AP", name: "Farooq Aslam", role: "Exec. Director MEP & Pre-Con", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", bio: "Oversees comprehensive HVAC, building automation, and high-voltage substation integration for high-density mixed developments.", cred: "B.Sc. Mechanical (UET)", exp: "26+ Yrs Exp" },
];

const CREDENTIALS = [
  { icon: Landmark, tag: "Apex Level", title: "PEC Category CA", text: "No Financial Limit Registration. Sanctioned by Pakistan Engineering Council for construction of mega-dams, airport terminals, and towers exceeding 60 levels.", ref: "REG: PEC/CA/ENG-9042" },
  { icon: BadgeCheck, tag: "Certified", title: "ISO 9001:2015", text: "Comprehensive Quality Management System certified by Lloyd's Register. Enforcing automated QA/QC testing for raw concrete aggregates, tensile rebar, and water impermeability.", ref: "CERT: LRQA-QMS-4018" },
  { icon: ShieldCheck, tag: "Certified", title: "ISO 45001:2018", text: "Occupational Health & Safety Management Standard. Rigorous hazard mitigation, mandatory biometric site access, fall-arrest net scaffolding, and continuous toolbox safety drills.", ref: "CERT: TUV-OHS-9921" },
  { icon: Leaf, tag: "Certified", title: "ISO 14001:2015", text: "Environmental Stewardship Protocol. Continuous runoff water filtration, closed-loop construction slurry treatment, and aggressive particulate dust suppression across city centers.", ref: "CERT: ENV-LR-7810" },
  { icon: Sparkle, tag: "Affiliation", title: "USGBC Member & LEED", text: "Corporate member of U.S. Green Building Council. Accredited builders of Gold & Platinum tier energy-efficient envelopes with thermal break double glazing and solar reflectance indices.", ref: "MEMBER ID: 109845-US" },
  { icon: Building2, tag: "Alliance", title: "ACEP Corporate Partner", text: "Association of Consulting Engineers Pakistan. Active contributor to national structural building code updates and seismological zone revisions for high-risk tectonic zones.", ref: "AFFILIATION: ACEP-PK-044" },
];

const FLEET = [
  { value: "14", unit: "Heavy Tower Cranes", text: "Liebherr & Potain luffing-jib units up to 50-tonne lifting capacity with 75-meter reach radiuses.", tag: "Fleet: 100% Operational" },
  { value: "8", unit: "Hydraulic Piling Rigs", text: "Bauer BG-36 and Casagrande rotary drill rigs capable of 60-meter deep foundation boring in rock or marine silt.", tag: "Geotechnical Fleet" },
  { value: "120", unit: "m³/h Batching Capacity", text: "Twin-shaft automated Schwing Stetter concrete plants backed by 32 dedicated transit mixers and boom pumps.", tag: "Quality Controlled Mix" },
  { value: "6", unit: "Slip-Forming Systems", text: "DOKA automatic hydraulic self-climbing core wall formwork for rapid 4-day floor casting cycles on high-rises.", tag: "High-Rise Acceleration" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[136px] pb-10">
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            <span className="h-px w-8 bg-gold" /> Established Heritage &amp; Engineering Distinction
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h1 className="font-display text-4xl leading-[1.1] text-ink sm:text-6xl">
              Shaping the Architectural<br />Destiny of Pakistan.
            </h1>
            <p className="max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end">
              Founded on uncompromised structural integrity, ALIF Engineering &amp; Construction has evolved from a
              pioneering geotechnical specialist into one of Pakistan&apos;s preeminent No-Limit Category CA turnkey contractors.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-card">
            <Image src={IMAGES.night} alt="ALIF tower under construction at night" width={1600} height={700} priority className="h-[340px] w-full object-cover sm:h-[420px]" />
            <span className="absolute top-4 left-4 rounded-md bg-ink/80 px-3 py-1.5 text-[11px] font-bold tracking-widest text-gold-light uppercase backdrop-blur">
              Engineering Archive • Folio 01
            </span>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERITAGE.map((s) => (
              <div key={s.label} className="border-t-2 border-gold/60 pt-4">
                <p className="font-display text-4xl text-ink">{s.value === "38+" ? <CountUp value={38} suffix="+" /> : s.value === "24.5M" ? <CountUp value={24.5} decimals={1} suffix="M" /> : s.value === "100%" ? <CountUp value={100} suffix="%" /> : s.value}</p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">{s.label}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Our Foundational Manifesto</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Permanence forged through mathematical rigor.</h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-ink/80">
                <p>
                  <span className="float-left mr-3 font-display text-6xl leading-[0.85] text-gold-dark">W</span>
                  hen ALIF laid its inaugural geotechnical foundation in 1987, the built environment of Pakistan stood on the
                  precipice of vertical ambition. As skylines demanded greater verticality, structural challenges called for
                  more than just physical labor; they necessitated uncompromising engineering precision and rigorous
                  adherence to international codes.
                </p>
                <p>
                  Over four decades, our cadre has remained steadfast in upholding ASTM, British Standard (BS), and Eurocode
                  standards within domestic terrain. From deep diaphragm walls anchored through difficult aquifer zones in
                  Karachi&apos;s coastal belts to seismic post-tensioned shear walls in the upper seismic corridors of
                  Islamabad and Peshawar, our engineering methodology treats every casting as an enduring civic contribution.
                </p>
                <p>
                  Today, ALIF stands elevated as a PEC Category CA firm — the highest attainable accreditation — conferring
                  unconstrained financial and technical execution capacity for high-rises, infrastructural bridges, and
                  critical healthcare facilities throughout Pakistan.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <div>
                  <p className="font-display text-lg text-ink">Engr. Tariq Mahmood, PE</p>
                  <p className="text-[12px] tracking-wide text-muted uppercase">Chief Executive Officer &amp; Managing Director</p>
                </div>
                <p className="ml-auto font-display text-2xl text-gold-dark italic">T. Mahmood</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-card">
                <Image src={IMAGES.engineer} alt="ALIF engineers reviewing structural drawings on site" width={900} height={640} className="h-72 w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-14">
                  <p className="text-[13px] font-bold text-white">On-Site Blueprint Reconciliation &amp; Structural QA</p>
                  <p className="mt-1 text-[12px] text-white/75">Site Survey Registry: ATC Tower (38 Storeys) • Ref: 2024-ENG-082</p>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-muted">
                Every project floor plate is scrutinized through non-destructive ultrasonic rebar scanning and cube
                compressive pressure testing prior to pour sign-off.
              </p>
              <div className="flex items-start gap-3 rounded-card bg-pine p-5 text-cream">
                <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-bold">PEC License # 00142 (Category CA)</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-mist">Approved for unrestricted public, institutional, and defense structural developments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-card border border-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <p.icon className="h-6 w-6 text-gold-dark" />
                  <span className="text-[11px] font-bold tracking-[0.18em] text-muted uppercase">Pillar {p.n}</span>
                </div>
                <h3 className="mt-4 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Governance &amp; Academic Rigor</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl leading-tight text-ink">Executive Leadership &amp; Technical Directorate</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Led by licensed professional engineers with international credentials spanning MIT, Imperial College London,
            UET Lahore, and Fellowship appointments in the Pakistan Engineering Council.
          </p>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((l) => (
              <article key={l.name} className="reveal lift overflow-hidden rounded-card border border-line bg-white">
                <div className="relative">
                  <Image src={l.img} alt={l.name} width={600} height={520} className="h-56 w-full object-cover" />
                  <span className="absolute top-3 left-3 rounded-md bg-ink/85 px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-gold-light uppercase">{l.badge}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg leading-snug text-ink">{l.name}</h3>
                  <p className="mt-0.5 text-[12px] font-bold tracking-wide text-gold-dark uppercase">{l.role}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{l.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-3 text-[11px] font-semibold text-ink">
                    <span className="rounded-md bg-cream px-2 py-1">{l.cred}</span>
                    <span className="rounded-md bg-cream px-2 py-1">{l.exp}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Statutory Clearance &amp; Accreditation</p>
          <h2 className="mt-3 font-display text-4xl text-white">Sanctioned by Apex Regulatory Bodies</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14.5px] text-mist">
            Our operational workflows conform to certified global standards of technical safety, quality management, and environmental mitigation.
          </p>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="reveal lift rounded-card border border-white/10 bg-pine-deep p-7">
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

      {/* Fleet */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Mechanized Independence</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Owned Heavy Fleet &amp; Autonomous Logistics</h2>
            </div>
            <p className="text-[14.5px] leading-relaxed text-muted">
              ALIF eliminates contractor bottlenecks by maintaining 100% in-house ownership of heavy construction apparatus.
              With four centralized machinery depots in Lahore, Karachi, Rawalpindi, and Multan, our logistics engine operates round-the-clock.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((f) => (
              <div key={f.unit} className="reveal lift rounded-card border border-line bg-cream p-7">
                <p className="font-display text-5xl text-ink">{f.value} <span className="text-lg text-gold-dark">{f.unit}</span></p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{f.text}</p>
                <p className="mt-4 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-gold-dark uppercase">
                  <Truck className="h-3.5 w-3.5" /> {f.tag}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-card border border-gold/40 bg-gold/10 px-6 py-4">
            <Factory className="h-5 w-5 text-gold-dark" />
            <p className="text-[13.5px] font-semibold text-ink">
              Central Fabrication &amp; Engineering Yards — 25-Acre Main Heavy Depot at Manga Mandi, Lahore • Port Qasim Coastal Depot, Karachi
            </p>
            <Link href="/contact" className="ml-auto rounded-btn bg-ink px-4 py-2 text-[12.5px] font-bold text-white hover:bg-pine">
              Inspect Fleet Manifest
            </Link>
          </div>
          <figure className="mx-auto mt-14 max-w-3xl text-center">
            <blockquote className="font-display text-2xl leading-relaxed text-ink italic sm:text-[28px]">
              “True engineering is silent. It is the unyielding strength inside reinforced concrete that stands unharmed
              through earth tremors, time, and changing seasons.”
            </blockquote>
            <figcaption className="mt-4 text-[11px] font-bold tracking-[0.2em] text-gold-dark uppercase">
              ALIF Engineering Technical Council — Lahore • Karachi • Islamabad
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-paper pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-card bg-pine px-6 py-10 text-cream sm:px-10">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Academic Recruitment &amp; Professional Cadre</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl">Join Pakistan&apos;s Most Rigorous Engineering Cadre.</h2>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-mist">
              We actively recruit high-achieving civil, structural, geotechnical, and MEP engineers who prioritize
              uncompromising physics over expedient shortcuts. Work directly on nationally transformative megastructures
              with full access to BIM 5D, advanced tensile laboratories, and overseas technical workshops.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/careers" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
                <Download className="h-4 w-4" /> Download Corporate Profile (PDF)
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-mist">
              {["PEC Continuing CPD Hours", "Meritocratic Cadre Track", "Full Medical & Life Indemnity"].map((t) => (
                <span key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {t}</span>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-[12px] text-mist/70">
              <HardHat className="h-4 w-4" /> Established 1987 • Head Office: {SITE.headOffice}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
