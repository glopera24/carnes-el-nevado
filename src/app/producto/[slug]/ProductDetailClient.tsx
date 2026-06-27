"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Plus,
  Minus,
  ChevronRight,
  MessageCircle,
  CheckCircle,
  Truck,
} from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { formatPriceShort, getProductWhatsAppUrl } from "@/lib/utils";
import { ProductCard } from "@/components/product/ProductCard";

interface Props {
  product: Product;
  related: Product[];
  categoryName: string;
}

export function ProductDetailClient({ product, related, categoryName }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-cream-dark">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-xs text-brand-gray-warm">
            <Link href="/" className="hover:text-brand-red transition-colors">
              Inicio
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/catalogo"
              className="hover:text-brand-red transition-colors"
            >
              Catálogo
            </Link>
            <ChevronRight size={12} />
            <Link
              href={`/catalogo?categoria=${product.category}`}
              className="hover:text-brand-red transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-black font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.featured && (
              <div className="absolute top-4 left-4">
                <span className="badge bg-brand-red text-white">Destacado</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                {categoryName}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-black leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-brand-black">
                {formatPriceShort(product.price)}
              </span>
              <span className="text-sm text-brand-gray-warm">
                / {product.weight}
              </span>
              {product.pricePerKg && (
                <span className="text-xs text-brand-gray-warm">
                  ({formatPriceShort(product.pricePerKg)}/kg)
                </span>
              )}
            </div>

            <div className="w-12 h-0.5 bg-brand-red mb-6" />

            <p className="text-brand-gray-warm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tags */}
            {product.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-brand-cream-dark text-brand-gray-warm uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Availability */}
            <div className="flex items-center gap-2 mb-8">
              <div
                className={`w-2 h-2 rounded-full ${product.available ? "bg-green-500" : "bg-gray-400"}`}
              />
              <span className="text-sm text-brand-gray-warm">
                {product.available ? "Disponible" : "Temporalmente agotado"}
              </span>
            </div>

            {/* Quantity + Add to cart */}
            {product.available && (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-brand-cream-dark">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-brand-black hover:text-brand-red transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 py-3 font-semibold text-lg border-x border-brand-cream-dark min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-brand-black hover:text-brand-red transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-sm text-brand-gray-warm">
                    Subtotal:{" "}
                    <strong className="text-brand-black">
                      {formatPriceShort(product.price * quantity)}
                    </strong>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary flex-1 justify-center py-4"
                  >
                    <ShoppingCart size={18} />
                    Agregar al carrito
                  </button>
                  <a
                    href={getProductWhatsAppUrl(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center py-4 border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
                  >
                    <MessageCircle size={18} />
                    Pedir por WhatsApp
                  </a>
                </div>
              </>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-cream-dark">
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-brand-red shrink-0" />
                <span className="text-sm text-brand-gray-warm">
                  Carne fresca del día
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={18} className="text-brand-red shrink-0" />
                <span className="text-sm text-brand-gray-warm">
                  Domicilio en Mosquera
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-brand-red shrink-0" />
                <span className="text-sm text-brand-gray-warm">
                  Empaque al vacío disponible
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-brand-red shrink-0" />
                <span className="text-sm text-brand-gray-warm">
                  Corte a pedido
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">
                  También te puede interesar
                </p>
                <h2 className="font-display text-2xl font-semibold text-brand-black">
                  Más en {categoryName}
                </h2>
              </div>
              <Link
                href={`/catalogo?categoria=${product.category}`}
                className="text-sm text-brand-red font-semibold hover:underline"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
