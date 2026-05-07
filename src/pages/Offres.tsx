import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { PriceCard } from "@/components/PriceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABanner } from "@/components/CTABanner";
import { OFFRES } from "@/lib/offres";

const Offres = () => {
  return (
    <Layout>
      <SEO
        title="Nos offres — Coworking, bureaux et événements à Bordeaux"
        description="4 formules transparentes : pass journalier, abonnement mensuel (375€/poste), bureau privatif d'équipe et salles de réunion à l'heure ou la journée."
        path="/offres"
      />

      <section className="py-16 lg:py-24 bg-villa-cream">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Quatre offres distinctes"
            title="Trouvez la vôtre."
            subtitle="Pas d'enrobage marketing : prix affichés et services inclus listés."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-villa space-y-6">
          {OFFRES.map((o, i) => (
            <article
              key={o.slug}
              className="grid lg:grid-cols-[5fr_7fr] bg-card border border-border overflow-hidden"
            >
              <div
                className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}
              >
                <img
                  src={o.image}
                  alt={o.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {o.eyebrow}
                </div>
                <h2 className="font-display text-3xl lg:text-4xl uppercase leading-tight mb-4">
                  {o.title}
                </h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-3xl">{o.price}</span>
                  {o.unit && (
                    <span className="text-muted-foreground">{o.unit}</span>
                  )}
                </div>
                {o.priceNote && (
                  <p className="text-xs text-muted-foreground mb-5">
                    {o.priceNote}
                  </p>
                )}
                <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                  {o.description}
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  {o.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-accent">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
                  {o.audience}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={o.to}
                    className="inline-flex items-center px-6 py-3 bg-villa-noir text-villa-cream text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
                  >
                    En savoir plus
                  </a>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-villa-noir text-sm font-bold uppercase tracking-wider hover:bg-villa-noir hover:text-villa-cream transition-colors"
                  >
                    {o.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Offres;
