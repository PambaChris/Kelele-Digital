import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as Mail, r as Phone, s as MapPin } from "../_libs/lucide-react.mjs";
import { n as KeleleHeader, t as KeleleFooter } from "./KeleleFooter-CGKPoiWp.mjs";
import { t as useReveal } from "./use-reveal-CQ-Nh7AM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bk7tNzfF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const ref = useReveal();
	const [state, setState] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "reveal grid gap-16 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl font-bold leading-[1.02] md:text-6xl",
								children: [
									"Say ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "kelele"
									}),
									".",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"We'll say it back."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-lg text-muted-foreground",
								children: "Editorial pitches, partnerships, brand work — anything at all. Our inbox is open."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-12 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
											children: "Studio"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-lg font-semibold",
											children: "0000, Nairobi, Kenya"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-lg font-semibold",
											children: "+254 000 000 000"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-lg font-semibold",
											children: "hello@0000"
										})] })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setError(null);
								if (!state.name || !state.email || !state.message) {
									setError("Please fill out every field.");
									return;
								}
								if (!/^\S+@\S+\.\S+$/.test(state.email)) {
									setError("That email doesn't look right.");
									return;
								}
								setSent(true);
							},
							className: "border border-border bg-[var(--surface)] p-8 md:p-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-bold uppercase tracking-[0.28em] text-primary",
									children: "Send us a note"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-bold",
									children: "Start a conversation."
								})]
							}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l-4 border-primary bg-background p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl font-bold",
									children: "Thanks — we've got it."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: "We reply to every message. Give us up to 48 hours."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: state.name,
											onChange: (e) => setState((s) => ({
												...s,
												name: e.target.value
											})),
											className: "w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary",
											placeholder: "Wanjiku Mwangi"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											value: state.email,
											onChange: (e) => setState((s) => ({
												...s,
												email: e.target.value
											})),
											className: "w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary",
											placeholder: "you@company.com"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Message",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 5,
											value: state.message,
											onChange: (e) => setState((s) => ({
												...s,
												message: e.target.value
											})),
											className: "w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary",
											placeholder: "Tell us what you're building…"
										})
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold text-primary",
										children: error
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "mt-4 inline-flex items-center gap-2 bg-[var(--kelele-ink)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-primary",
										children: "Send message →"
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeleleFooter, {})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { ContactPage as component };
