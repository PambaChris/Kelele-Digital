import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { articles } from "@/lib/articles";
import plImg from "@/assets/premier-league.jpg";

export const Route = createFileRoute("/battle-of-the-fans/premier-league")({
  head: () => ({
    meta: [
      { title: "Premier League — Battle of the fans" },
      {
        name: "description",
        content:
          "The English Premier League, watched, argued about, and loved from Nairobi.",
      },
      { property: "og:title", content: "Premier League — Battle of the fans" },
      {
        property: "og:description",
        content: "EPL match analysis and fan culture from Kenya.",
      },
      { property: "og:image", content: plImg },
      { name: "twitter:image", content: plImg },
    ],
  }),
  component: PLPage,
});

function PLPage() {
  const stories = articles.filter((a) => a.category === "Premier League");
  const others = articles.filter((a) => a.category !== "Premier League").slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-[var(--ink)]">
        <img src={plImg} alt="Premier League" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-16 text-white">
            <div className="mb-3 inline-block bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em]">
              Section
            </div>
            <h1 className="font-display text-5xl font-bold md:text-7xl">Premier League</h1>
            <p className="mt-4 max-w-xl text-white/80">
              Twenty clubs, one obsession. The EPL from a Nairobi perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {stories.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <h2 className="mb-8 border-b-2 border-foreground pb-4 font-display text-3xl font-bold">
          Also from Battle of the fans
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {others.map((a) => (
            <ArticleCard key={a.slug} article={a} size="sm" />
          ))}
        </div>
      </section>

      <NewsletterCta />
      <Footer />
    </div>
  );
}
