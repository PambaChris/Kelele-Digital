import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
import { n as Header, t as Footer } from "./Footer-DuZIU6Pt.mjs";
import { t as NewsletterCta } from "./NewsletterCta-Bu6rrK4S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.about-N-8QcpYt.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
							children: "About the blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl font-bold leading-[1.02] md:text-7xl",
							children: [
								"Written from Nairobi.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"For everyone who loves the game."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-6 text-lg leading-relaxed text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Battle Of The Fans is an independent football journal covering Harambee Stars, the FKF Premier League, and the English Premier League from a Nairobi perspective." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are a small team of writers, sub-editors and photographers who believe Kenyan football deserves the same tactical detail, cultural context and editorial care given to the biggest leagues in the world." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No hot takes for the sake of it. No manufactured outrage. Just football, told well." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid gap-6 border-t-2 border-foreground pt-10 sm:grid-cols-3",
							children: [
								{
									k: "Est.",
									v: "2024"
								},
								{
									k: "Writers",
									v: "12"
								},
								{
									k: "City",
									v: "Nairobi"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-bold text-primary",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
								children: s.k
							})] }, s.k))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
