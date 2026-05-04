import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, Clock, Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";
import { BLOG_ARTICLES, ARTICLE_BODIES } from "@/lib/blog";
import { SITE } from "@/lib/site";

const BlogArticle = () => {
  const { slug = "" } = useParams();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  const Body = ARTICLE_BODIES[slug];

  if (!article || !article.published || !Body) {
    return <Navigate to="/blog" replace />;
  }

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Villa Maria" },
    publisher: {
      "@type": "Organization",
      name: "Villa Maria",
      logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/og-image.jpg` },
    },
  };

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
        jsonLd={ld}
      />

      <article>
        <header className="py-16 lg:py-24 bg-villa-cream border-b border-border">
          <div className="container-villa max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent mb-8">
              <ChevronLeft size={14} /> Retour au blog
            </Link>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{article.familyLabel}</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8 text-balance">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {article.date && (
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              )}
              <span className="flex items-center gap-2"><Clock size={14} />{article.readingTime} min de lecture</span>
            </div>
          </div>
        </header>

        <div className="py-16 lg:py-24">
          <div className="container-villa max-w-3xl">
            <div className="article-prose">
              <Body />
            </div>
          </div>
        </div>
      </article>

      <CTABanner />

      <style>{`
        .article-prose .lead { font-size: 1.25rem; line-height: 1.6; padding: 1.5rem; background: hsl(var(--secondary)); border-left: 3px solid hsl(var(--accent)); margin-bottom: 2.5rem; }
        .article-prose h2 { font-family: 'Archivo Black', sans-serif; font-size: 1.75rem; text-transform: uppercase; margin-top: 3rem; margin-bottom: 1.25rem; letter-spacing: -0.02em; }
        .article-prose h3 { font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; }
        .article-prose p { font-size: 1.0625rem; line-height: 1.7; margin-bottom: 1.25rem; color: hsl(var(--foreground)); }
        .article-prose ul { list-style: none; padding: 0; margin: 1.5rem 0; }
        .article-prose ul li { padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; }
        .article-prose ul li::before { content: '→'; color: hsl(var(--accent)); position: absolute; left: 0; }
        .article-prose table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.9rem; }
        .article-prose th, .article-prose td { border: 1px solid hsl(var(--border)); padding: 0.75rem 1rem; text-align: left; }
        .article-prose th { background: hsl(var(--secondary)); font-weight: 700; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; }
        .article-prose strong { font-weight: 800; }
        .article-prose em { font-family: 'Cormorant Garamond', serif; font-size: 1.05em; }
      `}</style>
    </Layout>
  );
};

export default BlogArticle;
