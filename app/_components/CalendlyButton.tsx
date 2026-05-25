"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function CalendlyButton({
  url,
  className,
  children,
  ariaLabel,
}: {
  url: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const open = () => {
    if (typeof window === "undefined") return;
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={open}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
