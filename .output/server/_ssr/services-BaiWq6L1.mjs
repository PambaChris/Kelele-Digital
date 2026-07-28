import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Newspaper, n as Sparkles, o as Megaphone } from "../_libs/lucide-react.mjs";
import { n as KeleleHeader, t as KeleleFooter } from "./KeleleFooter-CGKPoiWp.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
import { n as kelele_news_default, t as kelele_culture_default } from "./kelele-culture-CapX4Q95.mjs";
import { t as kelele_marketing_default } from "./kelele-marketing-BM8reHBt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BaiWq6L1.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		id: "news",
		num: "01",
		title: "News & Politics",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-5 w-5" }),
		lede: "Reporting on Kenya and East Africa that respects the reader's intelligence.",
		body: "We staff editors and writers who know their beats. We publish long-form investigations, daily briefs, and op-eds under our own titles or on behalf of media partners.",
		offerings: [
			"Investigative reporting",
			"Daily news briefs & newsletters",
			"Political analysis and op-eds",
			"Live event coverage"
		],
		image: kelele_news_default
	},
	{
		id: "culture",
		num: "02",
		title: "Entertainment & Culture",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
		lede: "Music, film, sport and lifestyle — covered with the care they deserve.",
		body: "Reviews, artist profiles, video features, podcasts. Culture reporting that reads like it was written by fans who also happen to be journalists.",
		offerings: [
			"Artist profiles & interviews",
			"Music & film reviews",
			"Video features & shortdocs",
			"Podcast production"
		],
		image: kelele_culture_default
	},
	{
		id: "marketing",
		num: "03",
		title: "Digital Marketing",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" }),
		lede: "Editorial-grade campaigns for brands that care about the craft.",
		body: "Content strategy, social, branded newsrooms, paid and earned. We treat brand work with the same rigour as our editorial work — because it shows.",
		offerings: [
			"Content strategy & production",
			"Social media & community",
			"Branded newsrooms & partnerships",
			"Paid social & search campaigns"
		],
		image: kelele_marketing_default
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-[var(--surface)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl",
							children: [
								"Three practices.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"One newsroom mindset."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-muted-foreground",
							children: "Whether we're publishing under our own masthead or building a campaign for a client, the standard is the same: work that people actually want to read, watch, and share."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 md:px-6",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceRow, {
					service: s,
					reverse: i % 2 === 1
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-[var(--kelele-ink)] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl font-display text-3xl font-bold md:text-5xl",
						children: "Ready to talk about your project?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5",
						children: "Contact us →"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleFooter, {})
		]
	});
}
function ServiceRow({ service, reverse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: useReveal(),
		className: "reveal grid gap-10 border-b border-border py-20 last:border-0 md:grid-cols-12 md:gap-16 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `md:col-span-6 ${reverse ? "md:order-2" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/3] overflow-hidden bg-[var(--kelele-ink)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.title,
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `md:col-span-6 ${reverse ? "md:order-1" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]",
						children: service.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-bold text-primary/40",
						children: service.num
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-4xl font-bold leading-[1.05] md:text-5xl",
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg font-medium text-foreground/90",
					children: service.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground",
					children: service.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2",
					children: service.offerings.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-3 flex-none bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
					}, o))
				})
			]
		})]
	});
}
//#endregion
export { ServicesPage as component };
