"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Search, Phone } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/ui/SearchModal";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sedes", label: "Sedes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-red text-white text-xs py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span className="flex items-center gap-4">
            <a
              href="tel:3107414835"
              className="flex items-center gap-1 hover:text-red-200 transition-colors"
            >
              <Phone size={12} />
              310 741 4835
            </a>
            <a
              href="tel:3204143043"
              className="flex items-center gap-1 hover:text-red-200 transition-colors"
            >
              <Phone size={12} />
              320 414 3043
            </a>
          </span>
          <span className="text-red-200">
            Lun - Sáb: 6AM - 7PM | Dom: 7AM - 3PM
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white border-b border-brand-cream-dark"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-brand-red tracking-tight">
                El Nevado
              </span>
              <span className="text-[10px] font-body text-brand-gray-warm uppercase tracking-widest">
                Carnes Finas
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-body font-medium uppercase tracking-wide transition-colors duration-200",
                    pathname === link.href
                      ? "text-brand-red"
                      : "text-brand-black hover:text-brand-red"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-black hover:text-brand-red transition-colors"
                aria-label="Buscar productos"
              >
                <Search size={20} />
              </button>

              <button
                onClick={toggleCart}
                className="relative p-2 text-brand-black hover:text-brand-red transition-colors"
                aria-label="Abrir carrito"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-brand-black hover:text-brand-red transition-colors"
                aria-label="Abrir menú"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-white border-t border-brand-cream-dark animate-slide-up">
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 px-4 text-sm font-body font-medium uppercase tracking-wide transition-colors border-b border-brand-cream-dark last:border-0",
                    pathname === link.href
                      ? "text-brand-red"
                      : "text-brand-black hover:text-brand-red"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 pb-2 px-4">
                <a
                  href="tel:3107414835"
                  className="flex items-center gap-2 text-sm text-brand-gray-warm hover:text-brand-red transition-colors"
                >
                  <Phone size={14} />
                  310 741 4835
                </a>
                <a
                  href="tel:3204143043"
                  className="flex items-center gap-2 text-sm text-brand-gray-warm hover:text-brand-red transition-colors"
                >
                  <Phone size={14} />
                  320 414 3043
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
