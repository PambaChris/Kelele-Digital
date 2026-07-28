import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Newspaper, l as ArrowRight, n as Sparkles, o as Megaphone } from "../_libs/lucide-react.mjs";
import { n as KeleleHeader, t as KeleleFooter } from "./KeleleFooter-CGKPoiWp.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
import { t as hero_player_default } from "./hero-player-D7pg87Ne.mjs";
import { t as articles } from "./articles-DAWs5h_R.mjs";
import { t as BrandCard } from "./BrandCard-WIo6FP2-.mjs";
import { n as kelele_news_default, t as kelele_culture_default } from "./kelele-culture-CapX4Q95.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BWfp3pZV.js
var import_jsx_runtime = require_jsx_runtime();
var words = [
	"Storytelling",
	"Newsrooms",
	"Digital Marketing",
	"Podcasts",
	"Brand Studios",
	"Culture",
	"Sports Media",
	"Editorial"
];
function KeleleMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full overflow-hidden border-y border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex animate-[marquee_38s_linear_infinite] whitespace-nowrap py-5",
			children: [...words, ...words].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-8 flex items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-4xl",
					children: w
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "✦"
				})]
			}, i))
		})
	});
}
function ServiceCard({ number, title, description, bullets, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useReveal(),
		className: "reveal group relative flex h-full flex-col border border-border bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:border-foreground hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]",
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl font-bold text-foreground/10 transition-colors group-hover:text-primary/30",
					children: number
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-bold leading-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2 border-t border-border pt-6 text-sm",
				children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-3 flex-none bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
				}, b))
			})
		]
	});
}
var kelele_hero_default = "/assets/kelele-hero-b3S2511V.jpg";
function Home() {
	const featureRef = useReveal();
	const previews = articles.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-[var(--kelele-ink)] text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: kelele_hero_default,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover opacity-35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--kelele-ink)]/50 via-[var(--kelele-ink)]/70 to-[var(--kelele-ink)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-12 md:px-6 md:py-36",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--kelele-accent)] backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--kelele-accent)]" }), "Nairobi · Est. 2024"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[9.5rem]",
									children: [
										"Kelele",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[var(--kelele-accent)]",
											children: "Digital."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-2xl text-lg text-white/80 md:text-xl",
									children: "A Nairobi media house building newsrooms, cultural coverage and marketing campaigns that actually get people talking."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/brands",
										className: "inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5",
										children: ["See our brands ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[var(--kelele-ink)]",
										children: "Work with us"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:col-span-3 md:flex md:items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l-2 border-[var(--kelele-accent)] pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-[0.28em] text-white/60",
									children: "Kelele /ke-le-le/"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-sm text-white/80",
									children: ["Swahili. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Noise. Buzz. The sound of a room that's paying attention." })]
								})]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 grid gap-6 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
								children: "What we do"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
								children: [
									"Three practices.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"One newsroom mindset."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl self-end text-lg text-muted-foreground md:col-span-6 md:col-start-6",
							children: "We publish under our own mastheads, we cover the culture, and we help brands sound like they belong in the conversation."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								number: "01",
								title: "News & Politics",
								description: "In-depth reporting on Kenya and the region, without the noise.",
								bullets: [
									"Long-form",
									"Investigations",
									"Op-eds",
									"Daily briefs"
								],
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								number: "02",
								title: "Entertainment & Culture",
								description: "Music, film, sport and the culture around them, told properly.",
								bullets: [
									"Reviews",
									"Profiles",
									"Video features",
									"Podcasts"
								],
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								number: "03",
								title: "Digital Marketing",
								description: "Editorial-grade campaigns for brands who care about the craft.",
								bullets: [
									"Content strategy",
									"Social",
									"Branded newsrooms",
									"Paid + earned"
								],
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "story-link text-sm font-semibold",
							children: "See how we work →"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[var(--surface)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 grid items-end gap-6 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
								children: "Our brands"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
								children: [
									"Mastheads we own,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"and voices we love."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-4 md:col-start-9 md:text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/brands",
								className: "story-link text-sm font-semibold",
								children: "All brands →"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
								featured: true,
								name: "Battle Of The Fans",
								tagline: "Sports · Live",
								description: "An independent Kenyan football journal covering Harambee Stars, the FKF Premier League and the English Premier League from a Nairobi perspective.",
								image: hero_player_default,
								to: "/battle-of-the-fans",
								status: "Live"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
								name: "Sauti Room",
								tagline: "Music & culture",
								description: "A culture podcast + newsletter. Coming soon.",
								image: kelele_culture_default,
								status: "Soon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandCard, {
								name: "Nairobi Wire",
								tagline: "News & politics",
								description: "A daily news brief for East Africa. In development.",
								image: kelele_news_default,
								status: "Soon"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: featureRef,
					className: "reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between border-b-2 border-foreground pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
							children: "Latest from the newsroom"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold md:text-5xl",
							children: "Battle Of The Fans, this week."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/battle-of-the-fans",
							className: "story-link hidden text-sm font-semibold md:inline-block",
							children: "Read more →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-10 md:grid-cols-3",
						children: previews.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/battle-of-the-fans/articles/$slug",
							params: { slug: a.slug },
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[3/2] overflow-hidden bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: a.image,
										alt: a.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground",
										children: a.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold leading-tight group-hover:text-primary",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: a.excerpt
								})
							]
						}, a.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[var(--kelele-ink)] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--kelele-accent)]",
							children: "Work with us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
							children: "Got a story, a brand, or a launch?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-white/70",
							children: "Tell us what you're building. We'll tell you how we'd cover it, produce it, or promote it."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:justify-self-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 bg-[var(--kelele-accent)] px-8 py-5 font-display text-base font-bold uppercase tracking-widest text-[var(--kelele-ink)] transition-all hover:-translate-y-0.5",
							children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleFooter, {})
		]
	});
}
//#endregion
export { Home as component };
