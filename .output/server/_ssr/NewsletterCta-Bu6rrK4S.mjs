import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NewsletterCta-Bu6rrK4S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsletterCta() {
	const ref = useReveal();
	const [email, setEmail] = (0, import_react.useState)("");
	const [ok, setOk] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "reveal mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[11px] font-bold uppercase tracking-[0.28em] opacity-80",
					children: "The Weekly Whistle"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-bold leading-[1.05] md:text-6xl",
					children: [
						"Kenyan football,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"in your inbox every Monday."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						if (email) setOk(true);
					},
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-80",
						children: "One email. Match analysis, transfer rumours, and the best of the FKF Premier League."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "you@example.com",
							className: "flex-1 border-2 border-primary-foreground/30 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "border-2 border-primary-foreground bg-primary-foreground px-6 py-3 font-display font-bold uppercase tracking-widest text-primary transition-all hover:-translate-y-0.5 hover:shadow-lg",
							children: ok ? "You're in" : "Subscribe"
						})]
					})]
				})]
			})
		})
	});
}
//#endregion
export { NewsletterCta as t };
