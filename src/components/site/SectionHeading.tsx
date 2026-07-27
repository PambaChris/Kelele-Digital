import { useReveal } from "@/hooks/use-reveal";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-8 flex items-end justify-between gap-6 border-b-2 border-foreground pb-4">
      <div>
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
