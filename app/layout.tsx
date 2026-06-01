import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jb-one-dusky.vercel.app";

const siteTitle = "SomaSensus — Yana Belova · Massaaž Tallinnas";
const siteDescription =
  "Teraapiline massaaž Tallinnas — vabasta pinge, taasta liikuvus ja leia tasakaal. Pelgulinna Tervisemaja ja Lasnamäe kabinet. Esimene visiit −10%.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "et_EE",
    alternateLocale: ["ru_RU", "en_US"],
    url: siteUrl,
    siteName: "SomaSensus",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#fcfaf6" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MassageTherapy",
  name: "SomaSensus",
  alternateName: "Yana Belova",
  description: siteDescription,
  image: `${siteUrl}/opengraph-image`,
  url: siteUrl,
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
    {
      "@type": "GeoCoordinates",
      latitude: 59.4448,
      longitude: 24.6967,
    },
    {
      "@type": "GeoCoordinates",
      latitude: 59.4486,
      longitude: 24.8456,
    },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://basemaps.cartocdn.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-background text-ink">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32CZVTX59C"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-32CZVTX59C');
          `}
        </Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
