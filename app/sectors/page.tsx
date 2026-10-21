import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, FlaskConical, Gauge, ShieldCheck } from "lucide-react";
import CountUp from "@/components/CountUp";
import { PROJECTS, SECTORS, projectsForSector } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sectors — Specialized Contracting Sectors | ALIF Engineering & Construction",
  description:
    "Eight specialized contracting sectors: high-rise buildings, commercial complexes, residential communities, hospitals & pharmaceuticals, academic buildings, industrial & power, piling & dewatering, infrastructure & civil works.",
  alternates: { canonical: "/sectors" },
};

const STANDARDS = [
  { icon: Compass, title: "Geotechnical Certainty", text: "Deep foundation systems engineered to site-specific stratigraphy — secant piling delivered to 38.5 m on our flagship tower." },
  { icon: Gauge, title: "Superstructure Precision", text: "Self-climbing formwork and post-tensioned slabs holding floor cycles and tolerances across every sector we build in." },
  { icon: FlaskConical, title: "Laboratory-Verified Quality", text: "In-house labs and third-party audits on every pour, weld and system — 99.4% concrete strength compliance on record." },
  { icon: ShieldCheck, title: "Zero-Harm HSE", text: "ISO 45001 discipline and biometric site control on every project — 1.85M consecutive LTI-free man-hours." },
];

export default function SectorsPage() {
  const completed = PROJECTS.filter((p) => p.status === "Completed").length;
  const ongoing = PROJECTS.length - completed;
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[136px] pb-12">
          <p className="anim-fade-up flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold live-dot" /> Specialized Contracting Sectors &amp; Market Verticals
          </p>
          <h1 className="anim-fade-up anim-delay-1 mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink">
            Eight Sectors. One Standard of Permanence.
          </h1>
          <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            Engineering discipline across diverse building types — each sector led by specialists who understand its
            codes, risks and delivery model, and executed by the same in-house plant, laboratories and engineering cadre.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 lg:grid-cols-4">
            {[
              { v: 8, suffix: "", label: "Specialized Sectors" },
              { v: PROJECTS.length, suffix: "", label: "National Contracts in Portfolio" },
              { v: completed, suffix: "", label: "Completed & Handed Over" },
              { v: ongoing, suffix: "", label: "Ongoing Mega Projects" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl text-ink">
                  <CountUp value={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => {
              const count = projectsForSector(s.slug).length;
              return (
                <article key={s.slug} className={`reveal reveal-d${(i % 4) + 1} lift group flex flex-col overflow-hidden rounded-card border border-line bg-white`}>
                  <div className="relative overflow-hidden">
                    <Image src={s.image} alt={s.title} width={700} height={420} className="h-40 w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute bottom-3 left-3 rounded-md bg-ink/85 px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-gold-light uppercase">
                      {count > 0 ? `${count} Portfolio Project${count > 1 ? "s" : ""}` : "New Commissions Open"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-[19px] leading-snug text-ink">{s.title}</h2>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{s.short}</p>
                    <Link href={`/sectors/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-3.5 text-[12.5px] font-bold tracking-wide text-gold-dark uppercase hover:text-ink">
                      Explore Sector <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Execution Standards</p>
          <h2 className="reveal mt-3 max-w-2xl font-display text-4xl leading-tight text-white">One Execution Standard, Every Sector</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s, i) => (
              <div key={s.title} className={`reveal reveal-d${i + 1} rounded-card border border-white/10 bg-pine-deep p-6`}>
                <s.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-display text-lg text-white">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4 rounded-card bg-gold px-6 py-5">
            <p className="font-display text-xl text-ink">Building in one of these sectors?</p>
            <Link href="/contact" className="ml-auto inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-pine-deep">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
