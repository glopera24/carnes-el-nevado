"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Filter, X, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { CategorySlug } from "@/types";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "default", label: "Destacados" },
  { value: "price-asc", label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
  { value: "name-asc", label: "A - Z" },
];

export function CatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<CategorySlug | "todos">(
    (searchParams.get("categoria") as CategorySlug) || "todos"
  );
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("categoria");
    const q = searchParams.get("q");
    if (cat) setActiveCategory(cat as CategorySlug);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const handleCategoryChange = (cat: CategorySlug | "todos") => {
    setActiveCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", cat);
    }
    router.push(`/catalogo?${params.toString()}`, { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== "todos") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) =>
          a.featured === b.featured ? 0 : a.featured ? -1 : 1
        );
    }

    return filtered;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Page Header */}
      <div className="bg-brand-black py-16">
        <div className="container-custom">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            Nuestros productos
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold">
            Catálogo de Carnes
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            {products.length} productos disponibles
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filters bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Category filter - desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCategoryChange("todos")}
              className={cn(
                "px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-all",
                activeCategory === "todos"
                  ? "bg-brand-red text-white border-brand-red"
                  : "bg-white text-brand-black border-brand-cream-dark hover:border-brand-red"
              )}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug as CategorySlug)}
                className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-all",
                  activeCategory === cat.slug
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-white text-brand-black border-brand-cream-dark hover:border-brand-red"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-brand-cream-dark bg-white text-sm font-semibold"
          >
            <Filter size={16} />
            Filtrar por categoría
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform ml-auto",
                showFilters ? "rotate-180" : ""
              )}
            />
          </button>

          {/* Mobile category dropdown */}
          {showFilters && (
            <div className="lg:hidden grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  handleCategoryChange("todos");
                  setShowFilters(false);
                }}
                className={cn(
                  "px-4 py-3 text-xs font-semibold uppercase tracking-wide border transition-all",
                  activeCategory === "todos"
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-white text-brand-black border-brand-cream-dark"
                )}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    handleCategoryChange(cat.slug as CategorySlug);
                    setShowFilters(false);
                  }}
                  className={cn(
                    "px-4 py-3 text-xs font-semibold uppercase tracking-wide border transition-all",
                    activeCategory === cat.slug
                      ? "bg-brand-red text-white border-brand-red"
                      : "bg-white text-brand-black border-brand-cream-dark"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Sort + search */}
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            {searchQuery && (
              <div className="flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-2">
                Búsqueda: &quot;{searchQuery}&quot;
                <button
                  onClick={() => {
                    setSearchQuery("");
                    const params = new URLSearchParams(
                      searchParams.toString()
                    );
                    params.delete("q");
                    router.push(`/catalogo?${params.toString()}`, {
                      scroll: false,
                    });
                  }}
                >
                  <X size={12} />
                </button>
              </div>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-brand-cream-dark bg-white text-sm text-brand-black px-3 py-2 outline-none focus:border-brand-red transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-brand-black mb-2">
              Sin resultados
            </p>
            <p className="text-brand-gray-warm">
              No encontramos productos con esos criterios.
            </p>
            <button
              onClick={() => {
                setActiveCategory("todos");
                setSearchQuery("");
                router.push("/catalogo", { scroll: false });
              }}
              className="btn-primary mt-6"
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-brand-gray-warm mb-6">
              {filteredProducts.length} producto
              {filteredProducts.length !== 1 ? "s" : ""}
              {activeCategory !== "todos" && (
                <span>
                  {" "}
                  en{" "}
                  <strong>
                    {categories.find((c) => c.slug === activeCategory)?.name}
                  </strong>
                </span>
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
