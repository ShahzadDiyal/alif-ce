import type { Metadata } from "next";
import { CtaBand, PageHero, ServiceCard } from "@/components/Sections";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — General Contracting, MEP, QA/QC & More",
  description: "ALIF services: general contracting, design & value engineering, civil & structural construction, MEP installation, finishing & fit-out, and project management with QA/QC across Pakistan.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, url: `/services/${s.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="What We Do" title="Complete Construction Services, One Accountable Team"
        text="Every service is delivered in-house and coordinated through one project management system — from pre-construction value engineering to commissioning and aftercare." />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
