import { createFileRoute } from "@tanstack/react-router";
import { KeleleHeader } from "@/components/kelele/KeleleHeader";
import { KeleleFooter } from "@/components/kelele/KeleleFooter";
import { BrandCard } from "@/components/kelele/BrandCard";
import kickImg from "@/assets/hero-player.jpg";
import newsImg from "@/assets/kelele-news.jpg";
import cultureImg from "@/assets/kelele-culture.jpg";
import marketingImg from "@/assets/kelele-marketing.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Kelele Digital" },
      {
        name: "description",
        content: "The mastheads and shows published by Kelele Digital — starting with Battle Of The Fans.",
      },
      { property: "og:title", content: "Brands — Kelele Digital" },
      {
        property: "og:description",
        content: "Meet the titles we publish under the Kelele Digital roof.",
      },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <KeleleHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Our brands
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Mastheads we own.<br />Voices we're building.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every Kelele Digital brand is editor-led. One live today, more on the way.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <BrandCard
              featured
              name="Battle Of The Fans"
              tagline="Sports · Live"
              status="Live"
              image={kickImg}
              to="/battle-of-the-fans"
              description="An independent Kenyan football journal covering Harambee Stars, the FKF Premier League and the English Premier League from a Nairobi perspective."
            />
          </div>
          <div className="grid gap-8 md:col-span-4">
            <BrandCard
              name="Sauti Room"
              tagline="Music & culture"
              status="Soon"
              image={cultureImg}
              description="A weekly culture podcast and newsletter covering the Kenyan music scene."
            />
            <BrandCard
              name="Nairobi Wire"
              tagline="News & politics"
              status="Soon"
              image={newsImg}
              description="A daily news brief for East Africa. Serious reporting, no clickbait."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <BrandCard
            name="Kelele Studios"
            tagline="Brand studio"
            status="Client work"
            image={marketingImg}
            description="Our in-house branded content and campaign arm for external clients."
          />
          <BrandCard
            name="More coming"
            tagline="In development"
            status="TBA"
            image={newsImg}
            description="A politics vertical and a business title are in early development. Watch this space."
          />
        </div>
      </section>

      <KeleleFooter />
    </div>
  );
}
