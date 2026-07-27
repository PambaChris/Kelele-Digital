import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Ticker } from "@/components/site/Ticker";
import { FeatureHero } from "@/components/site/FeatureHero";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { articles } from "@/lib/articles";
import { useReveal } from "@/hooks/use-reveal";
import harambeeImg from "@/assets/harambee.jpg";

export const Route = createFileRoute("/battle-of-the-fans/")({
  head: () => ({
    meta: [
      { title: "Battle of the fans — Kenyan football, unfiltered" },
      {
        name: "description",
        content:
          "Match analysis, transfer news, and match-day culture from the FKF Premier League to the Emirates.",
      },
      { property: "og:title", content: "Battle of the fans — Kenyan football, unfiltered" },
      {
        property: "og:description",
        content: "Independent Kenyan football journalism from Nairobi.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const feature = articles.find((a) => a.featured) ?? articles[0];
  const [second, third, fourth, fifth, sixth, ...rest] = articles.filter(
    (a) => a.slug !== feature.slug,
  );
  const spotlightRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Ticker />
      <Header />

      <FeatureHero article={feature} />

      {/* Side rail secondary features */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionHeading eyebrow="Latest" title="On the front page" />
            <div className="grid gap-10 sm:grid-cols-2">
              <ArticleCard article={second} />
              <ArticleCard article={third} />
              <ArticleCard article={fourth} />
              <ArticleCard article={fifth} />
            </div>
          </div>

          <aside className="md:border-l md:border-border md:pl-8">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Most read
            </div>
            <h3 className="mb-6 font-display text-2xl font-bold">This week</h3>
            <ol className="space-y-6">
              {[sixth, ...rest].slice(0, 5).map((a, i) => (
                <li key={a.slug} className="flex gap-4 border-b border-border pb-6 last:border-0">
                  <span className="font-display text-4xl font-bold text-primary/70">
                    0{i + 1}
                  </span>
                  <Link
                    to="/battle-of-the-fans/articles/$slug"
                    params={{ slug: a.slug }}
                    className="group"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {a.category}
                    </div>
                    <div className="mt-1 font-display text-base font-semibold leading-tight group-hover:text-primary">
                      {a.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* Harambee spotlight split band */}
      <section className="bg-[var(--ink)] text-white">
        <div ref={spotlightRef} className="reveal mx-auto grid max-w-7xl gap-0 px-0 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
            <img
              src={harambeeImg}
              alt="Harambee Stars huddle"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-8 p-8 md:p-16">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Spotlight / Harambee Stars
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              The road to<br />AFCON 2027.
            </h2>
            <p className="max-w-md text-white/70">
              Every match, every call-up, every tactical tweak — tracked from the moment
              McCarthy took charge.
            </p>
            <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-6">
              {[
                { k: "W", v: "6" },
                { k: "D", v: "2" },
                { k: "L", v: "1" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-5xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                    {s.k === "W" ? "Wins" : s.k === "D" ? "Draws" : "Losses"}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/battle-of-the-fans/harambee-stars"
              className="inline-flex w-fit items-center gap-2 border-2 border-white bg-transparent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[var(--ink)]"
            >
              Enter the section →
            </Link>
          </div>
        </div>
      </section>

      {/* Premier League watch */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Premier League watch"
          title="From Nairobi with an English accent."
          action={
            <Link
              to="/battle-of-the-fans/premier-league"
              className="story-link hidden text-sm font-semibold text-foreground md:inline-block"
            >
              See all
            </Link>
          }
        />
        <div className="grid gap-10 md:grid-cols-3">
          {articles
            .filter((a) => a.category === "Premier League")
            .slice(0, 3)
            .map((a, i) => (
              <ArticleCard key={a.slug} article={a} size={i === 0 ? "lg" : "md"} />
            ))}
        </div>
      </section>

      <NewsletterCta />
      <Footer />
    </div>
  );
}
