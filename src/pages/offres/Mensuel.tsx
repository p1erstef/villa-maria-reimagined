import { OffreLayout } from "./_OffreLayout";
import { getOffre } from "@/lib/offres";

const OffreMensuel = () => {
  const offre = getOffre("mensuel")!;
  return (
    <OffreLayout
      offre={offre}
      metaTitle="Coworking mensuel Bordeaux — 375€/poste — Villa Maria"
      metaDesc="Abonnement mensuel coworking dans une villa du XVIIIᵉ à Bordeaux. 375€ HT/poste, tout inclus : salles de réunion, piscine, boulodrome, fibre dédiée."
      longIntro="375€ HT par poste et par mois. Tout est inclus. Vous travaillez dans le plus beau bureau de Bordeaux. C'est tout."
      idealPour={[
        "Freelances qui en ont assez du café",
        "Consultants en mission longue à Bordeaux",
        "Indépendants qui veulent un vrai cadre",
        "Petites équipes de 2 à 5 personnes",
      ]}
    />
  );
};

export default OffreMensuel;
