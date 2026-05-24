"use client";

import { useEffect, useRef } from "react";

type Point = {
  name: string;
  subtitle: string;
  address: string;
  lat: number;
  lng: number;
  url: string;
  linkLabel: string;
};

export default function LocationsMap({
  points,
  ariaLabel,
}: {
  points: Point[];
  ariaLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let map: { remove: () => void } | null = null;

    (async () => {
      const L = await import("leaflet");
      if (cancelled || !containerRef.current) return;

      const latLngs = points.map(
        (p) => [p.lat, p.lng] as [number, number],
      );
      const bounds = L.latLngBounds(latLngs);

      const m = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });
      m.fitBounds(bounds, { padding: [60, 60], maxZoom: 14 });
      map = m;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
          subdomains: "abcd",
        },
      ).addTo(m);

      const pinIcon = L.divIcon({
        className: "soma-pin",
        html: `<svg viewBox="0 0 24 32" width="30" height="40" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 4px 6px rgba(31,29,26,0.25))"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="#6e8c71"/><circle cx="12" cy="12" r="4.5" fill="#fcfaf6"/></svg>`,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -36],
      });

      for (const p of points) {
        L.marker([p.lat, p.lng], { icon: pinIcon })
          .addTo(m)
          .bindPopup(
            `<div style="min-width:200px;font-family:Inter,system-ui,sans-serif">
              <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#6e8c71">${esc(p.subtitle)}</div>
              <strong style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:#1f1d1a;display:block;margin-top:2px">${esc(p.name)}</strong>
              <span style="color:#6b6862;font-size:0.85rem;display:block;margin-top:4px">${esc(p.address)}</span>
              <a href="${esc(p.url)}" target="_blank" rel="noreferrer" style="color:#6e8c71;font-size:0.8rem;text-decoration:underline;text-underline-offset:3px;display:inline-block;margin-top:8px">${esc(p.linkLabel)} →</a>
            </div>`,
          );
      }
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [points]);

  return (
    <div
      ref={containerRef}
      className="h-[440px] w-full"
      role="region"
      aria-label={ariaLabel}
    />
  );
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
