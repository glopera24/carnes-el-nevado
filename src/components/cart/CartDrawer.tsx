"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPriceShort, getWhatsAppUrl } from "@/lib/utils";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getWhatsAppMessage,
  } = useCartStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const message = getWhatsAppMessage();
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-cream-dark">
          <div>
            <h2 className="font-display text-lg font-semibold text-brand-black">
              Tu Carrito
            </h2>
            <p className="text-xs text-brand-gray-warm">
              {getTotalItems()} producto{getTotalItems() !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-brand-gray-warm hover:text-brand-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
              <ShoppingBag size={48} className="text-brand-cream-dark" />
              <div>
                <p className="font-display text-lg text-brand-black">
                  Tu carrito está vacío
                </p>
                <p className="text-sm text-brand-gray-warm mt-1">
                  Agrega productos de nuestro catálogo
                </p>
              </div>
              <Link href="/catalogo" onClick={closeCart} className="btn-primary">
                Ver catálogo
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-brand-cream-dark">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4">
                  <div className="relative w-20 h-20 bg-brand-cream flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-sm text-brand-black truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-gray-warm mt-0.5">
                      {item.product.weight}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-7 h-7 border border-brand-cream-dark flex items-center justify-center text-brand-black hover:border-brand-red hover:text-brand-red transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-7 h-7 border border-brand-cream-dark flex items-center justify-center text-brand-black hover:border-brand-red hover:text-brand-red transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-brand-red">
                          {formatPriceShort(
                            item.product.price * item.quantity
                          )}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-gray-400 hover:text-brand-red transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-cream-dark p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body font-medium text-brand-gray-warm">
                Total
              </span>
              <span className="font-display text-xl font-bold text-brand-black">
                {formatPriceShort(getTotalPrice())}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full btn-primary justify-center py-4 text-base"
            >
              Pedir por WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-brand-gray-warm hover:text-brand-red transition-colors py-1"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
