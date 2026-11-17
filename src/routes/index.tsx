import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Clock, MapPin, Phone, Wine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LocationMap } from "@/components/site/LocationMap";
import { apartment, contact, distances, openingHours, photos } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miranda bar — lokal s tradicijo od 1895 | Selce pri Pivki" },
      {
        name: "description",
        content:
          "Družinski bar s 130-letno tradicijo, vinska klet iz leta 1936, domači narezki in apartma za do 7 oseb, le 10 minut od Postojnske jame.",
      },
      { property: "og:title", content: "Miranda bar — lokal s tradicijo od 1895" },
      {
        property: "og:description",
        content: "Bar, vinska klet in prenočišča pod eno streho, 10 minut od Postojnske jame.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "1895", label: "leto ustanovitve" },
  { value: "5.", label: "generacija gostincev" },
  { value: "1936", label: "vinska klet" },
  { value: "8 km", label: "do Postojnske jame" },
];

const cards = [
  {
    to: "/lokal",
    icon: Clock,
    title: "Lokal",
    text: "Odprto vsak dan, ob vikendih pozno v noč. Domače vzdušje, kot ga poznamo že 130 let.",
    image: photos.sank,
  },
  {
    to: "/lokal",
    icon: Wine,
    title: "Vinska klet",
    text: "Obiščite klet iz leta 1936 in poskusite narezke iz 100 % domačega mesa.",
    image: photos.kletSodi,
  },
  {
    to: "/prenocisca",
    icon: BedDouble,
    title: "Prenočišča",
    text: `Prostoren apartma s 3 spalnicami za do ${apartment.maxGuests} oseb ali posamezne sobe.`,
    image: photos.spalnica2,
  },
] as const;

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden pt-20 md:pt-24">
        <img
          src={photos.terasa.src}
          alt={photos.terasa.alt}
          className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="eyebrow animate-rise">Bar · Sobe · Apartma</p>
          <h1 className="mt-5 max-w-4xl animate-rise text-5xl font-bold leading-[0.95] md:text-8xl">
            Tradicija od <span className="text-gradient-ember">1895</span>.
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground [animation-delay:120ms]">
            Družinski lokal, kjer že peta generacija skrbi za domače vzdušje, dobro kapljico in
            prijeten počitek.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:220ms]">
            <Button asChild variant="ember" size="xl">
              <Link to="/prenocisca">
                Rezerviraj prenočitev <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={contact.phoneHref}>
                <Phone /> {contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-muted">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-border/50 px-5 py-8 odd:border-r md:border-r md:px-8 md:last:border-r-0">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Vse na enem mestu</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Pridite na pijačo. Ostanite čez noč.</h2>
          </div>
          <Link to="/galerija" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Poglej galerijo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden rounded-xl border border-border/50 p-6 shadow-card"
            >
              <img
                src={c.image.src}
                alt={c.image.alt}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-card" />
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground shadow-ember">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-display text-sm text-primary">
                Več <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Story + location */}
      <section className="grain bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="eyebrow">Naša zgodba</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">130 let domačega vzdušja</h2>
            <p className="mt-5 text-muted-foreground">
              Miranda bar je lokal s 130-letno tradicijo, odprt od leta 1895. V njem deluje že peta
              generacija gostincev. Znani smo po prijetnem, domačem vzdušju — poleg lokala si lahko
              ogledate tudi vinsko klet iz leta 1936, kjer začutite del naše zgodovine.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img src={photos.zunanjost.src} alt={photos.zunanjost.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
              <img src={photos.narezki.src} alt={photos.narezki.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border/60 bg-background p-7">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Odlična lokacija</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{contact.address}</p>
              <ul className="mt-5 divide-y divide-border/50">
                {distances.map((d) => (
                  <li key={d.place} className="flex items-center justify-between py-3">
                    <span>{d.place}</span>
                    <span className="font-display text-primary">
                      {d.time}
                      {"note" in d && d.note ? <span className="ml-2 text-muted-foreground">({d.note})</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/60 bg-background p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Odprto vsak dan</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {openingHours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{h.days}</span>
                    <span className="font-display text-lg">
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment CTA + map */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:px-8 lg:grid-cols-2">
        <div className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-ember px-8 py-14 text-primary-foreground shadow-ember md:px-12">
          <h2 className="text-3xl font-bold md:text-5xl">Apartma za do {apartment.maxGuests} oseb</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/85">
            {apartment.bedrooms} spalnice, kuhinja in kopalnica. Cena {apartment.pricePerDay} € na dan, možnost zajtrka.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="glass" size="xl">
              <Link to="/prenocisca">Oglej si apartma</Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={contact.phoneHref}>
                <Phone /> Pokliči Simona
              </a>
            </Button>
          </div>
        </div>
        <LocationMap height="h-[300px]" />
      </section>
    </>
  );
}
