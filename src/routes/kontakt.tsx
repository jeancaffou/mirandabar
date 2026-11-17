import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";

import { LocationMap } from "@/components/site/LocationMap";
import { PageHeader } from "@/components/site/PageHeader";
import { contact, distances, openingHours, photos } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt in urnik | Miranda bar, Selce pri Pivki" },
      {
        name: "description",
        content: "Pokličite Simona na +386 41 349 002. Selce 9, 6257 Pivka. Odprto vsak dan od 8.00, ob petkih in sobotah do 4.00.",
      },
      { property: "og:title", content: "Kontakt | Miranda bar" },
      { property: "og:description", content: "Telefon, e-pošta, urnik in kako do nas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaktPage,
});

const items = [
  { icon: Phone, label: "Telefon", value: `${contact.phoneDisplay} (${contact.phonePerson})`, href: contact.phoneHref },
  { icon: Mail, label: "E-pošta", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Naslov", value: contact.address, href: contact.mapsUrl },
  { icon: Facebook, label: "Facebook", value: "Miranda bar", href: contact.facebook },
];

function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Se vidimo pri Mirandi."
        intro="Za rezervacijo prenočišča ali obisk vinske kleti nas najlažje pokličete."
        image={photos.zunanjost.src}
        imageAlt={photos.zunanjost.alt}
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target={i.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground">
              <i.icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{i.label}</p>
            <p className="mt-1 break-words font-display text-lg group-hover:text-primary">{i.value}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 md:px-8 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-border/60 bg-card p-7">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Urnik</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {openingHours.map((h) => (
                <li key={h.days} className="flex justify-between border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">{h.days}</span>
                  <span className="font-display text-lg">{h.open} – {h.close}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-7">
            <h2 className="text-xl font-bold">Oddaljenost</h2>
            <ul className="mt-5 divide-y divide-border/50">
              {distances.map((d) => (
                <li key={d.place} className="flex justify-between py-3">
                  <span>{d.place}</span>
                  <span className="font-display text-primary">{d.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <LocationMap className="min-h-[420px]" height="h-[520px]" />
      </section>
    </>
  );
}
