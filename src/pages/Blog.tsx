import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABanner } from "@/components/CTABanner";
import { BLOG_ARTICLES, FAMILIES } from "@/lib/blog";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [filter, setFilter] = useState<string>("all");
  const articles = useMemo(() => {
    if (filter === "all") return BLOG_ARTICLES;
    return BLOG_ARTICLES.filter((a) => a.family === filter);
  }, [filter]);

  const published = articles.filter((a) => a.published);
  const upcoming = articles.filter((a) => !a.published);

  return (
    <Layout>
      <SEO
        title="Blog Villa Maria — Coworking, événements et lieux d'exception à Bordeaux"
        description="Articles, guides et inspirations pour organiser vos événements professionnels et trouver les plus beaux lieux de coworking à Bordeaux et en France."
        path="/blog"
      />

      <section className="py-16 lg:py-24 bg-villa-cream border-b border-border">
        <div className="container-villa">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Le journal</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-6 max-w-3xl">
            Inspirations, guides<br />et adresses qui valent le détour.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Notre regard sur les plus beaux lieux de Bordeaux et de France — pour travailler,
            organiser, célébrer.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-villa-cream border-b border-border">
        <div className="container-villa py-4 flex gap-2 overflow-x-auto">
          {FAMILIES.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors",
                filter === f.id
                  ? "bg-villa-noir text-villa-cream border-villa-noir"
                  : "bg-transparent text-villa-noir border-border hover:border-villa-noir"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Published */}
      <section className="py-16 lg:py-20">
        <div className="container-villa">
          {published.length > 0 && (
            <>
              <h2 className="font-display text-2xl uppercase mb-8">À lire</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                {published.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="group bg-card border border-border p-7 flex flex-col hover:border-accent transition-colors"
                  >
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{a.familyLabel}</div>
                    <h3 className="font-display text-xl uppercase leading-tight mb-3 text-balance">{a.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1 mb-5 leading-relaxed">{a.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-5 border-t border-border">
                      <span className="flex items-center gap-2"><Clock size={14} />{a.readingTime} min</span>
                      <ArrowUpRight size={16} className="group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {upcoming.length > 0 && (
            <>
              <h2 className="font-display text-2xl uppercase mb-8 text-muted-foreground">À venir</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {upcoming.map((a) => (
                  <div key={a.slug} className="p-5 border border-dashed border-border bg-secondary/40">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">{a.familyLabel}</div>
                    <h3 className="font-bold text-sm leading-snug">{a.title}</h3>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Blog;
