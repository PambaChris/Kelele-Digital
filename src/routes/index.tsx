import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper, Sparkles, Megaphone, ArrowRight } from "lucide-react";
import { KeleleHeader } from "@/components/kelele/KeleleHeader";
import { KeleleFooter } from "@/components/kelele/KeleleFooter";
import { KeleleMarquee } from "@/components/kelele/KeleleMarquee";
import { ServiceCard } from "@/components/kelele/ServiceCard";
import { BrandCard } from "@/components/kelele/BrandCard";
import { useReveal } from "@/hooks/use-reveal";
import { articles } from "@/lib/articles";
import heroImg from "@/assets/kelele-hero.jpg";
import newsImg from "@/assets/kelele-news.jpg";
import cultureImg from "@/assets/kelele-culture.jpg";
import kickImg from "@/assets/hero-player.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelele Digital — A Nairobi media house" },
      {
        name: "description",
        content:
          "Kelele Digital publishes newsrooms, cultural coverage and digital marketing campaigns from Nairobi. Home of Battle Of The Fans.",
      },
      { property: "og:title", content: "Kelele Digital — A Nairobi media house" },
      {
        property: "og:description",
        content: "News. Culture. Marketing. Storytelling from Nairobi.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featureRef = useReveal<HTMLDivElement>();
  const previews = articles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <KeleleHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--kelele-ink)] text-white">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--kelele-ink)]/50 via-[var(--kelele-ink)]/70 to-[var(--kelele-ink)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-12 md:px-6 md:py-36">
          <div className="md:col-span-9">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--kelele-accent)] backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--kelele-accent)]" />
              Nairobi · Est. 2024
            </div>
            <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[9.5rem]">
              Kelele
              <br />
              <span className="text-[var(--kelele-accent)]">Digital.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
              A Nairobi media house building newsrooms, cultural coverage and
              marketing campaigns that actually get people talking.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/brands"
                className="inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5"
              >
                See our brands <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[var(--kelele-ink)]"
              >
                Work with us
              </Link>
            </div>
          </div>
          <div className="hidden md:col-span-3 md:flex md:items-end">
            <div className="border-l-2 border-[var(--kelele-accent)] pl-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Kelele /ke-le-le/
              </div>
              <div className="mt-1 text-sm text-white/80">
                Swahili. <em>Noise. Buzz. The sound of a room that's paying attention.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KeleleMarquee />

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              What we do
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Three practices.<br />One newsroom mindset.
            </h2>
          </div>
          <p className="max-w-xl self-end text-lg text-muted-foreground md:col-span-6 md:col-start-6">
            We publish under our own mastheads, we cover the culture, and we
            help brands sound like they belong in the conversation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            number="01"
            title="News & Politics"
            description="In-depth reporting on Kenya and the region, without the noise."
            bullets={["Long-form", "Investigations", "Op-eds", "Daily briefs"]}
            icon={<Newspaper className="h-5 w-5" />}
          />
          <ServiceCard
            number="02"
            title="Entertainment & Culture"
            description="Music, film, sport and the culture around them, told properly."
            bullets={["Reviews", "Profiles", "Video features", "Podcasts"]}
            icon={<Sparkles className="h-5 w-5" />}
          />
          <ServiceCard
            number="03"
            title="Digital Marketing"
            description="Editorial-grade campaigns for brands who care about the craft."
            bullets={["Content strategy", "Social", "Branded newsrooms", "Paid + earned"]}
            icon={<Megaphone className="h-5 w-5" />}
          />
        </div>
        <div className="mt-10">
          <Link to="/services" className="story-link text-sm font-semibold">
            See how we work →
          </Link>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="mb-14 grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Our brands
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                Mastheads we own,<br />and voices we love.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <Link to="/brands" className="story-link text-sm font-semibold">
                All brands →
              </Link>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <BrandCard
                featured
                name="Battle Of The Fans"
                tagline="Sports · Live"
                description="An independent Kenyan football journal covering Harambee Stars, the FKF Premier League and the English Premier League from a Nairobi perspective."
                image={kickImg}
                to="/battle-of-the-fans"
                status="Live"
              />
            </div>
            <div className="grid gap-8 md:col-span-4">
              <BrandCard
                name="Sauti Room"
                tagline="Music & culture"
                description="A culture podcast + newsletter. Coming soon."
                image={cultureImg}
                status="Soon"
              />
              <BrandCard
                name="Nairobi Wire"
                tagline="News & politics"
                description="A daily news brief for East Africa. In development."
                image={newsImg}
                status="Soon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEWSROOM PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div ref={featureRef} className="reveal">
          <div className="mb-10 flex items-end justify-between border-b-2 border-foreground pb-4">
            <div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Latest from the newsroom
              </div>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Battle Of The Fans, this week.
              </h2>
            </div>
            <Link
              to="/battle-of-the-fans"
              className="story-link hidden text-sm font-semibold md:inline-block"
            >
              Read more →
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {previews.map((a) => (
              <Link
                key={a.slug}
                to="/battle-of-the-fans/articles/$slug"
                params={{ slug: a.slug }}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {a.category}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-tight group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-[var(--kelele-ink)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--kelele-accent)]">
              Work with us
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Got a story, a brand, or a launch?
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Tell us what you're building. We'll tell you how we'd cover it,
              produce it, or promote it.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-8 py-5 font-display text-base font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5"
            >
              Start a conversation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <KeleleFooter />
    </div>
  );
}
