"use client";

import { useEffect, useRef } from "react";

export default function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const mount = () => {
      const Cal = window.Calendly;
      if (!Cal?.initInlineWidget) return false;
      el.innerHTML = "";
      Cal.initInlineWidget({ url, parentElement: el });
      return true;
    };

    if (mount()) return;
    const interval = setInterval(() => {
      if (cancelled) return;
      if (mount()) clearInterval(interval);
    }, 200);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [url]);

  return (
    <div
      ref={ref}
      style={{ minWidth: "300px", height: "680px" }}
      className="bg-background-soft"
    />
  );
}
