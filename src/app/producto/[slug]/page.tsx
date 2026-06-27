import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";
import { CATEGORY_NAMES } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  return {
    title: `${product.name} | Carnes Finas El Nevado`,
    description: `${product.description} Disponible en Carnes Finas El Nevado, Mosquera. ${product.weight} por $${product.price.toLocaleString("es-CO")}.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const categoryName = CATEGORY_NAMES[product.category] ?? product.category;

  return (
    <ProductDetailClient
      product={product}
      related={related}
      categoryName={categoryName}
    />
  );
}
