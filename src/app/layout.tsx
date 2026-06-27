import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Carnes Finas El Nevado | Carnicería Premium en Mosquera",
    template: "%s | Carnes Finas El Nevado",
  },
  description:
    "Carnicería premium en Mosquera, Cundinamarca. Carnes finas de res, cerdo, pollo, pescados, embutidos y kits para parrilla. Dos sedes: Barrio El Poblado y Barrio El Rubí. Pedidos por WhatsApp.",
  keywords: [
    "carnicería Mosquera",
    "carnes finas Mosquera",
    "carnicería Cundinamarca",
    "carnes premium Bogotá",
    "carnes El Nevado",
    "pedidos carne WhatsApp",
    "parrilla Mosquera",
    "carnes res cerdo pollo",
    "carnicería cerca Bogotá",
    "carne a domicilio Mosquera",
  ],
  authors: [{ name: "Carnes Finas El Nevado" }],
  creator: "Carnes Finas El Nevado",
  publisher: "Carnes Finas El Nevado",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://carneselnevado.com",
    siteName: "Carnes Finas El Nevado",
    title: "Carnes Finas El Nevado | Carnicería Premium en Mosquera",
    description:
      "La mejor carnicería de Mosquera, Cundinamarca. Cortes premium de res, cerdo, pollo, pescados, embutidos y kits de parrilla. Pedidos por WhatsApp.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588347818036-c4e8a4f2cd8c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Carnes Finas El Nevado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnes Finas El Nevado | Carnicería Premium",
    description:
      "Carnicería premium en Mosquera. Res, cerdo, pollo, pescados y kits de parrilla. Pedidos por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://carneselnevado.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
