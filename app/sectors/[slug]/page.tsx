import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero, ProjectCard, SectionHeading, SectorCard } from "@/components/Sections";
import { PROJECTS, SECTORS } from "@/lib/data";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) return {};
  return {
    title: `${sector.title} Construction in Pakistan`,
    description: sector.description.slice(0, 155),
    openGraph: { title: `${sector.title} | ALIF Engineering & Construction`, description: sector.short, images: [sector.image] },
  };
}

export default async function SectorDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) notFound();
  const others = SECTORS.filter((s) => s.slug !== slug).slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service", name: `${sector.title} Construction`,
    description: sector.description, provider: { "@type": "GeneralContractor", name: "ALIF Engineering & Construction" },
    areaServed: "Pakistan",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="Sector" title={sector.title} text={sector.short} />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <Link href="/sectors" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
            <ArrowLeft size={14} /> All Sectors
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sector.image} alt={sector.title} className="h-[300px] w-full rounded-xl object-cover sm:h-[380px]" />
            <div>
              <SectionHeading eyebrow="Overview" title={`Building in this sector`} />
              <p className="mt-4 text-[15px] leading-7 text-ink-500">{sector.description}</p>
              <h3 className="mt-7 font-display text-lg text-pine-800">Scope of Works</h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {sector.scope.map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-6 text-ink-500">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" /> {x}
                  </li>
                ))}
              </ul>
              <h3 className="mt-7 font-display text-lg text-pine-800">Deliverables</h3>
              <ul className="mt-3 space-y-2">
                {sector.deliverables.map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-6 text-ink-500">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pine-900">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading dark eyebrow="Selected Portfolio" title="Landmark Projects" />
            <Link href="/projects" className="btn-outline-light !py-2.5">All Projects <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <SectionHeading eyebrow="Continue Exploring" title="Other Sectors" />
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => <SectorCard key={s.slug} sector={s} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
