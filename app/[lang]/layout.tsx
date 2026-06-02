import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "../_components/CookieConsent";
import AnalyticsTracker from "../_components/AnalyticsTracker";
import {
  LOCALES,
  DEFAULT_LOCALE,
  isLang,
  OG_LOCALE,
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
  languages,
  type Lang,
} from "@/content/site-content";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.somasensus.ee";

const languageAlternates: Record<string, string> = {
  et: "/et",
  ru: "/ru",
  en: "/en",
  "x-default": `/${DEFAULT_LOCALE}`,
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Lang = isLang(lang) ? lang : DEFAULT_LOCALE;
  const title = PAGE_TITLES[locale];
  const description = PAGE_DESCRIPTIONS[locale];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: "SomaSensus",
    authors: [{ name: "Yana Belova" }],
    creator: "Yana Belova",
    publisher: "SomaSensus",
    keywords: [
      "massaaž Tallinn",
      "teraapiline massaaž",
      "spordimassaaž",
      "lümfidrenaaž",
      "näomassaaž",
      "trigeripunktid",
      "Yana Belova",
      "SomaSensus",
      "массаж Таллинн",
      "massage Tallinn",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      url: `${siteUrl}/${locale}`,
      siteName: "SomaSensus",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "health",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#fcfaf6" },
  ],
  width: "device-width",
  initialScale: 1,
};

function buildJsonLd(locale: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "MassageTherapy",
    name: "SomaSensus",
    alternateName: "Yana Belova",
    description: PAGE_DESCRIPTIONS[locale],
    image: `${siteUrl}/opengraph-image`,
    url: `${siteUrl}/${locale}`,
    email: "yanabelova.physio@gmail.com",
    priceRange: "€40 – €65",
    inLanguage: ["et", "ru", "en"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Ädala 1",
        addressLocality: "Tallinn",
        addressRegion: "Harju",
        addressCountry: "EE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Linnamäe tee 37a",
        addressLocality: "Tallinn",
        addressRegion: "Harju",
        addressCountry: "EE",
      },
    ],
    geo: [
      { "@type": "GeoCoordinates", latitude: 59.4448, longitude: 24.6967 },
      { "@type": "GeoCoordinates", latitude: 59.4486, longitude: 24.8456 },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/yana.belova.physio_est/",
      "https://www.facebook.com/p/SomaSensus-61566848969221/",
    ],
    // Genuine on-page testimonials, marked up without numeric ratings.
    review: languages[locale].feedback.reviews.map((r) => ({
      "@type": "Review",
      reviewBody: r.text,
      author: { "@type": "Person", name: r.author },
    })),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <head>
        {/* Calendly is loaded lazily (only when booking is needed), so we keep
            these as lightweight DNS hints instead of eager preconnects/blocking CSS. */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://basemaps.cartocdn.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }}
        />
      </head>
      <body className="min-h-dvh bg-background text-ink">
        {children}
        <AnalyticsTracker />
        <Analytics />
        <SpeedInsights />
        <CookieConsent lang={lang} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32CZVTX59C"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
            });
            var stored = (function(){ try { return localStorage.getItem('cookie-consent'); } catch (e) { return null; } })();
            if (stored === 'granted') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted',
              });
            }
            gtag('config', 'G-32CZVTX59C', { send_page_view: false });
          `}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x0b558huwn");
          `}
        </Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
