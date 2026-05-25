import type { Metadata } from "next";
import Site from "./_components/Site";
import { PAGE_TITLES, PAGE_DESCRIPTIONS, OG_LOCALES } from "./_components/sales";

export const metadata: Metadata = {
  title: PAGE_TITLES.et,
  description: PAGE_DESCRIPTIONS.et,
  alternates: {
    canonical: "/",
    languages: {
      et: "/",
      ru: "/ru",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: OG_LOCALES.et,
    alternateLocale: [OG_LOCALES.ru, OG_LOCALES.en],
    title: PAGE_TITLES.et,
    description: PAGE_DESCRIPTIONS.et,
  },
};

export default function Home() {
  return <Site lang="et" />;
}
