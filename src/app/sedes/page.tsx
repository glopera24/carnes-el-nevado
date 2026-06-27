import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Nuestras Sedes | Carnes Finas El Nevado",
  description:
    "Encuentra nuestras dos sedes en Mosquera, Cundinamarca. Barrio El Poblado y Barrio El Rubí. Horarios, teléfonos y cómo llegar.",
};

export default function SedesPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-black py-20">
        <div className="container-custom text-center">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            Dónde encontrarnos
          </p>
          <h1 className="font-display text-5xl text-white font-bold mb-4">
            Nuestras Sedes
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Dos sedes en Mosquera, Cundinamarca, para estar siempre cerca de
            usted.
          </p>
        </div>
      </div>

      {/* Stores */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stores.map((store, index) => (
              <div key={store.name} className="bg-white overflow-hidden shadow-sm">
                {/* Map placeholder */}
                <div className="relative h-56 bg-brand-cream-dark flex items-center justify-center">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-brand-cream hover:bg-brand-cream-dark transition-colors group"
                  >
                    <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                      <MapPin size={28} className="text-brand-red" />
                    </div>
                    <span className="text-sm font-semibold text-brand-black flex items-center gap-2">
                      <Navigation size={14} className="text-brand-red" />
                      Ver en Google Maps
                    </span>
                    <span className="text-xs text-brand-gray-warm">
                      {store.address}, {store.city}
                    </span>
                  </a>
                </div>

                {/* Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                        Sede {index + 1}
                      </span>
                      <h2 className="font-display text-2xl font-semibold text-brand-black mt-1">
                        {store.name}
                      </h2>
                    </div>
                    <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-red" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin
                        size={16}
                        className="text-brand-red mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="text-brand-black font-medium text-sm">
                          {store.address}
                        </p>
                        <p className="text-brand-gray-warm text-sm">
                          {store.neighborhood}
                        </p>
                        <p className="text-brand-gray-warm text-sm">
                          {store.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Phone
                        size={16}
                        className="text-brand-red mt-0.5 shrink-0"
                      />
                      <a
                        href={`tel:${store.phone.replace(/\s/g, "")}`}
                        className="text-brand-black text-sm hover:text-brand-red transition-colors font-medium"
                      >
                        {store.phone}
                      </a>
                    </div>

                    <div className="flex gap-3">
                      <Clock
                        size={16}
                        className="text-brand-red mt-0.5 shrink-0"
                      />
                      <div className="text-sm text-brand-gray-warm">
                        {store.schedule.split("|").map((s, i) => (
                          <p key={i}>{s.trim()}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="btn-secondary flex-1 justify-center py-3 text-xs"
                    >
                      <Phone size={14} />
                      Llamar
                    </a>
                    <a
                      href={`https://wa.me/${index === 0 ? "573107414835" : "573107414835"}?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20la%20${encodeURIComponent(store.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center py-3 text-xs"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule banner */}
      <section className="bg-brand-red py-14">
        <div className="container-custom text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-2">
            Horarios de Atención
          </h2>
          <p className="text-white/70 mb-8">Ambas sedes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="bg-white/10 p-6">
              <p className="font-semibold mb-1">Lunes a Sábado</p>
              <p className="text-2xl font-display font-bold">
                7:00 AM – 9:00 PM
              </p>
            </div>
            <div className="bg-white/10 p-6">
              <p className="font-semibold mb-1">Domingos y Festivos</p>
              <p className="text-2xl font-display font-bold">
                7:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-custom text-center">
          <h2 className="section-title mb-3">¿Prefiere pedir a domicilio?</h2>
          <p className="section-subtitle max-w-lg mx-auto mb-8">
            Hacemos entregas en Mosquera y municipios cercanos. Coordine su
            pedido directamente por WhatsApp.
          </p>
          <Link href="/catalogo" className="btn-primary py-4 px-10">
            Ver catálogo y pedir
          </Link>
        </div>
      </section>
    </div>
  );
}
