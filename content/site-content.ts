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
