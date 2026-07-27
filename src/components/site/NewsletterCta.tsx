import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";

export function NewsletterCta() {
  const ref = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section className="bg-primary text-primary-foreground">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] opacity-80">
              The Weekly Whistle
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Kenyan football,<br />in your inbox every Monday.
            </h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setOk(true);
            }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm opacity-80">
              One email. Match analysis, transfer rumours, and the best of the FKF Premier League.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 border-2 border-primary-foreground/30 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground"
              />
              <button
                type="submit"
                className="border-2 border-primary-foreground bg-primary-foreground px-6 py-3 font-display font-bold uppercase tracking-widest text-primary transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {ok ? "You're in" : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
