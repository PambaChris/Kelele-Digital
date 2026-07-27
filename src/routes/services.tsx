import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper, Sparkles, Megaphone } from "lucide-react";
import { KeleleHeader } from "@/components/kelele/KeleleHeader";
import { KeleleFooter } from "@/components/kelele/KeleleFooter";
import { useReveal } from "@/hooks/use-reveal";
import newsImg from "@/assets/kelele-news.jpg";
import cultureImg from "@/assets/kelele-culture.jpg";
import marketingImg from "@/assets/kelele-marketing.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kelele Digital" },
      {
        name: "description",
        content:
          "News & politics reporting, entertainment & culture coverage, and digital marketing services from Kelele Digital in Nairobi.",
      },
      { property: "og:title", content: "Services — Kelele Digital" },
      {
        property: "og:description",
        content: "News, culture, and digital marketing — three practices, one newsroom mindset.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "news",
    num: "01",
    title: "News & Politics",
    icon: <Newspaper className="h-5 w-5" />,
    lede: "Reporting on Kenya and East Africa that respects the reader's intelligence.",
    body: "We staff editors and writers who know their beats. We publish long-form investigations, daily briefs, and op-eds under our own titles or on behalf of media partners.",
    offerings: [
      "Investigative reporting",
      "Daily news briefs & newsletters",
      "Political analysis and op-eds",
      "Live event coverage",
    ],
    image: newsImg,
  },
  {
    id: "culture",
    num: "02",
    title: "Entertainment & Culture",
    icon: <Sparkles className="h-5 w-5" />,
    lede: "Music, film, sport and lifestyle — covered with the care they deserve.",
    body: "Reviews, artist profiles, video features, podcasts. Culture reporting that reads like it was written by fans who also happen to be journalists.",
    offerings: [
      "Artist profiles & interviews",
      "Music & film reviews",
      "Video features & shortdocs",
      "Podcast production",
    ],
    image: cultureImg,
  },
  {
    id: "marketing",
    num: "03",
    title: "Digital Marketing",
    icon: <Megaphone className="h-5 w-5" />,
    lede: "Editorial-grade campaigns for brands that care about the craft.",
    body: "Content strategy, social, branded newsrooms, paid and earned. We treat brand work with the same rigour as our editorial work — because it shows.",
    offerings: [
      "Content strategy & production",
      "Social media & community",
      "Branded newsrooms & partnerships",
      "Paid social & search campaigns",
    ],
    image: marketingImg,
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <KeleleHeader />

      <section className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Services
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Three practices.<br />One newsroom mindset.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether we're publishing under our own masthead or building a
            campaign for a client, the standard is the same: work that people
            actually want to read, watch, and share.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {services.map((s, i) => (
          <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
        ))}
      </div>

      <section className="border-t border-border bg-[var(--kelele-ink)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center md:px-6">
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-5xl">
            Ready to talk about your project?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5"
          >
            Contact us →
          </Link>
        </div>
      </section>

      <KeleleFooter />
    </div>
  );
}

function ServiceRow({ service, reverse }: { service: (typeof services)[number]; reverse: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className="reveal grid gap-10 border-b border-border py-20 last:border-0 md:grid-cols-12 md:gap-16 md:py-28"
    >
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--kelele-ink)]">
          <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]">
            {service.icon}
          </span>
          <span className="font-display text-4xl font-bold text-primary/40">{service.num}</span>
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] md:text-5xl">
          {service.title}
        </h2>
        <p className="mt-4 text-lg font-medium text-foreground/90">{service.lede}</p>
        <p className="mt-4 text-base text-muted-foreground">{service.body}</p>
        <ul className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
          {service.offerings.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm">
              <span className="mt-2 h-1 w-3 flex-none bg-primary" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
