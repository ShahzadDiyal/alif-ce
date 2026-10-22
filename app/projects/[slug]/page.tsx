import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowUpRight, BadgeCheck, CalendarDays, CheckCircle2, Construction,
  Droplets, FileText, FlaskConical, HeartPulse, Leaf, Mail, MapPin, Quote, Ruler, ShieldCheck,
} from "lucide-react";
import { SiteHeading } from "@/components/Sections";
import { PROCESS_STEPS, PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMeta({
    title: `${project.title} — ${project.location}`,
    description: project.overview.length > 158 ? `${project.overview.slice(0, 155).trimEnd()}…` : project.overview,
    path: `/projects/${project.slug}`,
    images: [project.image],
  });
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
      {/* Hero */}
      <section className="bg-cream pb-16 pt-[136px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-muted">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-gold-dark hover:text-ink">
              <ArrowLeft size={14} /> Back to Projects Portfolio
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/sectors" className="hover:text-gold-dark">Sectors</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{project.title}</span>
          </nav>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className={`rounded-lg px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest ${project.status === "Completed" ? "bg-gold text-ink" : "bg-ink text-gold-light"}`}>
              {project.statusLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink">
              <BadgeCheck size={13} className="text-gold-dark" /> PEC No-Limit CA
            </span>
            {cs && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink">
                <Leaf size={13} className="text-gold-dark" /> LEED Gold Target
              </span>
            )}
          </div>

          <p className="mt-7 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">{cs ? cs.intro : `${project.category} — ${project.region}, Pakistan`}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-[15px] leading-7 text-muted">{project.overview}</p>
            <div className="flex flex-wrap gap-3">
            <Link
  href="/contact#enquiry"
  className="btn-gold max-md:w-full max-md:justify-center max-md:text-center"
>
  <FileText size={15} /> Download Technical Dossier
</Link>
<Link
  href="/contact#enquiry"
  className="btn-dark max-md:w-full max-md:justify-center max-md:text-center"
>
  <Mail size={15} /> Enquire About Similar Scale
</Link>
            </div>
          </div>

          <figure className="relative mt-9 overflow-hidden rounded-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="h-[300px] w-full object-cover sm:h-[440px]" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 bg-ink/85 px-5 py-3.5 text-white backdrop-blur-sm">
              <span className="text-[12px] font-bold uppercase tracking-widest text-gold-light">
                {cs ? `Structural Handover Notice — ${cs.handoverNote}` : project.scope}
              </span>
              <span className="flex items-center gap-1.5 text-[12.5px] font-semibold">
                <MapPin size={14} className="text-gold-light" /> {project.location}
              </span>
            </figcaption>
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-6">
            {statCells.map((s) => (
              <div key={s.label} className="bg-white px-4 py-4 max-md:last:odd:col-span-2">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-muted">{s.label}</dt>
                <dd className="mt-1.5 font-display text-[22px] leading-none text-ink max-md:break-words max-sm:text-[16px] max-sm:leading-snug">{s.value}</dd>
                <dd className="mt-1 text-[11px] font-semibold text-muted">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* NARRATIVE + SPEC MATRIX */}
      <section className="bg-paper">
        <div className="mx-auto grid w-full gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <SiteHeading eyebrow="Architectural & Structural Narrative"
              title={cs ? "Engineering a Vertical Benchmark in Central Punjab" : "About This Project"} />
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
              {(cs ? cs.narrative : [project.overview, project.cardText]).map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="mt-7 flex gap-3 rounded-card border border-line bg-cream p-5">
              <ShieldCheck size={22} className="shrink-0 text-gold-dark" />
              <div>
                <h3 className="text-sm font-bold text-ink">PEC Regulatory Compliance</h3>
                <p className="mt-1.5 text-[13px] leading-6 text-muted">
                  Executed under Pakistan Engineering Council (PEC) Category CA (No-Limit) licensing. Fully audited
                  for structural integrity by third-party geotechnical observers and certified under ISO 9001:2015
                  QA/QC protocols.
                </p>
              </div>
            </div>
            {!cs && (
              <>
                <h3 className="mt-8 font-display text-lg text-ink">Delivery Highlights</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-6 text-muted">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-dark" /> {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="rounded-card border border-line bg-white h-fit p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-ink">Technical Specification Matrix</h3>
              {cs && <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">Specs Rev 4.2</span>}
            </div>
            <dl className="mt-4 divide-y divide-line">
              {matrix.map((row) => (
                <div key={row.label} className="py-3.5">
                  <dt className="text-[10.5px] font-bold tracking-[0.18em] text-gold-dark uppercase">{row.label}</dt>
                  <dd className="mt-1.5 text-sm font-semibold leading-6 text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            {cs && <p className="mt-4 rounded-lg bg-cream px-3.5 py-2.5 text-[12px] font-bold text-ink">{cs.specNote}</p>}
          </div>
        </div>
      </section>

      {/* CHALLENGES — flagship case study */}
      {cs && (
        <section className="bg-cream">
          <div className="mx-auto w-full px-4 py-24 sm:px-6 lg:px-12">
            <SiteHeading eyebrow="Execution Rigor" title="Complex Engineering Challenges & Tailored Solutions" text={cs.challengesIntro} />
            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {cs.challenges.map((c, i) => {
                const Icon = CHALLENGE_ICONS[i % CHALLENGE_ICONS.length];
                return (
                  <article key={c.title} className="rounded-card border border-line bg-white p-7">
                    <div className="flex items-center justify-between">
                      <Icon size={24} className="text-gold-dark" strokeWidth={1.6} />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-muted">Challenge 0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg leading-snug text-ink">{c.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-muted">{c.problem}</p>
                    <div className="mt-4 border-t border-line pt-4">
                      <p className="text-[10.5px] font-bold tracking-[0.18em] text-gold-dark uppercase">Engineered Solution</p>
                      <p className="mt-1.5 text-sm leading-6 text-ink">{c.solution}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CHRONICLE / PROCESS */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 py-24 sm:px-6 lg:px-12">
          <SiteHeading eyebrow="Construction Chronicle"
            title={cs ? "From Deep Substructure to Urban Culmination" : "How This Project Is Delivered"}
            text={cs ? "Audited Milestones (4 Major Phases)" : undefined} />
          {cs ? (
            <>
              <div className="mt-9 grid gap-6 lg:grid-cols-3">
                {cs.phases.map((ph) => (
                  <article key={ph.title} className="rounded-card border border-line bg-white overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ph.image} alt={ph.title} loading="lazy" className="h-44 md:h-80 w-full object-cover" />
                    <div className="p-5">
                      <p className="text-[10.5px] font-bold tracking-[0.18em] text-gold-dark uppercase">{ph.phase}</p>
                      <p className="mt-1 text-[12px] font-bold text-muted">{ph.meta}</p>
                      <h3 className="mt-2.5 font-display text-lg text-ink">{ph.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{ph.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-card border border-line bg-white px-4 py-3 text-sm font-bold text-ink">
                  {cs.galleryStat.label}: <span className="font-display text-lg text-gold-dark">{cs.galleryStat.value}</span>
                </span>
                <span className="rounded-card border border-line bg-white px-4 py-3 text-sm font-bold text-ink">
                  Handover Date: <span className="font-display text-lg text-gold-dark">Q4 2024</span>
                </span>
              </div>
            </>
          ) : (
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.title} className="rounded-card border border-line bg-white p-7">
                  <div className="font-display text-3xl text-gold">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SAFETY + QUOTE + CADRE — flagship case study */}
      {cs && (
        <>
          <section className="bg-pine">
            <div className="mx-auto w-full px-4 py-24 sm:px-6 lg:px-12">
              <SiteHeading dark center eyebrow="Audited HSE & Compliance Standards"
                title="Uncompromised Zero-Harm Safety & Concrete Reliability" text={cs.safetyIntro} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cs.safety.map((s, i) => {
                  const Icon = SAFETY_ICONS[i % SAFETY_ICONS.length];
                  return (
                    <div key={s.title} className="rounded-card border border-white/10 bg-white/5 p-6 text-center">
                      <Icon size={24} className="mx-auto text-gold-light" strokeWidth={1.6} />
                      <div className="mt-3 font-display text-4xl text-gold-light">{s.value}</div>
                      <h3 className="mt-2 text-sm font-bold text-white">{s.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-mist">{s.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="bg-cream">
            <div className="mx-auto grid w-full gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-12">
              <figure>
                <Quote size={28} className="text-gold" />
                <blockquote className="mt-4 font-display text-xl italic leading-8 text-ink sm:text-[22px] sm:leading-9">
                  &ldquo;{cs.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine font-display text-sm text-gold-light">MS</span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{cs.quote.name}</span>
                    <span className="block text-[12.5px] text-muted">{cs.quote.role}</span>
                  </span>
                </figcaption>
              </figure>
              <div className="rounded-card border border-line bg-white h-fit p-6">
                <h3 className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Core Project Engineering Cadre</h3>
                <ul className="mt-4 divide-y divide-line">
                  {cs.cadre.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-3 py-3">
                      <span>
                        <span className="block text-sm font-bold text-ink">{c.name}</span>
                        <span className="block text-[12.5px] text-muted">{c.role}</span>
                      </span>
                      <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-gold-dark">{c.area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {/* RELATED */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 py-24 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SiteHeading eyebrow="Explore Our Portfolio" title="Related Turnkey Monuments" />
            <Link href="/projects" className="btn-outline-dark !py-2.5">View All Projects <ArrowUpRight size={15} /></Link>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {others.map((p) => (
              <article key={p.slug} className="rounded-card border border-line bg-white group overflow-hidden sm:grid sm:grid-cols-[220px_1fr]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} loading="lazy" className="h-44 md:h-80 w-full object-cover sm:h-full" />
                <div className="p-5">
                  <p className="text-[10.5px] font-bold tracking-[0.18em] text-gold-dark uppercase">{p.category} · {p.location}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-ink">
                    <Link href={`/projects/${p.slug}`} className="hover:text-gold-dark">{p.title}</Link>
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{p.overview}</p>
                  <p className="mt-3 text-[13px] font-bold text-ink">{p.metrics[0].label}: {p.metrics[0].value}</p>
                  <Link href={`/projects/${p.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-gold-dark hover:text-ink">
                    Explore Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     {/* CTA */}
      <section className="bg-paper pb-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="reveal rounded-card bg-pine px-6 py-10 text-center text-cream max-md:text-left sm:px-10">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Institutional General Contracting</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl leading-tight text-white max-md:mx-0 sm:text-4xl">
              Planning a {project.category} Landmark in Pakistan?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-mist max-md:mx-0">
              Engage ALIF&apos;s pre-construction advisory team for geotechnical risk modeling, value-engineered
              structural solutions, and PEC Category CA turnkey EPC delivery.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 max-md:flex-col">
              <Link href="/contact" className="btn-gold max-md:w-full max-md:justify-center max-md:text-center">
                <CalendarDays size={15} /> Schedule Technical Consultation
              </Link>
              <Link href="/contact#enquiry" className="btn-outline-light max-md:w-full max-md:justify-center max-md:text-center">
                <FileText size={15} /> Download Full Project Dossier (PDF)
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-white max-md:flex-col max-md:items-start max-md:gap-y-3">
              {["Turnkey Design-Build & EPC", "No-Limit PEC CA Category", "BIM Level 2 Coordination"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-gold-light" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
