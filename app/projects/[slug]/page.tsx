import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowUpRight, BadgeCheck, CalendarDays, CheckCircle2, Construction,
  Droplets, FileText, FlaskConical, HeartPulse, Leaf, Mail, MapPin, Quote, Ruler, ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/Sections";
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

const CHALLENGE_ICONS = [Droplets, Ruler, Construction];
const SAFETY_ICONS = [HeartPulse, FlaskConical, Leaf, BadgeCheck];

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const cs = project.caseStudy;
  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);
  const statCells = cs ? cs.heroStats : project.facts.slice(0, 6).map((f) => {
    const [head, ...rest] = f.value.split(" — ");
    return { label: f.label, value: head, sub: rest.join(" — ") || project.statusLabel };
  });
  const matrix = cs ? cs.specs : project.facts.map((f) => ({ label: f.label, value: f.value }));

  return (
    <>
      {/* HERO — cream, editorial (per design) */}
      <section className="bg-cream-100 pb-12 pt-[136px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-ink-500">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-gold-700 hover:text-gold-600">
              <ArrowLeft size={14} /> Back to Projects Portfolio
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/sectors" className="hover:text-gold-700">Sectors</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-900">{project.title}</span>
          </nav>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className={`rounded-lg px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest ${project.status === "Completed" ? "bg-gold-500 text-pine-950" : "bg-pine-800 text-gold-300"}`}>
              {project.statusLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-cream-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-pine-800">
              <BadgeCheck size={13} className="text-gold-600" /> PEC No-Limit CA
            </span>
            {cs && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-cream-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-pine-800">
                <Leaf size={13} className="text-gold-600" /> LEED Gold Target
              </span>
            )}
          </div>

          <p className="eyebrow mt-7 text-gold-600">{cs ? cs.intro : `${project.category} — ${project.region}, Pakistan`}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.08] text-pine-900 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-[15px] leading-7 text-ink-600">{project.overview}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-gold"><FileText size={15} /> Download Technical Dossier</Link>
              <Link href="/contact#enquiry" className="btn-dark"><Mail size={15} /> Enquire About Similar Scale</Link>
            </div>
          </div>

          <figure className="relative mt-9 overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="h-[300px] w-full object-cover sm:h-[440px]" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 bg-pine-950/85 px-5 py-3.5 text-cream-100 backdrop-blur-sm">
              <span className="text-[12px] font-bold uppercase tracking-widest text-gold-300">
                {cs ? `Structural Handover Notice — ${cs.handoverNote}` : project.scope}
              </span>
              <span className="flex items-center gap-1.5 text-[12.5px] font-semibold">
                <MapPin size={14} className="text-gold-400" /> {project.location}
              </span>
            </figcaption>
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-cream-400 bg-cream-400 lg:grid-cols-6">
            {statCells.map((s) => (
              <div key={s.label} className="bg-white px-4 py-4">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-500">{s.label}</dt>
                <dd className="mt-1.5 font-display text-[22px] leading-none text-pine-800">{s.value}</dd>
                <dd className="mt-1 text-[11px] font-semibold text-ink-500">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* NARRATIVE + SPEC MATRIX */}
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <SectionHeading eyebrow="Architectural & Structural Narrative"
              title={cs ? "Engineering a Vertical Benchmark in Central Punjab" : "About This Project"} />
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-ink-600">
              {(cs ? cs.narrative : [project.overview, project.cardText]).map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="mt-7 flex gap-3 rounded-xl border border-cream-400 bg-cream-100 p-5">
              <ShieldCheck size={22} className="shrink-0 text-gold-600" />
              <div>
                <h3 className="text-sm font-bold text-ink-900">PEC Regulatory Compliance</h3>
                <p className="mt-1.5 text-[13px] leading-6 text-ink-600">
                  Executed under Pakistan Engineering Council (PEC) Category CA (No-Limit) licensing. Fully audited
                  for structural integrity by third-party geotechnical observers and certified under ISO 9001:2015
                  QA/QC protocols.
                </p>
              </div>
            </div>
            {!cs && (
              <>
                <h3 className="mt-8 font-display text-lg text-pine-800">Delivery Highlights</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-6 text-ink-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" /> {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="card h-fit p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-pine-800">Technical Specification Matrix</h3>
              {cs && <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600">Specs Rev 4.2</span>}
            </div>
            <dl className="mt-4 divide-y divide-cream-400">
              {matrix.map((row) => (
                <div key={row.label} className="py-3.5">
                  <dt className="eyebrow !text-[10px] text-gold-600">{row.label}</dt>
                  <dd className="mt-1.5 text-sm font-semibold leading-6 text-ink-900">{row.value}</dd>
                </div>
              ))}
            </dl>
            {cs && <p className="mt-4 rounded-lg bg-cream-100 px-3.5 py-2.5 text-[12px] font-bold text-ink-900">{cs.specNote}</p>}
          </div>
        </div>
      </section>

      {/* CHALLENGES — flagship case study */}
      {cs && (
        <section className="bg-cream-200/50">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16">
            <SectionHeading eyebrow="Execution Rigor" title="Complex Engineering Challenges & Tailored Solutions" text={cs.challengesIntro} />
            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {cs.challenges.map((c, i) => {
                const Icon = CHALLENGE_ICONS[i % CHALLENGE_ICONS.length];
                return (
                  <article key={c.title} className="card p-7">
                    <div className="flex items-center justify-between">
                      <Icon size={24} className="text-gold-600" strokeWidth={1.6} />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-ink-500">Challenge 0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg leading-snug text-pine-800">{c.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-ink-600">{c.problem}</p>
                    <div className="mt-4 border-t border-cream-400 pt-4">
                      <p className="eyebrow !text-[10px] text-gold-600">Engineered Solution</p>
                      <p className="mt-1.5 text-sm leading-6 text-ink-900">{c.solution}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CHRONICLE / PROCESS */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16">
          <SectionHeading eyebrow="Construction Chronicle"
            title={cs ? "From Deep Substructure to Urban Culmination" : "How This Project Is Delivered"}
            text={cs ? "Audited Milestones (4 Major Phases)" : undefined} />
          {cs ? (
            <>
              <div className="mt-9 grid gap-6 lg:grid-cols-3">
                {cs.phases.map((ph) => (
                  <article key={ph.title} className="card overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ph.image} alt={ph.title} loading="lazy" className="h-44 w-full object-cover" />
                    <div className="p-5">
                      <p className="eyebrow !text-[10px] text-gold-600">{ph.phase}</p>
                      <p className="mt-1 text-[12px] font-bold text-ink-500">{ph.meta}</p>
                      <h3 className="mt-2.5 font-display text-lg text-pine-800">{ph.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink-600">{ph.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-xl border border-cream-400 bg-white px-4 py-3 text-sm font-bold text-ink-900">
                  {cs.galleryStat.label}: <span className="font-display text-lg text-gold-700">{cs.galleryStat.value}</span>
                </span>
                <span className="rounded-xl border border-cream-400 bg-white px-4 py-3 text-sm font-bold text-ink-900">
                  Handover Date: <span className="font-display text-lg text-gold-700">Q4 2024</span>
                </span>
              </div>
            </>
          ) : (
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.title} className="card p-7">
                  <div className="font-display text-3xl text-gold-500">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-lg text-pine-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SAFETY + QUOTE + CADRE — flagship case study */}
      {cs && (
        <>
          <section className="bg-pine-900">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16">
              <SectionHeading dark center eyebrow="Audited HSE & Compliance Standards"
                title="Uncompromised Zero-Harm Safety & Concrete Reliability" text={cs.safetyIntro} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cs.safety.map((s, i) => {
                  const Icon = SAFETY_ICONS[i % SAFETY_ICONS.length];
                  return (
                    <div key={s.title} className="card-dark p-6 text-center">
                      <Icon size={24} className="mx-auto text-gold-400" strokeWidth={1.6} />
                      <div className="mt-3 font-display text-4xl text-gold-400">{s.value}</div>
                      <h3 className="mt-2 text-sm font-bold text-cream-100">{s.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-mist-300">{s.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="bg-cream-100">
            <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16">
              <figure>
                <Quote size={28} className="text-gold-500" />
                <blockquote className="mt-4 font-display text-xl italic leading-8 text-pine-800 sm:text-[22px] sm:leading-9">
                  &ldquo;{cs.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-display text-sm text-gold-300">MS</span>
                  <span>
                    <span className="block text-sm font-bold text-ink-900">{cs.quote.name}</span>
                    <span className="block text-[12.5px] text-ink-500">{cs.quote.role}</span>
                  </span>
                </figcaption>
              </figure>
              <div className="card h-fit p-6">
                <h3 className="eyebrow text-gold-600">Core Project Engineering Cadre</h3>
                <ul className="mt-4 divide-y divide-cream-400">
                  {cs.cadre.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-3 py-3">
                      <span>
                        <span className="block text-sm font-bold text-ink-900">{c.name}</span>
                        <span className="block text-[12.5px] text-ink-500">{c.role}</span>
                      </span>
                      <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-gold-700">{c.area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {/* RELATED */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Explore Our Portfolio" title="Related Turnkey Monuments" />
            <Link href="/projects" className="btn-outline-dark !py-2.5">View All Projects <ArrowUpRight size={15} /></Link>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {others.map((p) => (
              <article key={p.slug} className="card group overflow-hidden sm:grid sm:grid-cols-[220px_1fr]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} loading="lazy" className="h-44 w-full object-cover sm:h-full" />
                <div className="p-5">
                  <p className="eyebrow !text-[10px] text-gold-600">{p.category} · {p.location}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-pine-800">
                    <Link href={`/projects/${p.slug}`} className="hover:text-gold-700">{p.title}</Link>
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-600">{p.overview}</p>
                  <p className="mt-3 text-[13px] font-bold text-ink-900">{p.metrics[0].label}: {p.metrics[0].value}</p>
                  <Link href={`/projects/${p.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-700 hover:text-gold-600">
                    Explore Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine-800">
        <div className="mx-auto max-w-[1440px] px-5 py-14 text-center md:px-10 lg:px-16">
          <p className="eyebrow text-gold-400">Institutional General Contracting</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-cream-100 sm:text-4xl">
            Planning a {project.category} Landmark in Pakistan?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-mist-300">
            Engage ALIF&apos;s pre-construction advisory team for geotechnical risk modeling, value-engineered
            structural solutions, and PEC Category CA turnkey EPC delivery.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold"><CalendarDays size={15} /> Schedule Technical Consultation</Link>
            <Link href="/contact#enquiry" className="btn-outline-light"><FileText size={15} /> Download Full Project Dossier (PDF)</Link>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-cream-100">
            {["Turnkey Design-Build & EPC", "No-Limit PEC CA Category", "BIM Level 2 Coordination"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
