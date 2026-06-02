import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/site/Container";
import { useCart } from "@/store/cart";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [{ title: "Оформление заказа · AURA" }],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const navigate = Route.useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [delivery, setDelivery] = useState<"courier" | "pickup">("courier");
  const [payment, setPayment] = useState<"kaspi" | "card" | "cash">("kaspi");

  const lines = items
    .map((i) => ({ item: i, product: products.find((p) => p.id === i.productId)! }))
    .filter((l) => l.product);
  const subtotal = lines.reduce((acc, l) => acc + l.product.price * l.item.quantity, 0);
  const deliveryCost = subtotal >= 80000 || delivery === "pickup" ? 0 : 2500;
  const total = subtotal + deliveryCost;

  const steps = [
    { n: 1, label: "Доставка" },
    { n: 2, label: "Оплата" },
    { n: 3, label: "Подтверждение" },
  ];

  if (lines.length === 0) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-serif text-4xl">Корзина пуста</h1>
        <Link to="/catalog" className="mt-6 inline-block text-sm underline">
          В каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-10">
          <span className="eyebrow">Оформление</span>
          <h1 className="mt-3 font-serif text-5xl text-foreground md:text-6xl">
            Тихий, прозрачный заказ
          </h1>
        </div>

        {/* STEPPER */}
        <div className="mb-12 flex items-center gap-3">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium",
                  step >= s.n ? "bg-foreground text-background" : "bg-surface text-ink-soft",
                )}
              >
                {step > s.n ? <Check className="size-4" /> : s.n}
              </div>
              <span
                className={cn(
                  "text-sm",
                  step >= s.n ? "text-foreground font-medium" : "text-ink-soft",
                )}
              >
                {s.label}
              </span>
              {i < steps.length - 1 && <span className="mx-2 h-px w-10 bg-border" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {step === 1 && (
              <div className="space-y-8">
                <div className="rounded-3xl border border-border p-8">
                  <h3 className="eyebrow">Получатель</h3>
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      ["Имя", "Айгерим"],
                      ["Фамилия", "Касенова"],
                      ["Телефон", "+7 (___) ___ __ __"],
                      ["Email", "you@aura.kz"],
                    ].map(([l, p]) => (
                      <label key={l} className="flex flex-col gap-2">
                        <span className="text-xs text-ink-soft">{l}</span>
                        <input
                          placeholder={p}
                          className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-border p-8">
                  <h3 className="eyebrow">Способ доставки</h3>
                  <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {(
                      [
                        ["courier", "Курьер по Казахстану", "2 500 ₸ · от 80 000 ₸ бесплатно"],
                        ["pickup", "Самовывоз из шоурума", "Бесплатно · Алматы, Аль-Фараби 17"],
                      ] as const
                    ).map(([key, t, s]) => (
                      <button
                        key={key}
                        onClick={() => setDelivery(key)}
                        className={cn(
                          "flex flex-col items-start rounded-2xl border p-5 text-left transition-colors",
                          delivery === key
                            ? "border-foreground bg-surface"
                            : "border-border hover:bg-surface",
                        )}
                      >
                        <span className="text-sm font-medium text-foreground">{t}</span>
                        <span className="mt-1 text-xs text-ink-soft">{s}</span>
                      </button>
                    ))}
                  </div>
                  {delivery === "courier" && (
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <input
                        placeholder="Город"
                        className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground md:col-span-1"
                        defaultValue="Алматы"
                      />
                      <input
                        placeholder="Адрес и квартира"
                        className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground md:col-span-1"
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="h-12 w-full rounded-full bg-foreground text-sm font-medium text-background md:w-auto md:px-8"
                >
                  Перейти к оплате
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="rounded-3xl border border-border p-8">
                  <h3 className="eyebrow">Способ оплаты</h3>
                  <div className="mt-6 space-y-3">
                    {(
                      [
                        ["kaspi", "Kaspi", "Через Kaspi.kz · Рассрочка 0-0-12 доступна"],
                        ["card", "Банковская карта", "Visa · MasterCard · UnionPay"],
                        ["cash", "При получении", "Наличными или картой курьеру"],
                      ] as const
                    ).map(([key, t, s]) => (
                      <button
                        key={key}
                        onClick={() => setPayment(key)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-colors",
                          payment === key
                            ? "border-foreground bg-surface"
                            : "border-border hover:bg-surface",
                        )}
                      >
                        <div>
                          <span className="text-sm font-medium text-foreground">{t}</span>
                          <p className="mt-1 text-xs text-ink-soft">{s}</p>
                        </div>
                        <div
                          className={cn(
                            "h-5 w-5 rounded-full border-2",
                            payment === key ? "border-foreground bg-foreground" : "border-border",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="h-12 rounded-full border border-border px-6 text-sm font-medium text-foreground"
                  >
                    Назад
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="h-12 flex-1 rounded-full bg-foreground text-sm font-medium text-background md:flex-none md:px-8"
                  >
                    Подтвердить
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="rounded-3xl border border-border p-8">
                  <h3 className="eyebrow">Проверьте детали</h3>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-ink-soft">Доставка</dt>
                      <dd>{delivery === "courier" ? "Курьер" : "Самовывоз"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-ink-soft">Оплата</dt>
                      <dd className="capitalize">
                        {payment === "kaspi"
                          ? "Kaspi"
                          : payment === "card"
                            ? "Карта"
                            : "При получении"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <button
                  onClick={() => {
                    clear();
                    navigate({ to: "/order/success" });
                  }}
                  className="h-12 w-full rounded-full bg-foreground text-sm font-medium text-background"
                >
                  Подтвердить заказ · {formatPrice(total)}
                </button>
              </div>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-surface p-8 lg:sticky lg:top-24">
              <h3 className="eyebrow">Заказ · {lines.length} позиций</h3>
              <ul className="mt-6 space-y-4">
                {lines.map(({ item, product }) => (
                  <li key={item.productId} className="flex gap-3">
                    <div className="h-14 w-14 overflow-hidden rounded-xl bg-background ring-1 ring-border">
                      <img src={product.images[0]} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-xs text-ink-soft">× {item.quantity}</p>
                      </div>
                      <span className="tabular-nums">
                        {formatPrice(product.price * item.quantity)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ink-soft">Подытог</dt>
                  <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-soft">Доставка</dt>
                  <dd className="tabular-nums">
                    {deliveryCost === 0 ? "Бесплатно" : formatPrice(deliveryCost)}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-sm text-ink-soft">Итого</span>
                <span className="font-serif text-2xl tabular-nums">{formatPrice(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
