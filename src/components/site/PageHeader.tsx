import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; image: string; imageAlt: string };

export function PageHeader({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden pt-20 md:pt-24">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-rise text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl animate-rise text-base text-muted-foreground md:text-lg [animation-delay:120ms]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
