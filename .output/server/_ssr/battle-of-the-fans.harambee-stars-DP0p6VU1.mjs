import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Header, t as Footer } from "./Footer-DuZIU6Pt.mjs";
import { t as NewsletterCta } from "./NewsletterCta-Bu6rrK4S.mjs";
import { r as harambee_default, t as articles } from "./articles-DAWs5h_R.mjs";
import { t as ArticleCard } from "./ArticleCard-JsBL8X8O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.harambee-stars-DP0p6VU1.js
var import_jsx_runtime = require_jsx_runtime();
function HarambeePage() {
	const stories = articles.filter((a) => a.category === "Harambee Stars");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-[var(--ink)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: harambee_default,
						alt: "Harambee Stars",
						className: "h-full w-full object-cover opacity-60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-16 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary-foreground bg-primary inline-block px-3 py-1",
									children: "Section"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-5xl font-bold md:text-7xl",
									children: "Harambee Stars"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-white/80",
									children: "The men and women in red. Match reports, tactics, and the long walk to AFCON."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HarambeePage as component };
