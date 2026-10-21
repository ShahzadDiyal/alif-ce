import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import { CtaBand, PageHero, ProjectCard, SectionHeading } from "@/components/Sections";
import { PROCESS_STEPS, PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.location}`,
    description: project.overview.slice(0, 155),
    openGraph: { title: `${project.title} | ALIF Engineering & Construction`, description: project.scope, images: [project.image] },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const others = PROJECTS.filter((p) => p.slug !== slug);
  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} text={project.scope} />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
            <ArrowLeft size={14} /> All Projects
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="h-[300px] w-full rounded-xl object-cover sm:h-[420px]" />
              <div className="mt-8">
                <SectionHeading eyebrow="Project Overview" title="About this project" />
                <p className="mt-4 text-[15px] leading-7 text-ink-500">{project.overview}</p>
                <h3 className="mt-7 font-display text-lg text-pine-800">Delivery Highlights</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-6 text-ink-500">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="card h-fit p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-500">
                <MapPin size={15} className="text-gold-600" /> {project.location}
              </p>
              <span className={`mt-3 inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${project.status === "Completed" ? "bg-gold-500 text-pine-950" : "bg-pine-800 text-gold-300"}`}>
                {project.status}
              </span>
              <dl className="mt-5 divide-y divide-cream-400">
                {project.facts.map((f) => (
                  <div key={f.label} className="py-3">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-ink-500">{f.label}</dt>
                    <dd className="mt-1 text-sm font-semibold leading-6 text-ink-900">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/contact#enquiry" className="btn-gold mt-5 w-full justify-center">Discuss a Similar Project</Link>
            </aside>
          </div>
          <div className="mt-14">
            <SectionHeading eyebrow="Our Work Methodology" title="How this project was delivered" />
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.title} className="card p-6">
                  <div className="font-display text-3xl text-gold-500">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-lg text-pine-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pine-900">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <SectionHeading dark eyebrow="Selected Portfolio" title="Other Projects" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {others.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
