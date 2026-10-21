"use client";

import { useState } from "react";
import { BadgeCheck, CheckCircle2, Lock, Paperclip, Send } from "lucide-react";
import { SITE } from "@/lib/data";

const inputCls =
  "w-full rounded-[10px] border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30";
const labelCls = "mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink uppercase";

const SECTORS = [
  "High-Rise Structural Towers (20+ Storeys)",
  "Commercial Malls & Corporate Centers",
  "Specialized Hospitals & Medical Campuses",
  "Gated Residential & Luxury High-End",
  "Heavy Industrial, Mills & Warehousing",
  "Piling, Diaphragm Walls & Deep Shoring",
  "Civic Infrastructure & Expressways",
];
const TERRITORIES = [
  "Lahore & Greater Punjab",
  "Islamabad / Rawalpindi (ICT)",
  "Karachi & Port Qasim (Sindh)",
  "Khyber Pakhtunkhwa Corridor",
  "Faisalabad / Multan Industrial Hubs",
  "Gwadar / Coastal Belt",
  "Other Territorial Site",
];
const FRAMEWORKS = [
  "Full Turnkey EPC (Engineering, Procurement, Construction)",
  "Lump-Sum Fixed Price General Contracting",
  "Item-Rate / Unit Price (Standard BOQ)",
  "Construction Management at Risk (CMAR)",
  "Joint Venture / Consortium Bidding",
];

export default function TenderForm() {
  const [sent, setSent] = useState(false);
  const [docket, setDocket] = useState("");
  const [fileName, setFileName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ref = `ALF-TND-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    setDocket(ref);
    const lines = [
      `Tender Reference: ${ref}`,
      `Full Name & Designation: ${fd.get("name")}`,
      `Corporate / Developer Entity: ${fd.get("entity")}`,
      `Institutional Email: ${fd.get("email")}`,
      `Direct Phone / WhatsApp: ${fd.get("phone")}`,
      `Project Sector: ${fd.get("sector")}`,
      `Project Territory / City: ${fd.get("territory")}`,
      `Estimated Covered Area: ${fd.get("area")}`,
      `Preferred Procurement Framework: ${fd.get("framework")}`,
      `Mutual NDA Required: ${fd.get("nda") ? "Yes" : "No"}`,
      "",
      "Executive Scope Overview & Milestones:",
      String(fd.get("scope") || ""),
      fileName ? `\n(Attachments to add in your email app: ${fileName})` : "",
    ];
    const subject = encodeURIComponent(`Formal Tendering Inquiry [${ref}] — ${fd.get("entity") || "New Project"}`);
    window.location.href = `mailto:${SITE.tenderEmail}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-gold/50 bg-gold/10 p-6 sm:p-8">
        <CheckCircle2 className="h-9 w-9 text-gold-dark" />
        <h3 className="mt-3 font-display text-2xl text-ink">Tender Package Registered</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your Request for Proposal (RFP) brief has been composed for ALIF Engineering&apos;s central tendering registry.
          Send the email that just opened to complete registration — reference docket{" "}
          <strong className="text-ink">#{docket}</strong> is in its subject line.
        </p>
        <dl className="mt-5 space-y-2.5 text-sm">
          <div className="flex gap-2"><dt className="font-bold text-ink">Assigned Desk:</dt><dd className="text-muted">Central Estimating &amp; Contracts Division</dd></div>
          <div className="flex gap-2"><dt className="font-bold text-ink">Next Milestone:</dt><dd className="text-muted">Initial Technical Clarification Call within 48–72 hours</dd></div>
        </dl>
        <button onClick={() => setSent(false)} className="mt-5 text-sm font-bold text-gold-dark underline underline-offset-4">
          Acknowledge &amp; Return
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-line bg-white p-6 sm:p-8">
      <h3 className="font-display text-2xl text-ink">Submit Tender / RFP Package</h3>
      <p className="mt-1.5 text-[13px] text-muted">Please provide your organization&apos;s credentials and key project parameters to initiate estimating analysis.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="tf-name">Full Name &amp; Designation *</label>
          <input id="tf-name" name="name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-entity">Corporate / Developer Entity *</label>
          <input id="tf-entity" name="entity" required placeholder="e.g. Sapphire Real Estate Holdings" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-email">Institutional Email Address *</label>
          <input id="tf-email" name="email" type="email" required placeholder="name@developer-group.pk" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-phone">Direct Phone / WhatsApp *</label>
          <input id="tf-phone" name="phone" required placeholder="+92 300 0000000" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-sector">Project Sector *</label>
          <select id="tf-sector" name="sector" required defaultValue="" className={inputCls}>
            <option value="" disabled>Select Primary Classification</option>
            {SECTORS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-territory">Project Territory / City *</label>
          <select id="tf-territory" name="territory" required defaultValue="" className={inputCls}>
            <option value="" disabled>Select Site Location</option>
            {TERRITORIES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-area">Estimated Covered Area</label>
          <input id="tf-area" name="area" placeholder="e.g. 450,000 Sq. Ft / 5 Basements" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="tf-framework">Preferred Procurement Framework</label>
          <select id="tf-framework" name="framework" defaultValue={FRAMEWORKS[0]} className={inputCls}>
            {FRAMEWORKS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="tf-scope">Executive Scope Overview &amp; Milestones *</label>
          <textarea id="tf-scope" name="scope" required rows={4} placeholder="Detail structural type (e.g. post-tensioned core), composite steel / raft foundation target mobilization date, expected project duration, and any client supplied materials." className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Upload Architectural Drawings / BOQ / Soil Reports</label>
          <label htmlFor="tf-file" className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-dashed border-gold/60 bg-gold/5 px-3.5 py-3 text-[13px] text-muted hover:bg-gold/10">
            <Paperclip className="h-4 w-4 shrink-0 text-gold-dark" />
            <span className="truncate">{fileName || "Drag and drop RFP documentation, or browse files — PDF, DWG, RVT, ZIP up to 100MB"}</span>
          </label>
          <input id="tf-file" type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-ink/80">
        <input type="checkbox" name="nda" className="mt-0.5 h-4 w-4 shrink-0 accent-[#0E2F29]" />
        <span>
          <strong>Require Mutual Non-Disclosure Agreement (NDA):</strong> Check here if your development board requires
          ALIF Engineering &amp; Construction to execute our standard institutional NDA prior to opening attached
          architectural CAD files and confidential tender documents.
        </span>
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center gap-2 rounded-btn bg-gold px-6 py-3.5 text-sm font-bold text-ink hover:bg-gold-light">
          <BadgeCheck className="h-4 w-4" /> Submit Formal Tendering Inquiry <Send className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-1.5 text-[12px] text-muted"><Lock className="h-3.5 w-3.5" /> Encrypted 256-Bit SSL Transmission</span>
      </div>
    </form>
  );
}
