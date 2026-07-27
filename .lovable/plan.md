
# Kelele Digital — portfolio site

Kelele Digital becomes the top-level brand. The existing football blog (Battle of the fans) stays intact and is presented as one of Kelele's media brands. New routes introduce the company, its verticals, and how to reach it. Contact fields use `0000` placeholders as requested.

## Information architecture

```text
/                  Kelele Digital home (hero, what we do, brands, snippets, CTA)
/about             Company story, mission, team placeholders
/services          News & Politics, Entertainment & Culture, Digital Marketing
/brands            Grid of in-house media brands (Battle of the fans featured)
/contact           Contact card with 0000 placeholders + simple form (non-wired)

/battle-of-the-fans                 Existing football blog home (moved from /)
/battle-of-the-fans/harambee-stars  (moved from /harambee-stars)
/battle-of-the-fans/premier-league  (moved from /premier-league)
/battle-of-the-fans/articles/$slug  (moved from /articles/$slug)
/battle-of-the-fans/about           Blog's own about (moved from /about → renamed)
```

The football section keeps its red/white magazine identity and its own Battle of the fans header/footer, so it still feels like a standalone publication when a reader lands there.

## Visual system

Kelele Digital pages get a distinct but compatible identity so the parent brand doesn't look like the blog:

- Palette: deep near-black background option for hero, warm off-white body, bold red accent shared with Battle of the fans, plus a secondary electric-lime accent for Kelele-only surfaces (marketing feel).
- Typography reuses Space Grotesk + DM Sans already loaded.
- Motion: reuse `use-reveal` scroll fades, hover lifts, marquee for a "brands / clients" strip.

New tokens (`--kelele-accent`, `--kelele-ink`) added to `src/styles.css` alongside existing ones.

## Homepage sections (Kelele Digital `/`)

```text
[ Corporate header: Kelele logo | Home  Services  Brands  About  Contact ]
[ HERO: oversized wordmark "KELELE DIGITAL", tagline, dual CTA (Our brands / Work with us) ]
[ Marquee strip: "STORYTELLING • DIGITAL MARKETING • NEWSROOMS • CULTURE" ]
[ What we do: 3 service cards (News & Politics, Entertainment & Culture, Digital Marketing) ]
[ Our brands: featured tile for Battle of the fans (links to /battle-of-the-fans) + 2 placeholder brand tiles ]
[ Latest from our newsroom: pulls 3 Battle of the fans articles as a preview ]
[ Contact band: address/phone/email all "0000", CTA to /contact ]
[ Footer ]
```

## Component/file changes

New:
- `src/components/kelele/KeleleHeader.tsx`, `KeleleFooter.tsx`, `ServiceCard.tsx`, `BrandCard.tsx`, `KeleleMarquee.tsx`
- `src/routes/index.tsx` — replaced with Kelele home
- `src/routes/about.tsx` — replaced with Kelele about (existing blog about moves to `/kenyan-kick/about`)
- `src/routes/services.tsx`, `src/routes/brands.tsx`, `src/routes/contact.tsx`
- `src/routes/battle-of-the-fans.tsx` — layout route rendering `<Outlet />` with the existing football `Header`/`Footer`
- `src/routes/battle-of-the-fans.index.tsx` — current magazine homepage body
- `src/routes/battle-of-the-fans.harambee-stars.tsx`, `battle-of-the-fans.premier-league.tsx`, `battle-of-the-fans.about.tsx`, `battle-of-the-fans.articles.$slug.tsx`
- `src/assets/kelele-hero.jpg`, `kelele-brand-*.jpg` (generated)

Removed (moved into `/battle-of-the-fans/*`):
- `src/routes/harambee-stars.tsx`, `premier-league.tsx`, `articles.$slug.tsx` (old locations)

Updated:
- Football `Header`/`Footer` `Link to=` paths retargeted to the `/battle-of-the-fans/...` routes.
- `__root.tsx` meta updated to reference Kelele Digital as the site identity; per-route `head()` keeps unique title/description/og for each new page.
- `src/lib/articles.ts` article `href` helper (if used) rewritten to `/battle-of-the-fans/articles/$slug`.

## Contact page details

- Company: Kelele Digital
- Address: 0000, Nairobi, Kenya
- Phone: +254 000 000 000
- Email: hello@0000
- Simple form (name / email / message) with client-side validation only — submit shows a toast, no backend.

## Out of scope

- No CMS, auth, analytics, or real form submission.
- No new sports content — Battle of the fans keeps its existing demo articles.
- No changes to the cPanel deploy setup.

## Technical notes

- New routes use TanStack file-based routing with dot-separated names (`battle-of-the-fans.harambee-stars.tsx`) matching `createFileRoute("/battle-of-the-fans/harambee-stars")`.
- `battle-of-the-fans.tsx` is a layout route whose component returns `<Outlet />` wrapped in the football `Header`/`Footer`, so nested pages inherit the blog chrome without each importing them.
- Every new route defines its own `head()` with unique title, description, og:title, og:description. Leaf routes with a hero image also set `og:image` / `twitter:image` from that asset.
- Absolute internal navigation everywhere uses `<Link to=...>`; no hash-anchor pseudo-pages.
