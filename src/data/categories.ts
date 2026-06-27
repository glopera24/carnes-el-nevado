import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "res",
    name: "Res",
    description:
      "Cortes premium de res seleccionada, desde lomos finos hasta costillas para parrilla.",
    image:
      "/images/productos/rib.webp",
  },
  {
    slug: "cerdo",
    name: "Cerdo",
    description:
      "Lo mejor del cerdo colombiano: lomos, costillas, pernil y preparaciones artesanales.",
    image:
      "/images/productos/cabella-lomo.jpg",
  },
  {
    slug: "pollo",
    name: "Pollo",
    description:
      "Pollo campero y orgánico en todos sus cortes, fresco del día para su familia.",
    image:
      "/images/productos/pollo-en-salsa-teriyaki.webp",
  },
  {
    slug: "pescados-mariscos",
    name: "Pescados y Mariscos",
    description:
      "Frescos del Pacífico y Caribe colombiano: salmon, tilapia, camarones y más.",
    image:
      "/images/productos/atun.jpg",
  },
  {
    slug: "embutidos",
    name: "Embutidos",
    description:
      "Chorizos, salchichones, jamones y embutidos artesanales elaborados diariamente.",
    image:
      "/images/productos/kit-premium.jpg",
  },
  {
    slug: "parrilla",
    name: "Parrilla",
    description:
      "Kits completos y cortes especiales para la parrilla perfecta en cualquier ocasión.",
    image:
      "/images/productos/combo-10.jpeg",
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};
