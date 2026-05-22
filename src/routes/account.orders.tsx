import { createFileRoute } from "@tanstack/react-router";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/account/orders")({
  component: OrdersPage,
});

const orders = [
  {
    id: "AURA-42081",
    date: "12 апреля 2026",
    status: "Доставлено",
    total: 462000,
    items: ["Aura SoundSphere Gen 2", "Tactile Light Module ×2"],
  },
  {
    id: "AURA-41902",
    date: "28 марта 2026",
    status: "В пути",
    total: 215000,
    items: ["Aether Bolt"],
  },
  {
    id: "AURA-41750",
    date: "5 февраля 2026",
    status: "Доставлено",
    total: 86500,
    items: ["Aura Glow Bulb ×4", "Aura Mini Plug"],
  },
];

function OrdersPage() {
  return (
    <div className="space-y-4">
      {orders.map((o) => (
        <article
          key={o.id}
          className="grid grid-cols-1 gap-6 rounded-3xl border border-border p-6 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-medium text-foreground">{o.id}</span>
              <span
                className={
                  o.status === "Доставлено"
                    ? "rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-foreground"
                    : "rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium text-background"
                }
              >
                {o.status}
              </span>
              <span className="text-xs text-ink-soft">{o.date}</span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">{o.items.join(" · ")}</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-serif text-2xl tabular-nums">{formatPrice(o.total)}</span>
            <button className="rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-surface">
              Повторить
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
