import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, Award, Clock } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryCard } from "@/components/product/CategoryCard";
import { getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Carnes Finas El Nevado | Carniceria Premium en Mosquera",
  description:
    "La mejor carniceria de Mosquera. Cortes de res, cerdo, pollo, pescados y kits de parrilla premium. Pedidos por WhatsApp. Dos sedes en Mosquera, Cundinamarca.",
};

const features = [
  {
    icon: Award,
    title: "Calidad Premium",
    description:
      "Seleccionamos los mejores animales de fincas certificadas para garantizar la calidad en cada corte.",
  },
  {
    icon: Clock,
    title: "Frescura Diaria",
    description:
      "Proceso de carnizacion diario. Todo lo que ofrecemos fue preparado el mismo dia para maxima frescura.",
  },
  {
    icon: Truck,
    title: "Domicilio",
    description:
      "Llevamos tu pedido a domicilio en Mosquera y municipios cercanos. Coordina por WhatsApp.",
  },
  {
    icon: CheckCircle,
    title: "La Mejor Calidad",
    description:
      "Excelencia en carnes premium para quienes valoran el sabor, la frescura y la calidad.",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
        <Image
        src="/images/empresa/sede-2.png"
        alt="Carnes Finas El Nevado"
        fill
        priority
        className="object-cover object-[center_75%]"
        sizes="80vw"
        />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container-custom py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/90 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-white rounded-full" />
              Mosquera, Cundinamarca
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.05] mb-6">
              Carnes Finas
              <br />
              <span className="italic text-red-300">El Nevado</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
              La carniceria de confianza de Mosquera. Llevando
              los mejores cortes de res, cerdo, pollo y pescado a su mesa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/catalogo" className="btn-primary text-base py-4 px-8">
                Ver Catalogo
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/573107414835?text=Hola%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-4 px-8 border-white text-white hover:bg-white hover:text-brand-black"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/20">
              {[
                { value: "La Mejor", label: "Calidad" },
                { value: "50+", label: "Cortes disponibles" },
                { value: "2", label: "Sedes en Mosquera" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
                  <feature.icon size={20} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-brand-black text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-brand-gray-warm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-brand-cream py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
                Lo que ofrecemos
              </p>
              <h2 className="section-title">Nuestras Categorias</h2>
            </div>
            <Link
              href="/catalogo"
              className="text-brand-red text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all"
            >
              Ver todo el catalogo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
                Seleccion especial
              </p>
              <h2 className="section-title">Productos Destacados</h2>
            </div>
            <Link
              href="/catalogo"
              className="text-brand-red text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all"
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="Parrilla El Nevado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4">
            Especial temporada
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-6">
            Kits de Parrilla
            <br />
            <span className="italic">para cada ocasion</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Desde el kit Dúo para una cena romantica hasta el Kit Ejecutivo
            para 10 personas. Todo listo para el fuego.
          </p>
          <Link
            href="/catalogo?categoria=parrilla"
            className="btn-primary text-base py-4 px-10"
          >
            Ver kits de parrilla <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-brand-cream py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80"
                  alt="Carniceria El Nevado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red p-8 text-white hidden md:block">
                <div className="font-display text-4xl font-bold">20+</div>
                <div className="text-white/80 text-sm uppercase tracking-wide mt-1">
                  La Mejor Calidad
                </div>
              </div>
            </div>

            <div>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4">
                Nuestra historia
              </p>
              <h2 className="section-title mb-4">
                Tradicon y Calidad
                <br />
                en Cada Corte
              </h2>
              <div className="divider" />
              <p className="section-subtitle mt-4 mb-6">
                Carnes Finas El Nevado nacio del sueño de una familia
                mosquera de ofrecer los mejores cortes de carne a precios
                justos. Hoy contamos con dos sedes y atendemos a cientos de
                familias y restaurantes cada semana.
              </p>
              <p className="section-subtitle mb-10">
                Trabajamos directamente con ganaderos de confianza para
                garantizar que cada pieza que llega a nuestras vitrinas
                cumpla con los mas altos estandares de calidad y frescura.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: "Sedes propias", value: "2" },
                  { label: "Familias atendidas", value: "500+" },
                  { label: "Productos frescos", value: "Diario" },
                  { label: "Municipios", value: "Mosquera" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-2xl font-bold text-brand-red">
                      {item.value}
                    </div>
                    <div className="text-brand-gray-warm text-sm mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/nosotros" className="btn-primary">
                Conocer mas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stores CTA */}
      <section className="bg-brand-black py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sede El Poblado",
                detail: "Barrio El Poblado, Mosquera",
                phone: "310 741 4835",
                whatsapp: "573107414835",
              },
              {
                name: "Sede El Rubí",
                address: "Cra 11 Este #19-71",
                detail: "Barrio El Rubí, Mosquera",
                phone: "310 741 4835",
                whatsapp: "573107414835",
              },
            ].map((store) => (
              <div
                key={store.name}
                className="border border-white/10 p-8 hover:border-brand-red transition-colors"
              >
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {store.name}
                </h3>
                <p className="text-brand-red text-sm mb-0.5">
                  {store.address}
                </p>
                <p className="text-gray-500 text-sm mb-4">{store.detail}</p>
                <p className="text-gray-400 text-sm mb-6">
                  📅 Lun–Sáb 7AM–9PM | Dom 7AM–8PM
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={`tel:${store.phone.replace(/\s/g, "")}`}
                    className="btn-secondary border-white/30 text-white hover:bg-white hover:text-brand-black text-xs py-2 px-4"
                  >
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/${store.whatsapp}?text=Hola%2C%20quisiera%20hacer%20un%20pedido`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
