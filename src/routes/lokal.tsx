import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { Button } from "@/components/ui/button";
import { openingHours, photos } from "@/lib/site";

export const Route = createFileRoute("/lokal")({
  head: () => ({
    meta: [
      { title: "Lokal in vinska klet iz 1936 | Miranda bar" },
      {
        name: "description",
        content:
          "Domač bar, odprt vsak dan in ob vikendih do 4. ure zjutraj. Vinska klet iz leta 1936 in narezki iz 100 % domačega mesa.",
      },
      { property: "og:title", content: "Lokal in vinska klet | Miranda bar" },
      { property: "og:description", content: "Domač bar, vinska klet iz 1936 in domači narezki — pršut, panceta in več." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LokalPage,
});

function LokalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lokal & vinska klet"
        title={<>Kozarec, druščina in kanček zgodovine.</>}
        intro="Lokal je odprt vsak dan, ob vikendih pa tudi pozno v noč. Znani smo po prijetnem, domačem vzdušju."
        image={photos.kletSteklenice.src}
        imageAlt={photos.kletSteklenice.alt}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <img src={photos.sank.src} alt={photos.sank.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
        <div>
          <p className="eyebrow">Bar</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Peta generacija za šankom</h2>
          <p className="mt-5 text-muted-foreground">
            Od leta 1895 se pri nas srečujejo domačini in popotniki. Lokal vodi že peta generacija
            gostincev — zato se pri nas počutite kot doma.
          </p>
          <ul className="mt-7 space-y-3">
            {openingHours.map((h) => (
              <li key={h.days} className="flex justify-between border-b border-border/50 pb-3">
                <span className="text-muted-foreground">{h.days}</span>
                <span className="font-display">{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grain bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="md:order-2">
            <img src={photos.kletMiza.src} alt={photos.kletMiza.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
          </div>
          <div>
            <p className="eyebrow">Vinska klet · 1936</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Spustite se v našo zgodovino</h2>
            <p className="mt-5 text-muted-foreground">
              Poleg lokala je možen obisk vinske kleti iz leta 1936. Stari sodi, pleteni demižoni in
              stene steklenic — kraj, kjer lahko občutite del naše zgodovine.
            </p>
            <Button asChild variant="ember" size="xl" className="mt-8">
              <Link to="/kontakt">
                Dogovorite se za obisk <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <img src={photos.narezki.src} alt={photos.narezki.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
        <div>
          <p className="eyebrow">Narezki</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">100 % domače meso</h2>
          <p className="mt-5 text-muted-foreground">
            Ponujamo razne narezke — pršut, panceto in še marsikaj. Vsi so narejeni iz 100 % domačega
            mesa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">Iz lokala in kleti</h2>
        <PhotoGallery
          className="mt-8"
          photos={[photos.kletSodi, photos.kletDemizoni, photos.kletVina, photos.miza, photos.vrt, photos.osel]}
        />
      </section>
    </>
  );
}
