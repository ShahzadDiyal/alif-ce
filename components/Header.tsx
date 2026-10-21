"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-navy-deep text-[11px] font-semibold uppercase tracking-wider text-mist-300">
        <div className="mx-auto flex h-10 w-full items-center justify-between px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-6">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-gold-300">
              <Phone size={13} className="text-gold-300" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden items-center gap-1.5 hover:text-gold-300 sm:flex">
              <Mail size={13} className="text-gold-300" /> {SITE.email}
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <MapPin size={13} className="text-gold-300" /> Lahore, Pakistan
            </span>
          </div>
          <span className="hidden rounded border border-gold-300/30 bg-gold-500/15 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-gold-300 md:block">
            PEC Registered (No-Limit CA Category)
          </span>
        </div>
      </div>

      <div className="border-b border-cream-100/10 bg-pine-800 shadow-[0_1px_8px_rgba(0,0,0,0.18)]">
        <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-6 px-5 sm:px-6 lg:px-12">
          <Link href="/" aria-label="ALIF Engineering & Construction — Home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-semibold tracking-wide transition-colors ${
                  isActive(item.href) ? "text-gold-400" : "text-cream-100 hover:text-gold-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact#enquiry" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-btn bg-gold px-3 py-2 text-[12px] font-bold whitespace-nowrap text-ink transition-colors hover:bg-gold-light sm:px-5 sm:py-2.5 sm:text-[13px]">
              Get a Quote
            </Link>
            <button
              className="inline-flex rounded-xl border border-cream-100/25 p-2.5 text-cream-100 xl:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-cream-100/10 px-5 py-4 xl:hidden" aria-label="Mobile">
            <div className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    isActive(item.href) ? "bg-pine-700 text-gold-400" : "text-cream-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact#enquiry" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full justify-center">
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
