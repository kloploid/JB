import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SomaSensus — Yana Belova",
    short_name: "SomaSensus",
    description: "Teraapiline massaaž Tallinnas",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf6",
    theme_color: "#6e8c71",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
