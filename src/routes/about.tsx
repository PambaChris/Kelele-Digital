import { createFileRoute, Link } from "@tanstack/react-router";
import { KeleleHeader } from "@/components/kelele/KeleleHeader";
import { KeleleFooter } from "@/components/kelele/KeleleFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kelele Digital" },
      {
        name: "description",
        content:
          "Kelele Digital is a Nairobi-based media house building newsrooms, culture coverage and digital marketing. Meet the people behind the noise.",
      },
      { property: "og:title", content: "About — Kelele Digital" },
      {
        property: "og:description",
        content: "The mission, the people and the practice behind Kelele Digital.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="min-h-screen bg-background">
      <KeleleHeader />
      <section className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div ref={ref} className="reveal">
          <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            About Kelele Digital
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            A Nairobi media house.<br />
            Built for the <span className="text-primary">noise</span>.
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Kelele Digital is an independent media house based in Nairobi. We
              own newsrooms, produce cultural coverage, and build digital
              marketing campaigns for brands that want to be part of the
              conversation — not just interrupt it.
            </p>
            <p>
              We started because the best Kenyan stories were being told in
              formats that didn't do them justice. Our answer: build the
              mastheads, hire the writers, produce the work.
            </p>
            <p>
              Today, our flagship title is <em>Battle Of the Fans</em>, a football
              journal covering Harambee Stars and the FKF Premier League. More
              titles are on the way.
            </p>
          </div>

          <div className="mt-16 grid gap-6 border-t-2 border-foreground pt-10 sm:grid-cols-3">
            {[
              { k: "Est.", v: "2024" },
              { k: "Team", v: "12" },
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

          <div className="mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
      <KeleleFooter />
    </div>
  );
}
