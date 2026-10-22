import Link from "next/link";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { SECTORS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-cream-100">
      <div className="mx-auto grid w-full gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-12">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-mist-300">
            Leading high-rise and infrastructure general contracting firm in Pakistan.
            Delivering structural permanence and landmark commercial projects across the nation.
          </p>
          <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-gold-400">QUALITY ENGINEERING. LASTING SPACES.</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold-500/10 px-3 py-1.5 text-[11px] font-bold tracking-wider text-gold-300">
            <BadgeCheck size={14} /> PEC Registered — CA No Limit
          </p>
        </div>
        <nav aria-label="Quick links">
          <h3 className="eyebrow text-gold-400">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-mist-300">
            <li><Link className="hover:text-gold-300" href="/">Home</Link></li>
            <li><Link className="hover:text-gold-300" href="/about">About Us</Link></li>
            <li><Link className="hover:text-gold-300" href="/services">Services</Link></li>
            <li><Link className="hover:text-gold-300" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-gold-300" href="/achievements">Achievements</Link></li>
            <li><Link className="hover:text-gold-300" href="/careers">Careers</Link></li>
            <li><Link className="hover:text-gold-300" href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <nav aria-label="Core sectors">
          <h3 className="eyebrow text-gold-400">Core Sectors</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-mist-300">
            {SECTORS.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link className="hover:text-gold-300" href={`/sectors/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="eyebrow text-gold-400">Head Office</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist-300">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" /> {SITE.headOffice}</li>
            <li><a href={SITE.phoneHref} className="flex gap-2 hover:text-gold-300"><Phone size={16} className="shrink-0 text-gold-400" /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-gold-300"><Mail size={16} className="shrink-0 text-gold-400" /> {SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] tracking-wide text-mist-300 sm:flex-row sm:px-6 lg:px-12">
          <span>© {new Date().getFullYear()} {SITE.legalName} All Rights Reserved.</span>
          <span>PEC Category CA (No-Limit) • ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  );
}
