import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as premier_league_default, r as harambee_default } from "./articles-DAWs5h_R.mjs";
import { t as Route$11 } from "./battle-of-the-fans.articles._slug-C3209EB7.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cycu96av.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C3nz76Ew.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-8xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl font-semibold text-foreground",
					children: "Off the pitch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: "Back to the front page"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Kelele Digital — A Nairobi media house" },
			{
				name: "description",
				content: "Kelele Digital is a Nairobi-based media house behind newsrooms, cultural coverage and digital marketing across Kenya and East Africa."
			},
			{
				name: "author",
				content: "Kelele Digital"
			},
			{
				property: "og:title",
				content: "Kelele Digital — A Nairobi media house"
			},
			{
				property: "og:description",
				content: "News, culture and digital marketing — from Nairobi. Home of Battle Of The Fans and other stories."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Kelele Digital"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./services-BaiWq6L1.mjs");
var Route$9 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Kelele Digital" },
		{
			name: "description",
			content: "News & politics reporting, entertainment & culture coverage, and digital marketing services from Kelele Digital in Nairobi."
		},
		{
			property: "og:title",
			content: "Services — Kelele Digital"
		},
		{
			property: "og:description",
			content: "News, culture, and digital marketing — three practices, one newsroom mindset."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-Bk7tNzfF.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Kelele Digital" },
		{
			name: "description",
			content: "Get in touch with Kelele Digital in Nairobi — for editorial pitches, partnerships, or brand work."
		},
		{
			property: "og:title",
			content: "Contact — Kelele Digital"
		},
		{
			property: "og:description",
			content: "Reach the Kelele Digital newsroom and studio in Nairobi."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./brands-D4O_vPlc.mjs");
var Route$7 = createFileRoute("/brands")({
	head: () => ({ meta: [
		{ title: "Brands — Kelele Digital" },
		{
			name: "description",
			content: "The mastheads and shows published by Kelele Digital — starting with Battle Of The Fans."
		},
		{
			property: "og:title",
			content: "Brands — Kelele Digital"
		},
		{
			property: "og:description",
			content: "Meet the titles we publish under the Kelele Digital roof."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./battle-of-the-fans-Dhm1apbU.mjs");
var Route$6 = createFileRoute("/battle-of-the-fans")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./about-BtlB3Ldy.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Kelele Digital" },
		{
			name: "description",
			content: "Kelele Digital is a Nairobi-based media house building newsrooms, culture coverage and digital marketing. Meet the people behind the noise."
		},
		{
			property: "og:title",
			content: "About — Kelele Digital"
		},
		{
			property: "og:description",
			content: "The mission, the people and the practice behind Kelele Digital."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./routes-BWfp3pZV.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Kelele Digital — A Nairobi media house" },
		{
			name: "description",
			content: "Kelele Digital publishes newsrooms, cultural coverage and digital marketing campaigns from Nairobi. Home of Battle Of The Fans."
		},
		{
			property: "og:title",
			content: "Kelele Digital — A Nairobi media house"
		},
		{
			property: "og:description",
			content: "News. Culture. Marketing. Storytelling from Nairobi."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./battle-of-the-fans.index-CEf6fMHU.mjs");
var Route$3 = createFileRoute("/battle-of-the-fans/")({
	head: () => ({ meta: [
		{ title: "Battle of the fans — Kenyan football, unfiltered" },
		{
			name: "description",
			content: "Match analysis, transfer news, and match-day culture from the FKF Premier League to the Emirates."
		},
		{
			property: "og:title",
			content: "Battle of the fans — Kenyan football, unfiltered"
		},
		{
			property: "og:description",
			content: "Independent Kenyan football journalism from Nairobi."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./battle-of-the-fans.premier-league-C7EGeW7y.mjs");
var Route$2 = createFileRoute("/battle-of-the-fans/premier-league")({
	head: () => ({ meta: [
		{ title: "Premier League — Battle of the fans" },
		{
			name: "description",
			content: "The English Premier League, watched, argued about, and loved from Nairobi."
		},
		{
			property: "og:title",
			content: "Premier League — Battle of the fans"
		},
		{
			property: "og:description",
			content: "EPL match analysis and fan culture from Kenya."
		},
		{
			property: "og:image",
			content: premier_league_default
		},
		{
			name: "twitter:image",
			content: premier_league_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./battle-of-the-fans.harambee-stars-DP0p6VU1.mjs");
var Route$1 = createFileRoute("/battle-of-the-fans/harambee-stars")({
	head: () => ({ meta: [
		{ title: "Harambee Stars — Battle of the fans" },
		{
			name: "description",
			content: "Every Harambee Stars match, call-up and tactical shift, tracked from Nairobi."
		},
		{
			property: "og:title",
			content: "Harambee Stars — Battle of the fans"
		},
		{
			property: "og:description",
			content: "Coverage of the Kenya national football team."
		},
		{
			property: "og:image",
			content: harambee_default
		},
		{
			name: "twitter:image",
			content: harambee_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./battle-of-the-fans.about-N-8QcpYt.mjs");
var Route = createFileRoute("/battle-of-the-fans/about")({
	head: () => ({ meta: [
		{ title: "About — Battle Of The Fans" },
		{
			name: "description",
			content: "Battle Of The Fans is an independent Kenyan football journal, written from Nairobi."
		},
		{
			property: "og:title",
			content: "About — Battle Of The Fans"
		},
		{
			property: "og:description",
			content: "The people, the mission, and the football behind Battle Of The Fans."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$9.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var BrandsRoute = Route$7.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => Route$10
});
var BattleOfTheFansRoute = Route$6.update({
	id: "/battle-of-the-fans",
	path: "/battle-of-the-fans",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var BattleOfTheFansIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => BattleOfTheFansRoute
});
var BattleOfTheFansPremierLeagueRoute = Route$2.update({
	id: "/premier-league",
	path: "/premier-league",
	getParentRoute: () => BattleOfTheFansRoute
});
var BattleOfTheFansHarambeeStarsRoute = Route$1.update({
	id: "/harambee-stars",
	path: "/harambee-stars",
	getParentRoute: () => BattleOfTheFansRoute
});
var BattleOfTheFansRouteChildren = {
	BattleOfTheFansAboutRoute: Route.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => BattleOfTheFansRoute
	}),
	BattleOfTheFansHarambeeStarsRoute,
	BattleOfTheFansPremierLeagueRoute,
	BattleOfTheFansIndexRoute,
	BattleOfTheFansArticlesSlugRoute: Route$11.update({
		id: "/articles/$slug",
		path: "/articles/$slug",
		getParentRoute: () => BattleOfTheFansRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BattleOfTheFansRoute: BattleOfTheFansRoute._addFileChildren(BattleOfTheFansRouteChildren),
	BrandsRoute,
	ContactRoute,
	ServicesRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
