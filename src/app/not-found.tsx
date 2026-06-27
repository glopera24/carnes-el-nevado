import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-display text-7xl md:text-9xl font-bold text-brand-black/10 mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl font-semibold text-brand-black mb-3">
          Página no encontrada
        </h2>
        <p className="text-brand-gray-warm mb-10 max-w-md mx-auto">
          La página que busca no existe o fue movida. Explore nuestro catálogo
          de carnes premium.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary py-3 px-8">
            Ir al inicio
          </Link>
          <Link href="/catalogo" className="btn-secondary py-3 px-8">
            Ver catálogo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
