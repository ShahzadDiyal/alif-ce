import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { Project, Sector, Service } from "@/lib/data";

export function SectionHeading({
  eyebrow, title, dark = false, center = false, text,
}: { eyebrow: string; title: string; dark?: boolean; center?: boolean; text?: string }) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className={`eyebrow ${dark ? "text-gold-400" : "text-gold-600"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight ${dark ? "text-cream-100" : "text-pine-800"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-[15px] leading-7 ${dark ? "text-mist-300" : "text-ink-500"}`}>{text}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow, title, text,
}: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-pine-900 pb-14 pt-[150px] sm:pb-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <p className="eyebrow anim-fade-up text-gold-400">{eyebrow}</p>
        <h1 className="anim-fade-up anim-delay-1 mt-4 max-w-3xl font-display text-4xl leading-tight text-cream-100 sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-[15px] leading-7 text-mist-300">{text}</p>}
        <div className="gold-rule mt-8 max-w-md !bg-none" style={{ background: "linear-gradient(90deg,#C9A966,transparent)" }} />
      </div>
    </section>
  );
}

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <article className="card reveal lift group overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sector.image} alt={sector.title} loading="lazy" className="h-40 md:h-80 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-lg text-pine-800">{sector.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-500">{sector.short}</p>
        <Link href={`/sectors/${sector.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
          Explore Sector <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card reveal lift group overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={service.image} alt={service.title} loading="lazy" className="h-40 md:h-80 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-lg text-pine-800">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-500">{service.short}</p>
        <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
          View Service <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function ProjectCard({ project, dark = true }: { project: Project; dark?: boolean }) {
  return (
    <article className={`${dark ? "card-dark" : "card"} reveal lift group overflow-hidden`}>
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" className="h-48 md:h-80 w-full object-cover" />
        <span className={`absolute left-4 top-4 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
          project.status === "Completed" ? "bg-gold-500 text-pine-950" : "bg-pine-950/85 text-gold-300"
        }`}>
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <p className={`eyebrow !text-[10px] ${dark ? "text-gold-400" : "text-gold-600"}`}>{project.category}</p>
        <h3 className={`mt-2 font-display text-xl leading-snug ${dark ? "text-cream-100" : "text-pine-800"}`}>
          <Link href={`/projects/${project.slug}`} className="hover:text-gold-500">{project.title}</Link>
        </h3>
        <p className={`mt-2 flex items-center gap-1.5 text-[13px] ${dark ? "text-mist-300" : "text-ink-500"}`}>
          <MapPin size={13} className="text-gold-500" /> {project.location}
        </p>
        <p className={`mt-3 text-[13px] leading-6 ${dark ? "text-mist-300" : "text-ink-500"}`}>
          Scope: {project.scope}
        </p>
        <Link href={`/projects/${project.slug}`} className={`mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold ${dark ? "text-gold-300 hover:text-gold-400" : "text-gold-700 hover:text-gold-600"}`}>
          Project Details <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function CtaBand() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto w-full px-4 pb-24 sm:px-6 lg:px-12">
        <div className="reveal flex flex-col items-start justify-between gap-6 rounded-card bg-pine px-6 py-10 sm:px-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Ready to Build?</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mist">
              Schedule a confidential consultation with our structural directors and chief estimating engineers.
            </p>
          </div>
          <Link href="/contact#enquiry" className="inline-flex shrink-0 items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
            Get a Project Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
