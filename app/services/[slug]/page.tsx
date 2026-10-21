import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero, SectionHeading, ServiceCard } from "@/components/Sections";
import { SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Pakistan`,
    description: service.description.slice(0, 155),
    openGraph: { title: `${service.title} | ALIF Engineering & Construction`, description: service.short, images: [service.image] },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service", name: service.title,
    description: service.description, provider: { "@type": "GeneralContractor", name: "ALIF Engineering & Construction" },
    areaServed: "Pakistan",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="Service" title={service.title} text={service.short} />
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:px-16">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
            <ArrowLeft size={14} /> All Services
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} className="h-[300px] w-full rounded-xl object-cover sm:h-[380px]" />
            <div>
              <SectionHeading eyebrow="Overview" title={`About this service`} />
              <p className="mt-4 text-[15px] leading-7 text-ink-500">{service.description}</p>
              <h3 className="mt-7 font-display text-lg text-pine-800">What&apos;s Included</h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {service.includes.map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-6 text-ink-500">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <SectionHeading eyebrow="How We Deliver" title="Delivery Process" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {service.process.map((p, i) => (
                <div key={p} className="card p-5">
                  <div className="font-display text-2xl text-gold-500">0{i + 1}</div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink-900">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Continue Exploring" title="Other Services" />
              <Link href="/contact#enquiry" className="btn-dark hidden shrink-0 sm:inline-flex">Discuss Your Project <ArrowRight size={15} /></Link>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
