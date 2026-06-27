"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { formatPriceShort } from "@/lib/utils";
import { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      setResults(searchProducts(query).slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl animate-slide-up">
        <div className="container-custom py-4">
          <div className="flex items-center gap-3">
            <Search size={20} className="text-brand-gray-warm shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar carnes, cortes, embutidos..."
              className="flex-1 text-lg font-body text-brand-black placeholder:text-gray-300 outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="p-2 text-brand-gray-warm hover:text-brand-black transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="border-t border-brand-cream-dark">
            <div className="container-custom py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-warm mb-3">
                {results.length} resultado{results.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/producto/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 hover:bg-brand-cream rounded transition-colors"
                  >
                    <div className="relative w-14 h-14 bg-brand-cream-dark shrink-0 overflow-hidden rounded">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-black truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-brand-gray-warm">
                        {product.weight}
                      </p>
                      <p className="text-sm font-bold text-brand-red">
                        {formatPriceShort(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {results.length === 6 && (
                <Link
                  href={`/catalogo?q=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="block text-center text-sm text-brand-red font-semibold mt-4 hover:underline"
                >
                  Ver todos los resultados →
                </Link>
              )}
            </div>
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="border-t border-brand-cream-dark">
            <div className="container-custom py-8 text-center">
              <p className="text-brand-gray-warm">
                No se encontraron productos para &quot;{query}&quot;
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
