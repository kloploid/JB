import { meta, type Lang } from "@/content/site-content";

export type Copy = {
  promo: string;
  navLinks: { why: string; services: string; pricing: string; where: string };
  heroEyebrow: string;
  heroTitle: string;
  heroSub: string;
  ctaBook: string;
  ctaServices: string;
  trust: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  outcomesIntro: string;
  outcomes: string[];
  outcomeDesc: string[];
  whyTitle: string;
  why: { title: string; text: string }[];
  servicesEyebrow: string;
  servicesTitle: string;
  featured: string;
  from: string;
  book: string;
  minLabel: string;
  reviewsEyebrow: string;
  reviewsTitle: string;
  pricingEyebrow: string;
  pricingTitle: string;
  pricingNote: string;
  pricingWidgetTitle: string;
  yanaEyebrow: string;
  yanaTitle: string;
  whereEyebrow: string;
  whereTitle: string;
  hoursTitle: string;
  openInMaps: string;
  finalEyebrow: string;
  finalTitle: string;
  finalSub: string;
  spaceCaption: string;
};

export const SALES: Record<Lang, Copy> = {
  en: {
    promo: "First visit — 10% off",
    navLinks: {
      why: "Approach",
      services: "Treatments",
      pricing: "Pricing",
      where: "Location",
    },
    heroEyebrow: "Massage therapy · Tallinn",
    heroTitle: "Relief your body will remember.",
    heroSub:
      "Therapeutic bodywork that releases tension, restores mobility, and quiets a busy nervous system — in a calm, clinical room.",
    ctaBook: "Book a session",
    ctaServices: "Browse treatments",
    trust: "Trusted by clients across Tallinn",
    outcomesEyebrow: "Outcomes",
    outcomesTitle: "What you walk out with",
    outcomesIntro:
      "Every session targets the result you came for — not a generic routine. Pick by what your body needs, not by what's on a menu.",
    outcomes: [
      "Back & neck without pain",
      "Faster recovery after sport",
      "Less swelling, better flow",
      "Skin that looks rested",
    ],
    outcomeDesc: [
      "Targeted release of long-standing tension in the spine and shoulders.",
      "Muscle elasticity restored, lactic acid flushed, less next-day soreness.",
      "Manual lymph drainage that wakes circulation and lightens heavy legs.",
      "Gentle facial work that lifts, smooths and brightens in one session.",
    ],
    whyTitle: "Why clients come back",
    why: [
      {
        title: "Tailored to your body, each visit",
        text: "No fixed protocol. Every session reads where you actually are today — pressure, focus and length adjust to you.",
      },
      {
        title: "Calm, medical-grade space",
        text: "Sessions take place inside Pelgulinna Tervisemaja and a dedicated room in Lasnamäe — quiet, clean, properly equipped.",
      },
      {
        title: "Pay how you want",
        text: "Pay with Stebby, cash, or by invoice sent to your email. Plus a 10% discount on your very first visit.",
      },
    ],
    servicesEyebrow: "Treatments",
    servicesTitle: "Pick what your body is asking for",
    featured: "Most booked",
    from: "from",
    book: "Book",
    minLabel: "minutes",
    reviewsEyebrow: "Words from clients",
    reviewsTitle: "What people say after a session",
    pricingEyebrow: "Pricing",
    pricingTitle: "Session pricing",
    pricingNote:
      "Cancellation under 12h — 50% of the fee. First visit always −10%.",
    pricingWidgetTitle: "Pick a time that fits",
    yanaEyebrow: "Your therapist",
    yanaTitle: "Hi, I'm Yana.",
    whereEyebrow: "Practice",
    whereTitle: "Where to find me",
    hoursTitle: "Hours",
    openInMaps: "Open in Google Maps",
    finalEyebrow: "Ready when you are",
    finalTitle: "Give your body one honest hour.",
    finalSub: "Book your first session — the 10% discount is already included.",
    spaceCaption: "Inside the practice — Tallinn",
  },
  ru: {
    promo: "Первый визит — скидка 10%",
    navLinks: {
      why: "Подход",
      services: "Процедуры",
      pricing: "Цены",
      where: "Адрес",
    },
    heroEyebrow: "Массажная терапия · Таллинн",
    heroTitle: "Облегчение, которое тело запомнит.",
    heroSub:
      "Терапевтический массаж: снимаем напряжение, возвращаем подвижность и успокаиваем уставшую нервную систему — в тихом кабинете.",
    ctaBook: "Записаться",
    ctaServices: "Смотреть процедуры",
    trust: "Уже доверяют клиенты по всему Таллинну",
    outcomesEyebrow: "Результат",
    outcomesTitle: "С чем вы уходите",
    outcomesIntro:
      "Каждый сеанс ведёт к результату, за которым вы пришли — а не к одинаковому набору движений. Выбирайте по запросу тела, а не по меню.",
    outcomes: [
      "Спина и шея без боли",
      "Быстрее восстановиться после спорта",
      "Меньше отёков, лучше лимфоток",
      "Отдохнувшая кожа лица",
    ],
    outcomeDesc: [
      "Точечная работа с давним напряжением в спине и плечах.",
      "Эластичность мышц, вывод молочной кислоты, меньше крепатуры на следующий день.",
      "Мягкий лимфодренаж, который будит циркуляцию и облегчает ноги.",
      "Деликатная работа с лицом: тонус, лёгкий лифтинг и свежесть за один сеанс.",
    ],
    whyTitle: "Почему сюда возвращаются",
    why: [
      {
        title: "Подбор под ваше состояние",
        text: "Никаких жёстких протоколов. Каждый сеанс настраивается под вас — давление, фокус и продолжительность.",
      },
      {
        title: "Спокойный медицинский кабинет",
        text: "Сеансы проходят в Pelgulinna Tervisemaja и в отдельном кабинете в Lasnamäe — тихо, чисто, всё оборудовано.",
      },
      {
        title: "Удобная оплата",
        text: "Stebby, наличными или счётом на email. На первый визит — скидка 10%.",
      },
    ],
    servicesEyebrow: "Процедуры",
    servicesTitle: "Выберите то, что просит ваше тело",
    featured: "Чаще всего бронируют",
    from: "от",
    book: "Записаться",
    minLabel: "минут",
    reviewsEyebrow: "Отзывы",
    reviewsTitle: "Что говорят клиенты после сеанса",
    pricingEyebrow: "Цены",
    pricingTitle: "Стоимость сеансов",
    pricingNote:
      "Отмена менее чем за 12 часов — 50% от стоимости. На первый визит всегда −10%.",
    pricingWidgetTitle: "Выберите удобное время",
    yanaEyebrow: "Ваш терапевт",
    yanaTitle: "Привет, я Яна.",
    whereEyebrow: "Где принимаю",
    whereTitle: "Адреса и график",
    hoursTitle: "График",
    openInMaps: "Открыть на карте",
    finalEyebrow: "Я готова — когда вы готовы",
    finalTitle: "Подарите телу один честный час.",
    finalSub: "Запишитесь — скидка 10% на первый визит уже учтена.",
    spaceCaption: "Внутри кабинета — Таллинн",
  },
  et: {
    promo: "Esimene visiit — −10%",
    navLinks: {
      why: "Lähenemine",
      services: "Teenused",
      pricing: "Hinnad",
      where: "Asukoht",
    },
    heroEyebrow: "Massaažiteraapia · Tallinn",
    heroTitle: "Kergus, mille keha mäletab.",
    heroSub:
      "Teraapiline kehatöö, mis vabastab pinge, taastab liikuvuse ja rahustab närvisüsteemi — vaikses ja puhtas ruumis.",
    ctaBook: "Broneeri seanss",
    ctaServices: "Vaata teenuseid",
    trust: "Usaldatud klientide poolt üle Tallinna",
    outcomesEyebrow: "Tulemus",
    outcomesTitle: "Mida sa endaga kaasa võtad",
    outcomesIntro:
      "Iga seanss viib tulemuseni, mille pärast tulid — mitte standardne rutiin. Vali selle järgi, mida sinu keha vajab.",
    outcomes: [
      "Selg ja kael valuvabaks",
      "Kiirem taastumine pärast sporti",
      "Vähem turseid, parem lümfivool",
      "Puhanud näonahk",
    ],
    outcomeDesc: [
      "Sihipärane töö pikaajalise pingega selgroos ja õlgades.",
      "Lihaste elastsus taastatud, piimhape välja, vähem järgmise päeva valu.",
      "Õrn lümfidrenaaž, mis äratab vereringe ja kergendab raskeid jalgu.",
      "Õrn näotöö, mis tõstab, siludab ja särab juba ühe seansiga.",
    ],
    whyTitle: "Miks kliendid tagasi tulevad",
    why: [
      {
        title: "Kohandatud sinu kehale",
        text: "Pole jäika protokolli. Iga seanss kohaneb sinu hetkeseisundiga — surve, fookus ja pikkus.",
      },
      {
        title: "Rahulik meditsiiniline ruum",
        text: "Seansid toimuvad Pelgulinna Tervisemajas ja eraldi ruumis Lasnamäel — vaikne, puhas, hästi varustatud.",
      },
      {
        title: "Mugavad maksevõimalused",
        text: "Stebby, sularaha või arve e-postiga. Esimesel visiidil −10%.",
      },
    ],
    servicesEyebrow: "Teenused",
    servicesTitle: "Vali, mida sinu keha küsib",
    featured: "Enim broneeritud",
    from: "alates",
    book: "Broneeri",
    minLabel: "minutit",
    reviewsEyebrow: "Kliendid räägivad",
    reviewsTitle: "Mida öeldakse pärast seanssi",
    pricingEyebrow: "Hinnad",
    pricingTitle: "Seansside hinnad",
    pricingNote:
      "Tühistamine alla 12h — 50% tasust. Esimene visiit alati −10%.",
    pricingWidgetTitle: "Vali sobiv aeg",
    yanaEyebrow: "Sinu terapeut",
    yanaTitle: "Tere, mina olen Yana.",
    whereEyebrow: "Praktika",
    whereTitle: "Kus mind leiad",
    hoursTitle: "Lahtiolekuajad",
    openInMaps: "Ava Google Mapsis",
    finalEyebrow: "Valmis, kui sina oled",
    finalTitle: "Kingi kehale üks aus tund.",
    finalSub: "Broneeri — 10% allahindlus on juba arvestatud.",
    spaceCaption: "Praktika ruumis — Tallinn",
  },
};

export const PAGE_TITLES: Record<Lang, string> = {
  et: "SomaSensus — Yana Belova · Massaaž Tallinnas",
  ru: "SomaSensus — Яна Белова · Массаж в Таллинне",
  en: "SomaSensus — Yana Belova · Massage in Tallinn",
};

export const PAGE_DESCRIPTIONS: Record<Lang, string> = {
  et: "Teraapiline massaaž Tallinnas — vabasta pinge, taasta liikuvus. Pelgulinna Tervisemaja ja Lasnamäe. Esimene visiit −10%.",
  ru: "Терапевтический массаж в Таллинне — снимаем напряжение, возвращаем подвижность. Pelgulinna Tervisemaja и Lasnamäe. Первый визит −10%.",
  en: "Therapeutic massage in Tallinn — release tension, restore mobility. Pelgulinna Tervisemaja & Lasnamäe. First visit −10%.",
};

export const FEATURED_ID = 2;

export const OUTCOME_IMG = [
  "/service2.jpg",
  "/service3.jpg",
  "/service4.jpg",
  "/service5.jpg",
];

export const LOCATION_GEO: { lat: number; lng: number; pageUrl: string }[] = [
  {
    lat: 59.4448,
    lng: 24.6967,
    pageUrl:
      "https://www.google.com/maps/place/Pelgulinna+Tervisemaja,+%C3%84dala+1,+Tallinn",
  },
  {
    lat: 59.4486,
    lng: 24.8456,
    pageUrl:
      "https://www.google.com/maps/place/Linnam%C3%A4e+37a,+Lasnam%C3%A4e,+Tallinn",
  },
];

export const CALENDLY_LOCALE: Record<Lang, string> = {
  en: "en",
  ru: "ru",
  et: "et",
};

export function buildCalendlyUrl(lang: Lang, embed: boolean): string {
  const params = new URLSearchParams({
    locale: CALENDLY_LOCALE[lang],
  });
  if (embed) {
    params.set("hide_gdpr_banner", "1");
    params.set("background_color", "ffffff");
    params.set("text_color", "2a2724");
    params.set("primary_color", "6e8c71");
  }
  return `${meta.booking_calendly}?${params.toString()}`;
}

export function lowestPrice(price: string): number | null {
  const matches = price.match(/(\d+)\s*€/g);
  if (!matches) return null;
  const nums = matches.map((m) => parseInt(m, 10));
  return Math.min(...nums);
}

export type PriceTier = { minutes: number; price: string };

export function parsePriceTiers(s: string): PriceTier[] | null {
  const parts = s.split(/\s*\|\s*/).map((p) => p.trim());
  const tiers: PriceTier[] = [];
  for (const part of parts) {
    const m = part.match(/^(\d+)\s*[мmМM]\s+(\d+)\s*€$/u);
    if (!m) return null;
    tiers.push({ minutes: parseInt(m[1], 10), price: `${m[2]}€` });
  }
  return tiers.length ? tiers : null;
}

export const PAGE_PATHS: Record<Lang, string> = {
  et: "/",
  ru: "/ru",
  en: "/en",
};

export const OG_LOCALES: Record<Lang, string> = {
  et: "et_EE",
  ru: "ru_RU",
  en: "en_US",
};
