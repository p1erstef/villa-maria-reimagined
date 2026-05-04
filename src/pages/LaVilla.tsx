import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABanner } from "@/components/CTABanner";
import { Placeholder } from "@/components/Placeholder";

import facade from "@/assets/villa/facade.jpg";
import escalier from "@/assets/villa/escalier.jpg";
import salle1 from "@/assets/villa/salle-1.jpg";
import rdc from "@/assets/villa/rdc.jpg";
import r2 from "@/assets/villa/r2.jpg";
import c from "@/assets/villa/c.jpg";
import rdc29 from "@/assets/villa/rdc29.jpg";
import leet from "@/assets/villa/leet.jpg";
import garden from "@/assets/events/garden-1.jpg";

const ESPACES = [
  {
    title: "Entrée & escalier d'honneur",
    surface: "Hall d'entrée",
    desc: "L'arrivée. Marbre, hauteur sous plafond, escalier monumental — la première impression que vos invités gardent en mémoire.",
    image: escalier,
    quote: "Ma photo préférée du baptême, c'est l'escalier.",
  },
  {
    title: "Salles de travail",
    surface: "≈ 400 m² · open space + bureaux fermés",
    desc: "Lumière naturelle généreuse, hauteurs sous plafond, mobilier travaillé. Aucune salle ne se ressemble.",
    image: salle1,
    quote: "Je viens travailler ici juste pour la lumière du matin.",
  },
  {
    title: "Extérieur & piscine",
    surface: "Parc arboré · piscine extérieure",
    desc: "Le luxe rare : un vrai jardin, une vraie piscine. Pour les pauses qui réveillent et les afterworks qui font rester tard.",
    image: garden,
    quote: "Notre meilleure idée d'embauche : la piscine.",
  },
  {
    title: "Boulodrome",
    surface: "Espace dédié extérieur",
    desc: "Tu tires ou tu pointes ? Le boulodrome règle plus de débats stratégiques que les salles de réunion.",
    image: c,
    quote: "Notre meilleur outil de team-building, sans hésiter.",
  },
  {
    title: "Salles de réunion",
    surface: "5 salles · 4 à 20 personnes",
    desc: "Toutes équipées écran 4K, caméra, visio. Configurations modulables : ateliers, formations, présentations clients.",
    image: r2,
    quote: "On y reçoit nos clients VIP depuis 2 ans, jamais déçu.",
  },
  {
    title: "Espace détente",
    surface: "Salle à manger · cuisine · bulles téléphoniques",
    desc: "Salle à manger conviviale, cuisine équipée, bulles insonorisées pour les calls. Tout le confort qu'on n'a pas chez soi.",
    image: rdc,
    quote: "La cuisine est devenue notre QG informel.",
  },
];

const LaVilla = () => {
  return (
    <Layout headerVariant="dark">
      <SEO
        title="Visiter la Villa Maria — Coworking & événements Bordeaux"
        description="Découvrez la Villa Maria espace par espace : escalier d'honneur, salles de travail, jardin et piscine, boulodrome, salles de réunion. 1 200 m² au cœur de Bordeaux."
        path="/la-villa"
      />

      <section className="relative -mt-20 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={facade} alt="Façade Villa Maria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-villa-noir/85 via-villa-noir/30 to-transparent" />
        </div>
        <div className="relative container-villa pb-16 pt-32 text-villa-cream">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">La Villa</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-3xl">
            Espace par espace.
          </h1>
          <p className="mt-6 font-serif italic text-2xl text-villa-cream/85 max-w-2xl">
            1 200 m² racontés comme on visite un appartement qu'on hésite à louer — sauf qu'on vous y attend.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-villa space-y-20 lg:space-y-32">
          {ESPACES.map((e, i) => (
            <article key={e.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  Espace {String(i + 1).padStart(2, "0")} / {String(ESPACES.length).padStart(2, "0")}
                </div>
                <h2 className="font-display text-4xl lg:text-5xl uppercase leading-tight mb-3">{e.title}</h2>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-6">{e.surface}</div>
                <p className="text-lg leading-relaxed text-foreground mb-6">{e.desc}</p>
                <blockquote className="font-serif italic text-xl border-l-2 border-accent pl-5 text-muted-foreground">
                  « {e.quote} » <Placeholder>témoignage à valider</Placeholder>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Petite galerie additionnelle */}
      <section className="py-16 bg-secondary">
        <div className="container-villa">
          <SectionTitle eyebrow="Plus d'images" title="Quelques détails en passant." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[rdc29, leet, c, salle1].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img src={img} alt={`Détail Villa Maria ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visite virtuelle */}
      <section className="py-20 lg:py-28">
        <div className="container-villa">
          <div className="bg-villa-noir text-villa-cream p-10 lg:p-16 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Visite virtuelle</div>
            <h2 className="font-display text-4xl lg:text-5xl uppercase mb-5">Bientôt en 3D.</h2>
            <p className="font-serif italic text-xl text-villa-cream/80 max-w-2xl mx-auto">
              Une visite virtuelle Matterport est en préparation — vous pourrez bientôt vous promener
              dans toute la villa depuis votre canapé.
            </p>
            <div className="mt-6"><Placeholder>embed Matterport à brancher</Placeholder></div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default LaVilla;
