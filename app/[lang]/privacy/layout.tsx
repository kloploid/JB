import type { Metadata } from "next";
import { isLang, DEFAULT_LOCALE, type Lang } from "@/content/site-content";

const PRIVACY_TITLES: Record<Lang, string> = {
  et: "Privaatsuspoliitika — SomaSensus",
  ru: "Политика конфиденциальности — SomaSensus",
  en: "Privacy Policy — SomaSensus",
};

const PRIVACY_DESCRIPTIONS: Record<Lang, string> = {
  et: "Kuidas SomaSensus töötleb sinu isikuandmeid ja küpsiseid.",
  ru: "Как SomaSensus обрабатывает ваши персональные данные и cookies.",
  en: "How SomaSensus processes your personal data and cookies.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Lang = isLang(lang) ? lang : DEFAULT_LOCALE;

  return {
    title: PRIVACY_TITLES[locale],
    description: PRIVACY_DESCRIPTIONS[locale],
    alternates: { canonical: `/${locale}/privacy` },
    // Legal/utility page: keep it out of the index but let bots follow links.
    robots: { index: false, follow: true },
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
