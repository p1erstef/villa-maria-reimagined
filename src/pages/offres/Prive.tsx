import { OffreLayout } from "./_OffreLayout";
import { getOffre } from "@/lib/offres";

const OffrePrive = () => {
  const offre = getOffre("prive")!;
  return (
    <OffreLayout
      offre={offre}
      metaTitle="Bureau privatif Bordeaux — Équipes 2 à 10 personnes — Villa Maria"
      metaDesc="Bureau privatif fermé pour votre équipe dans une villa Belle Époque à Bordeaux. De 2 à 10 personnes, tarif sur devis, tous services inclus."
      longIntro="Un bureau fermé rien qu'à votre équipe, dans une villa Belle Époque. C'est le siège qu'on vous enviera."
      idealPour={[
        "Startups en croissance (2 à 10 personnes)",
        "Filiales d'entreprises parisiennes ou étrangères",
        "Équipes en télétravail partiel qui se retrouvent",
        "Consultants associés qui partagent un bureau",
      ]}
    />
  );
};

export default OffrePrive;
