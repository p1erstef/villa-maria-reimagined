// Centralised content for the 4 offers — used by hub + sub-pages + home pricing block.
import { SITE } from "./site";
import facade from "@/assets/villa/facade.jpg";
import salle from "@/assets/villa/salle-1.jpg";
import rdc from "@/assets/villa/rdc.jpg";
import r2 from "@/assets/villa/r2.jpg";

export interface Offre {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  price: string;
  unit?: string;
  priceNote?: string;
  description: string;
  bullets: string[];
  audience: string;
  cta: string;
  href?: string;
  to?: string;
  image: string;
}

export const OFFRES: Offre[] = [
  {
    slug: "journee",
    eyebrow: "Pass journalier",
    shortTitle: "Journée",
    title: "Une journée à la Villa",
    price: "À partir de 25€",
    unit: "/ jour",
    priceNote: "Réservation directe via Tydeck",
    description:
      "Pour les nomades, freelances et télétravailleurs occasionnels qui veulent goûter au plus beau bureau de Bordeaux le temps d'une journée.",
    bullets: [
      "Wifi fibre professionnelle dédiée",
      "Café et thé à discrétion",
      "Accès piscine et boulodrome",
      "Bulles téléphoniques insonorisées",
      "Salle à manger et terrasse",
    ],
    audience: "Nomades · Freelances · Télétravailleurs",
    cta: "Réserver une journée",
    href: SITE.tydeck,
    to: "/offres/journee",
    image: facade,
  },
  {
    slug: "mensuel",
    eyebrow: "Abonnement",
    shortTitle: "Mensuel",
    title: "Poste en open space",
    price: "375€ HT",
    unit: "/ poste / mois",
    priceNote: "Engagement mensuel · sans frais cachés",
    description:
      "Un poste de travail attitré dans un open space lumineux, avec accès à tous les services de la Villa. Idéal pour les indépendants qui veulent un vrai cadre de travail.",
    bullets: [
      "Poste fixe attitré",
      "Salles de réunion incluses (selon disponibilité)",
      "Accès du lundi au vendredi — horaires étendus",
      "Domiciliation possible",
    ],
    audience: "Freelances · Consultants · Indépendants",
    cta: "Demander une visite",
    href: SITE.tally.visiteMensuel,
    to: "/offres/mensuel",
    image: salle,
  },
  {
    slug: "prive",
    eyebrow: "Bureau fermé",
    shortTitle: "Privatif",
    title: "Bureau privatif d'équipe",
    price: "Sur devis",
    priceNote: "Capacité 2 à 10 personnes",
    description:
      "Un bureau fermé rien qu'à votre équipe, dans une demeure Belle Époque. Pour les startups, filiales et équipes en télétravail partiel qui veulent un siège qui en jette.",
    bullets: [
      "Bureaux meublés et personnalisables",
      "Domiciliation entreprise incluse",
      "Salles de réunion incluses (selon disponibilité)",
      "Tous les services Villa (piscine, boulodrome…)",
      "Engagement souple — durée à définir",
    ],
    audience: "Startups · Équipes · Filiales",
    cta: "Demander un devis",
    href: SITE.tally.devisPrivatif,
    to: "/offres/prive",
    image: rdc,
  },
  {
    slug: "salles",
    eyebrow: "Salles de réunion",
    shortTitle: "Salles",
    title: "Salles à l'heure ou la journée",
    price: "À partir de 40€",
    unit: "/ heure",
    priceNote: "5 salles · 4 à 20 personnes",
    description:
      "Cinq salles équipées écran et caméra pour vos réunions, ateliers, formations et présentations clients dans un cadre qui change.",
    bullets: [
      "Écrans 4K + caméra + visioconférence",
      "Wifi fibre dédiée",
      "Configurations modulables",
      "Café et eaux à volonté",
      "Possibilité de pause déjeuner sur place",
    ],
    audience: "Équipes · Formateurs · Consultants",
    cta: "Réserver une salle",
    href: SITE.tally.reservationSalle,
    to: "/offres/salles",
    image: r2,
  },
];

export const getOffre = (slug: string) => OFFRES.find((o) => o.slug === slug);
