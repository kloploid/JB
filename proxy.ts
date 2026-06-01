import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["et", "ru", "en"] as const;
const DEFAULT_LOCALE = "et";

function pickLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    const ordered = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of ordered) {
      const base = tag.split("-")[0];
      const match = LOCALES.find((l) => l === base);
      if (match) return match;
    }
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on app routes only; skip Next internals, metadata files and static assets.
  matcher: [
    "/((?!_next|robots.txt|sitemap.xml|manifest.webmanifest|opengraph-image|.*\\..*).*)",
  ],
};
