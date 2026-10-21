import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/Sections";
import { IMAGES, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Master Builders Shaping Pakistan's Modern Skyline",
  description: "About ALIF Engineering & Construction: an institutional general contracting and civil engineering firm in Pakistan — PEC No-Limit constructor, ASTM & British Standards QA, zero-harm QHSE.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About ALIF" title="Master Builders Shaping Pakistan's Modern Skyline"
        text="An institutional general contracting and civil engineering powerhouse — partnering with Pakistan's leading corporations, developers and institutions to deliver turn-key engineering excellence." />
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <SectionHeading eyebrow="Corporate Profile" title="From Deep Foundations to Turnkey Handover" />
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-ink-500">
              <p>From deep foundation engineering in high-water tables to superstructure concrete pouring and advanced MEP commissioning, ALIF delivers every discipline under one corporate roof — structural, civil, MEP and finishing teams that plan together and build together.</p>
              <p>Our work method is institutional: Primavera P6 programmes, daily lab-tested concrete batches, hold-point QA/QC inspections and milestone reporting that clients can verify, not just trust.</p>
            </div>
            <ul className="mt-6 space-y-3.5">
              {[
                "PEC Registered No-Limit Constructor — proven track record in complex superstructures",
                "Quality assurance & structural integrity to ASTM and British Standards",
                "Zero-harm QHSE protocol across every site in Pakistan",
                "In-house BIM, value-engineering and geotechnical capability",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-ink-500">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-gold-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.facade} alt="ALIF engineered tower" loading="lazy" className="h-[340px] w-full rounded-xl object-cover sm:h-[430px]" />
        </div>
      </section>
      <section className="border-y border-cream-400 bg-cream-100">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:px-10 lg:grid-cols-4 lg:px-16">
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-9 text-center ${i > 0 ? "border-l border-cream-400" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-cream-400" : ""} ${i === 2 ? "max-lg:border-l-0" : ""}`}>
              <div className="font-display text-4xl text-pine-800 sm:text-5xl">{s.value}</div>
              <div className="mt-2 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16">
          <SectionHeading center eyebrow="Our Offices" title="Nationwide Presence" text="Head office in Lahore, with regional and liaison offices serving projects across Pakistan." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Lahore — Head Office", "Alif Tower, Main Boulevard, Gulberg III, Lahore. Estimating, engineering and project controls are headquartered here."],
              ["Islamabad — Regional Office", "Executive Heights, Blue Area, Islamabad. Serving federal, healthcare and institutional projects in the capital region."],
              ["Karachi — Liaison Office", "Ocean Mall Tower, Block 9, Clifton, Karachi. Coordinating Sindh projects, coastal piling and superstructure works."],
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <h3 className="font-display text-lg text-pine-800">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
