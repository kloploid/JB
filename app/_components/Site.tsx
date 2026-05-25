import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  languages,
  meta,
  LANGS,
  SERVICE_IMG,
  type Lang,
  type SiteContent,
} from "@/content/site-content";
import {
  SALES,
  FEATURED_ID,
  OUTCOME_IMG,
  LOCATION_GEO,
  PAGE_PATHS,
  buildCalendlyUrl,
  lowestPrice,
  parsePriceTiers,
  type Copy,
} from "./sales";
import CalendlyButton from "./CalendlyButton";
import CalendlyInline from "./CalendlyInline";
import ReviewsCarousel from "./ReviewsCarousel";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  loading: () => (
    <div
      className="h-[440px] w-full bg-background-soft"
      aria-label="Loading map"
    />
  ),
});

export default function Site({ lang }: { lang: Lang }) {
  const t = languages[lang];
  const s = SALES[lang];
  const popupUrl = buildCalendlyUrl(lang, false);
  const embedUrl = buildCalendlyUrl(lang, true);

  return (
    <>
      <PromoBar text={s.promo} />
      <Nav lang={lang} s={s} />
      <main>
        <Hero s={s} popupUrl={popupUrl} />
        <Outcomes s={s} />
        <Why s={s} />
        <Services t={t} s={s} popupUrl={popupUrl} />
        <ReviewsCarousel
          reviews={t.feedback.reviews}
          eyebrow={s.reviewsEyebrow}
          title={s.reviewsTitle}
        />
        <Pricing t={t} s={s} embedUrl={embedUrl} />
        <MeetYana t={t} s={s} />
        <Where t={t} s={s} />
        <FinalCta s={s} popupUrl={popupUrl} />
      </main>
      <Footer />
    </>
  );
}

function PromoBar({ text }: { text: string }) {
  return (
    <div className="bg-sage/30 text-center text-[11px] uppercase tracking-[0.3em] text-sage-deep">
      <p className="py-2">{text}</p>
    </div>
  );
}

function Nav({ lang, s }: { lang: Lang; s: Copy }) {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href={PAGE_PATHS[lang]}
          className="flex items-center gap-3 font-serif text-2xl tracking-wide text-ink"
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="size-11 rounded-md object-contain"
            priority
          />
          <span className="hidden sm:inline">
            soma<span className="font-medium">sensus</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-ink-muted md:flex">
          <a href="#why" className="transition hover:text-ink">
            {s.navLinks.why}
          </a>
          <a href="#services" className="transition hover:text-ink">
            {s.navLinks.services}
          </a>
          <a href="#pricing" className="transition hover:text-ink">
            {s.navLinks.pricing}
          </a>
          <a href="#where" className="transition hover:text-ink">
            {s.navLinks.where}
          </a>
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-sand bg-surface/80 px-1 py-1">
          {LANGS.map((l) => {
            const active = lang === l.code;
            return (
              <Link
                key={l.code}
                href={PAGE_PATHS[l.code]}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wider transition ${
                  active
                    ? "bg-sage-deep text-white"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function Hero({ s, popupUrl }: { s: Copy; popupUrl: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/55 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-blush/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-sage/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:px-10 lg:py-32">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
            {s.heroEyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {s.heroTitle}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-muted">
            {s.heroSub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CalendlyButton
              url={popupUrl}
              className="inline-flex items-center justify-center rounded-full bg-sage-deep px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_10px_30px_-15px_rgba(110,140,113,0.7)] transition hover:bg-ink"
            >
              {s.ctaBook}
            </CalendlyButton>
            <a
              href="#services"
              className="inline-flex items-center justify-center text-sm font-medium tracking-wide text-ink underline decoration-sand decoration-2 underline-offset-8 transition hover:decoration-sage-deep"
            >
              {s.ctaServices}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-ink-muted">
            <Stars />
            <span>{s.trust}</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="/yana.jpg"
              alt="Yana Belova"
              fill
              sizes="(min-width: 1024px) 460px, 80vw"
              className="object-cover"
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="absolute -left-5 bottom-8 hidden rounded-2xl border border-sand bg-surface/95 px-4 py-3 shadow-sm backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">
              Tallinn
            </p>
            <p className="mt-1 text-sm font-medium text-ink">
              Pelgulinna · Linnamäe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes({ s }: { s: Copy }) {
  return (
    <section className="border-y border-sand/70 bg-surface/60 py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[5fr_4fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
              {s.outcomesEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
              {s.outcomesTitle}
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-ink-muted">
            {s.outcomesIntro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[4fr_5fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-sand">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/welcome1.jpg"
            >
              <source src="/vid.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/45 to-transparent p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/85">
                {s.spaceCaption}
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {s.outcomes.map((o, i) => (
              <li
                key={o}
                className="flex flex-col rounded-2xl border border-sand bg-background p-5"
              >
                <div className="relative h-28 overflow-hidden rounded-xl bg-sand">
                  <Image
                    src={OUTCOME_IMG[i]}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 260px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-sage-deep">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-sage/40 text-[10px] font-semibold tracking-normal">
                    {i + 1}
                  </span>
                  {s.outcomesEyebrow}
                </div>
                <h3 className="mt-2 text-[15px] font-medium leading-snug text-ink">
                  {o}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {s.outcomeDesc[i]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Why({ s }: { s: Copy }) {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="max-w-xl font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
          {s.whyTitle}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.why.map((w, i) => (
            <article
              key={w.title}
              className="relative rounded-3xl border border-sand bg-surface p-7"
            >
              <span className="font-serif text-3xl text-sage-deep">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-medium leading-snug text-ink">
                {w.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {w.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({
  t,
  s,
  popupUrl,
}: {
  t: SiteContent;
  s: Copy;
  popupUrl: string;
}) {
  return (
    <section id="services" className="bg-background-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
          {s.servicesEyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
          {s.servicesTitle}
        </h2>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.offers.items.map((item) => {
            const isFeatured = item.id === FEATURED_ID;
            const min = lowestPrice(item.price);
            return (
              <li key={item.id} className="flex">
                <article
                  className={`flex w-full flex-col overflow-hidden rounded-3xl border bg-surface transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(31,29,26,0.25)] ${
                    isFeatured ? "border-sage" : "border-sand"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                    <Image
                      src={SERVICE_IMG[item.id] ?? "/service1.jpg"}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                    {isFeatured && (
                      <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-sage-deep backdrop-blur">
                        {s.featured}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl font-medium leading-snug text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-sage-deep">
                        {s.from}
                      </span>{" "}
                      <span className="text-base font-medium text-ink">
                        {min !== null ? `${min}€` : item.price}
                      </span>
                    </p>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.benefits.map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-background-soft px-3 py-1 text-[11px] uppercase tracking-wider text-ink-muted"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-1 items-end">
                      <CalendlyButton
                        url={popupUrl}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[13px] font-medium tracking-wide text-background transition hover:bg-sage-deep"
                      >
                        {s.book}
                        <span aria-hidden>→</span>
                      </CalendlyButton>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Pricing({
  t,
  s,
  embedUrl,
}: {
  t: SiteContent;
  s: Copy;
  embedUrl: string;
}) {
  return (
    <section id="pricing" className="bg-background-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
          {s.pricingEyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
          {s.pricingTitle}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[5fr_7fr]">
          <ul className="space-y-3">
            {t.booking.priceList.map((p) => {
              const tiers = parsePriceTiers(p.price);
              const min = lowestPrice(p.price);
              return (
                <li
                  key={p.name}
                  className="rounded-2xl border border-sand bg-surface p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-medium leading-tight text-ink">
                      {p.name}
                    </h3>
                    {min !== null && (
                      <span className="text-[11px] uppercase tracking-[0.22em] text-sage-deep">
                        {s.from}{" "}
                        <span className="text-ink">{min}€</span>
                      </span>
                    )}
                  </div>

                  {tiers ? (
                    <div
                      className={`mt-4 grid gap-2 ${
                        tiers.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      }`}
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.minutes}
                          className="flex flex-col items-center rounded-xl bg-background-soft px-2 py-3"
                        >
                          <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                            {tier.minutes} {s.minLabel}
                          </span>
                          <span className="mt-1 font-serif text-xl font-medium text-ink">
                            {tier.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-ink-muted">{p.price}</p>
                  )}
                </li>
              );
            })}

            <li className="rounded-2xl border border-sage/60 bg-blush/40 p-5 text-sm text-ink">
              {s.pricingNote}
            </li>
          </ul>

          <div className="overflow-hidden rounded-3xl border border-sand bg-surface">
            <div className="border-b border-sand/70 px-6 py-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sage-deep">
                {s.pricingWidgetTitle}
              </p>
            </div>
            <CalendlyInline url={embedUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetYana({ t, s }: { t: SiteContent; s: Copy }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[5fr_6fr] md:items-center md:gap-16 lg:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="/welcome1.jpg"
              alt={t.aboutYana.title}
              fill
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
            {s.yanaEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            {s.yanaTitle}
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
            {t.aboutYana.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.aboutYana.roles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-sand bg-surface px-3.5 py-1.5 text-xs uppercase tracking-wider text-ink-muted"
              >
                {r}
              </span>
            ))}
          </div>

          <ul className="mt-8 space-y-2">
            {t.aboutYana.skills.map((sk) => (
              <li
                key={sk}
                className="flex items-center gap-3 text-[15px] text-ink"
              >
                <span className="inline-block h-px w-7 bg-sage-deep" />
                {sk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Where({ t, s }: { t: SiteContent; s: Copy }) {
  return (
    <section id="where" className="bg-background-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-sage-deep">
          {s.whereEyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
          {s.whereTitle}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.booking.locations.map((loc, i) => (
            <a
              key={loc.name}
              href={LOCATION_GEO[i]?.pageUrl ?? meta.maps.pelgulinna}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-sand bg-surface p-7 transition hover:border-sage-deep"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">
                {loc.subtitle}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium text-ink">
                {loc.name}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{loc.schedule}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink">
                {loc.address}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-ink-muted transition group-hover:text-sage-deep">
                {s.openInMaps} →
              </p>
            </a>
          ))}

          <div className="rounded-3xl border border-sand bg-background p-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep">
              {s.hoursTitle}
            </p>
            <ul className="mt-4 space-y-2 text-[15px] text-ink">
              {t.contact.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              {t.booking.extraSunday}
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-sand bg-surface">
          <LocationsMap
            ariaLabel={s.whereTitle}
            points={t.booking.locations
              .map((loc, i) => {
                const geo = LOCATION_GEO[i];
                if (!geo) return null;
                return {
                  name: loc.name,
                  subtitle: loc.subtitle,
                  address: loc.address,
                  lat: geo.lat,
                  lng: geo.lng,
                  url: geo.pageUrl,
                  linkLabel: s.openInMaps,
                };
              })
              .filter((p): p is NonNullable<typeof p> => p !== null)}
          />
        </div>
      </div>
    </section>
  );
}

function FinalCta({ s, popupUrl }: { s: Copy; popupUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-sage-deep py-24 text-white lg:py-32">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-sage-deep/70 via-sage-deep/85 to-sage-deep"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
          {s.finalEyebrow}
        </p>
        <h2 className="mt-5 font-serif text-4xl font-light leading-tight md:text-6xl">
          {s.finalTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
          {s.finalSub}
        </p>
        <CalendlyButton
          url={popupUrl}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-sage-deep transition hover:bg-background"
        >
          {s.ctaBook}
        </CalendlyButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sand bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-muted md:flex-row lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-md object-contain"
          />
          <p className="font-serif text-xl text-ink">
            soma<span className="font-medium">sensus</span>
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href={`mailto:${meta.email}`}
            className="underline-offset-4 transition hover:text-ink hover:underline"
          >
            {meta.email}
          </a>
          <a
            href={meta.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 transition hover:text-ink hover:underline"
          >
            Instagram
          </a>
          <a
            href={meta.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 transition hover:text-ink hover:underline"
          >
            Facebook
          </a>
        </div>
        <p>© {new Date().getFullYear()} Yana Belova · Tallinn</p>
      </div>
    </footer>
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
