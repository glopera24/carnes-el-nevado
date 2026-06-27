import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getWhatsAppMessage: () => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { product, quantity }],
            isOpen: true,
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getWhatsAppMessage: () => {
        const items = get().items;
        if (items.length === 0) return "";

        const lines = items.map(
          (item) =>
            `• ${item.product.name} (${item.product.weight}) x${item.quantity} = $${(item.product.price * item.quantity).toLocaleString("es-CO")}`
        );

        const total = get().getTotalPrice();

        const message = [
          "🥩 *Pedido - Carnes Finas El Nevado*",
          "",
          ...lines,
          "",
          `*Total: $${total.toLocaleString("es-CO")}*`,
          "",
          "📍 Por favor indíqueme su dirección de entrega o la sede a la que va a recoger.",
          "",
          "¡Gracias por su pedido!",
        ].join("\n");

        return encodeURIComponent(message);
      },
    }),
    {
      name: "nevado-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
