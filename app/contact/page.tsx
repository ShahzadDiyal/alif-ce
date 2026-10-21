import type { Metadata } from "next";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";
import { OFFICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description: "Contact ALIF Engineering & Construction: Lahore head office, Islamabad and Karachi offices. Project tendering and enquiries — +92 42 3578 9000, tender@alifconstruction.pk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Start a Conversation"
        text="Our engineering estimating desk and project development directors are available for site visits, project tendering, and technical pre-qualifications nationwide." />
      <section className="bg-cream-50" id="enquiry">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:px-16">
          <div>
            <SectionHeading eyebrow="Offices" title="Where to Find Us" />
            <div className="mt-8 space-y-6">
              {OFFICES.map((o) => (
                <div key={o.label} className="flex gap-3">
                  <MapPin size={19} className="mt-0.5 shrink-0 text-gold-600" />
                  <div>
                    <h2 className="text-sm font-bold text-pine-800">{o.label}</h2>
                    <p className="mt-1 text-sm text-ink-500">{o.address}</p>
                  </div>
                </div>
              ))}
              <div className="space-y-3 border-t border-cream-400 pt-6 text-sm">
                <a href={SITE.phoneHref} className="flex items-center gap-3 font-semibold text-ink-900 hover:text-gold-700">
                  <Phone size={17} className="text-gold-600" /> {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 font-semibold text-ink-900 hover:text-gold-700">
                  <Mail size={17} className="text-gold-600" /> {SITE.email}
                </a>
                <a href={`mailto:${SITE.tenderEmail}`} className="flex items-center gap-3 font-semibold text-ink-900 hover:text-gold-700">
                  <Mail size={17} className="text-gold-600" /> {SITE.tenderEmail} (tenders)
                </a>
              </div>
              <p className="inline-flex items-center gap-2 rounded-lg bg-cream-100 px-3 py-2 text-[12px] font-bold text-ink-900">
                <BadgeCheck size={15} className="text-gold-600" /> PEC Category CA (No-Limit) Certified Constructor
              </p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
