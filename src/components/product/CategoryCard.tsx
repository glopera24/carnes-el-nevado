import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/catalogo?categoria=${category.slug}`}
      className="category-card relative block overflow-hidden aspect-[3/4] group"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
        <h3 className="font-display text-white text-xl font-semibold leading-tight">
          {category.name}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-white/80 text-xs font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Ver productos <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
