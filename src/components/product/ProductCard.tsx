"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { formatPriceShort, CATEGORY_NAMES } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className={cn("card-product group relative", className)}>
      {/* Image */}
      <Link href={`/producto/${product.slug}`} className="block relative overflow-hidden">
        <div className="relative aspect-[4/3] bg-brand-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {!product.available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                Agotado
              </span>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <span className="badge bg-brand-red text-white">Destacado</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white text-brand-black text-xs font-semibold uppercase tracking-wide px-4 py-2 flex items-center gap-2">
              <Eye size={14} />
              Ver producto
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-red">
            {CATEGORY_NAMES[product.category]}
          </span>
        </div>
        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-body font-semibold text-brand-black text-sm leading-snug mb-1 hover:text-brand-red transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-gray-warm mb-3">
          {product.weight}
          {product.pricePerKg && (
            <span className="ml-2 text-gray-400">
              ({formatPriceShort(product.pricePerKg)}/kg)
            </span>
          )}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-lg font-bold text-brand-black">
            {formatPriceShort(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className="flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-dark disabled:bg-gray-200 text-white text-xs font-semibold uppercase tracking-wide px-3 py-2 transition-colors active:scale-95"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart size={14} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
