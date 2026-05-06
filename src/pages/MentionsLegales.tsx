import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SITE } from "@/lib/site";

const MentionsLegales = () => {
  return (
    <Layout>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site Villa Maria — éditeur, hébergeur, propriété intellectuelle et données personnelles."
        path="/mentions-legales"
        noIndex
      />

      <article className="container-villa max-w-3xl py-20 md:py-28">
        <header className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Informations légales
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-villa-noir leading-[0.95]">
            Mentions légales
          </h1>
          <p className="mt-6 text-sm text-villa-noir/60">
            Dernière mise à jour&nbsp;: {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
          </p>
        </header>

        <div className="space-y-12 text-villa-noir/85 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>{SITE.baseUrl.replace("https://www.", "")}</strong> est édité par&nbsp;:
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><strong>Raison sociale&nbsp;:</strong> VILLA MARIA</li>
              <li><strong>Forme juridique&nbsp;:</strong> Société par actions simplifiée (SAS)</li>
              <li><strong>Capital social&nbsp;:</strong> 5&nbsp;000,00&nbsp;€</li>
              <li><strong>SIREN&nbsp;:</strong> 894&nbsp;338&nbsp;078</li>
              <li><strong>RCS&nbsp;:</strong> 894&nbsp;338&nbsp;078 R.C.S. Bordeaux</li>
              <li><strong>N° TVA intracommunautaire&nbsp;:</strong> FR66894338078</li>
              <li><strong>Siège social&nbsp;:</strong> {SITE.address.street}, {SITE.address.postal} {SITE.address.city}</li>
              <li><strong>Téléphone&nbsp;:</strong> <a href={`tel:${SITE.contact.phone}`} className="underline hover:text-accent">{SITE.contact.phone}</a></li>
              <li><strong>Email&nbsp;:</strong> <a href={`mailto:${SITE.contact.email}`} className="underline hover:text-accent">{SITE.contact.email}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est <strong>François Defossez</strong>, en sa
              qualité de représentant légal de la société VILLA MARIA.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              3. Hébergeur
            </h2>
            <p>Le site est hébergé par&nbsp;:</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><strong>OVH SAS</strong></li>
              <li>2 rue Kellermann — 59100 Roubaix — France</li>
              <li>Téléphone&nbsp;: 1007</li>
              <li>Site&nbsp;: <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">www.ovhcloud.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des éléments figurant sur le site (textes, photographies,
              illustrations, logos, vidéos, identité visuelle, mise en page, code source) est
              la propriété exclusive de la société VILLA MARIA ou fait l'objet d'une
              autorisation d'utilisation. Toute reproduction, représentation, modification ou
              exploitation, totale ou partielle, sans l'accord écrit préalable de l'éditeur
              est interdite et constitue une contrefaçon sanctionnée par les articles
              L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              5. Données personnelles
            </h2>
            <p>
              Les informations recueillies via les formulaires de contact, de visite ou de
              demande de devis font l'objet d'un traitement informatique destiné à répondre
              à votre demande et à assurer le suivi de la relation commerciale. Le
              responsable de traitement est la société VILLA MARIA.
            </p>
            <p className="mt-4">
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
              «&nbsp;Informatique et Libertés&nbsp;» modifiée, vous disposez d'un droit
              d'accès, de rectification, d'effacement, de limitation, d'opposition et de
              portabilité de vos données. Vous pouvez exercer ces droits en écrivant à{" "}
              <a href={`mailto:${SITE.contact.email}`} className="underline hover:text-accent">
                {SITE.contact.email}
              </a>{" "}
              ou par courrier à l'adresse du siège social.
            </p>
            <p className="mt-4">
              Vous disposez également du droit d'introduire une réclamation auprès de la
              CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              6. Cookies
            </h2>
            <p>
              Le site peut utiliser des cookies destinés à mesurer son audience et à
              améliorer l'expérience utilisateur. Vous pouvez à tout moment configurer votre
              navigateur pour refuser le dépôt de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              7. Responsabilité
            </h2>
            <p>
              L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur le site, sans pouvoir en garantir l'exhaustivité ou l'absence
              d'erreurs. L'utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-villa-noir mb-4">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. Tout litige
              relatif à leur interprétation ou à leur exécution relève de la compétence
              exclusive des tribunaux de Bordeaux.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default MentionsLegales;
