import { ArrowRight, Users, Sparkles, Briefcase, Coffee } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonial } from "@/components/Testimonial";
import { Placeholder } from "@/components/Placeholder";
import { CTABanner } from "@/components/CTABanner";
import { SITE } from "@/lib/site";

import garden from "@/assets/events/garden-1.jpg";
import g2 from "@/assets/events/garden-2.jpg";
import g3 from "@/assets/events/garden-3.jpg";
import e2 from "@/assets/events/event-2.jpg";
import e3 from "@/assets/events/event-3.jpg";

const TYPES = [
  {
    icon: Sparkles,
    title: "Baptême · Mariage",
    desc: "Cadre bourgeois, escalier d'honneur photogénique, jardin arboré, piscine. Traiteurs partenaires sélectionnés.",
    capacity: "30 à 120 invités",
    from: "Sur devis",
  },
  {
    icon: Coffee,
    title: "Afterwork · Team building",
    desc: "Boulodrome, piscine, espace extérieur. Forfaits all-in pour réunir vos équipes dans un cadre qui change.",
    capacity: "20 à 100 personnes",
    from: "Sur devis",
  },
  {
    icon: Briefcase,
    title: "Séminaire d'entreprise",
    desc: "5 salles équipées, fibre dédiée, journée type clés en main avec prestataires AV partenaires.",
    capacity: "10 à 60 personnes",
    from: "Sur devis",
  },
  {
    icon: Users,
    title: "Petit-déjeuner · Networking",
    desc: "Format court le matin, idéal pour associations professionnelles, clubs Bordeaux et événements partenaires.",
    capacity: "20 à 80 personnes",
    from: "Sur devis",
  },
];

const Evenements = () => {
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Villa Maria — Lieu d'événements à Bordeaux",
    description:
      "Privatisation d'une villa Belle Époque pour vos événements d'entreprise et privés à Bordeaux : baptêmes, mariages, séminaires, afterworks.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bordeaux",
      addressCountry: "FR",
    },
    maximumAttendeeCapacity: 150,
  };

  return (
    <Layout headerVariant="dark">
      <SEO
        title="Lieu d'événements à Bordeaux — Privatisation villa Belle Époque — Villa Maria"
        description="Privatisez une villa Belle Époque avec jardin et piscine pour vos événements à Bordeaux : baptêmes, mariages, séminaires, afterworks, petits-déjeuners networking."
        path="/evenements"
        jsonLd={eventLd}
      />

      {/* HERO */}
      <section className="relative -mt-20 min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={garden}
            alt="Garden party à la Villa Maria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-villa-noir via-villa-noir/40 to-villa-noir/20" />
        </div>
        <div className="relative container-villa pb-16 pt-32 text-villa-cream">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Événements & Privatisation
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-4xl text-balance">
            Un écrin d'exception pour vos moments qui comptent.
          </h1>
          <p className="mt-8 font-serif italic text-2xl text-villa-cream/85 max-w-2xl">
            Espace de réception intérieur, jardin, piscine, boulodrome.
            Privatisation totale ou partielle.
          </p>
        </div>
      </section>

      {/* CAPACITES */}
      <section className="bg-villa-noir text-villa-cream border-b border-villa-cream/10">
        <div className="container-villa py-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-4xl text-accent">100</div>
            <div className="text-xs uppercase tracking-widest text-villa-cream/60 mt-2 flex items-center gap-2">
              capacité cocktail intérieur
            </div>
          </div>
          <div>
            <div className="font-display text-4xl text-accent">120</div>
            <div className="text-xs uppercase tracking-widest text-villa-cream/60 mt-2 flex items-center gap-2">
              capacité cocktail extérieur
            </div>
          </div>
          <div>
            <div className="font-display text-4xl text-accent">80</div>
            <div className="text-xs uppercase tracking-widest text-villa-cream/60 mt-2 flex items-center gap-2">
              capacité dîner assis
            </div>
          </div>
        </div>
      </section>

      {/* 4 TYPES */}
      <section className="py-20 lg:py-28">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Types d'événements"
            title="Quatre formats, un même lieu."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {TYPES.map((t) => (
              <div
                key={t.title}
                className="p-8 border border-border bg-card hover:border-accent transition-colors"
              >
                <t.icon className="text-accent mb-5" size={28} />
                <h3 className="font-display text-2xl uppercase mb-3">
                  {t.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Ils ont privatisé"
            title="Quelques moments passés à la Villa."
          />
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
              <img
                src={garden}
                alt="Garden party"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
              <img
                src={g2}
                alt="Événement extérieur"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden">
              <img
                src={g3}
                alt="Garden party 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden">
              <img
                src={e2}
                alt="Soirée Villa Maria"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-[4/5] overflow-hidden">
              <img
                src={e3}
                alt="Événement Villa Maria"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section className="py-20 lg:py-28">
        <div className="container-villa grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="Demande de devis"
              title="Parlons de votre événement."
            />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nous répondons à toutes les demandes sous 48h ouvrées avec une
              proposition personnalisée : capacité, configuration, prestataires
              partenaires, tarif détaillé.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-accent">→</span>Visite du lieu sur
                rendez-vous
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>Liste de traiteurs
                partenaires (libre sur demande)
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>Coordination avec vos
                prestataires (traiteur, déco, musique)
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>Forfait clé en main
                possible
              </li>
            </ul>
          </div>
          <div className="bg-villa-noir text-villa-cream p-8 lg:p-10">
            <h3 className="font-display text-3xl uppercase mb-6">
              Demander un devis
            </h3>
            <p className="text-villa-cream/80 mb-6 text-sm">
              Formulaire détaillé : type d'événement, date, nombre d'invités,
              message libre.
            </p>
            <a
              href={SITE.tally.devisEvenement}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between gap-4 px-6 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider text-sm hover:bg-villa-terracotta-deep transition-colors"
            >
              Ouvrir le formulaire <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES EVENEMENTIELS */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Ils ont organisé ici"
            title="Retours d'expérience."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <Testimonial
              isPlaceholder
              quote="Le baptême de notre fille — un cadre, une équipe, un service incroyables. Nos invités en parlent encore."
              author="Prénom N."
              role="Cliente baptême"
            />
            <Testimonial
              isPlaceholder
              quote="On a privatisé pour notre séminaire de rentrée. L'équipe est rentrée requinquée — la piscine y est sûrement pour quelque chose."
              author="Prénom N."
              role="DRH · entreprise B2B"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Evenements;
