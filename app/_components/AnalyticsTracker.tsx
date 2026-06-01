"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = "G-32CZVTX59C";

/**
 * Sends a GA4 page_view on every route change (including the first load).
 * Required because App Router navigations are client-side and gtag's
 * automatic page_view (send_page_view) is disabled in the layout, so each
 * locale / privacy route would otherwise be counted only once per full reload.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_ID,
    });
  }, [pathname]);

  return null;
}
