globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-28T08:01:27.941Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/favicon.ico:Zone.Identifier": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-xShx0XhQ/kS0+KgJIw3+MQfeOAM\"",
		"mtime": "2026-07-28T08:01:27.941Z",
		"size": 25,
		"path": "../public/favicon.ico:Zone.Identifier"
	},
	"/assets/ArticleCard-CswyyWhH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63b-qFzQ5qUw4jCHvxFDYOpSZ5UEh6Y\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1595,
		"path": "../public/assets/ArticleCard-CswyyWhH.js"
	},
	"/assets/BrandCard-DRoz7zMp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"641-OsGT2c3fvFXvLkO+M4h109TOl40\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1601,
		"path": "../public/assets/BrandCard-DRoz7zMp.js"
	},
	"/assets/Footer-Ci8PoNGj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"120f-sXYCZMWzhaIPcYCWJSfLXkrKn/8\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 4623,
		"path": "../public/assets/Footer-Ci8PoNGj.js"
	},
	"/assets/KeleleFooter-JW3aElan.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1230-XMXslX93B4Gyme9jJsbL7wTYgoQ\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 4656,
		"path": "../public/assets/KeleleFooter-JW3aElan.js"
	},
	"/assets/NewsletterCta-zM-MCSJ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7-2qVO4WgeBMMRK4PIecyLEFk4s0U\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1703,
		"path": "../public/assets/NewsletterCta-zM-MCSJ4.js"
	},
	"/assets/about-BNsUjxRD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8fe-WoTKI6NtLzrnw6mWzjDe3g+DfLk\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 2302,
		"path": "../public/assets/about-BNsUjxRD.js"
	},
	"/assets/battle-of-the-fans-Bp83SU-s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-rFzLtJrMvzGYyqbI7XDpr/9+Lzk\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 138,
		"path": "../public/assets/battle-of-the-fans-Bp83SU-s.js"
	},
	"/assets/battle-of-the-fans.articles._slug-BO109Cz3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b32-fjRXlFQiFfuePXF0O63mrN1gT0w\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 2866,
		"path": "../public/assets/battle-of-the-fans.articles._slug-BO109Cz3.js"
	},
	"/assets/battle-of-the-fans.about-CYYVQkYU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73a-Z2iYTKjwyus+0/Q9OSdIFuRh+wk\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1850,
		"path": "../public/assets/battle-of-the-fans.about-CYYVQkYU.js"
	},
	"/assets/battle-of-the-fans.articles._slug-DVxrl_K8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b1-oFrfl7Lm8W10GUPfiP4HWmamXIU\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 689,
		"path": "../public/assets/battle-of-the-fans.articles._slug-DVxrl_K8.js"
	},
	"/assets/battle-of-the-fans.harambee-stars-DRk4sPYV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60f-oHocjAOqgdIF8Ceun9PBHRQoI6I\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1551,
		"path": "../public/assets/battle-of-the-fans.harambee-stars-DRk4sPYV.js"
	},
	"/assets/battle-of-the-fans.premier-league-D4ZnzZbW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77f-25xA4ZCeuR6M5JWwaNLfLAUb/Dw\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1919,
		"path": "../public/assets/battle-of-the-fans.premier-league-D4ZnzZbW.js"
	},
	"/assets/battle-of-the-fans.index-DPlON1S-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ab2-+zdTjAKdemy+var4e9OcdXTmLjw\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 6834,
		"path": "../public/assets/battle-of-the-fans.index-DPlON1S-.js"
	},
	"/assets/boot-CBCqatry.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cbac-cOEseGwcE5jasKxnEG4V6tuaJLc\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 117676,
		"path": "../public/assets/boot-CBCqatry.jpg"
	},
	"/assets/brands-M5ZGMxms.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94a-j4sPS/W0W7QGvdquXtKRvgb/UmE\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 2378,
		"path": "../public/assets/brands-M5ZGMxms.js"
	},
	"/assets/coach-Low-uVXZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"19138-8T+v+S9a/nVu2yArOPGbCdeb6MU\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 102712,
		"path": "../public/assets/coach-Low-uVXZ.jpg"
	},
	"/assets/contact-e5FjeGIe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"162c-elfuOJcQCM2UC1pWpRfxDK6XAec\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 5676,
		"path": "../public/assets/contact-e5FjeGIe.js"
	},
	"/assets/harambee-DD5e6Pt1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c577-0mWQX9OOJd2UjmkcTktPTlPSr/s\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 116087,
		"path": "../public/assets/harambee-DD5e6Pt1.jpg"
	},
	"/assets/hero-player-D6PS-Z3Z.jpg": {
		"type": "image/jpeg",
		"etag": "\"f5a9-rCsKBtta8X2b+MG55AT6Loz+4ws\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 62889,
		"path": "../public/assets/hero-player-D6PS-Z3Z.jpg"
	},
	"/assets/index-DXoJKDcd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"500b8-Z9zG5eBo+vuWDzGWy4FNuVQEDyY\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 327864,
		"path": "../public/assets/index-DXoJKDcd.js"
	},
	"/assets/kelele-culture-BO2aQ8dV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62-ViP8+Qsr6haaEMlKwKxbyuzH4CI\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 98,
		"path": "../public/assets/kelele-culture-BO2aQ8dV.js"
	},
	"/assets/kelele-culture-cdu8Ld7n.jpg": {
		"type": "image/jpeg",
		"etag": "\"d690-GmMtFNSHCozNUotsbvyyaFOhyQA\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 54928,
		"path": "../public/assets/kelele-culture-cdu8Ld7n.jpg"
	},
	"/assets/kelele-hero-b3S2511V.jpg": {
		"type": "image/jpeg",
		"etag": "\"10a61-5zS6Ru/bj/IJd2H58t/ksmk9ebs\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 68193,
		"path": "../public/assets/kelele-hero-b3S2511V.jpg"
	},
	"/assets/kelele-marketing-D9fnlC4v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d-6NaW8lho+6mL2kxU/y1iNfeGJSk\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 61,
		"path": "../public/assets/kelele-marketing-D9fnlC4v.js"
	},
	"/assets/kelele-marketing-BUtGgrkF.jpg": {
		"type": "image/jpeg",
		"etag": "\"14e83-So2XxtmnRli2YG+Tt6Wr2RQcVo4\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 85635,
		"path": "../public/assets/kelele-marketing-BUtGgrkF.jpg"
	},
	"/assets/kelele-news-Da2fzTkh.jpg": {
		"type": "image/jpeg",
		"etag": "\"164f2-KajfFLisRmaOQLNB+6ji2H7sIig\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 91378,
		"path": "../public/assets/kelele-news-Da2fzTkh.jpg"
	},
	"/assets/premier-league-DJRFbXnf.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b93b-PbkWr/3Dp4t9KVIwvdJJi63z2ts\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 112955,
		"path": "../public/assets/premier-league-DJRFbXnf.jpg"
	},
	"/assets/routes-BMPZPs5Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2953-2Px+QHUvdlQRMxthfEUUDuvLICI\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 10579,
		"path": "../public/assets/routes-BMPZPs5Q.js"
	},
	"/assets/services-BmxulCHG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b2-KcWUcODRRxcHij8gt3BmlWzDI9M\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 4786,
		"path": "../public/assets/services-BmxulCHG.js"
	},
	"/assets/sparkles-CEH5YeJL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41d-dzAOfTROxTnFdcuWEaAyEdf3Qqc\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1053,
		"path": "../public/assets/sparkles-CEH5YeJL.js"
	},
	"/assets/stadium-DVvs4itM.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ee5-cH9HkMENyyNdTrzt1C2kjl8FWuE\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 77541,
		"path": "../public/assets/stadium-DVvs4itM.jpg"
	},
	"/assets/styles-C3nz76Ew.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15d3f-KEpft1FvYcDD0rkb+DBjkYEDaH4\"",
		"mtime": "2026-07-28T08:01:27.105Z",
		"size": 89407,
		"path": "../public/assets/styles-C3nz76Ew.css"
	},
	"/assets/use-reveal-BhSje-PN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18f-sCO/BfSDCKOAnbwh+d23NEZYGW0\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 399,
		"path": "../public/assets/use-reveal-BhSje-PN.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/x-gbobEjlI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58b-q6G9xnk5M9L/cV1BAXnTQc8XpKg\"",
		"mtime": "2026-07-28T08:01:27.101Z",
		"size": 1419,
		"path": "../public/assets/x-gbobEjlI.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_cKUOw4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_cKUOw4
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
