import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/account/addresses")({
  component: AddressesPage,
});

const addresses = [
  {
    title: "Дом",
    address: "Астана, ул. Достык, 16, кв. 18",
    note: "Звонить за 30 минут",
    default: true,
  },
  {
    title: "Офис",
    address: "Астана, БЦ «Водно-зеленый бульвар», 7 этаж",
    note: "Доставка только в будни",
  },
];

function AddressesPage() {
  return (
    <div className="space-y-4">
      {addresses.map((a) => (
        <article
          key={a.title}
          className="flex items-start gap-5 rounded-3xl border border-border p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-foreground">
            <MapPin className="size-4" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="font-medium text-foreground">{a.title}</h3>
              {a.default && (
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] text-foreground">
                  По умолчанию
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-foreground">{a.address}</p>
            <p className="mt-1 text-xs text-ink-soft">{a.note}</p>
          </div>
          <button className="text-xs text-ink-soft hover:text-foreground">Изменить</button>
        </article>
      ))}
      <button className="w-full rounded-3xl border border-dashed border-border py-6 text-sm font-medium text-ink-soft hover:bg-surface/60 hover:text-foreground">
        + Добавить адрес
      </button>
    </div>
  );
}
