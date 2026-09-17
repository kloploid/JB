import { Inter, Cormorant_Garamond } from "next/font/google";

// preload:false — we ship 3 subsets (latin/latin-ext/cyrillic) for the
// trilingual site; preloading them all wastes bandwidth on the critical path
// (only one subset is used per locale). The browser fetches the needed subset
// on demand via unicode-range, and display:swap keeps text visible meanwhile.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  preload: false,
});

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});
