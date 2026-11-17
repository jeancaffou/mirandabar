import { MapPin, Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  height?: string;
};

export function LocationMap({ className, height = "h-[420px]" }: Props) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border/60 bg-card", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-foreground">Miranda bar</p>
            <p className="text-xs text-muted-foreground">{contact.address}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="glass" size="sm">
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
              Odpri v Google Maps
            </a>
          </Button>
          <Button asChild variant="ember" size="sm">
            <a href={contact.mapsDirections} target="_blank" rel="noreferrer">
              <Navigation className="h-4 w-4" /> Pot do nas
            </a>
          </Button>
        </div>
      </div>
      <iframe
        title="Zemljevid Google Maps — Miranda bar, Selce 9, Pivka"
        src={contact.mapsEmbed}
        className={cn("w-full", height)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
