import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="Page introuvable — Villa Maria" description="Cette page n'existe pas." path={location.pathname} noIndex />
      <section className="py-32 lg:py-44">
        <div className="container-villa text-center max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Erreur 404</div>
          <h1 className="font-display text-7xl md:text-9xl uppercase mb-6">Oups.</h1>
          <p className="font-serif italic text-2xl text-muted-foreground mb-10">
            Cette page s'est perdue dans la villa. Mais on peut vous remettre sur la bonne porte.
          </p>
          <Link to="/" className="inline-flex items-center px-7 py-4 bg-villa-noir text-villa-cream font-bold uppercase tracking-wider hover:bg-accent transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
