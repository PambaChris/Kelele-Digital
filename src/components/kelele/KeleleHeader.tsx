import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function KeleleHeader() {
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
        scrolled
          ? "bg-[var(--kelele-ink)]/95 backdrop-blur border-white/10"
          : "bg-[var(--kelele-ink)] border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-[var(--kelele-accent)] font-display text-lg font-bold text-[var(--kelele-ink)] transition-transform group-hover:rotate-6">
            K
          </span>
          <div className="leading-none text-white">
            <div className="font-display text-lg font-bold tracking-tight">
              KELELE <span className="text-[var(--kelele-accent)]">DIGITAL</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
              Media · Culture · Marketing
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="story-link text-sm font-medium text-white/75 hover:text-white"
              activeProps={{ className: "story-link text-sm font-medium text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="grid h-10 w-10 place-items-center text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--kelele-ink)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium text-white/85 last:border-0"
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
