import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Header, t as Footer } from "./Footer-DuZIU6Pt.mjs";
import { t as NewsletterCta } from "./NewsletterCta-Bu6rrK4S.mjs";
import { t as articles } from "./articles-DAWs5h_R.mjs";
import { t as Route } from "./battle-of-the-fans.articles._slug-C3209EB7.mjs";
import { t as ArticleCard } from "./ArticleCard-JsBL8X8O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.articles._slug-C6Wh1pQm.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleDetail() {
	const { article } = Route.useLoaderData();
	const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-[var(--ink)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: article.title,
						className: "h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-4xl px-4 pb-12 md:px-6 md:pb-16 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 inline-block bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]",
									children: article.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
									children: article.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 text-xs uppercase tracking-widest text-white/70",
									children: [
										article.author,
										" / ",
										article.date,
										" / ",
										article.readTime,
										" read"
									]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-16 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-medium leading-relaxed text-foreground",
					children: article.excerpt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-6 text-lg leading-relaxed text-foreground/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kasarani was heaving from an hour before kick-off. Red shirts, vuvuzelas, and the low pulse of Sauti Sol on the tannoy. This is what a Harambee Stars home match feels like when belief returns." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The tactical story of the night was simple: a higher line, quicker rest-defence, and a midfield that finally trusted itself in possession. When the equaliser came, it felt inevitable." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "border-l-4 border-primary bg-[var(--surface)] p-6 font-display text-2xl leading-snug",
							children: "“We didn't just want to compete. We wanted to dictate. That's the new standard.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The next window will tell us whether this is the beginning of something, or another false dawn. For tonight, at least, the conversation felt different — sharper, more ambitious, less resigned." })
					]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 pb-20 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 border-b-2 border-foreground pb-4 font-display text-3xl font-bold",
					children: "Keep reading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: related.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: a }, a.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ArticleDetail as component };
