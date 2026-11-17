import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { allPhotos, photos, type Photo } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Galerija — lokal, klet in apartma | Miranda bar" },
      { name: "description", content: "Fotografije Miranda bara: terasa, šank, vinska klet iz 1936, vrt in apartma." },
      { property: "og:title", content: "Galerija | Miranda bar" },
      { property: "og:description", content: "Poglejte lokal, vinsko klet, okolico in apartma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalerijaPage,
});

const filters: { id: "vse" | Photo["category"]; label: string }[] = [
  { id: "vse", label: "Vse" },
  { id: "lokal", label: "Lokal" },
  { id: "klet", label: "Vinska klet" },
  { id: "okolica", label: "Okolica" },
  { id: "apartma", label: "Apartma" },
];

function GalerijaPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("vse");
  const shown = filter === "vse" ? allPhotos : allPhotos.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Galerija"
        title="Pogled k nam."
        image={photos.kletSodi.src}
        imageAlt={photos.kletSodi.alt}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 font-display text-sm transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <PhotoGallery key={filter} className="mt-10" photos={shown} />
      </section>
    </>
  );
}
