"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/content/site-content";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const COPY: Record<
  Lang,
  {
    text: string;
    accept: string;
    decline: string;
    privacy: string;
    more: string;
  }
> = {
  et: {
    text: "Kasutame küpsiseid saidi liikluse analüüsimiseks. Võid analüütika küpsised vastu võtta või neist keelduda.",
    accept: "Nõustun",
    decline: "Keeldun",
    privacy: "Vajalikud küpsised jäävad alati aktiivseks.",
    more: "Privaatsuspoliitika",
  },
  ru: {
    text: "Мы используем cookies для анализа посещаемости сайта. Вы можете принять аналитические cookies или отказаться.",
    accept: "Принять",
    decline: "Отклонить",
    privacy: "Необходимые cookies всегда активны.",
    more: "Политика конфиденциальности",
  },
  en: {
    text: "We use cookies to analyse site traffic. You can accept or decline analytics cookies.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Essential cookies always stay active.",
    more: "Privacy Policy",
  },
};

function readLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru" || saved === "et") return saved;
  } catch {}
  return "et";
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<Lang>("et");

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem("cookie-consent");
    } catch {}
    if (consent !== "granted" && consent !== "denied") {
      setLang(readLang());
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem("cookie-consent", granted ? "granted" : "denied");
    } catch {}
    window.gtag?.("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
    setVisible(false);
  };

  if (!visible) return null;

  const c = COPY[lang];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-sand bg-surface/95 p-5 shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-relaxed text-ink">
          <p>{c.text}</p>
          <p className="mt-1 text-xs text-ink-muted">
            {c.privacy}{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 transition hover:text-ink"
            >
              {c.more}
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide(false)}
            className="rounded-full border border-sand px-4 py-2 text-sm text-ink-muted transition hover:text-ink"
          >
            {c.decline}
          </button>
          <button
            onClick={() => decide(true)}
            className="rounded-full bg-sage-deep px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
