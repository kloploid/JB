import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jb-one-dusky.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = {
    et: `${siteUrl}/`,
    ru: `${siteUrl}/ru`,
    en: `${siteUrl}/en`,
  };
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/ru`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
