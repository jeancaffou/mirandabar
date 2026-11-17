import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Briefcase, Coffee, Info, Mail, Phone, Users, UtensilsCrossed } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { Button } from "@/components/ui/button";
import { apartment, contact, photos } from "@/lib/site";

export const Route = createFileRoute("/prenocisca")({
  head: () => ({
    meta: [
      { title: "Apartma in sobe pri Postojnski jami | Miranda bar" },
      {
        name: "description",
        content:
          "Prostoren apartma s 3 spalnicami za do 7 oseb, kuhinjo in kopalnico. 150 € na dan, možnost zajtrka in najema za podjetja.",
      },
      { property: "og:title", content: "Apartma za do 7 oseb | Miranda bar" },
      { property: "og:description", content: "3 spalnice, kuhinja, kopalnica in zajtrk po želji — 10 minut od Postojnske jame." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrenocisicaPage,
});

const features = [
  { icon: BedDouble, title: `${apartment.bedrooms} spalnice`, text: "V vsaki je zakonska postelja, v večji še dodatno ležišče." },
  { icon: Users, title: `Do ${apartment.maxGuests} oseb`, text: "Dovolj prostora za družino ali skupino prijateljev." },
  { icon: UtensilsCrossed, title: "Kuhinja in kopalnica", text: "Popolnoma opremljena kuhinja z jedilno mizo." },
  { icon: Coffee, title: "Zajtrk po želji", text: "Možnost postrežbe zajtrka." },
];

function PrenocisicaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prenočišča"
        title={<>Prostoren apartma ali posamezne sobe.</>}
        intro="Že zadnjih 10 let ponujamo tudi prenočišča. Najamete lahko celoten apartma ali samo sobe."
        image={photos.spalnica2.src}
        imageAlt={photos.spalnica2.alt}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border/60 bg-card p-6">
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
          <div className="rounded-xl border border-border/60 bg-card p-6 sm:col-span-2">
            <div className="flex items-start gap-4">
              <Briefcase className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Najem za podjetja</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ponujamo možnost najema za podjetja za daljše časovno obdobje. Cena za daljše obdobje je po dogovoru.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-primary/40 bg-card p-8 shadow-ember lg:sticky lg:top-24">
          <p className="eyebrow">Cena apartmaja</p>
          <p className="mt-3 font-display text-6xl font-bold">
            {apartment.pricePerDay} €<span className="text-xl font-medium text-muted-foreground"> / dan</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Za celoten apartma, do {apartment.maxGuests} oseb.</p>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild variant="ember" size="xl">
              <a href={contact.phoneHref}>
                <Phone /> {contact.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={`mailto:${contact.email}?subject=Povpra%C5%A1evanje%20za%20apartma`}>
                <Mail /> Pošlji povpraševanje
              </a>
            </Button>
          </div>
          <div className="mt-8 flex gap-3 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              Ker v isti stavbi deluje tudi lokal, je apartma primeren za goste, ki jih ne moti občasni hrup — predvsem ob vikendih.
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">Pogled v apartma</h2>
        <PhotoGallery
          className="mt-8"
          photos={[photos.spalnica1, photos.kuhinja, photos.spalnica3, photos.kuhinja2, photos.spalnica4, photos.kopalnica, photos.spalnica2]}
        />
      </section>
    </>
  );
}
