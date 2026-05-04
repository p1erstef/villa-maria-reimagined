import { OffreLayout } from "./_OffreLayout";
import { getOffre } from "@/lib/offres";

const OffreSalles = () => {
  const offre = getOffre("salles")!;
  return (
    <OffreLayout
      offre={offre}
      metaTitle="Location salle de réunion Bordeaux — Villa Maria"
      metaDesc="5 salles de réunion équipées (écran 4K, caméra, fibre) à louer à l'heure ou à la journée à Bordeaux. À partir de 40€/h, capacité 4 à 20 personnes."
      longIntro="Cinq salles équipées, dans une villa qui change tout le tempo de la réunion. Vos clients s'en souviennent."
      idealPour={[
        "Réunions client à fort enjeu",
        "Sessions de formation intra-entreprise",
        "Ateliers stratégie et workshops",
        "Conseils d'administration ou comités",
      ]}
    />
  );
};

export default OffreSalles;
