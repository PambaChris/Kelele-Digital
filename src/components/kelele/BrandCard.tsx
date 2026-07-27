import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  to?: string;
  status?: string;
  featured?: boolean;
};

export function BrandCard({ name, tagline, description, image, to, status, featured }: Props) {
  const ref = useReveal<HTMLElement>();
  const inner = (
    <>
      <div className={`relative overflow-hidden bg-[var(--kelele-ink)] ${featured ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {status && (
          <div className="absolute right-4 top-4 bg-[var(--kelele-accent)] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--kelele-ink)]">
            {status}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--kelele-accent)]">
            {tagline}
          </div>
          <h3 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">
            {name}
          </h3>
        </div>
      </div>
      <div className="border-x border-b border-border bg-background p-6">
        <p className="text-sm text-muted-foreground">{description}</p>
        {to && (
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            Visit {name} →
          </div>
        )}
      </div>
    </>
  );

  return (
    <article ref={ref} className="reveal group block">
      {to ? <Link to={to}>{inner}</Link> : inner}
    </article>
  );
}
