"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";

export function useCart() {
  const store = useCartStore();

  const addToCart = (product: Product, quantity = 1) => {
    store.addItem(product, quantity);
  };

  const removeFromCart = (productId: string) => {
    store.removeItem(productId);
  };

  const isInCart = (productId: string): boolean => {
    return store.items.some((item) => item.product.id === productId);
  };

  const getItemQuantity = (productId: string): number => {
    const item = store.items.find((i) => i.product.id === productId);
    return item?.quantity ?? 0;
  };

  const checkout = () => {
    const message = store.getWhatsAppMessage();
    if (message) {
      window.open(`https://wa.me/573107414835?text=${message}`, "_blank");
    }
  };

  return {
    items: store.items,
    isOpen: store.isOpen,
    totalItems: store.getTotalItems(),
    totalPrice: store.getTotalPrice(),
    addToCart,
    removeFromCart,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
    toggleCart: store.toggleCart,
    isInCart,
    getItemQuantity,
    checkout,
  };
}
