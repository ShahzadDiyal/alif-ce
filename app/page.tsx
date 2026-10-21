import Link from "next/link";
import {
  ArrowRight, Award, BadgeCheck, Building2, CheckCircle2, Clock3, DraftingCompass,
  Leaf, Quote, ShieldCheck, Users,
} from "lucide-react";
import { CtaBand, ProjectCard, SectionHeading, SectorCard } from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";
import { IMAGES, OFFICES, PROCESS_STEPS, PROJECTS, SECTORS, SITE, STATS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-pine-900 pt-[112px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGES.hero} alt="High-rise construction site" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-900 via-pine-900/85 to-pine-900/30" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-14 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-16 lg:pb-20 lg:pt-20">
          <div>
            <p className="eyebrow flex items-center gap-2 text-gold-400">
              <Building2 size={14} /> Engineering &amp; Construction — Pakistan
            </p>
            <h1 className="mt-5 font-display text-[42px] leading-[1.05] text-cream-100 sm:text-6xl lg:text-7xl">
              Building a Better<br />Tomorrow
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-mist-300 sm:text-base">
              Pakistan&apos;s premier general contracting firm delivering complex high-rise towers, national
              infrastructure, and landmark commercial engineering projects with uncompromised precision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-gold">Start Your Project <ArrowRight size={16} /></Link>
              <Link href="/projects" className="btn-outline-light">View Our Projects</Link>
            </div>
          </div>
          <div className="card-dark hidden p-4 lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.tower} alt="Precision high-rise construction" className="h-44 w-full rounded-lg object-cover" />
            <div className="flex items-center justify-between px-1 pb-1 pt-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Field Execution</p>
                <p className="mt-1 font-display text-lg text-cream-100">Precision High-Rise Rigging</p>
              </div>
              <BadgeCheck className="text-gold-400" size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-cream-400 bg-cream-100">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:px-10 lg:grid-cols-4 lg:px-16">
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-8 text-center ${i > 0 ? "border-l border-cream-400" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-cream-400" : ""} ${i === 2 ? "max-lg:border-l-0" : ""}`}>
              <div className="font-display text-4xl text-pine-800 sm:text-5xl">{s.value}</div>
              <div className="mt-2 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.building} alt="Modern building engineered by ALIF" loading="lazy" className="h-[320px] w-full rounded-xl object-cover sm:h-[400px]" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-pine-900/95 px-4 py-3 text-cream-100">
              <Award className="text-gold-400" size={22} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Accreditation</p>
                <p className="text-[13px] font-semibold">PEC &lsquo;No Limit&rsquo; Category-A Certified</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="Master Builders Shaping Pakistan's Modern Skyline" />
            <p className="mt-5 text-[15px] leading-7 text-ink-500">
              ALIF Engineering &amp; Construction is an institutional general contracting and civil engineering
              powerhouse. From deep foundation engineering in high-water tables to superstructure concrete
              pouring and advanced MEP commissioning, we partner with Pakistan&apos;s leading corporations,
              developers, and institutions to deliver turn-key engineering excellence.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["PEC Registered No-Limit Constructor", "with proven track record in complex superstructures."],
                ["Rigorous Quality Assurance & Structural Integrity", "adhering to ASTM and British Standards."],
                ["Strict Zero-Harm QHSE Protocol", "safeguarding thousands of on-site personnel across Pakistan."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={20} />
                  <p className="text-sm leading-6 text-ink-500"><strong className="text-ink-900">{t}</strong> {d}</p>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-dark mt-8">Read Corporate Profile <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-cream-200/60">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-20">
          <SectionHeading center eyebrow="Our Core Expertise" title="Specialized Contracting Sectors" text="Engineering discipline across diverse building types." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s) => <SectorCard key={s.slug} sector={s} />)}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-pine-900">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading dark eyebrow="Selected Portfolio" title="Landmark Projects Across Pakistan" />
            <Link href="/projects" className="btn-outline-light !py-2.5">View All Projects</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* WHY ALIF */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-20">
          <SectionHeading center eyebrow="The ALIF Standard" title="Engineered for Reliability, Delivered with Distinction" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, title: "On-Time Delivery", text: "Guaranteed milestone adherence through advanced Primavera P6 resource leveling and rigorous site scheduling." },
              { icon: DraftingCompass, title: "In-House Engineering", text: "Complete structural BIM modeling, value-engineering, and geotechnical domain mastery under one corporate roof." },
              { icon: ShieldCheck, title: "HSE & ISO Standards", text: "Triple-certified ISO 9001, ISO 14001, and ISO 45001 compliance with zero-compromise safety protocols." },
              { icon: Users, title: "Single-Point Accountability", text: "Integrated project management eliminating subcontractor fragmentation from shoring to commissioning." },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <f.icon size={26} className="text-gold-600" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg text-pine-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 text-[13px] font-semibold text-ink-900 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, t: "Pakistan Engineering Council (PEC) No-Limit CA Category" },
              { icon: ShieldCheck, t: "1.85M LTI-Free Safe Man-Hours — Alif Horizon Tower" },
              { icon: Leaf, t: "LEED Green Building Standard Adherent" },
              { icon: Award, t: "Recognized by National Contractors Association of Pakistan" },
            ].map((b) => (
              <p key={b.t} className="flex items-center gap-2.5 rounded-xl border border-cream-400 bg-cream-100 px-4 py-3">
                <b.icon size={17} className="shrink-0 text-gold-600" /> {b.t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream-200/60">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16 lg:py-20">
          <SectionHeading center eyebrow="Our Work Methodology" title="From Concept to Turnkey Delivery" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.title} className="card p-6">
                <div className="font-display text-3xl text-gold-500">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg text-pine-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{s.text}</p>
              </div>
            ))}
          </div>
          <figure className="mx-auto mt-12 max-w-3xl text-center">
            <Quote className="mx-auto text-gold-500" size={28} />
            <blockquote className="mt-4 font-display text-xl italic leading-8 text-pine-800 sm:text-2xl sm:leading-9">
              &ldquo;ALIF Engineering demonstrated unprecedented structural craftsmanship on our high-rise corporate
              headquarters. Their adherence to schedule, concrete testing rigor, and engineering transparency set a
              new benchmark in Pakistan&apos;s construction industry.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[13px] font-semibold text-ink-500">— Project Director, Landmark Tower Development</figcaption>
          </figure>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-cream-400 pt-8 text-[13px] font-bold tracking-[0.18em] text-ink-500">
            <span>HABIB METRO PROPERTIES</span><span>CRESCENT INDUSTRIAL GROUP</span><span>DESCON INFRA</span>
            <span>ENGRO CAPITAL</span><span>FAUJI DEVELOPMENTS</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-cream-50" id="enquiry">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:px-16 lg:py-20">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Start a Conversation" text="Our engineering estimating desk and project development directors are available for site visits, project tendering, and technical pre-qualifications nationwide." />
            <div className="mt-8 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.label}>
                  <h3 className="text-sm font-bold text-pine-800">{o.label}</h3>
                  <p className="mt-1 text-sm text-ink-500">{o.address}</p>
                </div>
              ))}
              <p className="text-sm text-ink-500">
                <a href={SITE.phoneHref} className="font-bold text-pine-800 hover:text-gold-700">{SITE.phone}</a>
                {"  ·  "}
                <a href={`mailto:${SITE.tenderEmail}`} className="font-bold text-pine-800 hover:text-gold-700">{SITE.tenderEmail}</a>
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-cream-100 px-3 py-2 text-[12px] font-bold text-ink-900">
                <BadgeCheck size={15} className="text-gold-600" /> PEC Category CA (No-Limit) Certified Constructor
              </p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
