import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { PriceCard } from "@/components/PriceCard";
import { Testimonial } from "@/components/Testimonial";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABanner } from "@/components/CTABanner";
import { Placeholder } from "@/components/Placeholder";
import { OFFRES } from "@/lib/offres";
import { SITE } from "@/lib/site";

import facade from "@/assets/villa/facade.jpg";
import escalier from "@/assets/villa/escalier.jpg";
import salle1 from "@/assets/villa/salle-1.jpg";
import leet from "@/assets/villa/leet.jpg";
import rdc from "@/assets/villa/rdc.jpg";
import garden from "@/assets/events/garden-1.jpg";

import iconPoste from "@/assets/icons/poste.png";
import iconPiscine from "@/assets/icons/piscine.png";
import iconCreche from "@/assets/icons/creche.png";
import iconSalle from "@/assets/icons/salle.png";
import iconBoule from "@/assets/icons/boulodrome.png";
import iconYoga from "@/assets/icons/yoga.png";
import iconNet from "@/assets/icons/internet.png";
import iconManger from "@/assets/icons/salle-manger.png";
import iconDouche from "@/assets/icons/douche.png";

import logoAlgolia from "@/assets/clients/algolia.png";
import logoBlablacar from "@/assets/clients/blablacar.png";
import logoClairLagon from "@/assets/clients/clair-lagon.png";
import logoCosa from "@/assets/clients/cosa.png";
import logoDedomainia from "@/assets/clients/dedomainia.png";
import logoKapsul from "@/assets/clients/kapsul.png";
import logoKymono from "@/assets/clients/kymono.jpg";
import logoSellsy from "@/assets/clients/sellsy.png";
import logoVictoriaGarden from "@/assets/clients/victoria-garden.png";
import logoPennylane from "@/assets/clients/pennylane.png";
import logoAlma from "@/assets/clients/alma.png";

const CLIENTS = [
  { src: logoAlgolia, name: "Algolia" },
  { src: logoBlablacar, name: "BlaBlaCar" },
  { src: logoSellsy, name: "Sellsy" },
  { src: logoKymono, name: "Kymono" },
  { src: logoVictoriaGarden, name: "Victoria Garden" },
  { src: logoClairLagon, name: "Clair Lagon" },
  { src: logoCosa, name: "Cosa" },
  { src: logoKapsul, name: "Kapsul" },
  { src: logoDedomainia, name: "Dedomainia" },
  { src: logoPennylane, name: "Pennylane" },
  { src: logoAlma, name: "Alma" },
];

const SERVICES = [
  {
    icon: iconPoste,
    title: "Postes de travail",
    desc: "Confortables, dans des espaces aérés et lumineux",
  },
  {
    icon: iconPiscine,
    title: "Piscine",
    desc: "Une belle piscine dans un parc arboré",
  },
  {
    icon: iconSalle,
    title: "5 salles de réunion",
    desc: "Équipées en écrans 4K et caméras visio",
  },
  {
    icon: iconBoule,
    title: "Boulodrome",
    desc: "Tu tires ou tu pointes ? Pour les pauses qui réveillent",
  },
  {
    icon: iconNet,
    title: "Fibre dédiée",
    desc: "Internet professionnel haut débit, garanti",
  },
  {
    icon: iconManger,
    title: "Salle à manger",
    desc: "Tables conviviales et chaises confortables",
  },
  {
    icon: iconDouche,
    title: "Douches & vestiaires",
    desc: "Pour vos runs et trajets vélo",
  },
  {
    icon: iconYoga,
    title: "Yoga hebdo",
    desc: "Une session par semaine, ouverte à tous les coworkers",
  },
  {
    icon: iconCreche,
    title: "Crèche Le Kocon",
    desc: "Crèche partenaire opérée sur le site",
  },
];

const Index = () => {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Villa Maria",
    description:
      "Coworking premium et lieu d'événements dans une villa Belle Époque à Bordeaux.",
    url: SITE.baseUrl,
    image: `${SITE.baseUrl}/og-image.jpg`,
    telephone: SITE.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postal,
      addressCountry: "FR",
    },
    openingHours: "Mo-Fr 08:00-20:00",
    priceRange: "€€",
  };

  return (
    <Layout headerVariant="dark">
      <SEO
        title="Villa Maria — Coworking premium à Bordeaux | Piscine, bureaux, événements"
        description="Le plus beau bureau de France. Coworking, bureaux privatifs, salles de réunion et lieu d'événements dans une villa Belle Époque à Bordeaux. Pass journée, abonnement mensuel, événements."
        path="/"
        jsonLd={localBusinessLd}
      />

      {/* HERO */}
      <section className="relative -mt-20 min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* TODO: replace by hero looped video (drone + interior + pool) */}
          <img
            src={facade}
            alt="Façade de la Villa Maria à Bordeaux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-villa-noir via-villa-noir/40 to-villa-noir/30" />
        </div>

        <div className="relative container-villa pb-16 lg:pb-24 pt-32 text-villa-cream w-full">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-widest text-villa-cream">
              <span className="w-8 h-px bg-villa-cream" />
              Coworking & Événements · Bordeaux
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] uppercase leading-[0.85] text-balance">
              Le plus beau
              <br />
              <span className="text-accent">bureau</span>
              <br />
              de France.
            </h1>
            <p className="mt-6 lg:mt-8 font-serif italic text-xl lg:text-2xl xl:text-3xl text-villa-cream/90 max-w-2xl">
              Une villa Belle Époque. Une piscine. Un boulodrome. 800 m² pour
              travailler comme on n'a jamais travaillé.
            </p>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl">
              {OFFRES.map((o) => {
                const props = o.href
                  ? {
                      as: "a" as const,
                      href: o.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : { as: Link, to: o.to! };
                const Tag = (o.href ? "a" : Link) as React.ElementType;
                return (
                  <Tag
                    key={o.slug}
                    {...(o.href
                      ? {
                          href: o.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to: o.to })}
                    className="group flex flex-col gap-2 p-4 border border-villa-cream/25 hover:border-accent hover:bg-accent/10 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      {o.eyebrow}
                    </span>
                    <span className="font-display text-lg uppercase leading-tight">
                      {o.shortTitle}
                    </span>
                    <ArrowRight
                      size={16}
                      className="mt-auto transition-transform group-hover:translate-x-1"
                    />
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="bg-villa-cream border-y border-border">
        <div className="container-villa py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "750", unit: "m²", label: "de surfaces" },
            { num: "5", unit: "", label: "salles de réunion" },
            { num: "+80", unit: "", label: "coworkers actifs" },
            { num: "4,9", unit: "/5", label: "note Google" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl lg:text-6xl text-villa-noir flex items-baseline justify-center gap-1">
                {s.num}
                <span className="text-2xl text-accent">{s.unit}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground flex items-center justify-center gap-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-20 lg:py-28">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Quatre façons de venir"
            title="Choisissez votre formule."
            subtitle="Du pass d'un jour au bureau privatif d'équipe : tout est transparent. Les prix sont affichés."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFRES.map((o, i) => (
              <PriceCard
                key={o.slug}
                eyebrow={o.eyebrow}
                title={o.shortTitle}
                price={o.price}
                unit={o.unit}
                description={o.description}
                cta={o.cta}
                to={o.to}
                highlighted={i === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE EDITORIALE */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-villa">
          <SectionTitle
            eyebrow="L'écrin"
            title="Un lieu qu'on raconte mal en photo."
            subtitle="Mais on essaie quand même."
          />
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <Link
              to="/la-villa"
              className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden"
            >
              <img
                src={escalier}
                alt="Escalier d'honneur de la Villa Maria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <Link
              to="/la-villa"
              className="col-span-6 md:col-span-4 aspect-square overflow-hidden"
            >
              <img
                src={garden}
                alt="Jardin et piscine de la Villa Maria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <Link
              to="/la-villa"
              className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden"
            >
              <img
                src={salle1}
                alt="Salle de travail lumineuse"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <Link
              to="/la-villa"
              className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden"
            >
              <img
                src={leet}
                alt="Espace de coworking"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <Link
              to="/la-villa"
              className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden"
            >
              <img
                src={rdc}
                alt="Espace rez-de-chaussée"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Link>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/la-villa"
              className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm hover:text-accent"
            >
              Visiter la Villa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENEMENTIEL TEASER — insérer après la section galerie */}
      <section className="py-20 lg:py-28 bg-villa-noir text-villa-cream">
        <div className="container-villa grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Privatisation
            </div>
            <h2 className="font-display text-4xl lg:text-5xl uppercase leading-tight mb-6">
              Votre événement mérite mieux qu'une salle d'hôtel.
            </h2>
            <p className="font-serif italic text-xl text-villa-cream/80 mb-8">
              Baptêmes, séminaires, afterworks, mariages. Jusqu'à 200 personnes.
              Jardin, piscine, boulodrome — tout compris dans la privatisation.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Baptême · Mariage",
                "Séminaire d'entreprise",
                "Afterwork · Team building",
                "Petit-déjeuner networking",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 border border-villa-cream/25 text-villa-cream/80 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/evenements"
              className="inline-flex items-center gap-3 px-6 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider text-sm hover:bg-villa-terracotta-deep transition-colors"
            >
              Voir les formules événements <ArrowRight size={16} />
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={garden}
              alt="Garden party Villa Maria Bordeaux"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES INCLUS */}
      <section className="py-20 lg:py-28">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Tout est inclus"
            title="Les services qui changent tout."
            subtitle="Pas de hors-forfait, pas de mauvaises surprises. Vous payez votre poste, le reste suit."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-card p-6 lg:p-8 flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base uppercase mb-1 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-villa">
          <SectionTitle
            eyebrow="Ils travaillent ici"
            title="Ce qu'en disent les coworkers."
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Testimonial
              isPlaceholder
              quote="J'ai déménagé toute mon équipe ici, on n'a jamais été aussi productifs — et heureux d'aller au bureau."
              author="Prénom N."
              role="CEO · Startup tech"
            />
            <Testimonial
              isPlaceholder
              quote="Le pass journalier, c'est la meilleure adresse de Bordeaux pour un nomade. Café, piscine, ambiance — rien à dire."
              author="Prénom N."
              role="Freelance design"
            />
            <Testimonial
              isPlaceholder
              quote="On a privatisé pour notre afterwork annuel, l'effet wahou a été immédiat sur les équipes."
              author="Prénom N."
              role="DRH · ETI bordelaise"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <span>4,9/5 sur Google · 16 avis</span>
          </div>
        </div>
      </section>

      {/* LOGOS CLIENTS */}
      <section className="py-16 border-y border-border">
        <div className="container-villa">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-10 items-center max-w-5xl mx-auto">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center h-20 md:h-24"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  className="max-h-full max-w-[80%] object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTE & INFOS PRATIQUES */}
      <section className="py-20 lg:py-28">
        <div className="container-villa grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              eyebrow="Venir à la Villa"
              title="Au cœur du quartier Primrose."
            />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Adresse
                </dt>
                <dd className="text-sm">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postal} {SITE.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Horaires
                </dt>
                <dd className="text-sm">{SITE.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Téléphone
                </dt>
                <dd className="text-sm">
                  <a
                    href={`tel:${SITE.contact.phone}`}
                    className="hover:text-accent"
                  >
                    {SITE.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </dt>
                <dd className="text-sm">
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="hover:text-accent"
                  >
                    {SITE.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Bus
                </dt>
                <dd className="text-sm">
                  Cité Administrative (lignes H, 9 et 70)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Parking
                </dt>
                <dd className="text-sm">Parking vélo privé</dd>
              </div>
            </dl>
          </div>
          <div className="aspect-[4/3] bg-secondary overflow-hidden">
            <iframe
              title="Carte Villa Maria Bordeaux"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4309.640406064867!2d-0.6017178!3d44.8441294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d80754639205%3A0xa8f164d5f8ed6a24!2sCOWORKING%20VILLA%20MARIA!5e1!3m2!1sfr!2sfr!4v1777989576470!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Index;
