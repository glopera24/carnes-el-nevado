import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Carnes Finas El Nevado",
  description:
    "Contáctanos en Carnes Finas El Nevado. Teléfonos: 310 741 4835 / 320 414 3043. Email: ventas@carneselnevado.com. Dos sedes en Mosquera, Cundinamarca.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    lines: ["310 741 4835", "320 414 3043"],
    href: "tel:3107414835",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    lines: ["ventas@carneselnevado.com"],
    href: "mailto:ventas@carneselnevado.com",
  },
  {
    icon: MapPin,
    title: "Sede El Poblado",
    lines: ["Cl 10 #16A-27", "Barrio El Poblado, Mosquera"],
    href: "https://www.google.com/maps/search/Cl+10+%2316A-27+Mosquera",
  },
  {
    icon: MapPin,
    title: "Sede El Rubí",
    lines: ["Cra 11 Este #19-71", "Barrio El Rubí, Mosquera"],
    href: "https://www.google.com/maps/search/Cra+11+Este+%2319-71+Mosquera",
  },
  {
    icon: Clock,
    title: "Horarios",
    lines: ["Lun – Sáb: 6:00 AM – 7:00 PM", "Dom y Festivos: 7:00 AM – 3:00 PM"],
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-black py-20">
        <div className="container-custom text-center">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            Estamos para servirle
          </p>
          <h1 className="font-display text-5xl text-white font-bold mb-4">
            Contáctenos
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Para pedidos, preguntas o cotizaciones para eventos, estamos
            disponibles por WhatsApp, teléfono y email.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-black mb-2">
                  Información de contacto
                </h2>
                <div className="w-10 h-0.5 bg-brand-red" />
              </div>

              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-warm mb-1">
                      {item.title}
                    </p>
                    {item.lines.map((line) =>
                      item.href ? (
                        <a
                          key={line}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-brand-black text-sm hover:text-brand-red transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-brand-black text-sm">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp highlight */}
              <div className="bg-green-50 border border-green-200 p-5 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={18} className="text-green-600" />
                  <p className="font-semibold text-green-800 text-sm">
                    La forma más rápida
                  </p>
                </div>
                <p className="text-green-700 text-sm mb-4">
                  Para pedidos urgentes o cotizaciones para eventos, contáctenos
                  directamente por WhatsApp.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/573107414835?text=Hola%2C%20quisiera%20información%20sobre%20sus%20productos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 transition-colors"
                  >
                    <MessageCircle size={16} />
                    310 741 4835
                  </a>
                  <a
                    href="https://wa.me/573204143043?text=Hola%2C%20quisiera%20información%20sobre%20sus%20productos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 transition-colors"
                  >
                    <MessageCircle size={16} />
                    320 414 3043
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-brand-black mb-2">
                  Envíenos un mensaje
                </h2>
                <p className="text-brand-gray-warm text-sm mb-6">
                  Responderemos en menos de 24 horas hábiles.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
