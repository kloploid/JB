import type { MetadataRoute } from "next";
import { LOCALES } from "@/content/site-content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.somasensus.ee";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const languageAlternates = Object.fromEntries(
    LOCALES.map((l) => [l, `${siteUrl}/${l}`]),
  );

  return LOCALES.map((l) => ({
    url: `${siteUrl}/${l}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages: languageAlternates },
  }));
}
