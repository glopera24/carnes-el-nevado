# 🥩 Carnes Finas El Nevado

Sitio web e-commerce premium para **Carnes Finas El Nevado**, carnicería con dos sedes en Mosquera, Cundinamarca.

---

## 🚀 Stack Tecnológico

- **Next.js 15** — App Router + Server Components
- **TypeScript** — Tipado estricto
- **Tailwind CSS** — Estilos utilitarios personalizados
- **Zustand** — Estado global del carrito (con persistencia)
- **Lucide React** — Iconografía
- **Google Fonts** — Playfair Display + Inter

---

## 📁 Estructura del Proyecto

```
carnes-el-nevado/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout raíz con metadata SEO
│   │   ├── page.tsx             # Página de inicio
│   │   ├── globals.css          # Estilos globales
│   │   ├── sitemap.ts           # Sitemap dinámico
│   │   ├── robots.ts            # robots.txt
│   │   ├── not-found.tsx        # Página 404
│   │   ├── catalogo/
│   │   │   ├── page.tsx         # Catálogo (SSR)
│   │   │   └── CatalogClient.tsx # Filtros y búsqueda (cliente)
│   │   ├── producto/[slug]/
│   │   │   ├── page.tsx         # Detalle de producto (SSG)
│   │   │   └── ProductDetailClient.tsx
│   │   ├── nosotros/page.tsx
│   │   ├── sedes/page.tsx
│   │   └── contacto/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navbar sticky + mobile menu
│   │   │   └── Footer.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   └── CategoryCard.tsx
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx   # Carrito lateral
│   │   └── ui/
│   │       ├── WhatsAppButton.tsx
│   │       ├── SearchModal.tsx
│   │       └── ContactForm.tsx
│   ├── data/
│   │   ├── products.ts          # 50+ productos
│   │   ├── categories.ts
│   │   └── stores.ts
│   ├── hooks/
│   │   └── useCart.ts
│   ├── store/
│   │   └── cartStore.ts         # Zustand store
│   ├── types/
│   │   └── index.ts
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## ⚙️ Instalación y Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

---

## 🏗️ Build para Producción

```bash
# Compilar
npm run build

# Iniciar servidor de producción
npm start
```

---

## 🌐 Despliegue en Vercel (Recomendado)

1. Subir el proyecto a un repositorio GitHub
2. Ir a [vercel.com](https://vercel.com) y crear una cuenta
3. Importar el repositorio
4. Vercel detecta Next.js automáticamente
5. Configurar el dominio personalizado (ej: `carneselnevado.com`)
6. Click en **Deploy** — listo en minutos

**Variables de entorno:** Este proyecto no requiere variables de entorno adicionales para funcionar.

---

## 🔧 Despliegue Manual en VPS/Servidor

```bash
# En el servidor
git clone <repo-url>
cd carnes-el-nevado
npm install
npm run build
npm start

# O con PM2 (recomendado)
npm install -g pm2
pm2 start npm --name "carnes-nevado" -- start
pm2 save
pm2 startup
```

---

## 📦 Funcionalidades Implementadas

| Funcionalidad | Estado |
|---|---|
| Página de Inicio con Hero | ✅ |
| Catálogo con 50+ productos | ✅ |
| Filtros por categoría | ✅ |
| Ordenamiento de productos | ✅ |
| Buscador en tiempo real | ✅ |
| Página de producto individual | ✅ |
| Carrito de compras (Zustand) | ✅ |
| Checkout por WhatsApp | ✅ |
| Página Nosotros | ✅ |
| Página Contacto | ✅ |
| Página Sedes | ✅ |
| Navbar sticky + menú móvil | ✅ |
| Botón flotante WhatsApp | ✅ |
| Footer profesional | ✅ |
| SEO optimizado | ✅ |
| Sitemap dinámico | ✅ |
| robots.txt | ✅ |
| Diseño responsive | ✅ |
| Persistencia del carrito | ✅ |

---

## 📞 Información de la Empresa

**Carnes Finas El Nevado**

- **Sede 1:** Cl 10 #16A-27, Barrio El Poblado, Mosquera
- **Sede 2:** Cra 11 Este #19-71, Barrio El Rubí, Mosquera
- **Tel 1:** 310 741 4835
- **Tel 2:** 320 414 3043
- **Email:** ventas@carneselnevado.com
- **Horario:** Lun–Sáb 6AM–7PM | Dom 7AM–3PM

---

## 🎨 Paleta de Colores

| Variable | Hex | Uso |
|---|---|---|
| `brand-red` | `#8B1A1A` | Color primario / CTAs |
| `brand-red-dark` | `#6B1313` | Hover states |
| `brand-black` | `#1A1A1A` | Textos principales |
| `brand-cream` | `#FAF8F5` | Fondo principal |
| `brand-gold` | `#C4922A` | Acentos decorativos |

---

## 📝 Personalización

### Agregar productos
Editar `src/data/products.ts` y agregar entradas al array `products`.

### Modificar colores
Editar `tailwind.config.ts` en la sección `theme.extend.colors.brand`.

### Actualizar información de sedes
Editar `src/data/stores.ts`.

### Cambiar números de WhatsApp
Editar `src/lib/utils.ts`, array `WHATSAPP_NUMBERS`.
