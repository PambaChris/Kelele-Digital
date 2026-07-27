import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
};

export function ServiceCard({ number, title, description, bullets, icon }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative flex h-full flex-col border border-border bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:border-foreground hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]">
          {icon}
        </span>
        <span className="font-display text-4xl font-bold text-foreground/10 transition-colors group-hover:text-primary/30">
          {number}
        </span>
      </div>
      <h3 className="font-display text-2xl font-bold leading-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-3 flex-none bg-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
