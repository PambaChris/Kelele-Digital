const words = [
  "Storytelling",
  "Newsrooms",
  "Digital Marketing",
  "Podcasts",
  "Brand Studios",
  "Culture",
  "Sports Media",
  "Editorial",
];

export function KeleleMarquee() {
  const items = [...words, ...words];
  return (
    <div className="w-full overflow-hidden border-y border-border bg-background">
      <div className="flex animate-[marquee_38s_linear_infinite] whitespace-nowrap py-5">
        {items.map((w, i) => (
          <div key={i} className="mx-8 flex items-center gap-8">
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
              {w}
            </span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
