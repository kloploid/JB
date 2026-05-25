"use client";

import { useRef } from "react";

type Review = { text: string; author: string };

export default function ReviewsCarousel({
  reviews,
  eyebrow,
  title,
}: {
  reviews: Review[];
  eyebrow: string;
  title: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const cardW = card?.offsetWidth ?? 0;
    el.scrollBy({ left: (cardW + 24) * dir, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <Stars />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous review"
                className="inline-flex size-11 items-center justify-center rounded-full border border-sand bg-surface text-ink transition hover:border-sage-deep hover:text-sage-deep hover:shadow-sm"
              >
                <ArrowIcon dir="left" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next review"
                className="inline-flex size-11 items-center justify-center rounded-full border border-sand bg-surface text-ink transition hover:border-sage-deep hover:text-sage-deep hover:shadow-sm"
              >
                <ArrowIcon dir="right" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="review-track mt-12 snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4"
        >
          <ul className="flex gap-6">
            {reviews.map((r, i) => (
              <li
                key={i}
                data-review-card
                className="flex shrink-0 snap-start basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <figure className="flex h-full w-full flex-col justify-between rounded-3xl border border-sand bg-surface p-7 transition duration-300 hover:-translate-y-0.5 hover:border-sage/70 hover:shadow-[0_18px_40px_-30px_rgba(31,29,26,0.25)]">
                  <div className="flex gap-0.5 text-sage-deep">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-serif text-lg font-light italic leading-relaxed text-ink">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-sage/30 text-sage-deep">
                      <HeartIcon />
                    </span>
                    {r.author}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-sage-deep">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-3.5 fill-current" aria-hidden>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 fill-current" aria-hidden>
      <path d="M10 17.5s-6.5-4-6.5-8.5C3.5 6.4 5.5 4.5 8 4.5c1 0 1.8.4 2 1c.2-.6 1-1 2-1c2.5 0 4.5 1.9 4.5 4.5C16.5 13.5 10 17.5 10 17.5z" />
    </svg>
  );
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`size-4 stroke-current ${dir === "left" ? "rotate-180" : ""}`}
      fill="none"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
