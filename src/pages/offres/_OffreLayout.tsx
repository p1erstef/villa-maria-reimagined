import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Placeholder } from "@/components/Placeholder";
import { PriceCard } from "@/components/PriceCard";
import { CTABanner } from "@/components/CTABanner";
import type { Offre } from "@/lib/offres";
import { OFFRES } from "@/lib/offres";

interface OffreLayoutProps {
  offre: Offre;
  metaTitle: string;
  metaDesc: string;
  longIntro: string;
  idealPour: string[];
}

export const OffreLayout = ({
  offre,
  metaTitle,
  metaDesc,
  longIntro,
  idealPour,
}: OffreLayoutProps) => {
  const others = OFFRES.filter((o) => o.slug !== offre.slug);

  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDesc}
        path={`/offres/${offre.slug}`}
      />

      <section className="relative h-[60vh] min-h-[420px] -mt-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={offre.image}
            alt={offre.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-villa-noir/85 via-villa-noir/40 to-villa-noir/30" />
        </div>
        <div className="relative container-villa pb-12 pt-32 text-villa-cream">
          <Link
            to="/offres"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-villa-cream/80 hover:text-accent mb-6"
          >
            <ChevronLeft size={16} /> Toutes les offres
          </Link>
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            {offre.eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-4xl">
            {offre.title}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-villa grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-12">
            <p className="font-serif italic text-2xl lg:text-3xl text-foreground leading-snug max-w-2xl">
              {longIntro}
            </p>

            <div>
              <h2 className="font-display text-2xl uppercase mb-6">
                Ce qui est inclus
              </h2>
              <ul className="space-y-3">
                {offre.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <Check size={20} className="text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl uppercase mb-6">
                Idéal pour
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {idealPour.map((p) => (
                  <li
                    key={p}
                    className="p-4 bg-secondary border-l-2 border-accent text-sm"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky pricing card */}
          <aside className="lg:sticky lg:top-28">
            <div className="bg-villa-noir text-villa-cream p-7 border border-villa-noir">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                {offre.eyebrow}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-4xl">{offre.price}</span>
                {offre.unit && (
                  <span className="text-villa-cream/70">{offre.unit}</span>
                )}
              </div>
              {offre.priceNote && (
                <p className="text-sm text-villa-cream/70 mb-6">
                  {offre.priceNote}
                </p>
              )}
              <a
                href={offre.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-4 px-5 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider text-sm hover:bg-villa-terracotta-deep transition-colors"
              >
                {offre.cta} <ArrowRight size={18} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Other offers */}
      <section className="py-20 bg-secondary">
        <div className="container-villa">
          <h2 className="font-display text-3xl uppercase mb-10">
            Les autres formules
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((o) => (
              <PriceCard
                key={o.slug}
                eyebrow={o.eyebrow}
                title={o.shortTitle}
                price={o.price}
                unit={o.unit}
                description={o.description}
                cta="Découvrir"
                to={o.to}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};
