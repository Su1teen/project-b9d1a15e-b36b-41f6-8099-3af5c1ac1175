import { Link } from "@tanstack/react-router";
import { Heart, Plus, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/store/cart";
import { useFavorites } from "@/store/favorites";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  size = "default",
}: {
  product: Product;
  size?: "default" | "compact";
}) {
  const addToCart = useCart((s) => s.add);
  const inCart = useCart((s) => s.items.some((i) => i.productId === product.id));
  const toggleFav = useFavorites((s) => s.toggle);
  const isFav = useFavorites((s) => s.ids.includes(product.id));

  return (
    <article className="group relative">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block"
        aria-label={product.name}
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                Новинка
              </span>
            )}
            {product.oldPrice && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
                −{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleFav(product.id);
            }}
            aria-label={isFav ? "Убрать из избранного" : "В избранное"}
            className={cn(
              "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100",
              isFav && "opacity-100",
            )}
          >
            <Heart
              className={cn("size-[16px]", isFav && "fill-foreground")}
              strokeWidth={1.5}
            />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (!inCart) addToCart(product.id);
            }}
            disabled={!product.inStock || inCart}
            className={cn(
              "absolute bottom-3 right-3 flex h-10 items-center gap-1.5 rounded-full bg-foreground px-4 text-xs font-medium text-background opacity-0 transition-all duration-300 group-hover:opacity-100 disabled:cursor-not-allowed",
              !product.inStock && "bg-surface-strong text-ink-soft",
            )}
          >
            {inCart ? (
              <>
                <Check className="size-[14px]" strokeWidth={2} /> В корзине
              </>
            ) : product.inStock ? (
              <>
                <Plus className="size-[14px]" strokeWidth={2} /> В корзину
              </>
            ) : (
              "Нет в наличии"
            )}
          </button>
        </div>

        <div className={cn("mt-4 flex flex-col gap-1.5", size === "compact" && "mt-3")}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
              {product.categoryLabel}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              {product.inStock ? "В наличии" : "Под заказ"}
            </span>
          </div>
          <h3 className="text-[15px] font-medium tracking-tight text-foreground">
            {product.name}
          </h3>
          {size === "default" && (
            <p className="text-[13px] text-ink-soft line-clamp-1">{product.tagline}</p>
          )}
          <div className="mt-1 flex items-baseline justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-medium tracking-tight tabular-nums text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-[12px] text-ink-soft line-through tabular-nums">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[12px] tabular-nums text-ink-soft">
              <span className="size-1 rounded-full bg-foreground" />
              {product.rating}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
