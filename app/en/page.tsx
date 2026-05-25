import type { Metadata } from "next";
import Site from "../_components/Site";
import {
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
  OG_LOCALES,
} from "../_components/sales";

export const metadata: Metadata = {
  title: PAGE_TITLES.en,
  description: PAGE_DESCRIPTIONS.en,
  alternates: {
    canonical: "/en",
    languages: {
      et: "/",
      ru: "/ru",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: OG_LOCALES.en,
    alternateLocale: [OG_LOCALES.et, OG_LOCALES.ru],
    title: PAGE_TITLES.en,
    description: PAGE_DESCRIPTIONS.en,
  },
};

export default function EnglishHome() {
  return <Site lang="en" />;
}
