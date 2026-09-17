import type { Metadata } from "next";
import { inter, cormorant } from "./fonts";
import { LOCALES, DEFAULT_LOCALE } from "@/content/site-content";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.somasensus.ee";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 — SomaSensus",
  description: "Lehte ei leitud.",
};

// Unmatched URLs carry no locale we can trust, so the heading uses the site
// default (Estonian, same as hreflang x-default) and each way back is labelled
// in its own language.
const HOME_LABELS: Record<(typeof LOCALES)[number], string> = {
  et: "Avaleht",
  ru: "На главную",
  en: "Home page",
};

export default function GlobalNotFound() {
  return (
    <html
      lang={DEFAULT_LOCALE}
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-ink">
        <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="font-serif text-xl tracking-wide text-ink">
            soma<span className="font-medium">sensus</span>
          </p>

          <p className="mt-16 text-[11px] uppercase tracking-[0.32em] text-sage-deep">
            404
          </p>
          <h1 className="mt-5 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            Lehte ei leitud.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-muted">
            Seda lehte pole olemas või see on kolinud.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {LOCALES.map((locale) => (
              <a
                key={locale}
                href={`/${locale}`}
                hrefLang={locale}
                className="inline-flex items-center justify-center rounded-full border border-sand bg-surface px-6 py-3 text-sm font-medium tracking-wide text-ink transition hover:border-sage-deep hover:text-sage-deep"
              >
                {HOME_LABELS[locale]}
              </a>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
