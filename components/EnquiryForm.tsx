"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SECTORS, SITE } from "@/lib/data";

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", sector: SECTORS[0].title, city: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry — ${form.sector} — ${form.city}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject Sector: ${form.sector}\nCity / Location: ${form.city}\n\nProject Scope / Message:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.tenderEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="card p-7 sm:p-7" id="enquiry-form">
      <h3 className="font-display text-xl text-pine-800">Project Tendering &amp; Enquiry</h3>
      <div className={`mt-5 grid gap-4 ${compact ? "max-md:grid-cols-1" : "max-sm:grid-cols-1 sm:grid-cols-2"}`}>
        <label className="block text-[13px] font-semibold text-ink-900">
          Full Name *
          <input required className="field mt-1.5" value={form.name} onChange={set("name")} placeholder="Your name" />
        </label>
        <label className="block text-[13px] font-semibold text-ink-900">
          Phone Number *
          <input required type="tel" className="field mt-1.5" value={form.phone} onChange={set("phone")} placeholder="+92 ..." />
        </label>
        <label className="block text-[13px] font-semibold text-ink-900">
          Corporate Email *
          <input required type="email" className="field mt-1.5" value={form.email} onChange={set("email")} placeholder="you@company.com" />
        </label>
        <label className="block text-[13px] font-semibold text-ink-900">
          Project Sector *
          <select className="field mt-1.5" value={form.sector} onChange={set("sector")}>
            {SECTORS.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
        <label className="block text-[13px] font-semibold text-ink-900 sm:col-span-2">
          City / Location *
          <input required className="field mt-1.5" value={form.city} onChange={set("city")} placeholder="City, area" />
        </label>
        <label className="block text-[13px] font-semibold text-ink-900 sm:col-span-2">
          Project Scope / Message
          <textarea rows={compact ? 3 : 4} className="field mt-1.5 resize-none" value={form.message} onChange={set("message")} placeholder="Plot size, floors, scope, timeline..." />
        </label>
      </div>
      <button type="submit" className="btn-gold mt-5 w-full justify-center">
        Submit Project Enquiry <Send size={15} />
      </button>
      {sent && (
        <p className="mt-3 text-center text-[13px] text-ink-500">
          Your email app should open with the enquiry addressed to {SITE.tenderEmail}. If it didn&apos;t, please email us directly.
        </p>
      )}
    </form>
  );
}
