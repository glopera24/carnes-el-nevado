export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: CategorySlug;
  image: string;
  weight: string;
  available: boolean;
  featured?: boolean;
  tags?: string[];
  pricePerKg?: number;
}

export type CategorySlug =
  | "res"
  | "cerdo"
  | "pollo"
  | "pescados-mariscos"
  | "embutidos"
  | "parrilla";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  count?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Store {
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  schedule: string;
  mapUrl: string;
  lat: number;
  lng: number;
}
