import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrustSignals } from "@/components/site/TrustSignals";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import heroHub from "@/assets/hero-hub.jpg";
import detail from "@/assets/detail-material.jpg";
import lifestyleLiving from "@/assets/lifestyle-living.jpg";
import lifestyleBedroom from "@/assets/lifestyle-bedroom.jpg";
import lifestyleKitchen from "@/assets/lifestyle-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA — Маркетплейс умного дома · Алматы" },
      {
        name: "description",
        content:
          "Освещение, акустика, климат и безопасность. Премиальные устройства умного дома с доставкой по Казахстану.",
      },
      { property: "og:title", content: "AURA — Маркетплейс умного дома" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.find((p) => p.featured && p.isNew) ?? products[0];
  const recommended = products.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-12 pb-24 md:pt-16 md:pb-32">
        <Container>
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow">Коллекция 01 · 2026</span>
              <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-foreground md:text-7xl lg:text-[5.5rem] text-balance">
                Архитектура вашего комфорта
              </h1>
              <p className="mt-8 max-w-[42ch] text-base text-ink-soft text-pretty md:text-lg">
                Тихая, точная и продуманная экосистема устройств умного дома.
                Матовый алюминий, локальная автоматизация и спокойный сценарий
                жизни.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/catalog"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Перейти в каталог
                  <ArrowRight className="size-4" strokeWidth={1.8} />
                </Link>
                <Link
                  to="/product/$slug"
                  params={{ slug: featured.slug }}
                  className="inline-flex h-12 items-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Узнать о {featured.collection}
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="eyebrow">Устройств</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">256+</dd>
                </div>
                <div>
                  <dt className="eyebrow">Отклик</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">15мс</dd>
                </div>
                <div>
                  <dt className="eyebrow">Гарантия</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">3 года</dd>
                </div>
              </dl>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl bg-surface ring-1 ring-border">
                <img
                  src={heroHub}
                  alt="Aura Omni Hub S2"
                  width={1600}
                  height={1600}
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div className="rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md">
                    <span className="eyebrow">{featured.collection}</span>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {featured.name}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-background/85 px-4 py-3 text-right backdrop-blur-md">
                    <span className="eyebrow">от</span>
                    <p className="mt-1 text-sm font-medium tracking-tight text-foreground tabular-nums">
                      {formatPrice(featured.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="bg-surface/50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Категории"
            title={
              <>
                Четыре опоры <em className="font-serif italic">тихого</em> дома
              </>
            }
            actionLabel="Все категории"
            actionTo="/catalog"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                to="/category/$slug"
                params={{ slug: cat.slug }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface ring-1 ring-border"
              >
                <img
                  src={cat.cover}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/75 tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl text-white">{cat.title}</h3>
                  <p className="mt-1 text-xs text-white/75">{cat.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED EDITORIAL */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="overflow-hidden rounded-3xl bg-surface ring-1 ring-border">
                <img
                  src={detail}
                  alt="Анодированный алюминий — макро"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="eyebrow">Совершенство в цифрах</span>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl text-balance">
                Каждая деталь рассчитана и проверена 240 часов.
              </h2>
              <p className="mt-6 max-w-[44ch] text-base text-ink-soft text-pretty">
                От толщины стенок корпуса до угла фаски на основании — мы
                одержимы деталями, которые делают продукт долговечным.
              </p>

              <dl className="mt-10 divide-y divide-border border-y border-border">
                {[
                  ["Материал корпуса", "Анодированный алюминий 6063-T6"],
                  ["Протокол связи", "Thread · Matter 1.2 · Wi-Fi 6"],
                  ["Время отклика", "< 15 мс"],
                  ["Уровень шума", "< 12 дБ"],
                  ["Автономность", "До 24 месяцев"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-5">
                    <dt className="text-sm text-ink-soft">{k}</dt>
                    <dd className="text-sm font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <Link
                to="/product/$slug"
                params={{ slug: featured.slug }}
                className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background"
              >
                Спецификации {featured.collection}
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* RECOMMENDED GRID */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Рекомендации"
            title={
              <>
                Объекты, на которые <em className="font-serif italic">смотрят</em>
              </>
            }
            description="Подборка устройств, которые чаще всего выбирают в первый раз."
            actionLabel="Весь каталог"
            actionTo="/catalog"
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* LIFESTYLE SCENES */}
      <section className="overflow-hidden py-24">
        <Container>
          <SectionHeading
            eyebrow="Сценарии"
            title={<>Один дом — десятки <em className="font-serif italic">настроений</em></>}
            description="Готовые сценарии автоматизации, которые включаются одной командой."
          />
        </Container>
        <div className="flex gap-6 overflow-x-auto px-6 pb-6 md:px-8 scrollbar-hide">
          {[
            {
              img: lifestyleLiving,
              title: "Гостиная · Вечер",
              text: "Плавное диммирование света, мягкий звук и тёплый климат — одной командой.",
            },
            {
              img: lifestyleBedroom,
              title: "Спальня · Глубокий сон",
              text: "Шторы по расписанию, тихий климат и мониторинг качества воздуха.",
            },
            {
              img: lifestyleKitchen,
              title: "Кухня · Утро",
              text: "Кофе, освещение и шторы запускаются по будильнику.",
            },
          ].map((scene) => (
            <div key={scene.title} className="min-w-[360px] flex-shrink-0 md:min-w-[480px]">
              <div className="overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
                <img
                  src={scene.img}
                  alt={scene.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif text-xl text-foreground">{scene.title}</h4>
                  <p className="mt-2 max-w-[44ch] text-sm text-ink-soft text-pretty">
                    {scene.text}
                  </p>
                </div>
                <Link
                  to="/catalog"
                  className="shrink-0 text-xs font-medium uppercase tracking-widest text-ink-soft hover:text-foreground"
                >
                  Подобрать →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Сервис"
            title="Спокойствие включено в стоимость"
            description="Доставка, монтаж, гарантия и поддержка от инженеров Aura."
          />
          <TrustSignals />
        </Container>
      </section>
    </div>
  );
}
