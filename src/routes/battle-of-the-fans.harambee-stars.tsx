import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { articles } from "@/lib/articles";
import harambeeImg from "@/assets/harambee.jpg";

export const Route = createFileRoute("/battle-of-the-fans/harambee-stars")({
  head: () => ({
    meta: [
      { title: "Harambee Stars — Battle of the fans" },
      {
        name: "description",
        content:
          "Every Harambee Stars match, call-up and tactical shift, tracked from Nairobi.",
      },
      { property: "og:title", content: "Harambee Stars — Battle of the fans" },
      {
        property: "og:description",
        content: "Coverage of the Kenya national football team.",
      },
      { property: "og:image", content: harambeeImg },
      { name: "twitter:image", content: harambeeImg },
    ],
  }),
  component: HarambeePage,
});

function HarambeePage() {
  const stories = articles.filter((a) => a.category === "Harambee Stars");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-[var(--ink)]">
        <img src={harambeeImg} alt="Harambee Stars" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-16 text-white">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary-foreground bg-primary inline-block px-3 py-1">
              Section
            </div>
            <h1 className="font-display text-5xl font-bold md:text-7xl">Harambee Stars</h1>
            <p className="mt-4 max-w-xl text-white/80">
              The men and women in red. Match reports, tactics, and the long walk to AFCON.
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

      <NewsletterCta />
      <Footer />
    </div>
  );
}
