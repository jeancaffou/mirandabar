import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/miranda-logo-light.png";
import { contact, openingHours } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <img src={logo} alt="Miranda bar, Since 1895, Selce" loading="lazy" className="h-32 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Družinski lokal s 130-letno tradicijo. Bar, vinska klet in prenočišča pod eno streho.
          </p>
        </div>

        <div>
          <p className="eyebrow">Urnik</p>
          <ul className="mt-4 space-y-2 text-sm">
            {openingHours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 border-b border-border/40 pb-2">
                <span className="text-muted-foreground">{h.days}</span>
                <span className="font-display">
                  {h.open} – {h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Kontakt</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {contact.phoneDisplay} ({contact.phonePerson})
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                <MapPin className="h-4 w-4 text-primary" /> {contact.address}
              </a>
            </li>
            <li>
              <a href={contact.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                <Facebook className="h-4 w-4 text-primary" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Miranda bar, Simon Ostanek s.p.</span>
          <Link to="/kontakt" className="hover:text-primary">
            Kako do nas →
          </Link>
        </div>
      </div>
    </footer>
  );
}
