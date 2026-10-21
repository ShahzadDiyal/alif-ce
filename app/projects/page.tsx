import type { Metadata } from "next";
import { CtaBand, PageHero, ProjectCard } from "@/components/Sections";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Landmark Projects Across Pakistan",
  description: "ALIF project portfolio: commercial high-rise in Lahore, luxury residences in Karachi, and a specialized healthcare facility in Islamabad — civil, structural, MEP, piling and façade scopes.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Selected Portfolio" title="Landmark Projects Across Pakistan"
        text="Turnkey towers, luxury residences and specialized healthcare — each delivered with in-house engineering, QA/QC and a single accountable contract." />
      <section className="bg-pine-900">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
