import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BrandCard-WIo6FP2-.js
var import_jsx_runtime = require_jsx_runtime();
function BrandCard({ name, tagline, description, image, to, status, featured }) {
	const ref = useReveal();
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden bg-[var(--kelele-ink)] ${featured ? "aspect-[16/10]" : "aspect-[4/5]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: name,
				loading: "lazy",
				className: "h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
			status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-4 top-4 bg-[var(--kelele-accent)] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--kelele-ink)]",
				children: status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-6 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--kelele-accent)]",
					children: tagline
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl font-bold leading-tight md:text-4xl",
					children: name
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-x border-b border-border bg-background p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: description
		}), to && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary",
			children: [
				"Visit ",
				name,
				" →"
			]
		})]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		ref,
		className: "reveal group block",
		children: to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			children: inner
		}) : inner
	});
}
//#endregion
export { BrandCard as t };
