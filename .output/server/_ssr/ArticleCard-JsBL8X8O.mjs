import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArticleCard-JsBL8X8O.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleCard({ article, size = "md" }) {
	const ref = useReveal();
	const aspect = size === "lg" ? "aspect-[4/5]" : size === "sm" ? "aspect-[4/3]" : "aspect-[3/2]";
	const titleSize = size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-base" : "text-xl md:text-2xl";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		ref,
		className: "reveal group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/Battle-Of-The-Fans/articles/$slug",
			params: { slug: article.slug },
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative overflow-hidden ${aspect} bg-muted`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.image,
					alt: article.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-3 top-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground",
						children: article.category
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `font-display font-bold leading-tight text-foreground transition-colors group-hover:text-primary ${titleSize}`,
						children: article.title
					}),
					size !== "sm" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground line-clamp-2",
						children: article.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: article.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.readTime })
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { ArticleCard as t };
