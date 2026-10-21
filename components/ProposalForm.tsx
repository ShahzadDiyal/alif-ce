"use client";

import { useState } from "react";
import { BadgeCheck, CheckCircle2, Paperclip, Send } from "lucide-react";
import { SITE } from "@/lib/data";

const inputCls =
  "w-full rounded-[10px] border border-line bg-paper px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30";
const labelCls = "mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink uppercase";

export default function ProposalForm({ serviceTitle }: { serviceTitle: string }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Service: ${serviceTitle}`,
      `Project Name: ${fd.get("project")}`,
      `Site Location: ${fd.get("location")}`,
      `Territory: ${fd.get("territory")}`,
      `Estimated Covered Area: ${fd.get("scale")}`,
      `Procurement Framework: ${fd.get("framework")}`,
      `Lead Contact: ${fd.get("contact")}`,
      `Email: ${fd.get("email")}`,
      `Phone / WhatsApp: ${fd.get("phone")}`,
      `NDA Requested: ${fd.get("nda") ? "Yes" : "No"}`,
      "",
      "Scope Summary & Key Milestones:",
      String(fd.get("scope") || ""),
      fileName ? `\n(Attachments to add in your email app: ${fileName})` : "",
    ];
    const subject = encodeURIComponent(`Technical Proposal Request — ${fd.get("project") || serviceTitle}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-gold/50 bg-gold/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-9 w-9 text-gold-dark" />
        <h3 className="mt-3 font-display text-2xl text-ink">RFP Brief Prepared</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Your email app should now open with the completed brief addressed to our estimating desk. Send it and you will
          receive an official technical docket acknowledgment — our chief estimating engineers return an executive
          constructability and procurement brief within 4 business days.
        </p>
        <button onClick={() => setSent(false)} className="mt-4 text-sm font-bold text-gold-dark underline underline-offset-4">
          Prepare another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-line bg-white p-7 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="pf-project">Project Name / Working Title *</label>
          <input id="pf-project" name="project" required placeholder="e.g. Alif Horizon Landmark Towers" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-location">Site Location *</label>
          <input id="pf-location" name="location" required placeholder="Plot, sector, city" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-territory">Project Territory</label>
          <select id="pf-territory" name="territory" className={inputCls} defaultValue="Lahore & Greater Punjab">
            {["Lahore & Greater Punjab", "Karachi & Sindh Coastal Zone", "Islamabad / Rawalpindi (ICT)", "Khyber Pakhtunkhwa / Northern", "Gwadar / Special Economic Zone"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-scale">Estimated Covered Area (Sq. Ft) *</label>
          <select id="pf-scale" name="scale" required className={inputCls} defaultValue="">
            <option value="" disabled>Select Scale</option>
            {["100,000 – 250,000 Sq.Ft", "250,000 – 500,000 Sq.Ft", "500,000 – 1,000,000 Sq.Ft", "Monumental > 1,000,000 Sq.Ft"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="pf-framework">Preferred Procurement Framework *</label>
          <select id="pf-framework" name="framework" required className={inputCls} defaultValue="Turnkey EPC (Lump Sum / Single-Point)">
            {["Turnkey EPC (Lump Sum / Single-Point)", "Guaranteed Maximum Price (GMP)", "Standard FIDIC Item-Rate Bill of Quantities", "Consortium / Joint Venture Model"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-contact">Lead Contact Person *</label>
          <input id="pf-contact" name="contact" required placeholder="Engr. / Arch. Full Name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-email">Corporate / Institutional Email *</label>
          <input id="pf-email" name="email" type="email" required placeholder="e.g. director@developer.pk" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-phone">Contact Phone / WhatsApp *</label>
          <input id="pf-phone" name="phone" required placeholder="+92 300 0000000" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-file">Attach Drawings / Soil Reports</label>
          <label htmlFor="pf-file" className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-dashed border-gold/60 bg-gold/5 px-3.5 py-2.5 text-[13px] text-muted hover:bg-gold/10">
            <Paperclip className="h-4 w-4 shrink-0 text-gold-dark" />
            <span className="truncate">{fileName || "PDF, DWG, RVT, or ZIP up to 100MB — Browse Files"}</span>
          </label>
          <input id="pf-file" type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="pf-scope">Scope Summary &amp; Key Milestones</label>
          <textarea id="pf-scope" name="scope" rows={4} placeholder="Provide details regarding expected start date, geotechnical survey status, basement depth, or architectural concept phase." className={inputCls} />
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[13px] text-ink/80">
        <input type="checkbox" name="nda" className="mt-0.5 h-4 w-4 accent-[#0E2F29]" />
        We require ALIF Engineering to sign a mutual Non-Disclosure Agreement (NDA)
      </label>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-btn bg-gold px-6 py-3.5 text-sm font-bold text-ink hover:bg-gold-light sm:w-auto">
        <BadgeCheck className="h-4 w-4" /> Submit RFP for Engineering Assessment <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
