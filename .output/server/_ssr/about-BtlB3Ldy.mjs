import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as KeleleHeader, t as KeleleFooter } from "./KeleleFooter-CGKPoiWp.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BtlB3Ldy.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
							children: "About Kelele Digital"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl font-bold leading-[1.02] md:text-7xl",
							children: [
								"A Nairobi media house.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Built for the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "noise"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-6 text-lg leading-relaxed text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kelele Digital is an independent media house based in Nairobi. We own newsrooms, produce cultural coverage, and build digital marketing campaigns for brands that want to be part of the conversation — not just interrupt it." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We started because the best Kenyan stories were being told in formats that didn't do them justice. Our answer: build the mastheads, hire the writers, produce the work." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Today, our flagship title is ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Battle Of the Fans" }),
									", a football journal covering Harambee Stars and the FKF Premier League. More titles are on the way."
								] })
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
									k: "Team",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:-translate-y-0.5",
								children: "Get in touch →"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
