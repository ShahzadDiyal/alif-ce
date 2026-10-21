import type { Metadata } from "next";
import { CtaBand, PageHero, SectorCard } from "@/components/Sections";
import { SECTORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sectors — High-Rise, Healthcare, Industrial, Infrastructure",
  description: "ALIF contracting sectors: high-rise buildings, commercial complexes, residential communities, hospitals & pharmaceuticals, academic buildings, industrial & power, piling & dewatering, infrastructure & civil works.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero eyebrow="Our Core Expertise" title="Specialized Contracting Sectors"
        text="Engineering discipline across diverse building types — each sector led by specialists who understand its codes, risks and delivery model." />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s) => <SectorCard key={s.slug} sector={s} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
