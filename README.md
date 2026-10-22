# ALIF Engineering & Construction — Website

Next.js 15 (App Router) + Tailwind CSS v4 + Lucide React. All pages are static (SSG).

**Brand:** Deep green `#0E2F29` / `#0A2420`, cream `#F5F0E6`, gold `#C6A15B` — from the ALIF logo (1A light / 1B dark). Font: Poppins (headings and body). Cards/buttons: 12px radius.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build — 25 content pages, all static
```

## Pages

- `/` — Home (hero, stats, about, 8 sectors, 3 projects, why ALIF, process, testimonial, enquiry, CTA)
- `/about`, `/achievements`, `/careers`, `/contact`
- `/services` + 6 detail pages (`/services/[slug]`)
- `/sectors` + 8 detail pages (`/sectors/[slug]`)
- `/projects` + 3 detail pages (`/projects/[slug]`)
- `/sitemap.xml`, `/robots.txt` generated from `lib/data.ts`

All content lives in `lib/data.ts` — edit sectors, services, projects, stats and contact details in one place.

## Before going live — verify these (they came from the Stitch design mockup)

- All counts are real counts of the site portfolio (7 projects: 5 completed, 2 ongoing; 8 sectors; 6 services). Project figures (areas, heights, values) come from the approved Stitch design files — verify them against company records before publishing as fact.
- Confirm PEC CA No-Limit status, ISO certifications, office addresses, phone/email and the client/testimonial names before publishing them as fact.
