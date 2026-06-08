import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/")({
  component: AccountIndex,
});

function AccountIndex() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          ["Бонусы Aura", "12 400 ₸"],
          ["Заказов", "8"],
          ["Статус", "Aura Insider"],
        ].map(([t, v]) => (
          <div key={t} className="rounded-3xl border border-border bg-surface p-6">
            <span className="eyebrow">{t}</span>
            <p className="mt-3 font-serif text-3xl text-foreground">{v}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-border p-8">
        <h3 className="eyebrow">Контактные данные</h3>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {[
            ["Имя", "Айгерим Касенова"],
            ["Email", "aigerim@aura.kz"],
            ["Телефон", "+7 707 000 12 34"],
            ["Город", "Астана"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border py-3 text-sm">
              <dt className="text-ink-soft">{k}</dt>
              <dd className="font-medium text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
