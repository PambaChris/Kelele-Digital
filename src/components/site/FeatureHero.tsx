import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles";

export function FeatureHero({ article }: { article: Article }) {
  return (
    <section className="relative">
      <Link
        to="/Battle-Of-The-Fans/articles/$slug"
        params={{ slug: article.slug }}
        className="group relative block h-[68vh] min-h-[520px] w-full overflow-hidden bg-[var(--ink)]"
      >
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-20">
            <div className="max-w-3xl text-white">
              <div className="mb-4 inline-flex items-center gap-2 bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {article.category}
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                {article.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
                <span>{article.author}</span>
                <span>/</span>
                <span>{article.date}</span>
                <span>/</span>
                <span>{article.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
