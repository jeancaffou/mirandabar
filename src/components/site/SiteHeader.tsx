import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/miranda-logo-light.png";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

const nav = [
  { to: "/", label: "Domov" },
  { to: "/lokal", label: "Lokal & klet" },
  { to: "/prenocisca", label: "Prenočišča" },
  { to: "/galerija", label: "Galerija" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl md:h-24 items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Miranda bar — domov">
          <img src={logo} alt="Miranda bar, Since 1895, Selce" className="h-[68px] w-auto md:h-[84px]" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ember" size="sm" className="hidden sm:inline-flex">
            <a href={contact.phoneHref}>
              <Phone /> Pokliči
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-accent md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/40 bg-background px-5 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
              className="block border-b border-border/30 py-3 font-display text-lg text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ember" size="xl" className="mt-5 w-full">
            <a href={contact.phoneHref}>
              <Phone /> {contact.phoneDisplay}
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
