import type { Metadata } from "next";
import { Award, BadgeCheck, Clock3, DraftingCompass, Leaf, ShieldCheck, Users } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/Sections";
import { STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Achievements — The ALIF Standard",
  description: "ALIF achievements and standards: PEC No-Limit CA category, ISO 9001/14001/45001 compliance, safe man-hours, on-time delivery and in-house engineering across Pakistan.",
};

const STANDARDS = [
  { icon: Clock3, title: "On-Time Delivery", text: "Guaranteed milestone adherence through advanced Primavera P6 resource leveling and rigorous site scheduling." },
  { icon: DraftingCompass, title: "In-House Engineering", text: "Complete structural BIM modeling, value-engineering, and geotechnical domain mastery under one corporate roof." },
  { icon: ShieldCheck, title: "HSE & ISO Standards", text: "Triple-certified ISO 9001, ISO 14001, and ISO 45001 compliance with zero-compromise safety protocols." },
  { icon: Users, title: "Single-Point Accountability", text: "Integrated project management eliminating subcontractor fragmentation from shoring to commissioning." },
];

const BADGES = [
  { icon: BadgeCheck, title: "PEC No-Limit CA Category", text: "Pakistan Engineering Council registered constructor in the no-limit category." },
  { icon: ShieldCheck, title: "[XX] Million Safe Man-Hours", text: "Safe man-hours accumulated without a lost-time injury across active sites." },
  { icon: Leaf, title: "LEED Standard Adherent", text: "Green building standard adherence on applicable commercial projects." },
  { icon: Award, title: "Industry Recognition", text: "Recognized by the National Contractors Association of Pakistan." },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Engineered for Reliability, Delivered with Distinction"
        text="The standards behind every ALIF handover — scheduling discipline, in-house engineering, certified quality systems and a zero-harm safety culture." />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((f) => (
              <div key={f.title} className="card p-6">
                <f.icon size={26} className="text-gold-600" strokeWidth={1.6} />
                <h2 className="mt-4 font-display text-lg text-pine-800">{f.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <SectionHeading center eyebrow="Certifications & Recognition" title="Credentials on Record" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BADGES.map((b) => (
                <div key={b.title} className="rounded-xl border border-cream-400 bg-cream-100 p-6 text-center">
                  <b.icon size={28} className="mx-auto text-gold-600" strokeWidth={1.6} />
                  <h3 className="mt-3 text-sm font-bold text-ink-900">{b.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-500">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
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
      <CtaBand />
    </>
  );
}
