import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as KeleleHeader, t as KeleleFooter } from "./KeleleFooter-CGKPoiWp.mjs";
import { t as hero_player_default } from "./hero-player-D7pg87Ne.mjs";
import { t as BrandCard } from "./BrandCard-WIo6FP2-.mjs";
import { n as kelele_news_default, t as kelele_culture_default } from "./kelele-culture-CapX4Q95.mjs";
import { t as kelele_marketing_default } from "./kelele-marketing-BM8reHBt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-D4O_vPlc.js
var import_jsx_runtime = require_jsx_runtime();
function BrandsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
							children: "Our brands"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl",
							children: [
								"Mastheads we own.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Voices we're building."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-muted-foreground",
							children: "Every Kelele Digital brand is editor-led. One live today, more on the way."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
							featured: true,
							name: "Battle Of The Fans",
							tagline: "Sports · Live",
							status: "Live",
							image: hero_player_default,
							to: "/battle-of-the-fans",
							description: "An independent Kenyan football journal covering Harambee Stars, the FKF Premier League and the English Premier League from a Nairobi perspective."
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
							name: "Sauti Room",
							tagline: "Music & culture",
							status: "Soon",
							image: kelele_culture_default,
							description: "A weekly culture podcast and newsletter covering the Kenyan music scene."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
							name: "Nairobi Wire",
							tagline: "News & politics",
							status: "Soon",
							image: kelele_news_default,
							description: "A daily news brief for East Africa. Serious reporting, no clickbait."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
						name: "Kelele Studios",
						tagline: "Brand studio",
						status: "Client work",
						image: kelele_marketing_default,
						description: "Our in-house branded content and campaign arm for external clients."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
						name: "More coming",
						tagline: "In development",
						status: "TBA",
						image: kelele_news_default,
						description: "A politics vertical and a business title are in early development. Watch this space."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleFooter, {})
		]
	});
}
//#endregion
export { BrandsPage as component };
