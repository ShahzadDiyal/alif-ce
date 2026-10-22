import type { Metadata } from "next";
import { SITE } from "./data";

type PageMetaInput = {
  /** Page title without the brand suffix (the root layout template appends it). */
  title: string;
  description: string;
  /** Path for the canonical URL and og:url, e.g. "/about". */
  path: string;
  /** Optional share images; defaults to the site-wide app/opengraph-image.png. */
  images?: string[];
  /** Use the title exactly as given (no template), e.g. for the homepage. */
  absolute?: boolean;
};

/** Consistent per-page metadata: title, description, canonical, Open Graph and Twitter card. */
const DEFAULT_SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.tagline}`,
};

export function pageMeta({ title, description, path, images, absolute = false }: PageMetaInput): Metadata {
  const shareTitle = absolute ? title : `${title} | ${SITE.name}`;
  const shareImages = images?.length ? images : [DEFAULT_SHARE_IMAGE];
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_PK",
      url: path,
      title: shareTitle,
      description,
      images: shareImages,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: shareImages,
    },
  };
}
