import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/battle-of-the-fans", label: "Home" },
  { to: "/battle-of-the-fans/harambee-stars", label: "Harambee Stars" },
  { to: "/battle-of-the-fans/premier-league", label: "Premier League" },
  { to: "/battle-of-the-fans/about", label: "About" },
  { to: "/", label: "← Kelele Digital" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all ${
        scrolled ? "bg-background/90 backdrop-blur border-border" : "bg-background border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/battle-of-the-fans" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground font-display text-lg font-bold transition-transform group-hover:-rotate-6">
            B
          </span>
          <div className="leading-none">
            <div className="font-display text-lg font-bold tracking-tight">BATTLE OF THE FANS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Football, unfiltered
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="story-link text-sm font-medium text-foreground/80 hover:text-foreground"
              activeProps={{ className: "story-link text-sm font-medium text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
