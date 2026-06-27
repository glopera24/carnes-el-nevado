import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-2xl font-bold text-brand-red">
                El Nevado
              </div>
              <div className="text-[11px] font-body text-gray-400 uppercase tracking-widest">
                Carnes Finas
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Llevando las mejores carnes a las mesas de
              Mosquera y Cundinamarca. Calidad, frescura y tradición en cada
              corte.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body font-semibold uppercase tracking-widest text-xs text-gray-400 mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/catalogo", label: "Catálogo" },
                { href: "/catalogo?categoria=parrilla", label: "Parrilla" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/sedes", label: "Sedes" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-body font-semibold uppercase tracking-widest text-xs text-gray-400 mb-5">
              Categorías
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/catalogo?categoria=res", label: "Res" },
                { href: "/catalogo?categoria=cerdo", label: "Cerdo" },
                { href: "/catalogo?categoria=pollo", label: "Pollo" },
                {
                  href: "/catalogo?categoria=pescados-mariscos",
                  label: "Pescados y Mariscos",
                },
                { href: "/catalogo?categoria=embutidos", label: "Embutidos" },
                { href: "/catalogo?categoria=parrilla", label: "Parrilla" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold uppercase tracking-widest text-xs text-gray-400 mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="text-brand-red mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">Sede El Poblado</p>
                  <p className="text-gray-400 text-xs">
                    Cl 10 #16A-27, Mosquera
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="text-brand-red mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">Sede El Rubí</p>
                  <p className="text-gray-400 text-xs">
                    Cra 11 Este #19-71, Mosquera
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:3107414835"
                    className="text-gray-400 text-sm hover:text-white transition-colors block"
                  >
                    310 741 4835
                  </a>
                  <a
                    href="tel:3204143043"
                    className="text-gray-400 text-sm hover:text-white transition-colors block"
                  >
                    320 414 3043
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-brand-red mt-0.5 shrink-0" />
                <a
                  href="mailto:ventas@carneselnevado.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  ventas@carneselnevado.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div className="text-gray-400 text-xs">
                  <p>Lun - Sáb: 6:00 AM – 7:00 PM</p>
                  <p>Dom: 7:00 AM – 3:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Carnes Finas El Nevado. Todos los
            derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Mosquera, Cundinamarca, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
