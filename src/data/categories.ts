import catLighting from "@/assets/cat-lighting.jpg";
import catAudio from "@/assets/cat-audio.jpg";
import catClimate from "@/assets/cat-climate.jpg";
import catSecurity from "@/assets/cat-security.jpg";

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  cover: string;
};

export const categories: Category[] = [
  {
    slug: "lighting",
    title: "Освещение",
    shortTitle: "Свет",
    tagline: "Адаптивные сценарии света",
    description:
      "Лампы, ленты, выключатели и сценарные панели, которые подстраиваются под ритм вашего дня.",
    cover: catLighting,
  },
  {
    slug: "audio",
    title: "Акустика",
    shortTitle: "Звук",
    tagline: "Иммерсивное звучание дома",
    description:
      "Колонки и хабы для голосового управления, мультирум-звука и спокойного фонового сценария.",
    cover: catAudio,
  },
  {
    slug: "climate",
    title: "Климат",
    shortTitle: "Воздух",
    tagline: "Точный контроль среды",
    description:
      "Термостаты, датчики температуры и влажности, очистители и увлажнители для дома, который дышит.",
    cover: catClimate,
  },
  {
    slug: "security",
    title: "Безопасность",
    shortTitle: "Защита",
    tagline: "Спокойствие в каждом метре",
    description:
      "Замки, камеры, датчики движения и протечек, объединённые в единый сценарий охраны.",
    cover: catSecurity,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
