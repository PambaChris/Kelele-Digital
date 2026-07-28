import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
import { n as Header, t as Footer } from "./Footer-DuZIU6Pt.mjs";
import { t as NewsletterCta } from "./NewsletterCta-Bu6rrK4S.mjs";
import { a as scores, r as harambee_default, t as articles } from "./articles-DAWs5h_R.mjs";
import { t as ArticleCard } from "./ArticleCard-JsBL8X8O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.index-CEf6fMHU.js
var import_jsx_runtime = require_jsx_runtime();
function Ticker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full overflow-hidden border-b border-border bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex animate-[marquee_40s_linear_infinite] whitespace-nowrap py-2.5",
			children: [...scores, ...scores].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-6 flex items-center gap-3 text-xs uppercase tracking-widest",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-70",
						children: s.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: s.home
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-sm bg-primary-foreground/15 px-2 py-0.5 font-display font-bold",
						children: s.score
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: s.away
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-40",
						children: "•"
					})
				]
			}, i))
		})
	});
}
function FeatureHero({ article }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/Battle-Of-The-Fans/articles/$slug",
			params: { slug: article.slug },
			className: "group relative block h-[68vh] min-h-[520px] w-full overflow-hidden bg-[var(--ink)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.image,
					alt: article.title,
					className: "absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-[1400ms] ease-out group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-7xl px-4 pb-12 md:px-6 md:pb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 inline-flex items-center gap-2 bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-white" }), article.category]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl",
									children: article.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl text-base text-white/80 md:text-lg",
									children: article.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-white/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.author }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.date }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [article.readTime, " read"] })
									]
								})
							]
						})
					})
				})
			]
		})
	});
}
function SectionHeading({ eyebrow, title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useReveal(),
		className: "reveal mb-8 flex items-end justify-between gap-6 border-b-2 border-foreground pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-bold tracking-tight md:text-5xl",
			children: title
		})] }), action]
	});
}
function Home() {
	const feature = articles.find((a) => a.featured) ?? articles[0];
	const [second, third, fourth, fifth, sixth, ...rest] = articles.filter((a) => a.slug !== feature.slug);
	const spotlightRef = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureHero, { article: feature }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Latest",
							title: "On the front page"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: second }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: third }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: fourth }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: fifth })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "md:border-l md:border-border md:pl-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
								children: "Most read"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-6 font-display text-2xl font-bold",
								children: "This week"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-6",
								children: [sixth, ...rest].slice(0, 5).map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4 border-b border-border pb-6 last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl font-bold text-primary/70",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/battle-of-the-fans/articles/$slug",
										params: { slug: a.slug },
										className: "group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
											children: a.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-base font-semibold leading-tight group-hover:text-primary",
											children: a.title
										})]
									})]
								}, a.slug))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[var(--ink)] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: spotlightRef,
					className: "reveal mx-auto grid max-w-7xl gap-0 px-0 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] overflow-hidden md:aspect-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: harambee_default,
							alt: "Harambee Stars huddle",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center gap-8 p-8 md:p-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
								children: "Spotlight / Harambee Stars"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
								children: [
									"The road to",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"AFCON 2027."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-white/70",
								children: "Every match, every call-up, every tactical tweak — tracked from the moment McCarthy took charge."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-6 border-y border-white/10 py-6",
								children: [
									{
										k: "W",
										v: "6"
									},
									{
										k: "D",
										v: "2"
									},
									{
										k: "L",
										v: "1"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-5xl font-bold text-primary",
									children: s.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs uppercase tracking-widest text-white/60",
									children: s.k === "W" ? "Wins" : s.k === "D" ? "Draws" : "Losses"
								})] }, s.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/battle-of-the-fans/harambee-stars",
								className: "inline-flex w-fit items-center gap-2 border-2 border-white bg-transparent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[var(--ink)]",
								children: "Enter the section →"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Premier League watch",
					title: "From Nairobi with an English accent.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/battle-of-the-fans/premier-league",
						className: "story-link hidden text-sm font-semibold text-foreground md:inline-block",
						children: "See all"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-3",
					children: articles.filter((a) => a.category === "Premier League").slice(0, 3).map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
						article: a,
						size: i === 0 ? "lg" : "md"
					}, a.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
