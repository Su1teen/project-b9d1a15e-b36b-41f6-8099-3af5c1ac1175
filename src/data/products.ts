import pSpeaker from "@/assets/p-speaker.jpg";
import pHub from "@/assets/p-hub.jpg";
import pThermostat from "@/assets/p-thermostat.jpg";
import pCamera from "@/assets/p-camera.jpg";
import pLock from "@/assets/p-lock.jpg";
import pSensor from "@/assets/p-sensor.jpg";
import pSwitch from "@/assets/p-switch.jpg";
import pBulb from "@/assets/p-bulb.jpg";
import pPlug from "@/assets/p-plug.jpg";
import detail from "@/assets/detail-material.jpg";
import lifestyleLiving from "@/assets/lifestyle-living.jpg";
import lifestyleBedroom from "@/assets/lifestyle-bedroom.jpg";
import lifestyleKitchen from "@/assets/lifestyle-kitchen.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  tagline: string;
  description: string;
  category: string; // category slug
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
  featured?: boolean;
  images: string[];
  specs: Record<string, string>;
  features: { title: string; text: string }[];
  compatibility: string[];
  highlights: string[];
};

const baseSpecs = {
  Протокол: "Matter 1.2 · Thread · Wi-Fi 6",
  Совместимость: "Apple Home, Google Home, Alice",
  "Время отклика": "< 15 мс",
  "Гарантия": "3 года",
  "Страна": "Германия",
};

export const products: Product[] = [
  {
    id: "p-001",
    slug: "aura-soundsphere-gen-2",
    name: "Aura SoundSphere Gen 2",
    collection: "Sound 01",
    tagline: "Сферическая акустика для спокойных вечеров",
    description:
      "Колонка с акустикой Dolby Atmos, голосовым ассистентом и сценарной интеграцией. Матовая керамика и шлифованное основание из анодированного алюминия.",
    category: "audio",
    categoryLabel: "Акустика",
    price: 245000,
    oldPrice: 285000,
    rating: 4.9,
    reviewsCount: 482,
    inStock: true,
    featured: true,
    isNew: true,
    images: [pSpeaker, detail, lifestyleLiving],
    specs: { ...baseSpecs, Звук: "Dolby Atmos · 360°", Мощность: "120 Вт" },
    features: [
      { title: "Иммерсивный звук", text: "Шесть драйверов и пространственная калибровка по комнате." },
      { title: "Голос и сцены", text: "Интеграция с Alice, Apple Home и сценариями Aura." },
      { title: "Бесшумная работа", text: "Пассивное охлаждение и матовый корпус без вибраций." },
    ],
    compatibility: ["Apple Home", "Google Home", "Alice", "Matter"],
    highlights: ["Dolby Atmos", "120 Вт", "Голосовое управление", "Мультирум"],
  },
  {
    id: "p-002",
    slug: "aura-omni-hub-s2",
    name: "Aura Omni Hub S2",
    collection: "Core 01",
    tagline: "Центральная нервная система дома",
    description:
      "Хаб с поддержкой Thread, Zigbee и Matter. Объединяет до 256 устройств в единый сценарий и работает без облака.",
    category: "audio",
    categoryLabel: "Хабы",
    price: 185000,
    rating: 4.8,
    reviewsCount: 312,
    inStock: true,
    featured: true,
    images: [pHub, detail, lifestyleKitchen],
    specs: { ...baseSpecs, Устройств: "до 256", "Локальное хранилище": "64 ГБ" },
    features: [
      { title: "Локальная автоматизация", text: "Сценарии работают мгновенно даже без интернета." },
      { title: "Тихий дизайн", text: "Анодированный алюминий, пассивное охлаждение, без вентиляторов." },
      { title: "Полная приватность", text: "Шифрование E2E и хранение данных только на устройстве." },
    ],
    compatibility: ["Matter", "Thread", "Zigbee 3.0", "Apple Home"],
    highlights: ["Локально", "256 устройств", "Без облака", "Шифрование E2E"],
  },
  {
    id: "p-003",
    slug: "nexus-climate-core",
    name: "Nexus Climate Core",
    collection: "Climate 02",
    tagline: "Тихий контроль температуры и влажности",
    description:
      "Циферблат из анодированной стали и стеклянный сенсорный дисплей. Адаптируется под расписание и обучается за неделю.",
    category: "climate",
    categoryLabel: "Термостаты",
    price: 128000,
    rating: 4.9,
    reviewsCount: 218,
    inStock: true,
    featured: true,
    images: [pThermostat, detail, lifestyleBedroom],
    specs: { ...baseSpecs, "Диапазон": "5 — 35 °C", "Питание": "24 В / батарея" },
    features: [
      { title: "Самообучение", text: "Алгоритм адаптируется к ритму дома за 7 дней." },
      { title: "Экономия", text: "До 30% снижения счетов за отопление." },
      { title: "Тонкий дисплей", text: "Зеркальное стекло и точная индикация." },
    ],
    compatibility: ["Apple Home", "Matter", "Aura Cloud"],
    highlights: ["Самообучение", "−30% счетов", "Тихая работа"],
  },
  {
    id: "p-004",
    slug: "vision-eye-pro",
    name: "Vision Eye Pro",
    collection: "Security 01",
    tagline: "Спокойствие дома в 4K",
    description:
      "Внутренняя камера с распознаванием лиц, ночной съёмкой и шторкой приватности. Все данные хранятся локально.",
    category: "security",
    categoryLabel: "Камеры",
    price: 185000,
    rating: 4.7,
    reviewsCount: 156,
    inStock: true,
    images: [pCamera, detail, lifestyleLiving],
    specs: { ...baseSpecs, "Разрешение": "4K HDR", "Угол обзора": "140°" },
    features: [
      { title: "Распознавание", text: "Локальный AI отличает людей, питомцев и доставку." },
      { title: "Приватность", text: "Физическая шторка и шифрование хранилища." },
      { title: "Ночное видение", text: "Цветной режим до 0.005 люкс." },
    ],
    compatibility: ["Apple Home Secure Video", "Aura Cloud"],
    highlights: ["4K HDR", "Локальный AI", "Шторка приватности"],
  },
  {
    id: "p-005",
    slug: "aether-bolt-lock",
    name: "Aether Bolt",
    collection: "Security 02",
    tagline: "Биометрический замок без ключей",
    description:
      "Графитовый корпус, отпечаток пальца, NFC и временные коды. Работает до 12 месяцев без подзарядки.",
    category: "security",
    categoryLabel: "Замки",
    price: 215000,
    rating: 4.8,
    reviewsCount: 94,
    inStock: true,
    isNew: true,
    images: [pLock, detail],
    specs: { ...baseSpecs, "Отпечатков": "до 100", "Автономность": "12 месяцев" },
    features: [
      { title: "5 способов открыть", text: "Отпечаток, NFC, код, приложение, физический ключ." },
      { title: "Гостевые коды", text: "Одноразовые и временные коды для уборки и доставки." },
      { title: "Журнал событий", text: "Каждое открытие фиксируется в приложении." },
    ],
    compatibility: ["Apple Home", "Matter", "Aura Cloud"],
    highlights: ["Биометрия", "Без проводов", "5 способов"],
  },
  {
    id: "p-006",
    slug: "aura-motion-s1",
    name: "Датчик движения S1",
    collection: "Sense 01",
    tagline: "Точность mmWave-радара",
    description:
      "Радарный датчик присутствия с угловым разрешением 1°. Видит дыхание и отличает человека от животного.",
    category: "security",
    categoryLabel: "Датчики",
    price: 24900,
    rating: 4.6,
    reviewsCount: 327,
    inStock: true,
    images: [pSensor, detail],
    specs: { ...baseSpecs, "Радиус": "до 8 м", "Питание": "USB-C / батарея" },
    features: [
      { title: "Радар, не PIR", text: "Точное определение присутствия, а не движения." },
      { title: "Энергоэффективность", text: "До 24 месяцев работы от батареи." },
      { title: "Тихая интеграция", text: "Поместится на полке или магнитом к стене." },
    ],
    compatibility: ["Matter", "Zigbee 3.0", "Apple Home"],
    highlights: ["mmWave", "1° точность", "24 месяца"],
  },
  {
    id: "p-007",
    slug: "tactile-light-module",
    name: "Tactile Light Module",
    collection: "Light 03",
    tagline: "Стеклянный сценарный выключатель",
    description:
      "Четыре сенсорных зоны на закалённом стекле, мягкая подсветка и магнитное крепление. Заменяет любой стандартный выключатель.",
    category: "lighting",
    categoryLabel: "Выключатели",
    price: 42000,
    rating: 4.9,
    reviewsCount: 211,
    inStock: true,
    isNew: true,
    images: [pSwitch, detail, lifestyleLiving],
    specs: { ...baseSpecs, "Каналы": "4 сценария", "Установка": "стандартный подрозетник" },
    features: [
      { title: "Сценарии под пальцем", text: "Кино, ужин, утро, ночь — без приложения." },
      { title: "Тактильная отдача", text: "Лёгкий haptic-отклик при касании." },
      { title: "Без батареек", text: "Питание от линии 220 В." },
    ],
    compatibility: ["Matter", "Apple Home", "Aura Cloud"],
    highlights: ["4 сценария", "Haptic", "Стекло"],
  },
  {
    id: "p-008",
    slug: "aura-glow-bulb",
    name: "Aura Glow Bulb",
    collection: "Light 01",
    tagline: "Лампа с естественным циклом света",
    description:
      "Адаптивный белый и 16 миллионов оттенков. Автоматически следует за солнцем — холодный утром, тёплый вечером.",
    category: "lighting",
    categoryLabel: "Лампы",
    price: 18500,
    rating: 4.8,
    reviewsCount: 542,
    inStock: true,
    images: [pBulb, detail],
    specs: { ...baseSpecs, "Цоколь": "E27", "Яркость": "1100 лм", "CRI": "Ra 95" },
    features: [
      { title: "Циркадный ритм", text: "Цвет следует за солнцем — комфортно глазам." },
      { title: "Honest White", text: "Ra 95 — кожа и еда выглядят естественно." },
      { title: "Тихая работа", text: "Без мерцания и гула на минимальной яркости." },
    ],
    compatibility: ["Matter", "Zigbee 3.0", "Apple Home"],
    highlights: ["Ra 95", "Циркадный", "1100 лм"],
  },
  {
    id: "p-009",
    slug: "aura-mini-plug",
    name: "Aura Mini Plug",
    collection: "Power 01",
    tagline: "Незаметная умная розетка",
    description:
      "Тонкий корпус, не блокирует соседнюю розетку. Мониторинг энергопотребления в реальном времени.",
    category: "lighting",
    categoryLabel: "Розетки",
    price: 14900,
    rating: 4.7,
    reviewsCount: 389,
    inStock: true,
    images: [pPlug, detail],
    specs: { ...baseSpecs, "Нагрузка": "до 3680 Вт", "Защита": "от перегрузки" },
    features: [
      { title: "Считает каждый ватт", text: "Точный учёт потребления приборов." },
      { title: "Узкий профиль", text: "Не перекрывает соседнюю розетку." },
      { title: "Защита", text: "Автоматическое отключение при перегреве." },
    ],
    compatibility: ["Matter", "Apple Home", "Alice"],
    highlights: ["Узкая", "Мониторинг", "3680 Вт"],
  },
  {
    id: "p-010",
    slug: "aura-soundsphere-mini",
    name: "Aura SoundSphere Mini",
    collection: "Sound 02",
    tagline: "Компактный голос дома",
    description:
      "Младший брат SoundSphere — для кухни, спальни и кабинета. Голосовой ассистент и мультирум.",
    category: "audio",
    categoryLabel: "Колонки",
    price: 94000,
    rating: 4.6,
    reviewsCount: 274,
    inStock: true,
    images: [pSpeaker, detail],
    specs: { ...baseSpecs, "Мощность": "40 Вт", "Микрофоны": "4 шт" },
    features: [
      { title: "Чистый звук", text: "Сбалансированный профиль для голоса и музыки." },
      { title: "Мультирум", text: "Синхронная работа с другими колонками Aura." },
      { title: "Микрофоны far-field", text: "Слышит даже сквозь шум." },
    ],
    compatibility: ["Apple Home", "Alice", "Matter"],
    highlights: ["40 Вт", "Мультирум", "Голос"],
  },
  {
    id: "p-011",
    slug: "aura-climate-sense",
    name: "Climate Sense",
    collection: "Climate 03",
    tagline: "Тонкий датчик воздуха",
    description:
      "Температура, влажность, CO₂ и VOC. Магнитное крепление и e-ink дисплей.",
    category: "climate",
    categoryLabel: "Датчики",
    price: 32000,
    rating: 4.7,
    reviewsCount: 168,
    inStock: true,
    images: [pSensor, detail],
    specs: { ...baseSpecs, "Параметры": "T · RH · CO₂ · VOC", "Дисплей": "e-ink" },
    features: [
      { title: "Четыре сенсора", text: "Полная картина воздуха в одной точке." },
      { title: "E-ink дисплей", text: "Всегда виден, не светит ночью." },
      { title: "Автономность 18 мес", text: "Перезаряжается по USB-C." },
    ],
    compatibility: ["Matter", "Apple Home"],
    highlights: ["CO₂", "VOC", "E-ink"],
  },
  {
    id: "p-012",
    slug: "vision-eye-outdoor",
    name: "Vision Eye Outdoor",
    collection: "Security 03",
    tagline: "Уличная камера в графите",
    description:
      "IP66, ночной цветной режим, прожектор и сирена. Работает в диапазоне −30…+50°C.",
    category: "security",
    categoryLabel: "Камеры",
    price: 245000,
    rating: 4.8,
    reviewsCount: 87,
    inStock: false,
    images: [pCamera, detail],
    specs: { ...baseSpecs, "Защита": "IP66", "Прожектор": "1000 лм" },
    features: [
      { title: "Всепогодная", text: "−30…+50°C, ливень, пыль, снег." },
      { title: "Активная защита", text: "Прожектор и сирена 105 дБ." },
      { title: "Локальное хранилище", text: "До 1 ТБ на microSD." },
    ],
    compatibility: ["Apple Home Secure Video", "Aura Cloud"],
    highlights: ["IP66", "1000 лм", "Сирена"],
  },
  {
    id: "p-013",
    slug: "tactile-dimmer",
    name: "Tactile Dimmer",
    collection: "Light 04",
    tagline: "Сенсорный диммер с тёплой подсветкой",
    description:
      "Плавное диммирование без мерцания. Подсветка ночью находит выключатель в темноте.",
    category: "lighting",
    categoryLabel: "Выключатели",
    price: 36000,
    rating: 4.8,
    reviewsCount: 145,
    inStock: true,
    images: [pSwitch, detail],
    specs: { ...baseSpecs, "Нагрузка": "до 600 Вт", "Каналы": "1 + сцена" },
    features: [
      { title: "Без мерцания", text: "Линейная регулировка для LED и галогена." },
      { title: "Soft glow", text: "Подсветка находит выключатель ночью." },
      { title: "Долговечность", text: "Стеклянная поверхность, миллион касаний." },
    ],
    compatibility: ["Matter", "Apple Home"],
    highlights: ["0–100%", "Soft glow", "Тихий"],
  },
  {
    id: "p-014",
    slug: "aura-leak-sensor",
    name: "Датчик протечки L1",
    collection: "Sense 02",
    tagline: "Защита от воды на старте",
    description:
      "Мгновенное уведомление и автоматическое перекрытие воды через хаб. Сирена 95 дБ.",
    category: "security",
    categoryLabel: "Датчики",
    price: 12900,
    rating: 4.9,
    reviewsCount: 412,
    inStock: true,
    images: [pSensor, detail],
    specs: { ...baseSpecs, "Сирена": "95 дБ", "Автономность": "36 месяцев" },
    features: [
      { title: "Мгновенный отклик", text: "Сигнал в приложение менее чем за 1 секунду." },
      { title: "Сирена", text: "95 дБ привлекут внимание из любой комнаты." },
      { title: "Автоматизация", text: "Может перекрыть воду через умный кран." },
    ],
    compatibility: ["Matter", "Zigbee 3.0"],
    highlights: ["95 дБ", "36 месяцев", "Авто-стоп"],
  },
  {
    id: "p-015",
    slug: "aura-curtain-drive",
    name: "Curtain Drive",
    collection: "Light 05",
    tagline: "Тихий мотор для штор",
    description:
      "Устанавливается на любой карниз за 5 минут. Тише 30 дБ. Открывает шторы по расписанию или сценарию.",
    category: "lighting",
    categoryLabel: "Шторы",
    price: 86000,
    rating: 4.7,
    reviewsCount: 132,
    inStock: true,
    images: [pHub, detail, lifestyleBedroom],
    specs: { ...baseSpecs, "Шум": "< 30 дБ", "Нагрузка": "до 12 кг" },
    features: [
      { title: "Тише шёпота", text: "30 дБ — не разбудит даже утром." },
      { title: "Установка за 5 минут", text: "Без переделки карниза." },
      { title: "Утренние сценарии", text: "Открывается с рассветом или будильником." },
    ],
    compatibility: ["Matter", "Apple Home"],
    highlights: ["< 30 дБ", "12 кг", "5 мин монтаж"],
  },
  {
    id: "p-016",
    slug: "aura-starter-kit",
    name: "Стартовый комплект Aura",
    collection: "Kit 01",
    tagline: "Готовый сценарий для квартиры",
    description:
      "Хаб Omni S2, 4 лампы Glow, 2 датчика движения и сценарный выключатель. Всё, чтобы начать.",
    category: "audio",
    categoryLabel: "Комплекты",
    price: 312000,
    oldPrice: 365000,
    rating: 4.9,
    reviewsCount: 89,
    inStock: true,
    featured: true,
    images: [pHub, pBulb, pSensor, lifestyleLiving],
    specs: { ...baseSpecs, "Состав": "Hub + 4 лампы + 2 датчика + выключатель" },
    features: [
      { title: "Готов из коробки", text: "Сценарии «Дом», «Ночь», «Уход» предустановлены." },
      { title: "Экономия −15%", text: "Дешевле, чем покупка по отдельности." },
      { title: "Бесплатная настройка", text: "Инженер приедет и настроит сцены." },
    ],
    compatibility: ["Matter", "Apple Home", "Alice"],
    highlights: ["Хаб + 4 лампы", "−15%", "Настройка"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getRelated(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
