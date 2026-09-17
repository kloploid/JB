"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_EVENT,
  readConsent,
  type ConsentEvent,
} from "./consent";

const CLARITY_ID = "x0b558huwn";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Microsoft Clarity, gated behind the cookie banner.
 *
 * Clarity has its own consent API and does NOT honour Google Consent Mode, so
 * loading its tag unconditionally would set cookies before the visitor agreed.
 * The tag is therefore injected only once consent is stored, and revoked via
 * clarity('consent', false) if the visitor later declines.
 */
export default function Clarity() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (readConsent() === true) {
      // Client-only gate: localStorage is unavailable during SSR, so the tag
      // is mounted after hydration to avoid a hydration mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEnabled(true);
    }

    const onConsent = (event: Event) => {
      const granted = (event as ConsentEvent).detail;
      if (granted) {
        setEnabled(true);
      } else {
        // The tag cannot be unloaded once injected — tell Clarity to stop.
        window.clarity?.("consent", false);
        setEnabled(false);
      }
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!enabled) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
        window.clarity('consent');
      `}
    </Script>
  );
}
