import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceShort(price: number): string {
  return `$${price.toLocaleString("es-CO")}`;
}

export const WHATSAPP_NUMBERS = ["573107414835", "573204143043"];

export function getWhatsAppUrl(
  message: string,
  phoneIndex = 0
): string {
  const phone = WHATSAPP_NUMBERS[phoneIndex] ?? WHATSAPP_NUMBERS[0];
  return `https://wa.me/${phone}?text=${message}`;
}

export function getProductWhatsAppUrl(productName: string, price: number): string {
  const message = encodeURIComponent(
    `Hola, estoy interesado/a en el producto: *${productName}* ($${price.toLocaleString("es-CO")}). ¿Está disponible?`
  );
  return getWhatsAppUrl(message);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const CATEGORY_NAMES: Record<string, string> = {
  res: "Res",
  cerdo: "Cerdo",
  pollo: "Pollo",
  "pescados-mariscos": "Pescados y Mariscos",
  embutidos: "Embutidos",
  parrilla: "Parrilla",
};
