// Shared consent state. The banner writes it, the analytics loaders read it.
export const CONSENT_KEY = "cookie-consent";

// Fired by the banner so scripts gated behind consent can start (or stop)
// without a page reload.
export const CONSENT_EVENT = "somasensus:consent";

export type ConsentEvent = CustomEvent<boolean>;

export function readConsent(): boolean | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") return true;
    if (stored === "denied") return false;
  } catch {}
  return null;
}

export function writeConsent(granted: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {}
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: granted }) satisfies ConsentEvent,
  );
}
