import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Award, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Carnes Finas El Nevado",
  description:
"Conoce la historia de Carnes Finas El Nevado, especialistas en carnes premium, cortes seleccionados y atención de calidad para hogares y restaurantes de Mosquera y Cundinamarca."};

const values = [
  {
    icon: Heart,
    title: "Pasión por la calidad",
    description:
      "Cada corte que sale de El Nevado ha pasado por un riguroso proceso de selección. No comprometemos la calidad bajo ninguna circunstancia.",
  },
  {
    icon: Users,
    title: "Servicio familiar",
    description:
      "Somos una empresa familiar que trata a cada cliente como parte de nuestra familia. El servicio personalizado es nuestra marca.",
  },
  {
    icon: Award,
    title: "Tradición y experiencia",
    description:
      "Hemos perfeccionado cada proceso para ofrecer cortes de calidad superior, frescura garantizada y una atención excepcional.",
  },
  {
    icon: Leaf,
    title: "Responsabilidad",
    description:
      "Trabajamos con proveedores que practican ganadería responsable. El bienestar animal y la sostenibilidad nos importan.",
  },
];

const team = [
  {
    name: "El Equipo El Nevado",
    role: "Carniceros y especialistas en cortes",
    description:
      "Nuestro equipo está formado por profesionales apasionados que conocen cada corte, cada técnica y cada secreto para entregarle la mejor carne.",
    image:
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600&q=80",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&q=80"
            alt="Carnicería El Nevado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4">
            Nuestra historia
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Comprometidos con la calidad y la frescura en
            Mosquera, Cundinamarca.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4">
                Cómo empezamos
              </p>
              <h2 className="section-title mb-4">
                Una historia de familia,
                <br />
                dedicación y carne premium
              </h2>
              <div className="divider" />
              <div className="space-y-4 mt-6">
                <p className="section-subtitle">
                  Carnes Finas El Nevado surge de la pasión por ofrecer productos de calidad superior y una experiencia de compra excepcional. Gracias a su compromiso con la frescura, la selección de los mejores cortes y una atención cercana, se ha convertido en un referente para hogares, restaurantes y amantes de la buena cocina en Mosquera y Cundinamarca.
                </p>
                <p className="section-subtitle">
                  Nuestra diferencia siempre ha sido la selección rigurosa de
                  los animales, el proceso de carnización propio y el trato
                  cercano con cada cliente. Conocemos a nuestros clientes por
                  nombre, sabemos qué les gusta y cómo prefieren sus cortes.
                </p>
                <p className="section-subtitle">
                  Hoy contamos con dos sedes en Mosquera, un equipo de
                  especialistas en carnes y una comunidad fiel de familias
                  que confían en El Nevado semana a semana.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588347818036-c4e8a4f2cd8c?w=600&q=80"
                  alt="Corte premium El Nevado"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                  alt="Parrilla El Nevado"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-cream py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
              Lo que nos mueve
            </p>
            <h2 className="section-title">Nuestros Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8">
                <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center mb-5">
                  <value.icon size={22} className="text-brand-red" />
                </div>
                <h3 className="font-body font-semibold text-brand-black mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-red py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "La Mejor", label: "Calidad" },
              { value: "500+", label: "Familias atendidas" },
              { value: "50+", label: "Cortes disponibles" },
              { value: "2", label: "Sedes en Mosquera" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
              Las personas detrás
            </p>
            <h2 className="section-title">Nuestro Equipo</h2>
          </div>

          {team.map((member) => (
            <div
              key={member.name}
              className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10"
            >
              <div className="relative w-64 h-64 shrink-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-brand-black mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-red text-sm font-semibold uppercase tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-brand-gray-warm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-white font-bold mb-4">
            ¿Listo para probar la diferencia?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Visita cualquiera de nuestras dos sedes en Mosquera o haz tu
            pedido por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo" className="btn-primary py-4 px-8">
              Ver catálogo <ArrowRight size={16} />
            </Link>
            <Link href="/sedes" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-brand-black py-4 px-8">
              Ver nuestras sedes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
