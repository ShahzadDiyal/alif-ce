import type { Metadata } from "next";
import { ArrowRight, Briefcase, DraftingCompass, HardHat, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/Sections";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — Build Your Career With ALIF",
  description: "Careers at ALIF Engineering & Construction Pakistan: site engineering, quantity surveying, planning, MEP, QA/QC and HSE roles across Lahore, Islamabad and Karachi projects.",
};

const AREAS = [
  { icon: HardHat, title: "Site Engineering & Execution", text: "Civil engineers, site managers and foremen delivering structures, finishes and external works on live projects nationwide." },
  { icon: DraftingCompass, title: "Design, Planning & QS", text: "Structural and BIM engineers, Primavera planners, estimators and quantity surveyors at our Lahore head office." },
  { icon: Briefcase, title: "MEP & Commissioning", text: "Mechanical, electrical and plumbing engineers and technicians for installation, testing and commissioning teams." },
  { icon: ShieldCheck, title: "QA/QC & HSE", text: "Quality inspectors, materials engineers and safety officers holding our zero-harm and ISO standards on every site." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build Landmarks. Build Your Career."
        text="We hire engineers, planners, surveyors and site professionals who want institutional standards, real responsibility and projects that stay on the skyline." />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16">
          <SectionHeading eyebrow="Where You Can Work" title="Career Areas" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a) => (
              <div key={a.title} className="card p-6">
                <a.icon size={26} className="text-gold-600" strokeWidth={1.6} />
                <h2 className="mt-4 font-display text-lg text-pine-800">{a.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="card mt-10 flex flex-col items-start justify-between gap-5 p-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl text-pine-800">Current Openings</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-500">
                Specific vacancies are announced as projects mobilise. To be considered for upcoming roles, send your
                CV with your discipline, PEC registration (if applicable) and years of experience — suitable profiles
                are kept on file and contacted when a matching position opens.
              </p>
            </div>
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Career Application — CV")}`} className="btn-dark shrink-0">
              Email Your CV <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
