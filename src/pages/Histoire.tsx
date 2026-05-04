import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Placeholder } from "@/components/Placeholder";
import { CTABanner } from "@/components/CTABanner";
import groupe from "@/assets/team/groupe.jpg";
import facade from "@/assets/villa/facade.jpg";
import { SITE } from "@/lib/site";

const FONDATEURS = [
  "Jérôme Ormières", "Mathieu Stefani", "Corinne Ormières", "Sébastien Ramel",
  "Pierre Stefani", "François Defossey", "Hugo Bentz", "Hadrien Ormières",
  "Laurent Kretz", "Olivier Ramel",
];

const VALEURS = [
  { title: "Bien-être au travail", desc: "On croit qu'un beau bureau change la qualité du travail. Pas un slogan : un parti pris." },
  { title: "Flexibilité", desc: "Pass d'un jour, mois, année — vos modalités, vos contraintes. On s'adapte." },
  { title: "Communauté", desc: "Coworkers, événements, yoga, afterworks. Un lieu vivant, pas un open space froid." },
  { title: "Bordeaux", desc: "Ancrés dans la ville, partenaires d'acteurs locaux, fiers de notre territoire." },
];

const Histoire = () => {
  return (
    <Layout>
      <SEO
        title="L'histoire de la Villa Maria — Fondateurs et vision"
        description="Découvrez l'histoire et l'équipe fondatrice de la Villa Maria, espace de coworking et lieu d'événements dans une villa du XVIIIᵉ à Bordeaux."
        path="/histoire"
      />

      {/* Hero éditorial */}
      <section className="py-16 lg:py-24 bg-villa-cream border-b border-border">
        <div className="container-villa grid lg:grid-cols-[5fr_4fr] gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Notre histoire</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-6 text-balance">
              Une villa du XVIIIᵉ qu'on n'a pas voulu laisser dormir.
            </h1>
            <p className="font-serif italic text-2xl text-muted-foreground">
              Au départ, dix amis. Une demeure bourgeoise. Une idée simple : et si on en faisait
              le plus beau bureau de France ?
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={facade} alt="Façade Villa Maria" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Storytelling */}
      <section className="py-20 lg:py-28">
        <div className="container-villa max-w-3xl prose prose-lg">
          <h2 className="font-display text-3xl uppercase mb-6">Pourquoi la Villa Maria.</h2>
          <p className="text-lg leading-relaxed text-foreground mb-5">
            <Placeholder>storytelling court et sincère à rédiger — 400 mots max</Placeholder>
            En attendant le texte définitif, l'histoire en quelques mots : dix associés bordelais,
            entrepreneurs et passionnés, ont repris une villa bourgeoise du XVIIIᵉ pour en faire
            un lieu hybride — coworking premium le jour, lieu d'événements le soir et le week-end.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-5">
            L'idée n'est pas neuve : créer un cadre de travail dont on ne veut pas partir le soir.
            La différence, c'est l'exécution : 1 200 m², un parc, une piscine, un boulodrome, des
            services pensés pour la vraie vie de ceux qui travaillent ici.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Et puis il y a <a href={SITE.partners.creche} target="_blank" rel="noopener noreferrer" className="underline decoration-accent decoration-2 underline-offset-4">la crèche Le Kocon</a>,
            partenaire historique installé sur le site. Parce qu'un lieu de travail qui pense aux
            parents qui travaillent, c'est rare — et c'est dans l'ADN du projet.
          </p>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-villa">
          <SectionTitle
            eyebrow="L'équipe"
            title="Dix associés bordelais."
            subtitle="Entrepreneurs, investisseurs, opérateurs. Tous engagés dans le projet depuis le départ."
          />

          <div className="mb-10 max-w-3xl">
            <p className="text-sm text-muted-foreground bg-card border border-dashed border-border p-5 flex items-start gap-3">
              <Placeholder>portraits pro à venir</Placeholder>
              <span>En attendant les portraits individuels professionnels, retrouvez la photo de groupe ci-dessous. Chaque associé aura sa fiche dédiée prochainement.</span>
            </p>
          </div>

          <div className="aspect-[16/9] overflow-hidden mb-10 max-w-4xl">
            <img src={groupe} alt="Les fondateurs de la Villa Maria" className="w-full h-full object-cover" />
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FONDATEURS.map((nom) => (
              <li key={nom} className="bg-card border border-border p-5">
                <div className="w-12 h-12 rounded-full bg-villa-stone flex items-center justify-center font-bold text-villa-noir mb-3">
                  {nom.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="font-bold text-sm leading-tight">{nom}</div>
                <div className="text-xs text-muted-foreground mt-1">Co-fondateur</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 lg:py-28">
        <div className="container-villa">
          <SectionTitle eyebrow="Ce qui nous tient" title="Quatre engagements." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {VALEURS.map((v, i) => (
              <div key={v.title} className="bg-card p-7">
                <div className="text-accent font-display text-3xl mb-3">0{i + 1}</div>
                <h3 className="font-display text-xl uppercase mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Histoire;
