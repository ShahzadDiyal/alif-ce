import type { Metadata } from "next";
import { BadgeCheck, Clock3, FileCheck2, Mail, MapPin, Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { OFFICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Project Tendering & Enquiry | ALIF Engineering & Construction",
  description:
    "Contact ALIF Engineering & Construction: Lahore head office, Islamabad and Karachi offices. Project tendering and enquiries — +92 42 3578 9000, tender@alifconstruction.pk.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  { icon: Phone, label: "Direct Hotline", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Tendering Desk", value: SITE.tenderEmail, href: `mailto:${SITE.tenderEmail}` },
  { icon: Mail, label: "General Enquiries", value: SITE.email, href: `mailto:${SITE.email}` },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[136px] pb-12">
          <p className="anim-fade-up flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold live-dot" /> Project Tendering &amp; Enquiry
          </p>
          <h1 className="anim-fade-up anim-delay-1 mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink">Talk to the Tendering Desk.</h1>
          <p className="anim-fade-up anim-delay-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            Our estimating desk and project development directors are available for site visits, project tendering, and
            technical pre-qualifications nationwide.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-9 grid gap-4 sm:grid-cols-3">
            {CHANNELS.map((c) => (
              <a key={c.label} href={c.href} className="lift flex items-center gap-4 rounded-card border border-line bg-white px-5 py-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <c.icon className="h-5 w-5 text-gold-dark" />
                </span>
                <span>
                  <span className="block text-[10.5px] font-bold tracking-[0.16em] text-muted uppercase">{c.label}</span>
                  <span className="mt-0.5 block text-[14.5px] font-bold break-all text-ink">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
          <p className="anim-fade-up anim-delay-4 mt-5 inline-flex items-center gap-2 rounded-md bg-pine px-3.5 py-2 text-[12px] font-bold text-cream">
            <BadgeCheck className="h-4 w-4 text-gold" /> PEC Category CA (No-Limit) Certified Constructor
          </p>
        </div>
      </section>

      <section id="enquiry" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="reveal text-[11px] font-bold tracking-[0.22em] text-gold-dark uppercase">Offices</p>
            <h2 className="reveal mt-3 font-display text-4xl text-ink">Where to Find Us</h2>
            <div className="mt-8 space-y-4">
              {OFFICES.map((o, i) => (
                <div key={o.label} className={`reveal reveal-d${i + 1} lift flex gap-4 rounded-card border border-line bg-white p-5`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <MapPin className="h-5 w-5 text-gold-dark" />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">{o.label}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card bg-cream p-5">
                <Clock3 className="h-5 w-5 text-gold-dark" />
                <h3 className="mt-2.5 text-[13px] font-bold tracking-wide text-ink uppercase">Acknowledgment — 24 Hours</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">Every tendering enquiry receives an official technical docket acknowledgment within 24 hours.</p>
              </div>
              <div className="rounded-card bg-cream p-5">
                <FileCheck2 className="h-5 w-5 text-gold-dark" />
                <h3 className="mt-2.5 text-[13px] font-bold tracking-wide text-ink uppercase">Brief — 4 Business Days</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">Our chief estimating engineers return an executive constructability and procurement brief within 4 business days.</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
