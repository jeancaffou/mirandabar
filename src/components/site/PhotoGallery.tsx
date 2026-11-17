import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { Photo } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { photos: Photo[]; className?: string };

export function PhotoGallery({ photos, className }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group mb-4 block w-full overflow-hidden rounded-lg border border-border/50 bg-card"
            aria-label={`Povečaj: ${p.alt}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/95 p-4 backdrop-blur-sm animate-in fade-in-0"
          onClick={close}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] max-w-full rounded-lg shadow-card"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-muted-foreground">
            {current.alt} · {index! + 1}/{photos.length}
          </p>
          <button
            type="button"
            aria-label="Zapri"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-card p-2 text-foreground hover:bg-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Prejšnja slika"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card p-3 text-foreground hover:bg-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Naslednja slika"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card p-3 text-foreground hover:bg-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
