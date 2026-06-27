"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola, me gustaría hacer un pedido en Carnes Finas El Nevado. ¿Me pueden ayudar?"
  );
  const url = getWhatsAppUrl(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
