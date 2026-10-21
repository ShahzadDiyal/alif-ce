import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ALIF Engineering & Construction — Building a Better Tomorrow",
    template: "%s | ALIF Engineering & Construction",
  },
  description:
    "ALIF Engineering & Construction is a Pakistan general contracting firm delivering high-rise towers, commercial complexes, healthcare, industrial and infrastructure projects with in-house engineering, MEP and QA/QC.",
  keywords: ["construction company Pakistan", "general contracting Lahore", "high-rise builders Pakistan", "EPC contractor", "ALIF Engineering"],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "ALIF Engineering & Construction — Building a Better Tomorrow",
    description: "Pakistan's general contracting firm for high-rise, commercial, healthcare, industrial and infrastructure construction.",
    locale: "en_PK",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  slogan: SITE.tagline,
  address: { "@type": "PostalAddress", streetAddress: "Alif Tower, Main Boulevard, Gulberg III", addressLocality: "Lahore", addressCountry: "PK" },
  areaServed: "Pakistan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main>{children}</main>
        <ScrollReveal />
        <Footer />
      </body>
    </html>
  );
}
