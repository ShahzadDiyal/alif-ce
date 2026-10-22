import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, BadgeCheck, Download, Landmark, Leaf, Mail, Ruler, ScanSearch, ShieldCheck, Trophy,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import { IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Achievements — A Legacy of Structural Distinction | ALIF Engineering & Construction",
  description:
    "ALIF's institutional record: PEC Category CA No-Limit license #00142, triple ISO certification, 1.85M+ safe man-hours, four decades of milestones, the Four HSE Golden Rules and national industry commendations.",
  alternates: { canonical: "/achievements" },
};

const LICENSES = [
  { tag: "National Statutory", reg: "Reg # 00142", title: "Pakistan Engineering Council (PEC)", sub: "Category CA — No-Limit Financial Scope", text: "Enables ALIF to execute complex civil, structural, mechanical, geotechnical, and high-rise infrastructural works without restriction on capital value or vertical altitude.", chip: "Validity: 2025–2028" },
  { tag: "Quality Assurance", reg: "Lloyd's LRQA", title: "ISO 9001:2015 Certification", sub: "Quality Management Systems (QMS)", text: "Institutionalized site audit regimes, digital batching telemetry, raw material traceability, and metallurgical non-destructive testing (NDT) across every casting sequence.", chip: "Audited: Annually" },
  { tag: "Workforce Welfare", reg: "BSI Assured", title: "ISO 45001:2018 Certification", sub: "Occupational Health & Safety Management", text: "Comprehensive site hazard management, 100% harness clip-in enforcement, certified rigger protocols, and continuous occupational hygiene monitoring across deep basements.", chip: "Compliance: 100%" },
  { tag: "Environmental", reg: "SGS Registered", title: "ISO 14001:2015 Certification", sub: "Environmental Stewardship & Dust Mitigation", text: "Proactive acoustic dampening in dense metropolitan corridors, high-efficiency runoff silt separation, and closed-loop concrete wash water recycling mechanisms.", chip: "EPA Standardized" },
  { tag: "Sustainability", reg: "Member #10842", title: "U.S. Green Building Council", sub: "LEED Corporate Charter Member", text: "Dedicated engineering personnel holding LEED AP BD+C credentials, optimizing thermal envelopes, daylight penetration, and regionally procured low-carbon cement blends.", chip: "Silver to Platinum" },
  { tag: "Technical Codes", reg: "BS 5975 / ACEP", title: "British Standards & ACEP", sub: "Temporary Works & Design Integrity", text: "Strict formal verification for all falsework, shoring struts, self-climbing formwork jacks, and heavy hydraulic crawler platform crane pad load certifications.", chip: "Charter Status" },
];

const TIMELINE = [
  { year: "1987", title: "Geotechnical & Deep Piling Inception", text: "Founded as a specialized foundation contracting firm in Lahore, introducing hydraulic bored piling rigs for critical highway bridges along the Grand Trunk Road.",
    features: [
      { h: "Lahore Foundation Depot", t: "Pioneered 35-meter cast-in-situ bored shafts for alluvium sedimentary strata." },
      { h: "Apex Regulatory Authorization", t: "Unbounded financial and technical category, allowing independent participation in state mega-contracts." },
    ] },
  { year: "1999", title: "Conferral of PEC Category CA (No-Limit)", text: "Granted the sovereign Category CA license by the Pakistan Engineering Council under License Serial #00142, removing all monetary project ceilings.", features: [] },
  { year: "2008", title: "First 20+ Storey Post-Tensioned Tower", text: "Completed the landmark Pearl Continental expansion in Rawalpindi/Islamabad 4 months ahead of the contractual program, setting a regional post-tensioning benchmark.",
    features: [
      { h: "High-Rise Specialized Division", t: "Integrated unbonded post-tensioning monostrand systems for 12-meter clear spans without column intrusion." },
      { h: "Safety Milestone Record", t: "Awarded the National Safety Council Certificate of Commendation for zero medical evacuations over 850 continuous days." },
    ] },
  { year: "2016", title: "One Million Safe Man-Hours Milestone", text: "Passed the 1,000,000 continuous hours threshold without a single Lost-Time Injury on the multi-tiered Mall of Gulberg mega-structure in Lahore.", features: [] },
  { year: "2021", title: "Flagship Alif Horizon Commissioning", text: "Delivered 32 storeys of Grade-A commercial architectural space requiring a 40-meter continuous secant contiguous piling wall and 5 subterranean basement levels.",
    features: [
      { h: "5-Tier Subterranean Retention", t: "Integrated multi-strand tie-back ground anchors with real-time digital inclinometer sensing." },
      { h: "Heavy Machinery Yard", t: "Fully owned heavy equipment asset fleet exceeding PKR 4.2 Billion, eliminating subcontracting delays." },
    ] },
  { year: "2024", title: "Bauer BG-36 Fleet & Batching Expansion", text: "Procured advanced Bauer BG-36 drilling rigs and twin automated 120m³/hr batching plants, solidifying ALIF as the self-performing industrial powerhouse of the region.", features: [] },
];

const RULES = [
  { n: "01", title: "100% Fall Arrest Tie-Off", text: "Any person operating beyond 1.8 meters without passive perimeter containment must be double-lanyard anchored to engineered lifeline cables. Zero warnings issued.", chip: "Mandatory Immediate Dismissal" },
  { n: "02", title: "Certified Scaffolding Tags", text: "No personnel shall mount scaffold bays lacking a signed green scaffold inspection tag issued within the last 72 hours by our Third-Party Scaffolding Competent Person.", chip: "72-Hour Rigorous Cycle" },
  { n: "03", title: "Daily Shift Toolbox Audits", text: "Before morning and night shift muster, every foreman conducts mandatory 15-minute Job Hazard Analyses (JHA) delivered in native regional dialects.", chip: "100% Shift Attendance" },
  { n: "04", title: "Electronic Crane Load Limiting", text: "All luffing and hammerhead tower cranes feature automated electronic load moment cutouts. Bypassing or disabling load alarms results in immediate permanent blacklisting.", chip: "Hardware Locked Limiter" },
];

const HONORS = [
  { year: "2023", icon: Trophy, org: "NCAP Pakistan", title: "Excellence in Tall Building Construction", text: "Awarded by National Constructors Association of Pakistan for structural execution velocity, slip-form accuracy, and facade integration at Alif Prime Tower.", jury: "Jury: Pakistan Association of Architects" },
  { year: "2021", icon: BadgeCheck, org: "UET Concrete Institute", title: "Concrete Mix Innovation Trophy", text: "Presented by University of Engineering & Technology Lahore for deploying 10,000 PSI high-durability self-consolidating silica-fume reinforced mix designs.", jury: "Jury: Dept of Civil Engineering UET" },
  { year: "2019", icon: ShieldCheck, org: "EFP Safety Congress", title: "National Occupational Safety Cup", text: "Employers' Federation of Pakistan commendation recognizing continuous multi-year LTI-free governance across commercial and hospital developments.", jury: "Audited by ILO Delegation" },
];

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 pt-[136px] pb-16 sm:px-6 lg:px-12">
          <p className="anim-fade-up text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Institutional Record &amp; Pedigree</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              <h1 className="anim-fade-up anim-delay-1 font-display text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.05] text-ink">
                A Legacy of <em className="text-gold-dark not-italic underline decoration-gold/50 underline-offset-8">Structural Distinction</em> &amp; Zero-Harm Precision.
              </h1>
              <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                For nearly four decades, ALIF has defined the tectonic baseline of Pakistan&apos;s skyline. From seismic
                deep-trench foundations along the Indus basin to post-tensioned supertall towers, our certifications
                validate an uncompromising dedication to structural permanence and safety governance.
              </p>
            </div>
            <div className="anim-fade-up anim-delay-2 rounded-card border border-gold/40 bg-gold/10 p-5">
              <p className="flex items-center justify-between text-[12px] font-bold tracking-wider text-ink uppercase">
                Statutory Verification
                <span className="flex items-center gap-1.5 rounded-md bg-pine px-2 py-1 text-[10.5px] text-gold-light"><span className="h-1.5 w-1.5 rounded-full bg-gold live-dot" /> Active Standing</span>
              </p>
              <p className="mt-3 font-display text-2xl text-ink">PEC No-Limit <span className="text-gold-dark">#00142</span></p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">Highest institutional authorization granted by Pakistan Engineering Council. Unbounded single-contract execution ceiling.</p>
            </div>
          </div>
          <div className="anim-fade-up anim-delay-3 mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 lg:grid-cols-4">
            <div>
              <p className="font-display text-5xl text-ink max-sm:text-[2rem]"><CountUp value={1.85} decimals={2} suffix="M+" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">Safe Man-Hours</p>
              <p className="mt-1 text-[12px] text-muted">Consecutive zero Lost-Time Injury (LTI) verified across metro sites.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink max-sm:text-[2rem]"><CountUp value={100} suffix="%" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">QA/QC Pass Rate</p>
              <p className="mt-1 text-[12px] text-muted">Independent batch testing confirmed by UET Lahore &amp; NESPAK.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink max-sm:text-[2rem]">CA</p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">No-Limit License</p>
              <p className="mt-1 text-[12px] text-muted">Statutory Category CA certification for mega-tier infrastructure.</p>
            </div>
            <div>
              <p className="font-display text-5xl text-ink max-sm:text-[2rem]"><CountUp value={38} suffix="+" /></p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">Years Continuous</p>
              <p className="mt-1 text-[12px] text-muted">Turnkey EPC execution with institutional public and private developers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div className="reveal">
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Institutional Credentials</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Statutory Licenses &amp; Apex International Charters</h2>
            </div>
            <p className="reveal reveal-d2 text-[14.5px] leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
              Regulated by governing engineering federations, audited every quarter by independent verification registrars
              across quality, environmental stability, and worker life safety.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LICENSES.map((l, i) => (
              <div key={l.title} className={`reveal reveal-d${(i % 3) + 1} lift flex flex-col rounded-card border border-line bg-white p-7`}>
                <div className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase">
                  <span className="text-gold-dark">{l.tag}</span>
                  <span className="rounded-md bg-cream px-2 py-1 font-mono text-[10.5px] text-ink">{l.reg}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-ink">{l.title}</h3>
                <p className="mt-0.5 text-[12px] font-bold tracking-wide text-gold-dark uppercase">{l.sub}</p>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted">{l.text}</p>
                <p className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 text-[11.5px] font-bold text-ink">
                  <BadgeCheck className="h-4 w-4 text-gold-dark" /> {l.chip}
                </p>
              </div>
            ))}
          </div>

          {/* Field verification */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="reveal relative overflow-hidden rounded-card">
              <Image src={IMAGES.engineer} alt="Core Tower Project Team — Level 26 Plan Review" width={1100} height={760} className="h-80 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-14">
                <p className="text-[11px] font-bold tracking-[0.18em] text-gold-light uppercase">Field Verification Deck</p>
                <p className="mt-1 text-[14px] font-bold text-white">Core Tower Project Team — Level 26 Plan Review</p>
                <p className="text-[12px] text-white/75">Joint sign-off with NESPAK Lead Structural Consultants • Zero Deviations</p>
              </div>
            </div>
            <div className="reveal reveal-d2">
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Supervisory Authority</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ink">Engineering Precision Verified In Situ.</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                Certificates in corporate archives mean little without absolute translation to the steel and concrete
                decks. At ALIF, senior registered Professional Engineers (PE) lead all daily inspection tours alongside
                third-party consultant supervisory cadres.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3.5">
                  <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  <div>
                    <h4 className="text-[14.5px] font-bold text-ink">Tri-Party Blueprint Sign-Off</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">No pour commences without verified sign-off from Client Representative, Third-Party Resident Consultant, and ALIF Quality Director.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <ScanSearch className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  <div>
                    <h4 className="text-[14.5px] font-bold text-ink">Digital Ultrasonic Weld Testing</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">All primary heavy column splices and shear plate junctions are scanned ultrasonically before encasement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="reveal text-center">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Historical Provenance</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Four Decades of Engineering Milestones</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] text-muted">
              A chronologic index of progressive capacity upgrades, historic statutory licenses, and landmark civil achievements across Pakistan.
            </p>
          </div>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <span className="absolute top-0 bottom-0 left-[19px] w-px bg-gold/40 sm:left-1/2" aria-hidden />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className={`reveal relative pl-14 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"}`}>
                  <span className={`absolute top-1 left-[11px] h-[17px] w-[17px] rounded-full border-[3px] border-gold bg-cream sm:top-2 ${i % 2 === 0 ? "sm:left-auto sm:-right-[9px]" : "sm:-left-[9px]"}`} aria-hidden />
                  <p className="font-display text-4xl text-gold-dark">{t.year}</p>
                  <h3 className="mt-1.5 font-display text-[21px] leading-snug text-ink">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{t.text}</p>
                  {t.features.length > 0 && (
                    <div className={`mt-4 grid gap-3 ${i % 2 === 0 ? "sm:justify-items-end" : ""}`}>
                      {t.features.map((f) => (
                        <div key={f.h} className="w-full rounded-card border border-line bg-white p-4 text-left">
                          <h4 className="text-[13px] font-bold text-ink">{f.h}</h4>
                          <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{f.t}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Raft band */}
          <div className="reveal relative mt-16 overflow-hidden rounded-card bg-pine px-6 py-10 text-cream sm:px-10">
            <Image src={IMAGES.night} alt="" width={1400} height={500} className="absolute inset-0 h-full w-full object-cover opacity-15" />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Continuous Pour Protocols</p>
                <h3 className="mt-2.5 font-display text-3xl leading-tight text-white sm:text-4xl">24-Hour Monolithic Raft Castings</h3>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mist">
                  For deep-raft foundation slabs exceeding 8,000 cubic meters, ALIF executes seamless non-stop thermal
                  pour cycles with dual ice-chilled batch plants and redundant concrete pumps.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-display text-[22px] text-gold-light sm:text-4xl"><CountUp value={8200} suffix="m³" /></p>
                  <p className="mt-1 text-[10.5px] font-bold tracking-wider text-mist uppercase">Single Raft Volume</p>
                </div>
                <div>
                  <p className="font-display text-[22px] text-gold-light sm:text-4xl"><CountUp value={38} suffix=" Hrs" /></p>
                  <p className="mt-1 text-[10.5px] font-bold tracking-wider text-mist uppercase">Non-Stop Operation</p>
                </div>
                <div>
                  <p className="font-display text-[22px] text-gold-light sm:text-4xl"><CountUp value={0} decimals={1} /></p>
                  <p className="mt-1 text-[10.5px] font-bold tracking-wider text-mist uppercase">Cold Joints — Integrity Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE rules + honors */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Safety Canon</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink">The Four HSE Golden Rules</h2>
          <p className="reveal mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Safety is not an administrative metric; it is an unyielding structural mandate. Every tradesperson,
            superintendent, and executive on an ALIF project site is bound by these four immutable laws.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RULES.map((r, i) => (
              <div key={r.n} className={`reveal reveal-d${i + 1} lift flex flex-col rounded-card border border-line bg-white p-7`}>
                <p className="flex items-center justify-between">
                  <ShieldCheck className="h-6 w-6 text-gold-dark" />
                  <span className="text-[11px] font-bold tracking-wider text-muted uppercase">Covenant {r.n}</span>
                </p>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{r.text}</p>
                <p className="mt-4 border-t border-line pt-3 text-[11px] font-bold tracking-wider text-gold-dark uppercase">{r.chip}</p>
              </div>
            ))}
          </div>

          <p className="reveal mt-16 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Institutional Honors</p>
          <h2 className="reveal mt-3 font-display text-4xl text-ink max-sm:text-3xl">Industry Commendations &amp; Medals</h2>
          <p className="reveal mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Conferred by national engineering congresses, prime developer consortiums, and academia for groundbreaking concrete technology and safety performance.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HONORS.map((h, i) => (
              <div key={h.title} className={`reveal reveal-d${i + 1} lift rounded-card bg-cream p-7`}>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-gold-dark">{h.year}</span>
                  <h.icon className="h-6 w-6 text-gold-dark" />
                </div>
                <p className="mt-3 text-[11px] font-bold tracking-wider text-muted uppercase">{h.org}</p>
                <h3 className="mt-1 font-display text-xl leading-snug text-ink">{h.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{h.text}</p>
                <p className="mt-4 border-t border-line pt-3 text-[11.5px] font-semibold text-ink/70">{h.jury}</p>
              </div>
            ))}
          </div>

          {/* Dossier CTA */}
          <div className="reveal mt-14 grid gap-8 rounded-card bg-pine px-6 py-9 text-cream sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-gold-light uppercase">
                <Landmark className="h-4 w-4" /> Statutory Tendering Folio
              </p>
              <h3 className="mt-2.5 font-display text-3xl leading-tight text-white">Verify Credentials or Request Complete Audit Dossier</h3>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mist">
                Are you preparing an institutional Request for Proposal (RFP) or conducting prequalification diligence?
                Download our certified PEC license copies, ISO accreditations, audited financials, and HSE manuals in a single verified folio.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] font-semibold text-white">
                {["PEC Category CA Form PEC-1", "Lloyd's ISO 9001:2015", "Safety Statistics 2020-2024"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-gold" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
             <Link
  href="/contact#enquiry"
  className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light max-md:w-full max-md:justify-center max-md:text-center"
>
  <Download className="h-4 w-4" /> Download Audit Dossier
</Link>
<a
  href={`mailto:${SITE.tenderEmail}`}
  className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 max-md:w-full max-md:justify-center max-md:text-center"
>
  <Mail className="h-4 w-4" /> Inquire with Tendering Desk
</a>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-gold-light hover:text-white">
                See the portfolio behind the record <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="flex items-center gap-1.5 text-[12px] text-mist"><Leaf className="h-3.5 w-3.5" /> Audited by independent verification registrars</span>
              <span className="flex items-center gap-1.5 text-[12px] text-mist"><Award className="h-3.5 w-3.5" /> Honors verified against conferring bodies</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
