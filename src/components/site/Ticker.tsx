import { scores } from "@/lib/articles";

export function Ticker() {
  const items = [...scores, ...scores];
  return (
    <div className="w-full overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap py-2.5">
        {items.map((s, i) => (
          <div key={i} className="mx-6 flex items-center gap-3 text-xs uppercase tracking-widest">
            <span className="opacity-70">{s.tag}</span>
            <span className="font-semibold">{s.home}</span>
            <span className="rounded-sm bg-primary-foreground/15 px-2 py-0.5 font-display font-bold">
              {s.score}
            </span>
            <span className="font-semibold">{s.away}</span>
            <span className="opacity-40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
