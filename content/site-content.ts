import data from "./site-content.json";

export type Lang = "en" | "ru" | "et";
export type SiteContent = (typeof data)["languages"]["en"];

export const languages = data.languages as Record<Lang, SiteContent>;
export const meta = data.meta;

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "et", label: "ET" },
];

export const LOCALES: Lang[] = ["et", "ru", "en"];
export const DEFAULT_LOCALE: Lang = "et";

export function isLang(value: string): value is Lang {
  return value === "et" || value === "ru" || value === "en";
}

export const OG_LOCALE: Record<Lang, string> = {
  et: "et_EE",
  ru: "ru_RU",
  en: "en_US",
};

export const PAGE_TITLES: Record<Lang, string> = {
  et: "SomaSensus — Yana Belova · Massaaž Tallinnas",
  ru: "SomaSensus — Яна Белова · Массаж в Таллинне",
  en: "SomaSensus — Yana Belova · Massage in Tallinn",
};

export const PAGE_DESCRIPTIONS: Record<Lang, string> = {
  et: "Teraapiline massaaž Tallinnas — vabasta pinge, taasta liikuvus. Pelgulinna Tervisemaja ja Lasnamäe. Esimene visiit −10%.",
  ru: "Терапевтический массаж в Таллинне — снимаем напряжение, возвращаем подвижность. Pelgulinna Tervisemaja и Lasnamäe. Первый визит −10%.",
  en: "Therapeutic massage in Tallinn — release tension, restore mobility. Pelgulinna Tervisemaja & Lasnamäe. First visit −10%.",
};

export const SERVICE_IMG: Record<number, string> = {
  1: "/service1.jpg",
  2: "/service3.jpg",
  3: "/service2.jpg",
  4: "/service-trigger.jpg",
  5: "/service4.jpg",
  6: "/service5.jpg",
};

export const SERVICE_IMG_POSITION: Record<number, string> = {
  4: "center 85%",
  6: "center 20%",
};
