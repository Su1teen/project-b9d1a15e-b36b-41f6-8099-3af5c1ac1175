import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Container } from "@/components/site/Container";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Каталог · AURA" },
      {
        name: "description",
        content:
          "Полный каталог устройств умного дома: освещение, акустика, климат, безопасность.",
      },
      { property: "og:title", content: "Каталог · AURA" },
    ],
  }),
  component: CatalogPage,
});

type Sort = "popular" | "price-asc" | "price-desc" | "new";

function CatalogPage() {
  const [cat, setCat] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("popular");
  const [inStockOnly, setInStockOnly] = useState(false);

  const list = useMemo(() => {
    let arr = [...products];
    if (cat) arr = arr.filter((p) => p.category === cat);
    if (inStockOnly) arr = arr.filter((p) => p.inStock);
    switch (sort) {
      case "price-asc":
        arr.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        arr.sort((a, b) => b.price - a.price);
        break;
      case "new":
        arr.sort((a, b) => Number(b.isNew ?? 0) - Number(a.isNew ?? 0));
        break;
      default:
        arr.sort((a, b) => b.rating - a.rating);
    }
    return arr;
  }, [cat, sort, inStockOnly]);

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-12 flex flex-col gap-3 border-b border-border pb-10">
          <span className="eyebrow">Каталог · {list.length} устройств</span>
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
            Все устройства Aura
          </h1>
          <p className="max-w-[52ch] text-base text-ink-soft text-pretty">
            Полный ассортимент премиальной экосистемы умного дома — от ламп до
            хабов управления и систем безопасности.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <aside className="w-full lg:w-64 lg:shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="mb-8">
                <h4 className="eyebrow mb-4">Сортировка</h4>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      ["popular", "Популярное"],
                      ["new", "Сначала новые"],
                      ["price-asc", "Цена: по возрастанию"],
                      ["price-desc", "Цена: по убыванию"],
                    ] as [Sort, string][]
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSort(key)}
                      data-active={sort === key}
                      className="text-left text-sm text-ink-soft transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-medium"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="eyebrow mb-4">Категории</h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setCat(null)}
                    data-active={!cat}
                    className="text-left text-sm text-ink-soft transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-medium"
                  >
                    Все
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => setCat(c.slug)}
                      data-active={cat === c.slug}
                      className="text-left text-sm text-ink-soft transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-medium"
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="eyebrow mb-4">Наличие</h4>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="size-4 accent-foreground"
                  />
                  Только в наличии
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {list.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border bg-surface/60 p-16 text-center">
                <p className="text-sm text-ink-soft">
                  Ничего не найдено. Попробуйте сбросить фильтры.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
