import type { Metadata } from "next";
import Site from "../_components/Site";
import {
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
  OG_LOCALES,
} from "../_components/sales";

export const metadata: Metadata = {
  title: PAGE_TITLES.ru,
  description: PAGE_DESCRIPTIONS.ru,
  alternates: {
    canonical: "/ru",
    languages: {
      et: "/",
      ru: "/ru",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: OG_LOCALES.ru,
    alternateLocale: [OG_LOCALES.et, OG_LOCALES.en],
    title: PAGE_TITLES.ru,
    description: PAGE_DESCRIPTIONS.ru,
  },
};

export default function RussianHome() {
  return <Site lang="ru" />;
}
