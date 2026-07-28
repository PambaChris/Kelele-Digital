import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getArticle } from "./articles-DAWs5h_R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/battle-of-the-fans.articles._slug-C3209EB7.js
var $$splitComponentImporter = () => import("./battle-of-the-fans.articles._slug-C6Wh1pQm.mjs");
var $$splitNotFoundComponentImporter = () => import("./battle-of-the-fans.articles._slug-CkhWzFX7.mjs");
var Route = createFileRoute("/battle-of-the-fans/articles/$slug")({
	loader: ({ params }) => {
		const article = getArticle(params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Story not found — Battle of the fans" }, {
			name: "robots",
			content: "noindex"
		}] };
		const a = loaderData.article;
		return { meta: [
			{ title: `${a.title} — Battle of the fans` },
			{
				name: "description",
				content: a.excerpt
			},
			{
				property: "og:title",
				content: a.title
			},
			{
				property: "og:description",
				content: a.excerpt
			},
			{
				property: "og:image",
				content: a.image
			},
			{
				name: "twitter:image",
				content: a.image
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
