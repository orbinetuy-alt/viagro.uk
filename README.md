# Viagro — Sitio Web Oficial

Sitio web institucional de **Viagro**, empresa del Reino Unido especializada en la comercialización de commodities agrícolas y fertilizantes a nivel global.

---

## Stack tecnológico

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ver en iPhone (mismo WiFi)
# http://192.168.1.113:3000
```

---

## Estructura del proyecto

```
app/
  layout.tsx         ← Metadatos SEO globales, fuente Geist
  page.tsx           ← Página principal (monta todos los componentes)
  globals.css        ← Variables de paleta de colores
  robots.ts          ← SEO: genera /robots.txt
  sitemap.ts         ← SEO: genera /sitemap.xml

components/
  Navbar.tsx         ← Navegación sticky con menú hamburguesa
  Hero.tsx           ← Sección hero con imagen de fondo
  QuienesSomos.tsx   ← Sección quiénes somos con cards
  Productos.tsx      ← Dos carruseles de productos
  Servicios.tsx      ← Grid de 4 servicios
  Contacto.tsx       ← Formulario + cards de contacto
  Footer.tsx         ← Footer con imagen de fondo

public/
  hero.png           ← Imagen de fondo del Hero
  footer.jpg         ← Imagen de fondo del Footer

types/
  global.d.ts        ← Declaración de tipos para imports CSS
```

---

## Paleta de colores

| Variable   | Color     | Uso                             |
|------------|-----------|---------------------------------|
| `#1a3a2a`  | Verde oscuro  | Hero, Footer, botones principales |
| `#2d6a4f`  | Verde medio   | Acentos, hovers               |
| `#52b788`  | Verde claro   | Etiquetas, destacados         |
| `#d8eedd`  | Verde suave   | Placeholders de imagen        |
| `#7c5c3b`  | Tierra        | Etiquetas secundarias         |
| `#c4a882`  | Tierra claro  | Flechas de carrusel           |
| `#f7f4ef`  | Crema         | Fondo principal de secciones  |
| `#ffffff`  | Blanco        | Cards, formularios            |

**Tipografía:** Geist Sans (Google Fonts)

---

## Secciones

### Navbar
- Sticky, fondo crema, borde inferior sutil
- Logo VIAGRO a la izquierda, links con subrayado animado a la derecha
- Responsive: menú hamburguesa en mobile con animación

### Hero
- Imagen de fondo `hero.png` con overlay verde oscuro al 80%
- Etiqueta, título grande, subtítulo y dos CTAs
- Degradado inferior para transición suave hacia la siguiente sección

### Quiénes Somos
- Título: "El partner que el campo necesita"
- Dos columnas: imagen (placeholder hasta tener la real) + texto + 3 cards de valores

### Productos
- Dos carruseles horizontales con flechas: **Commodities Agrícolas** y **Fertilizantes**
- 6 productos por carrusel, scroll suave, scrollbar oculta

### Servicios
- 4 cards en grid responsive (1 → 2 → 4 columnas)
- Número decorativo, línea acento verde, título y descripción

### Contacto
- Fondo crema con formulario flotante (card blanca con sombra)
- Campos: nombre, empresa, email, mensaje
- Columna derecha: placeholder de mapa + 3 cards flotantes (email, teléfono, ubicación)
- Cards con hover: borde verde + elevación sutil

### Footer
- Imagen de fondo `footer.jpg` con overlay verde oscuro al 85%
- 3 columnas: logo + descripción / navegación / datos de contacto
- Copyright dinámico con año actual

---

## SEO

Configurado en `app/layout.tsx`:

- Title y description optimizados
- Keywords del sector agro
- **Open Graph** completo (LinkedIn, WhatsApp, Facebook)
- **Twitter Card** con imagen grande
- URL canónica
- `robots.txt` — permite indexación total
- `sitemap.xml` — mapa del sitio para Google

> **Importante:** reemplazar `https://www.viagro.co.uk` en `layout.tsx`, `robots.ts` y `sitemap.ts` cuando el dominio esté disponible.

---

## Pendientes

- [ ] Favicon con el logo real de Viagro
- [ ] Imágenes reales para los productos (carruseles)
- [ ] Imagen real para la sección Quiénes Somos
- [ ] Lógica de envío del formulario de contacto
- [ ] Mapa real en sección Contacto (Google Maps u otro)
- [ ] Dominio real para reemplazar el placeholder en la configuración SEO
