import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground font-display text-lg font-bold">
              B
            </span>
            <span className="font-display text-lg font-bold">BATTLE OF THE FANS</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            An independent Kenyan football journal. From Kasarani to the Emirates.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sections
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/battle-of-the-fans/harambee-stars" className="hover:text-primary">Harambee Stars</Link></li>
            <li><Link to="/battle-of-the-fans/premier-league" className="hover:text-primary">Premier League</Link></li>
            <li><Link to="/battle-of-the-fans/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/" className="hover:text-primary">Kelele Digital</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Follow
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Twitter / X</a></li>
            <li><a href="#" className="hover:text-primary">Instagram</a></li>
            <li><a href="#" className="hover:text-primary">YouTube</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Nairobi
          </div>
          <p className="text-sm text-muted-foreground">
            Made with grit in Nairobi, Kenya. All rights reserved &copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
}
