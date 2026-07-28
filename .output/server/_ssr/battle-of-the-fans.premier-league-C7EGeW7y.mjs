import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Header, t as Footer } from "./Footer-DuZIU6Pt.mjs";
import { t as NewsletterCta } from "./NewsletterCta-Bu6rrK4S.mjs";
import { i as premier_league_default, t as articles } from "./articles-DAWs5h_R.mjs";
import { t as ArticleCard } from "./ArticleCard-JsBL8X8O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.premier-league-C7EGeW7y.js
var import_jsx_runtime = require_jsx_runtime();
function PLPage() {
	const stories = articles.filter((a) => a.category === "Premier League");
	const others = articles.filter((a) => a.category !== "Premier League").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-[var(--ink)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: premier_league_default,
						alt: "Premier League",
						className: "h-full w-full object-cover opacity-60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-16 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 inline-block bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em]",
									children: "Section"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-5xl font-bold md:text-7xl",
									children: "Premier League"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-white/80",
									children: "Twenty clubs, one obsession. The EPL from a Nairobi perspective."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: stories.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: a }, a.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 pb-20 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 border-b-2 border-foreground pb-4 font-display text-3xl font-bold",
					children: "Also from Battle of the fans"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: others.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
						article: a,
						size: "sm"
					}, a.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PLPage as component };
