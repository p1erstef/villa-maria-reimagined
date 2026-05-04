import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const CTABanner = () => (
  <section className="bg-villa-noir text-villa-cream">
    <div className="container-villa py-20 lg:py-28 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Visite sur rendez-vous
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-none">
          Venez voir<br />par vous-même.
        </h2>
        <p className="mt-6 font-serif italic text-2xl text-villa-cream/80 max-w-xl">
          On vous offre le café — vous nous direz si on a raison.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to="/offres"
          className="inline-flex items-center justify-between gap-6 bg-accent text-accent-foreground px-7 py-4 font-bold uppercase tracking-wider hover:bg-villa-terracotta-deep transition-colors"
        >
          Voir les offres <ArrowRight size={18} />
        </Link>
        <a
          href={SITE.tally.contact}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-6 border border-villa-cream/30 text-villa-cream px-7 py-4 font-bold uppercase tracking-wider hover:bg-villa-cream hover:text-villa-noir transition-colors"
        >
          Demander une visite <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);
