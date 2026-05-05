import { OffreLayout } from "./_OffreLayout";
import { getOffre } from "@/lib/offres";

const OffreJournee = () => {
  const offre = getOffre("journee")!;
  return (
    <OffreLayout
      offre={offre}
      metaTitle="Pass journalier coworking Bordeaux — Villa Maria"
      metaDesc="Réservez votre journée à la Villa Maria : poste de travail, wifi fibre, café, piscine et boulodrome inclus. À partir de 25€/jour, réservation directe en ligne."
      longIntro="Une journée à la Villa, c'est un test. Si vous ne reveniez pas, on serait surpris."
      idealPour={[
        "Nomades digitaux de passage à Bordeaux",
        "Freelances qui veulent changer d'air",
        "Télétravailleurs occasionnels",
        "Salariés en mission ponctuelle dans la région",
      ]}
    />
  );
};

export default OffreJournee;
