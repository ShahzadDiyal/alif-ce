"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Lock, Paperclip, Send } from "lucide-react";
import { JOBS } from "@/components/CareersExplorer";

const inputCls =
  "w-full rounded-[10px] border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-mist/60 focus:border-gold focus:ring-2 focus:ring-gold/30 [&>option]:text-ink";
const labelCls = "mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-gold-light uppercase";

const POSITIONS = [...JOBS.map((j) => j.title), "Management Trainee Engineer (MTE 2025 Cohort)", "General Engineering Dossier (Open Cadre)"];
const EXPERIENCE = ["Graduate / Fresh (0 - 2 Years)", "Mid-Level (3 - 5 Years)", "Senior Engineer (6 - 10 Years)", "Chief / Resident Lead (11 - 15 Years)", "Project Director / Consultant (15+ Years)"];

export default function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const [position, setPosition] = useState(POSITIONS[0]);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      if (POSITIONS.includes(title)) setPosition(title);
    };
    window.addEventListener("alif:apply", handler);
    return () => window.removeEventListener("alif:apply", handler);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Full Legal Name: ${fd.get("name")}`,
      `Official Email: ${fd.get("email")}`,
      `Contact Mobile: ${fd.get("mobile")}`,
      `PEC Registration Number: ${fd.get("pec")}`,
      `Target Position: ${position}`,
      `Total Cumulative Experience: ${fd.get("experience")}`,
      `Certification Confirmed: ${fd.get("certify") ? "Yes" : "No"}`,
      "",
      "Summary of Major Projects & Technical Competencies:",
      String(fd.get("summary") || ""),
      fileName ? `\n(CV to attach in your email app: ${fileName})` : "",
    ];
    const subject = encodeURIComponent(`Engineering Cadre Application — ${position}`);
    window.location.href = `mailto:careers@alifconstruction.pk?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-gold/50 bg-gold/10 p-6 text-center sm:p-8">
        <CheckCircle2 className="mx-auto h-9 w-9 text-gold-dark" />
        <h3 className="mt-3 font-display text-2xl text-ink">Engineering Dossier Prepared</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Your email app should now open with the completed dossier addressed to our Executive Engineering Review
          Board — attach your CV before sending. Per the cadre protocol, expect an official response within 5 working days.
        </p>
        <button onClick={() => setSent(false)} className="mt-4 text-sm font-bold text-gold-dark underline underline-offset-4">Submit another dossier</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card bg-pine p-6 text-cream sm:p-8">
      <p className="text-[11px] font-bold tracking-[0.22em] text-gold-light uppercase">Direct Dossier Submission</p>
      <h3 className="mt-2 font-display text-3xl text-white">Engineering Cadre Application.</h3>
      <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-mist">
        Submit your curriculum vitae, project portfolio plate, and PEC credentials directly to our Executive Engineering
        Review Board. All dossiers are reviewed under strict professional confidentiality.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="af-name">Full Legal Name *</label>
          <input id="af-name" name="name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="af-email">Official Email Address *</label>
          <input id="af-email" name="email" type="email" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="af-mobile">Contact Mobile Number *</label>
          <input id="af-mobile" name="mobile" required placeholder="+92 300 0000000" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="af-pec">PEC Registration Number (or Equivalent) *</label>
          <input id="af-pec" name="pec" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="af-position">Target Position / Cadre Requisition *</label>
          <select id="af-position" value={position} onChange={(e) => setPosition(e.target.value)} className={inputCls}>
            {POSITIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="af-exp">Total Cumulative Experience *</label>
          <select id="af-exp" name="experience" className={inputCls} defaultValue={EXPERIENCE[2]}>
            {EXPERIENCE.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="af-summary">Summary of Major Projects &amp; Technical Competencies</label>
          <textarea id="af-summary" name="summary" rows={4} className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Attach Curriculum Vitae &amp; Project Folio (PDF Max 25MB) *</label>
          <label htmlFor="af-file" className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-dashed border-gold/50 bg-gold/5 px-3.5 py-3 text-[13px] text-mist hover:bg-gold/10">
            <Paperclip className="h-4 w-4 shrink-0 text-gold" />
            <span className="truncate">{fileName || "Click to browse or drag and drop your dossier — comprehensive resume, PEC certificate copy, and project portfolio."}</span>
          </label>
          <input id="af-file" type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-relaxed text-mist">
        <input type="checkbox" name="certify" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A966]" />
        I certify that all information submitted is accurate and authorize ALIF Engineering &amp; Construction to verify
        my credentials with the Pakistan Engineering Council (PEC) and previous EPC contracting employers.
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center gap-2 rounded-btn bg-gold px-6 py-3.5 text-sm font-bold text-ink hover:bg-gold-light">
          Submit Engineering Dossier <Send className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-1.5 text-[12px] text-mist"><Lock className="h-3.5 w-3.5" /> Encrypted candidate records • Strictly confidential</span>
      </div>
    </form>
  );
}
