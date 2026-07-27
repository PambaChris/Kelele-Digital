import { Link } from "@tanstack/react-router";

export function KeleleFooter() {
  return (
    <footer className="bg-[var(--kelele-ink)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-[var(--kelele-accent)] font-display text-lg font-bold text-[var(--kelele-ink)]">
              K
            </span>
            <span className="font-display text-lg font-bold text-white">
              KELELE <span className="text-[var(--kelele-accent)]">DIGITAL</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/60">
            A Nairobi-based media house. We publish, produce and promote stories
            that matter across news, culture and digital marketing.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Company
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--kelele-accent)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--kelele-accent)]">Services</Link></li>
            <li><Link to="/brands" className="hover:text-[var(--kelele-accent)]">Brands</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--kelele-accent)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Nairobi HQ
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>0000, Nairobi, Kenya</li>
            <li>+254 000 000 000</li>
            <li>hello@0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-6 text-xs text-white/50 md:flex-row md:px-6">
          <span>&copy; {new Date().getFullYear()} Kelele Digital. All rights reserved.</span>
          <span>Made in Nairobi 🇰🇪</span>
        </div>
      </div>
    </footer>
  );
}
