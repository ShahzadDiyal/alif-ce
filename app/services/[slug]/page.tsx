import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, Download, FileText, HeartPulse,
  ShieldCheck, SquareTerminal,
} from "lucide-react";
import ProposalForm from "@/components/ProposalForm";
import { ServiceCard } from "@/components/Sections";
import { PROJECTS, SERVICES, SITE } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} | ALIF Engineering & Construction`,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

function milestonesFor() {
  const p = PROJECTS;
  return [
    { tag: "Delivered EPC", type: "Commercial Skyscraper", title: p[0].title, img: p[0].image, slug: p[0].slug,
      text: "32 storeys of premium commercial space in Gulberg, Lahore. Executed through single-point EPC encompassing post-tensioned slabs and double-glazed unitized curtain walling.",
      meta: "Lahore • Q4 2024 Handover", fact: "60 Days Ahead of CPM" },
    { tag: "Design & Build", type: "Luxury High-Rise Residential", title: p[1].title, img: p[1].image, slug: p[1].slug,
      text: "Twin 28-storey iconic residential towers in Clifton, Karachi. Deep contiguous secant pile shoring, coastal-grade anti-sulfate C60 concrete, and custom high-efficiency MEP risers.",
      meta: "Karachi • Twin 28-Storey Towers", fact: "680,000 Sq.Ft Total Area" },
    { tag: "Institutional Turnkey", type: "Financial Headquarters", title: p[4].title, img: p[4].image, slug: p[4].slug,
      text: "26-storey Seismic Zone 4 banking headquarters. Integrated dual-redundant power substations, Tier-3 data center shell, and ballistic security envelope specifications.",
      meta: "Karachi • 26 Storeys", fact: "Zero-LTI Handover" },
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((x) => x.slug === slug);
  if (!service) notFound();
  const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);
  const milestones = milestonesFor();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "GeneralContractor", name: SITE.name, url: SITE.url },
    areaServed: "Pakistan",
    url: `${SITE.url}/services/${service.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 pt-[136px] pb-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-semibold text-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-ink">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold-dark">{service.title}</span>
          </nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">
                <BadgeCheck className="h-4 w-4" /> PEC Category CA Registered — Unlimited Financial Ceiling
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                {service.slug === "turnkey-epc-general-contracting" ? "Turnkey EPC & Institutional General Contracting" : service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{service.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#proposal" className="inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-ink hover:bg-gold-light">
                  <FileText className="h-4 w-4" /> Request Technical Proposal
                </a>
                <a href="#matrices" className="inline-flex items-center gap-2 rounded-btn border border-ink/20 px-5 py-3 text-sm font-bold text-ink hover:bg-white">
                  <Download className="h-4 w-4" /> Download Service Spec Sheet (PDF)
                </a>
              </div>
            </div>
            <aside className="h-fit rounded-card border border-line bg-white p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-gold-dark uppercase">
                <ShieldCheck className="h-4 w-4" /> Institutional Delivery Standard
              </p>
              <ul className="mt-4 space-y-3.5">
                {service.standards.map((std) => {
                  const [head, ...rest] = std.split(": ");
                  return (
                    <li key={std} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-dark" />
                      <span><strong className="font-bold text-ink">{head}:</strong> {rest.join(": ")}</span>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Execution Architecture</p>
          <h2 className="mt-3 font-display text-4xl text-ink">Comprehensive Turnkey Lifecycle</h2>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Our multidisciplinary contracting delivery replaces fragmented subcontractor liabilities with single-point
            contractual responsibility from raw excavation to handover.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {service.lifecycle.map((ph, i) => (
              <article key={ph.title} className="flex flex-col rounded-card border border-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <SquareTerminal className="h-6 w-6 text-gold-dark" />
                  <span className="text-[11px] font-bold tracking-[0.18em] text-muted uppercase">Pillar 0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-[21px] leading-snug text-ink">{ph.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{ph.intro}</p>
                <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                  {ph.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-[13px] leading-relaxed text-ink/85">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" /> {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-[12px] font-bold tracking-wide text-gold-dark uppercase">Phase Metric: {ph.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Matrices */}
      <section id="matrices" className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Engineering Benchmarks</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Contracting &amp; Structural Matrices</h2>
            </div>
            <p className="flex items-center gap-2 text-[12px] font-bold tracking-wider text-gold-dark uppercase">
              <ShieldCheck className="h-4 w-4" /> Mandatory PEC &amp; International Building Code Compliance
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-card border border-line bg-white">
            <div className="hidden grid-cols-[220px_1fr_240px] gap-4 border-b border-line bg-pine px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-gold-light uppercase md:grid">
              <span>Engineering Category</span><span>Technical Specification &amp; Protocols</span><span>Statutory / Governing Body</span>
            </div>
            {service.matrix.map((row) => (
              <div key={row.category} className="grid gap-1.5 border-b border-line px-6 py-5 last:border-0 md:grid-cols-[220px_1fr_240px] md:gap-4">
                <p className="text-[13.5px] font-bold text-ink">{row.category}</p>
                <p className="font-mono text-[12.5px] leading-relaxed text-ink/75">{row.spec}</p>
                <p className="text-[12.5px] font-semibold text-gold-dark">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Executed Monumental Portfolio</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Proven Turnkey EPC Milestones</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide text-gold-dark uppercase hover:text-ink">
              View Complete Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {milestones.map((m) => (
              <Link key={m.slug} href={`/projects/${m.slug}`} className="group overflow-hidden rounded-card border border-line bg-white">
                <div className="relative overflow-hidden">
                  <Image src={m.img} alt={m.title} width={800} height={460} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 rounded-md bg-gold px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-ink uppercase">{m.tag}</span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold tracking-[0.16em] text-gold-dark uppercase">{m.type}</p>
                  <h3 className="mt-1.5 font-display text-xl leading-snug text-ink group-hover:text-gold-dark">{m.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{m.text}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[12px] font-bold text-ink">
                    <span>{m.meta}</span><span className="text-gold-dark">{m.fact}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zero-harm */}
      <section className="bg-pine text-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Institutional Safeguard Standards</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white">Zero-Harm Protocol &amp; British Standard 5975 Rigor</h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-mist">
                High-rise construction demands uncompromising procedural vigilance. ALIF implements dedicated temporary
                works coordinators (TWC), 100% certified fall-arrest perimeters, and digital biometric site access to
                ensure institutional safety on every active elevation.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-card border border-white/10 bg-pine-deep p-5">
                  <HeartPulse className="h-6 w-6 text-gold" />
                  <h3 className="mt-3 font-display text-lg text-white">BS 5975 Temporary Works</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mist">Strict formal engineering sign-off for every falsework, formwork, and tower crane tie installation before live concrete loading.</p>
                </div>
                <div className="rounded-card border border-white/10 bg-pine-deep p-5">
                  <ShieldCheck className="h-6 w-6 text-gold" />
                  <h3 className="mt-3 font-display text-lg text-white">ISO 45001 &amp; 9001 Audited</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mist">Weekly safety stand-downs, continuous scaffolding red-tag inspections, and automated near-miss tracking across site command.</p>
                </div>
              </div>
            </div>
            <div className="h-fit rounded-card border border-gold/40 bg-pine-deep p-7">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold-light uppercase">Safety Milestone Reached</p>
              <p className="mt-3 font-display text-6xl text-white">1.85M</p>
              <p className="mt-1 font-display text-xl text-gold-light">Safe Man-Hours</p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mist">
                Consecutive hours completed without Lost Time Injury (LTI) across all active high-rise projects.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4 text-[11.5px] font-bold text-white">
                <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5"><BadgeCheck className="h-3.5 w-3.5 text-gold" /> PEC Safety Certified</span>
                <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5"><BadgeCheck className="h-3.5 w-3.5 text-gold" /> ISO 14001 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal form */}
      <section id="proposal" className="bg-cream">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-24">
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Institutional Procurement</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Request {service.title} Technical Proposal</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
              Submit your preliminary project parameters. Our chief estimating engineers will return an executive
              constructability and procurement brief within 4 business days.
            </p>
          </div>
          <div className="mt-10">
            <ProposalForm serviceTitle={service.title} />
          </div>
          <figure className="mx-auto mt-12 max-w-3xl text-center">
            <blockquote className="font-display text-[22px] leading-relaxed text-ink italic">
              “In high-rise engineering, permanence is not an accident. It is the calculated convergence of geotechnical
              exactness, structural discipline, and institutional responsibility.”
            </blockquote>
            <figcaption className="mt-3 text-[11px] font-bold tracking-[0.2em] text-gold-dark uppercase">
              Chief Technical Officer • ALIF Engineering &amp; Construction
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-paper">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16">
          <h2 className="font-display text-3xl text-ink">Other Engineering Disciplines</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
