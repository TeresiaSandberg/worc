import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WORC — Mindre administration. Mer tid till företaget.",
  description:
    "WORC samlar lön, fakturering, tid och HR i ett enkelt system utvecklat i Stockholm för svenska företag.",
};

const DEMO_MAIL =
  "mailto:info@worc.se?subject=Demo%20WORC&body=Hej%2C%0D%0A%0D%0AJag%20vill%20boka%20demo%20av%20WORC.%0D%0A%0D%0A";

const GET_STARTED_MAIL =
  "mailto:info@worc.se?subject=Jag%20vill%20komma%20ig%C3%A5ng%20med%20WORC";

const CONTACT_MAIL = "mailto:info@worc.se";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-zinc-200/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-stretch md:gap-0 md:pb-24 md:pt-20 lg:pt-24">
          <div className="flex flex-1 flex-col justify-center md:max-w-[52%] md:pr-12 lg:pr-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Utvecklat i Stockholm
            </p>
            <h1 className="mt-5 text-balance text-4xl font-light leading-[1.12] tracking-tight text-zinc-950 md:text-5xl lg:text-[3.25rem]">
              Mindre administration.
              <br />
              Mer tid till företaget.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
              WORC samlar lön, fakturering, tid och HR i ett enkelt system
              utvecklat i Stockholm för svenska företag.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={GET_STARTED_MAIL}
                className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-8 py-3.5 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
              >
                Kom igång
              </a>
              <a
                href={DEMO_MAIL}
                className="inline-flex items-center justify-center border border-zinc-300 bg-white px-8 py-3.5 text-center text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-50"
              >
                Boka demo
              </a>
            </div>
          </div>
          <div className="relative min-h-[220px] flex-1 md:min-h-[320px] lg:min-h-[380px]">
            <div className="absolute inset-0 overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 md:left-4 md:rounded-md">
              <Image
                src="/images/hero-stockholm.png"
                alt="Stockholm"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Vad är WORC? */}
        <section
          className="border-b border-zinc-200/80 bg-zinc-50/80 py-20 md:py-28"
          aria-labelledby="vad-ar-worc"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="vad-ar-worc"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Vad är WORC?
            </h2>
            <p className="mt-4 max-w-2xl text-balance text-2xl font-light leading-snug tracking-tight text-zinc-900 md:text-3xl">
              Ett samlat arbetssätt för det som driver vardagen i bolaget — utan
              att bygga ihop flera parallella system.
            </p>
            <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
              <li className="max-w-md border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Allt samlat i ett system
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Lön, tid, fakturering och HR hänger ihop så att uppgifter inte
                  behöver dubbelläggas eller följas upp manuellt i varje steg.
                </p>
              </li>
              <li className="max-w-md border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Slippa flera olika verktyg
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Färre gränssnitt och färre exportfiler — mer överblick för dig
                  som ansvarar för verksamheten.
                </p>
              </li>
              <li className="max-w-md border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Automatisering som minskar administration
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Rutiner som kan göras säkert av systemet ska inte ta tid från
                  människor som hellre fokuserar på kunder och medarbetare.
                </p>
              </li>
              <li className="max-w-md border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Svenska företag och svenska regelverk
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Utformad med svensk arbetsgivarvardag i åtanke — kollektivavtal,
                  rutiner och rapportering som hör hemma här.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Funktioner */}
        <section
          className="border-b border-zinc-200/80 py-20 md:py-28"
          aria-labelledby="funktioner"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="funktioner"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Funktioner
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600">
              Fyra områden som ofta går hand i hand i små och medelstora bolag.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Lön",
                  text: "Löneprocesser och uppföljning i linje med hur svenska arbetsgivare arbetar.",
                },
                {
                  title: "Tid",
                  text: "Tidrapportering som följer vardagen i verksamheten — enkelt för medarbetare och ledning.",
                },
                {
                  title: "Fakturering",
                  text: "Fakturor och intäktsflöden samlade så att ekonomin hänger ihop med det som levereras.",
                },
                {
                  title: "HR",
                  text: "Personalärenden, struktur och grundläggande HR-stöd på samma plattform som resten.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col border border-zinc-200 bg-white p-8 transition-shadow duration-200 hover:shadow-sm"
                >
                  <h3 className="text-lg font-medium tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prismodell */}
        <section
          className="border-b border-zinc-200/80 bg-zinc-50/80 py-20 md:py-28"
          aria-labelledby="prismodell"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="prismodell"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Prismodell
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-2xl font-light leading-snug tracking-tight text-zinc-900 md:text-3xl">
              Tydliga paket utan krångliga tillägg.
            </p>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 md:text-base">
              Tydliga paket utan dolda tillägg eller krångliga konsultupplägg.
            </p>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <article className="flex flex-col border border-zinc-200 bg-white p-8 md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                  Start
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  För mindre företag och egenföretagare.
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-700">
                  <li>Fakturering</li>
                  <li>Enkel lönehantering</li>
                  <li>Tidrapportering</li>
                  <li>Grundläggande administration</li>
                </ul>
                <p className="mt-10 border-t border-zinc-200 pt-8 text-sm font-medium text-zinc-900">
                  249 kr/mån
                </p>
              </article>
              <article className="flex flex-col border border-zinc-900 bg-zinc-900 p-8 text-white md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Plus
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  För växande företag.
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-200">
                  <li>Allt i Start</li>
                  <li>Flera anställda</li>
                  <li>HR</li>
                  <li>Frånvaro</li>
                  <li>Utlägg</li>
                  <li>Mer automatisering</li>
                </ul>
                <p className="mt-10 border-t border-zinc-700 pt-8 text-sm font-medium text-white">
                  899 kr/mån
                </p>
              </article>
              <article className="flex flex-col border border-zinc-200 bg-white p-8 md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                  Enterprise
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  För företag med större behov.
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-700">
                  <li>Kollektivavtal</li>
                  <li>Anpassade flöden</li>
                  <li>Prioriterad support</li>
                  <li>Anpassad onboarding</li>
                </ul>
                <p className="mt-10 border-t border-zinc-200 pt-8 text-sm font-medium text-zinc-900">
                  Offert
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Om WORC */}
        <section className="py-20 md:py-28" aria-labelledby="om-worc">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2
                  id="om-worc"
                  className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
                >
                  Om WORC
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-zinc-700 md:text-xl md:leading-relaxed">
                  WORC byggs i Stockholm med fokus på svenska företag — från
                  enmansbolag till organisationer med mer komplexa behov. Vi
                  utgår från lokal kompetens om löner, avtal och vardagen som
                  ekonomichef eller HR-ansvarig möter. Målet är trygghet och
                  långsiktighet: ett system som känns lugnt att leva med, år efter
                  år.
                </p>
              </div>
              <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src="/images/grow.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          className="border-t border-zinc-200/80 bg-zinc-50/80 py-16 md:py-20"
          aria-labelledby="kontakt-cta"
        >
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2
              id="kontakt-cta"
              className="text-balance text-2xl font-light tracking-tight text-zinc-900 md:text-3xl"
            >
              Vill du se om WORC passar ditt företag?
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              Skicka ett mejl så tar vi ett första samtal.
            </p>
            <a
              href={CONTACT_MAIL}
              className="mt-8 inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
            >
              Kontakta oss
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} WORC · Stockholm</p>
          <Link
            href="/login"
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
          >
            Logga in
          </Link>
        </div>
      </footer>
    </div>
  );
}
