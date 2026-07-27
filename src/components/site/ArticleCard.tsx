import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles";
import { useReveal } from "@/hooks/use-reveal";

type Props = { article: Article; size?: "sm" | "md" | "lg" };

export function ArticleCard({ article, size = "md" }: Props) {
  const ref = useReveal<HTMLElement>();
  const aspect = size === "lg" ? "aspect-[4/5]" : size === "sm" ? "aspect-[4/3]" : "aspect-[3/2]";
  const titleSize =
    size === "lg"
      ? "text-3xl md:text-4xl"
      : size === "sm"
        ? "text-base"
        : "text-xl md:text-2xl";

  return (
    <article ref={ref} className="reveal group">
      <Link
        to="/Battle-Of-The-Fans/articles/$slug"
        params={{ slug: article.slug }}
        className="block"
      >
        <div className={`relative overflow-hidden ${aspect} bg-muted`}>
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <span className="bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              {article.category}
            </span>
          </div>
        </div>
        <div className="pt-4">
          <h3
            className={`font-display font-bold leading-tight text-foreground transition-colors group-hover:text-primary ${titleSize}`}
          >
            {article.title}
          </h3>
          {size !== "sm" && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {article.excerpt}
            </p>
          )}
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
