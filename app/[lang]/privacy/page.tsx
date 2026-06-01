"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { meta, isLang, DEFAULT_LOCALE, type Lang } from "@/content/site-content";

type Section = { h: string; p: string[] };
type Doc = {
  back: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

const EMAIL = meta.email;

const DOCS: Record<Lang, Doc> = {
  et: {
    back: "← Tagasi",
    title: "Privaatsuspoliitika",
    updated: "Viimati uuendatud: 1. juuni 2026",
    intro:
      "Käesolev privaatsuspoliitika kirjeldab, kuidas SomaSensus (Yana Belova) töötleb sinu isikuandmeid, kui külastad seda veebisaiti või broneerid seansi.",
    sections: [
      {
        h: "Vastutav töötleja",
        p: [
          "SomaSensus — Yana Belova, Tallinn, Eesti.",
          `Kontakt: ${EMAIL}`,
        ],
      },
      {
        h: "Milliseid andmeid kogume",
        p: [
          "Broneerimisandmed: nimi, e-post ja telefon, mille sisestad Calendly broneerimisvormi.",
          "Tehnilised andmed: IP-aadress, brauseri tüüp, seadme info ja saidi kasutamise statistika analüütikateenuste kaudu.",
        ],
      },
      {
        h: "Küpsised ja analüütika",
        p: [
          "Kasutame Google Analyticsit ja Microsoft Clarityt, et mõista, kuidas saiti kasutatakse, ja seda parandada.",
          "Analüütika- ja turundusküpsised aktiveeritakse alles pärast sinu nõusolekut küpsiste bännris. Vajalikud küpsised on alati aktiivsed.",
        ],
      },
      {
        h: "Andmete töötlemise alus ja eesmärk",
        p: [
          "Broneerimisandmeid töödeldakse lepingu täitmiseks (seansi kokkuleppimine).",
          "Analüütikat töödeldakse sinu nõusoleku alusel.",
        ],
      },
      {
        h: "Andmete jagamine",
        p: [
          "Andmeid jagatakse teenusepakkujatega, kes võimaldavad saidi tööd: Calendly (broneeringud), Google ja Microsoft (analüütika). Me ei müü sinu andmeid kolmandatele osapooltele.",
        ],
      },
      {
        h: "Säilitamine",
        p: [
          "Säilitame isikuandmeid ainult nii kaua, kui see on vajalik nimetatud eesmärkide täitmiseks või seadusega nõutud.",
        ],
      },
      {
        h: "Sinu õigused",
        p: [
          "Sul on õigus oma andmetega tutvuda, neid parandada või kustutada, töötlemist piirata ja nõusolek igal ajal tagasi võtta.",
          `Taotluse esitamiseks kirjuta: ${EMAIL}`,
        ],
      },
    ],
  },
  ru: {
    back: "← Назад",
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 1 июня 2026",
    intro:
      "Настоящая политика конфиденциальности описывает, как SomaSensus (Яна Белова) обрабатывает ваши персональные данные при посещении сайта или записи на сеанс.",
    sections: [
      {
        h: "Ответственный за обработку данных",
        p: ["SomaSensus — Яна Белова, Таллинн, Эстония.", `Контакт: ${EMAIL}`],
      },
      {
        h: "Какие данные мы собираем",
        p: [
          "Данные для записи: имя, e-mail и телефон, которые вы вводите в форме бронирования Calendly.",
          "Технические данные: IP-адрес, тип браузера, информация об устройстве и статистика использования сайта через сервисы аналитики.",
        ],
      },
      {
        h: "Cookies и аналитика",
        p: [
          "Мы используем Google Analytics и Microsoft Clarity, чтобы понимать, как используется сайт, и улучшать его.",
          "Аналитические и маркетинговые cookies активируются только после вашего согласия в баннере cookies. Необходимые cookies всегда активны.",
        ],
      },
      {
        h: "Основание и цель обработки",
        p: [
          "Данные для записи обрабатываются для исполнения договора (согласование сеанса).",
          "Аналитика обрабатывается на основании вашего согласия.",
        ],
      },
      {
        h: "Передача данных",
        p: [
          "Данные передаются поставщикам услуг, обеспечивающим работу сайта: Calendly (бронирование), Google и Microsoft (аналитика). Мы не продаём ваши данные третьим лицам.",
        ],
      },
      {
        h: "Хранение",
        p: [
          "Мы храним персональные данные только столько, сколько необходимо для указанных целей или требуется законом.",
        ],
      },
      {
        h: "Ваши права",
        p: [
          "Вы вправе получить доступ к своим данным, исправить или удалить их, ограничить обработку и в любой момент отозвать согласие.",
          `Чтобы направить запрос, напишите: ${EMAIL}`,
        ],
      },
    ],
  },
  en: {
    back: "← Back",
    title: "Privacy Policy",
    updated: "Last updated: 1 June 2026",
    intro:
      "This privacy policy explains how SomaSensus (Yana Belova) processes your personal data when you visit this website or book a session.",
    sections: [
      {
        h: "Data controller",
        p: ["SomaSensus — Yana Belova, Tallinn, Estonia.", `Contact: ${EMAIL}`],
      },
      {
        h: "What data we collect",
        p: [
          "Booking data: name, email and phone you enter in the Calendly booking form.",
          "Technical data: IP address, browser type, device information and site usage statistics via analytics services.",
        ],
      },
      {
        h: "Cookies and analytics",
        p: [
          "We use Google Analytics and Microsoft Clarity to understand how the site is used and to improve it.",
          "Analytics and marketing cookies are only activated after your consent in the cookie banner. Essential cookies are always active.",
        ],
      },
      {
        h: "Legal basis and purpose",
        p: [
          "Booking data is processed to perform a contract (arranging your session).",
          "Analytics is processed on the basis of your consent.",
        ],
      },
      {
        h: "Data sharing",
        p: [
          "Data is shared with service providers that run the site: Calendly (bookings), Google and Microsoft (analytics). We do not sell your data to third parties.",
        ],
      },
      {
        h: "Retention",
        p: [
          "We keep personal data only as long as necessary for the stated purposes or as required by law.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You have the right to access, correct or delete your data, restrict processing and withdraw consent at any time.",
          `To make a request, email: ${EMAIL}`,
        ],
      },
    ],
  },
};

export default function PrivacyPage() {
  const params = useParams();
  const raw = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const lang: Lang = raw && isLang(raw) ? raw : DEFAULT_LOCALE;

  const d = DOCS[lang];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
      <Link
        href={`/${lang}`}
        className="text-sm text-ink-muted underline-offset-4 transition hover:text-ink hover:underline"
      >
        {d.back}
      </Link>

      <h1 className="mt-8 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
        {d.title}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">{d.updated}</p>
      <p className="mt-6 text-[15px] leading-relaxed text-ink">{d.intro}</p>

      <div className="mt-10 space-y-8">
        {d.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-medium text-ink">{s.h}</h2>
            <div className="mt-2 space-y-2">
              {s.p.map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-ink-muted"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
