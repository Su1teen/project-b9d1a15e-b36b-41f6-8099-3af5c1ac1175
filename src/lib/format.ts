export function formatPrice(value: number): string {
  return value.toLocaleString("ru-RU").replace(/\u00A0/g, " ") + " ₸";
}

export function formatNumber(value: number): string {
  return value.toLocaleString("ru-RU").replace(/\u00A0/g, " ");
}
