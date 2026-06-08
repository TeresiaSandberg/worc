import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WORC — Ett system för HR, ekonomi, tid och lön.",
  description:
    "WORC är ett sammanhållet verksamhetssystem för HR, ekonomi, tid och lön. Lämna manuella flöden, filer, dubbelregistrering och avstämningskaos bakom dig.",
};

const START_SUB_MAIL =
  "mailto:info@worc.se?subject=Starta%20abonnemang%20%E2%80%93%20WORC&body=Hej%2C%0D%0A%0D%0AJag%20vill%20starta%20ett%20abonnemang%20p%C3%A5%20WORC.%0D%0A%0D%0AF%C3%B6retag%3A%0D%0AAntal%20l%C3%B6ner%2Fm%C3%A5n%3A%0D%0AAntal%20fakturor%2Fm%C3%A5n%3A%0D%0A%0D%0A";

const CONTACT_MAIL = "mailto:info@worc.se?subject=Kontakt%20%E2%80%93%20WORC";

function planMail(plan: string) {
  return (
    "mailto:info@worc.se?subject=" +
    encodeURIComponent(`Starta abonnemang – WORC ${plan}`) +
    "&body=" +
    encodeURIComponent(
      `Hej,\r\n\r\nJag vill starta ett abonnemang på WORC (${plan}).\r\n\r\nFöretag:\r\nAntal löner/mån:\r\nAntal fakturor/mån:\r\n\r\n`,
    )
  );
}

const PRODUCT_AREAS = [
  {
    title: "HR",
    text: "Användare, anställningsavtal, personbegrepp, organisation och behörigheter.",
  },
  {
    title: "Tid",
    text: "Tidrapportering, frånvaro, schema, avvikelser och attestflöden.",
  },
  {
    title: "Lön",
    text: "Lönearter, regler, kollektivavtal, ackumulatorer, skatt, lönespec och kontroller.",
  },
  {
    title: "Ekonomi",
    text: "Bokföringsunderlag, kostnadsfördelning, utlägg, rapportering och framtida ekonomiflöden.",
  },
];

const PLANS = [
  {
    name: "Start",
    price: "299 kr",
    period: "/mån",
    blurb: "För mindre företag med låg administrativ volym.",
    benchmark: "Riktmärke: upp till ca 10 löner/mån eller 100 fakturor/mån.",
    cta: { label: "Starta abonnemang", href: planMail("Start") },
    featured: false,
  },
  {
    name: "Growth",
    price: "599 kr",
    period: "/mån",
    blurb: "För växande företag med fler löner, fakturor och flöden.",
    benchmark: "Riktmärke: upp till ca 50 löner/mån eller 500 fakturor/mån.",
    cta: { label: "Starta abonnemang", href: planMail("Growth") },
    featured: true,
  },
  {
    name: "Scale",
    price: "999 kr",
    period: "/mån",
    blurb: "För företag med högre administrativ belastning.",
    benchmark: "Riktmärke: upp till ca 150 löner/mån eller 2 000 fakturor/mån.",
    cta: { label: "Starta abonnemang", href: planMail("Scale") },
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Offert",
    period: "",
    blurb: "För större volymer, flera bolag eller mer komplexa flöden.",
    benchmark: "Skräddarsytt utifrån verksamhet och volym.",
    cta: { label: "Kontakta oss", href: CONTACT_MAIL },
    featured: false,
  },
];

const INCLUDED = [
  "HR",
  "Anställningar",
  "Tid",
  "Lön",
  "Lönespecar",
  "Fakturaunderlag",
  "Fakturering",
  "Ekonomi",
  "Rapporter",
  "Behörigheter",
  "Standardflöden",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-base font-semibold tracking-[0.2em] text-zinc-950">
            WORC
          </span>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
            <a className="transition-colors hover:text-zinc-950" href="#produkt">
              Produkt
            </a>
            <a className="transition-colors hover:text-zinc-950" href="#ingar">
              Vad ingår
            </a>
            <a className="transition-colors hover:text-zinc-950" href="#priser">
              Priser
            </a>
            <a className="transition-colors hover:text-zinc-950" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            href={START_SUB_MAIL}
            className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
          >
            Starta abonnemang
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-zinc-200/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-stretch md:gap-0 md:pb-24 md:pt-20 lg:pt-24">
          <div className="flex flex-1 flex-col justify-center md:max-w-[54%] md:pr-12 lg:pr-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Verksamhetssystem · Utvecklat i Stockholm
            </p>
            <h1 className="mt-5 text-balance text-4xl font-light leading-[1.1] tracking-tight text-zinc-950 md:text-5xl lg:text-[3.5rem]">
              Ett system för HR, ekonomi, tid och lön.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
              Byggt för företag som vill lämna manuella flöden, filer,
              dubbelregistrering och avstämningskaos bakom sig.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={START_SUB_MAIL}
                className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-8 py-3.5 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
              >
                Starta abonnemang
              </a>
              <a
                href="#priser"
                className="inline-flex items-center justify-center border border-zinc-300 bg-white px-8 py-3.5 text-center text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-50"
              >
                Se priser
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
              <span>HR</span>
              <span className="text-zinc-300">·</span>
              <span>Ekonomi</span>
              <span className="text-zinc-300">·</span>
              <span>Tid</span>
              <span className="text-zinc-300">·</span>
              <span>Lön</span>
            </div>
          </div>
          <div className="relative min-h-[220px] flex-1 md:min-h-[320px] lg:min-h-[420px]">
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
        {/* Produktbeskrivning */}
        <section
          id="produkt"
          className="scroll-mt-20 border-b border-zinc-200/80 bg-zinc-50/80 py-20 md:py-28"
          aria-labelledby="produkt-rubrik"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="produkt-rubrik"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Ett sammanhållet system
            </h2>
            <p className="mt-4 max-w-3xl text-balance text-2xl font-light leading-snug tracking-tight text-zinc-900 md:text-3xl">
              WORC kopplar ihop hela flödet — från anställning till tidrapport,
              lön, bokföring och uppföljning.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-x-16">
              <div className="border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  En gång, på rätt plats
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  En uppgift ska registreras en gång, på rätt plats, och sedan
                  användas genom hela kedjan — utan dubbelregistrering.
                </p>
              </div>
              <div className="border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Allt hänger ihop
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  HR, tid, lön och ekonomi delar samma data och regler, så att
                  flödet går hela vägen utan parallella system.
                </p>
              </div>
              <div className="border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  No touch workflow
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  När grunddata, regler och flöden är rätt ska systemet kunna
                  göra jobbet automatiskt — målet är ett flöde utan onödiga
                  manuella steg.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vad ingår? */}
        <section
          id="ingar"
          className="scroll-mt-20 border-b border-zinc-200/80 py-20 md:py-28"
          aria-labelledby="ingar-rubrik"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="ingar-rubrik"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Vad ingår?
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600">
              Fyra områden som hänger ihop i ett och samma system.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCT_AREAS.map((item) => (
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

        {/* Om grundaren */}
        <section
          className="border-b border-zinc-200/80 bg-zinc-50/80 py-20 md:py-28"
          aria-labelledby="grundare-rubrik"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2
                  id="grundare-rubrik"
                  className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
                >
                  Vem bygger WORC?
                </h2>
                <p className="mt-6 text-pretty text-2xl font-light leading-snug tracking-tight text-zinc-900 md:text-3xl">
                  WORC byggs av Teresia Sandberg.
                </p>
                <div className="mt-6 flex flex-col gap-4 text-pretty text-base leading-relaxed text-zinc-700 md:text-lg md:leading-relaxed">
                  <p>
                    Jag har arbetat med lön, arbetsrätt, kollektivavtal,
                    HR-processer och systemarkitektur. WORC bygger på
                    erfarenheten av hur komplext det faktiskt är när HR, tid, lön
                    och ekonomi ska fungera tillsammans i verkligheten.
                  </p>
                  <p>
                    Målet med WORC är att digitalisera en bransch som fortfarande
                    är alldeles för beroende av manuella filer, dubbelregistrering,
                    speciallösningar och personberoende kontroller.
                  </p>
                  <p>
                    Visionen är no touch workflow: ett system där rätt uppgift
                    registreras en gång, reglerna är spårbara och flödet kan gå
                    hela vägen från HR till lön och ekonomi utan onödiga manuella
                    steg.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 lg:aspect-auto lg:min-h-[360px]">
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

        {/* Priser */}
        <section
          id="priser"
          className="scroll-mt-20 border-b border-zinc-200/80 py-20 md:py-28"
          aria-labelledby="priser-rubrik"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="priser-rubrik"
              className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
            >
              Priser
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-2xl font-light leading-snug tracking-tight text-zinc-900 md:text-3xl">
              Ett pris. Hela flödet.
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              WORC har fasta månadspriser baserade på företagets administrativa
              volym. Alla centrala funktioner ingår från start — du betalar inte
              extra per modul, användare eller klick. Välj paket efter volym,
              inte efter vilka funktioner du vill låsa upp.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PLANS.map((plan) => (
                <article
                  key={plan.name}
                  className={[
                    "flex flex-col border p-8",
                    plan.featured
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className={[
                        "text-xs font-medium uppercase tracking-[0.15em]",
                        plan.featured ? "text-zinc-400" : "text-zinc-500",
                      ].join(" ")}
                    >
                      {plan.name}
                    </p>
                    {plan.featured && (
                      <span className="border border-zinc-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-300">
                        Populär
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className={[
                        "text-3xl font-light tracking-tight",
                        plan.featured ? "text-white" : "text-zinc-950",
                      ].join(" ")}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={
                          plan.featured ? "text-sm text-zinc-400" : "text-sm text-zinc-500"
                        }
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p
                    className={[
                      "mt-4 text-sm leading-relaxed",
                      plan.featured ? "text-zinc-300" : "text-zinc-600",
                    ].join(" ")}
                  >
                    {plan.blurb}
                  </p>
                  <p
                    className={[
                      "mt-3 text-sm leading-relaxed",
                      plan.featured ? "text-zinc-400" : "text-zinc-500",
                    ].join(" ")}
                  >
                    {plan.benchmark}
                  </p>

                  <a
                    href={plan.cta.href}
                    className={[
                      "mt-8 inline-flex items-center justify-center border px-6 py-3 text-sm font-medium transition-colors duration-200",
                      plan.featured
                        ? "border-white bg-white text-zinc-900 hover:bg-zinc-100"
                        : "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800",
                    ].join(" ")}
                  >
                    {plan.cta.label}
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-14 border-l border-zinc-300 pl-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Ingår i alla paket
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm leading-relaxed text-zinc-700 sm:grid-cols-2 md:grid-cols-3">
                {INCLUDED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Kollektivavtal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  5 000 kr/år per avtal.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Kollektivavtal kräver löpande underhåll, tolkning och
                  uppdatering. Årsavgiften täcker det fortsatta arbetet med att
                  hålla avtalet uppdaterat och användbart i WORC.
                </p>
              </div>
              <div className="border-l border-zinc-300 pl-6">
                <p className="text-base font-medium text-zinc-900">
                  Kundanpassningar
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Offert eller timdebitering vid kundspecifika flöden eller
                  specialanpassningar.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 md:text-base">
              Allt ingår i paketet. Det enda som kan tillkomma är licens för
              kollektivavtal och kundspecifika anpassningar.
            </p>

            <div
              className="mt-16 border-t border-zinc-200 pt-12"
              aria-labelledby="leveranstider-rubrik"
            >
              <h3
                id="leveranstider-rubrik"
                className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500"
              >
                Kollektivavtal och leveranstider
              </h3>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
                Behöver ni stöd för ett kollektivavtal i WORC? Leveranstiden
                beror på om avtalet redan finns färdigt eller om det behöver
                byggas upp från grunden.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="border-l border-zinc-300 pl-6">
                  <p className="text-base font-medium text-zinc-900">
                    Befintligt kollektivavtal
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    Om avtalet redan finns färdigt i WORC kan det normalt
                    aktiveras inom 24 timmar.
                  </p>
                </div>

                <div className="border-l border-zinc-300 pl-6">
                  <p className="text-base font-medium text-zinc-900">
                    Nytt kollektivavtal — standardspår
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    När ett nytt kollektivavtal behöver byggas, tolkas och
                    kvalitetssäkras från grunden gäller normalt följande
                    riktlinjer:
                  </p>
                  <ul className="mt-3 flex flex-col gap-1 text-sm leading-relaxed text-zinc-700">
                    <li>Tjänstemannaavtal: cirka 15 arbetsdagar</li>
                    <li>Arbetaravtal: cirka 25–30 arbetsdagar</li>
                  </ul>
                </div>

                <div className="border-l border-zinc-300 pl-6">
                  <p className="text-base font-medium text-zinc-900">
                    Nytt kollektivavtal — snabbspår
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    För kunder som behöver komma igång snabbare finns möjlighet
                    till snabbspår, där kollektivavtalet prioriteras i
                    leveransen.
                  </p>
                  <ul className="mt-3 flex flex-col gap-1 text-sm leading-relaxed text-zinc-700">
                    <li>Tjänstemannaavtal: cirka 5 arbetsdagar</li>
                    <li>Arbetaravtal: cirka 10 arbetsdagar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt / Starta abonnemang */}
        <section
          id="kontakt"
          className="scroll-mt-20 bg-zinc-50/80 py-20 md:py-28"
          aria-labelledby="kontakt-rubrik"
        >
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2
              id="kontakt-rubrik"
              className="text-balance text-3xl font-light tracking-tight text-zinc-900 md:text-4xl"
            >
              Redo att börja?
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              Starta ett abonnemang eller kontakta oss för att prata om vilket
              upplägg som passar bäst.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href={START_SUB_MAIL}
                className="inline-flex items-center justify-center border border-zinc-900 bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
              >
                Starta abonnemang
              </a>
              <a
                href={CONTACT_MAIL}
                className="inline-flex items-center justify-center border border-zinc-300 bg-white px-8 py-3.5 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-50"
              >
                Kontakta WORC
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Eller mejla oss direkt på{" "}
              <a
                href={CONTACT_MAIL}
                className="text-zinc-700 underline-offset-4 hover:underline"
              >
                info@worc.se
              </a>
            </p>
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
