import type { Metadata } from "next";
import { CatalogClient } from "./CatalogClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Catálogo de Carnes | Carnes Finas El Nevado",
  description:
    "Explora nuestro catálogo completo: cortes de res, cerdo, pollo, pescados y mariscos, embutidos y kits de parrilla premium. Pedidos por WhatsApp en Mosquera.",
  keywords: [
    "catálogo carnes Mosquera",
    "cortes res Cundinamarca",
    "kits parrilla",
    "embutidos artesanales",
    "pollo orgánico Mosquera",
  ],
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Cargando catálogo...</div>}>
      <CatalogClient />
    </Suspense>
  );
}