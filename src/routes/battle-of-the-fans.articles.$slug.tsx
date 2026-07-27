import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articles, getArticle } from "@/lib/articles";

export const Route = createFileRoute("/battle-of-the-fans/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story not found — Battle of the fans" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Battle of the fans` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:image", content: a.image },
        { name: "twitter:image", content: a.image },
      ],
    };
  },
  notFoundComponent: NotFoundArticle,
  component: ArticleDetail,
});

function NotFoundArticle() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Story not found</h1>
        <p className="mt-4 text-muted-foreground">This piece may have been moved.</p>
        <Link to="/battle-of-the-fans" className="mt-6 inline-block story-link font-semibold">
          Back to the front page
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article>
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-[var(--ink)]">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-6 md:pb-16 text-white">
              <div className="mb-4 inline-block bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
                {article.category}
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                {article.title}
              </h1>
              <div className="mt-5 text-xs uppercase tracking-widest text-white/70">
                {article.author} / {article.date} / {article.readTime} read
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="text-xl font-medium leading-relaxed text-foreground">
            {article.excerpt}
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Kasarani was heaving from an hour before kick-off. Red shirts,
              vuvuzelas, and the low pulse of Sauti Sol on the tannoy. This is what
              a Harambee Stars home match feels like when belief returns.
            </p>
            <p>
              The tactical story of the night was simple: a higher line, quicker
              rest-defence, and a midfield that finally trusted itself in
              possession. When the equaliser came, it felt inevitable.
            </p>
            <blockquote className="border-l-4 border-primary bg-[var(--surface)] p-6 font-display text-2xl leading-snug">
              &ldquo;We didn't just want to compete. We wanted to dictate. That's the
              new standard.&rdquo;
            </blockquote>
            <p>
              The next window will tell us whether this is the beginning of
              something, or another false dawn. For tonight, at least, the
              conversation felt different — sharper, more ambitious, less resigned.
            </p>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <h2 className="mb-8 border-b-2 border-foreground pb-4 font-display text-3xl font-bold">
          Keep reading
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <NewsletterCta />
      <Footer />
    </div>
  );
}
