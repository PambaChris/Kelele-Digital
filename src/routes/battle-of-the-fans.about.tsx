import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/battle-of-the-fans/about")({
  head: () => ({
    meta: [
      { title: "About — Battle Of The Fans" },
      {
        name: "description",
        content:
          "Battle Of The Fans is an independent Kenyan football journal, written from Nairobi.",
      },
      { property: "og:title", content: "About — Battle Of The Fans" },
      {
        property: "og:description",
        content: "The people, the mission, and the football behind Battle Of The Fans.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div ref={ref} className="reveal">
          <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            About the blog
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Written from Nairobi.<br />For everyone who loves the game.
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Battle Of The Fans is an independent football journal covering Harambee
              Stars, the FKF Premier League, and the English Premier League from
              a Nairobi perspective.
            </p>
            <p>
              We are a small team of writers, sub-editors and photographers who
              believe Kenyan football deserves the same tactical detail, cultural
              context and editorial care given to the biggest leagues in the
              world.
            </p>
            <p>
              No hot takes for the sake of it. No manufactured outrage. Just
              football, told well.
            </p>
          </div>

          <div className="mt-16 grid gap-6 border-t-2 border-foreground pt-10 sm:grid-cols-3">
            {[
              { k: "Est.", v: "2024" },
              { k: "Writers", v: "12" },
              { k: "City", v: "Nairobi" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-5xl font-bold text-primary">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterCta />
      <Footer />
    </div>
  );
}
