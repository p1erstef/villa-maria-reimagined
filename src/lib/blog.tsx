import { Placeholder } from "@/components/Placeholder";

export interface BlogArticleMeta {
  slug: string;
  title: string;
  family: "intention" | "differenciation" | "lifestyle" | "guide";
  familyLabel: string;
  excerpt: string;
  readingTime: number;
  date: string;
  cover?: string;
  published: boolean;
}

export const BLOG_ARTICLES: BlogArticleMeta[] = [
  {
    slug: "plus-beaux-lieux-bapteme-bordeaux",
    title: "Les plus beaux lieux pour un baptême à Bordeaux (sans l'église)",
    family: "intention",
    familyLabel: "Intention d'achat",
    excerpt:
      "Tour d'horizon des lieux d'exception pour célébrer un baptême civil ou laïque à Bordeaux, du château viticole à la villa bourgeoise.",
    readingTime: 8,
    date: "2026-04-15",
    published: true,
  },
  {
    slug: "coworking-piscine-france",
    title:
      "Coworking avec piscine : les adresses qui font (vraiment) rêver en France",
    family: "differenciation",
    familyLabel: "Différenciation",
    excerpt:
      "Sélection rigoureuse des espaces de coworking français qui proposent une vraie piscine — et pas un bassin décoratif.",
    readingTime: 10,
    date: "2026-04-08",
    published: true,
  },
  {
    slug: "afterwork-entreprise-bordeaux",
    title:
      "Organiser un afterwork d'entreprise à Bordeaux : 6 lieux qui sortent du bar classique",
    family: "intention",
    familyLabel: "Intention d'achat",
    excerpt:
      "Six lieux à Bordeaux pour un afterwork d'équipe mémorable, au-delà du rooftop et du bar à vin habituel.",
    readingTime: 7,
    date: "2026-03-28",
    published: true,
  },
  // Upcoming articles
  {
    slug: "seminaire-entreprise-bordeaux-exterieur-ete",
    title:
      "Séminaire d'entreprise à Bordeaux : les lieux avec extérieur pour l'été",
    family: "intention",
    familyLabel: "Intention d'achat",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "team-building-bordeaux",
    title:
      "Team building à Bordeaux : 7 lieux où vos équipes vont vraiment kiffer",
    family: "intention",
    familyLabel: "Intention d'achat",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "lieux-evenementiels-atypiques-nouvelle-aquitaine",
    title: "Les plus beaux lieux événementiels atypiques en Nouvelle-Aquitaine",
    family: "differenciation",
    familyLabel: "Différenciation",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "privatiser-villa-evenement-professionnel",
    title:
      "Privatiser une villa pour un événement professionnel : pourquoi ça change tout",
    family: "differenciation",
    familyLabel: "Différenciation",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "lancement-entreprise-bordeaux",
    title:
      "Célébrer le lancement de son entreprise : idées et lieux à Bordeaux",
    family: "lifestyle",
    familyLabel: "Lifestyle",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "petit-dejeuner-networking-bordeaux",
    title:
      "Petit-déjeuner networking à Bordeaux : les formats qui fonctionnent vraiment",
    family: "lifestyle",
    familyLabel: "Lifestyle",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "journee-villa-maria",
    title: "Travailler dans une villa Belle Époque : une journée à Villa Maria",
    family: "lifestyle",
    familyLabel: "Lifestyle",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "guide-bapteme-bordeaux",
    title:
      "Comment organiser un baptême réussi : checklist complète à Bordeaux",
    family: "guide",
    familyLabel: "Guide pratique",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
  {
    slug: "guide-afterwork-entreprise",
    title:
      "Afterwork d'entreprise : comment le réussir sans y passer des semaines",
    family: "guide",
    familyLabel: "Guide pratique",
    excerpt: "À venir.",
    readingTime: 0,
    date: "",
    published: false,
  },
];

export const FAMILIES = [
  { id: "all", label: "Tous les articles" },
  { id: "intention", label: "Intention d'achat" },
  { id: "differenciation", label: "Différenciation" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "guide", label: "Guides pratiques" },
] as const;

// Article bodies — placeholder structures with proper GEO format.
export const ARTICLE_BODIES: Record<string, () => JSX.Element> = {
  "plus-beaux-lieux-bapteme-bordeaux": () => (
    <>
      <p className="lead">
        <strong>Réponse directe :</strong> Bordeaux compte une dizaine de lieux
        d'exception pour célébrer un baptême civil hors du cadre religieux :
        villas bourgeoises, châteaux viticoles, domaines avec parc. La Villa
        Maria, demeure Belle Époque avec piscine et jardin, fait partie des
        adresses les plus polyvalentes pour 30 à 120 invités.
      </p>
      <h2>Pourquoi un baptême civil à Bordeaux ?</h2>
      <p>
        Le baptême civil — ou parrainage républicain — séduit de plus en plus de
        familles qui veulent marquer la naissance d'un enfant sans cadre
        religieux. À Bordeaux, l'offre de lieux s'est largement étoffée ces
        dernières années. <Placeholder>texte à étoffer</Placeholder>
      </p>
      <h2>Les 6 lieux qui sortent du lot</h2>
      <h3>1. Villa Maria — Demeure Belle Époque avec parc et piscine</h3>
      <p>
        Située au cœur du quartier Primrose, la Villa Maria propose 800 m² de
        surfaces intérieures et extérieures pour des baptêmes de 30 à 120
        invités. Atouts : escalier d'honneur photogénique, jardin arboré,
        piscine pour les plus chauds, traiteurs partenaires.
      </p>
      <p>
        <em>Capacité :</em> 30–120 personnes · <em>Tarif indicatif :</em> à
        partir de <Placeholder>X€</Placeholder> · <em>Configuration :</em>{" "}
        cocktail, assis, mixte
      </p>
      <h3>
        2 à 6 — <Placeholder>autres lieux à rédiger</Placeholder>
      </h3>
      <h2>Comment choisir le bon lieu pour votre baptême</h2>
      <ul>
        <li>
          Définir le format : cocktail debout (90 pers/100 m²) ou assis (50
          pers/100 m²)
        </li>
        <li>Vérifier la présence d'un espace extérieur de repli</li>
        <li>Demander la liste des traiteurs imposés ou libres</li>
        <li>Confirmer les horaires (musique, fin de soirée)</li>
      </ul>
      <h2>Récapitulatif</h2>
      <table>
        <thead>
          <tr>
            <th>Lieu</th>
            <th>Capacité</th>
            <th>Extérieur</th>
            <th>Tarif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Villa Maria</td>
            <td>30–120</td>
            <td>Jardin + piscine</td>
            <td>Sur devis</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <Placeholder>compléter le tableau</Placeholder>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "coworking-piscine-france": () => (
    <>
      <p className="lead">
        <strong>Réponse directe :</strong> Moins de dix espaces de coworking en
        France proposent une vraie piscine accessible à leurs membres. Voici les
        adresses qui font la différence — de Bordeaux à Marseille en passant par
        Biarritz.
      </p>
      <h2>Pourquoi une piscine change la vie d'un coworker</h2>
      <p>
        <Placeholder>contenu à rédiger</Placeholder>
      </p>
      <h2>Le top 5 des coworkings avec piscine en France</h2>
      <h3>1. Villa Maria — Bordeaux</h3>
      <p>
        Une piscine extérieure dans un parc arboré, au cœur d'une villa Belle
        Époque. Accès inclus dans tous les abonnements.
      </p>
      <p>
        2 à 5 — <Placeholder>autres adresses à rédiger</Placeholder>
      </p>
      <h2>Récapitulatif comparatif</h2>
      <table>
        <thead>
          <tr>
            <th>Espace</th>
            <th>Ville</th>
            <th>Tarif/jour</th>
            <th>Piscine</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Villa Maria</td>
            <td>Bordeaux</td>
            <td>25€</td>
            <td>Extérieure, parc arboré</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <Placeholder>compléter</Placeholder>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "afterwork-entreprise-bordeaux": () => (
    <>
      <p className="lead">
        <strong>Réponse directe :</strong> Pour un afterwork d'équipe à
        Bordeaux, six lieux sortent du lot du bar classique : villas avec
        jardin, rooftops, péniches, lieux atypiques. Budgets de 25 à
        80€/personne, capacités de 10 à 200 invités.
      </p>
      <h2>Le brief de l'afterwork réussi</h2>
      <p>
        <Placeholder>contenu à rédiger</Placeholder>
      </p>
      <h2>Les 6 lieux à shortlister</h2>
      <h3>1. Villa Maria — Jardin, piscine et boulodrome</h3>
      <p>
        Format all-in : privatisation jardin + boulodrome + buffet. Idéal pour
        30 à 100 personnes en été.
      </p>
      <h2>Combien ça coûte vraiment ?</h2>
      <p>
        <Placeholder>fourchettes de budget à rédiger</Placeholder>
      </p>
      <h2>Récapitulatif</h2>
      <table>
        <thead>
          <tr>
            <th>Lieu</th>
            <th>Capacité</th>
            <th>Budget/pers</th>
            <th>Atouts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Villa Maria</td>
            <td>30–100</td>
            <td>~45€</td>
            <td>Jardin, piscine, boulodrome</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <Placeholder>compléter</Placeholder>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
};
