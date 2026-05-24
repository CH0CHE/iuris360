# IURIS360

Sitio web institucional para un bufete jurídico en Guatemala, con enfoque en divorcios y servicios legales integrales. Presenta información de servicios, preguntas frecuentes, contacto y ubicación de la oficina en Zona 4.

Repositorio: [github.com/CH0CHE/iuris360](https://github.com/CH0CHE/iuris360)

## Características

- **Landing page de una sola vista** con navegación por anclas (`#inicio`, `#servicios`, `#faq`, `#contacto`, `#ubicacion`).
- **Diseño responsive**: sidebar fijo en escritorio y menú hamburguesa en móvil.
- **Integración con WhatsApp**: botón flotante y formulario de contacto que redirige a WhatsApp con el mensaje prellenado.
- **Mapa embebido** (Google Maps) y enlace directo a **Waze** para indicaciones.
- **Sección de servicios** organizada en Notariado y Abogacía (divorcios como servicio principal).
- **FAQ** con acordeón sobre procesos de divorcio en Guatemala.
- **SEO y metadatos** configurados en `app/layout.tsx`.
- **Analytics de Vercel** habilitado en producción.

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React con App Router |
| [React 19](https://react.dev/) | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos utilitarios |
| [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Componentes accesibles |
| [Lucide React](https://lucide.dev/) | Iconografía |
| [next-themes](https://github.com/pacocoursey/next-themes) | Soporte de tema (claro por defecto) |

## Estructura del proyecto

```
iuris360/
├── app/
│   ├── layout.tsx          # Layout raíz, fuentes, metadatos y ThemeProvider
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Estilos globales y variables CSS
├── components/
│   ├── navigation.tsx      # Barra lateral (desktop) y menú móvil
│   ├── footer.tsx          # Pie de página
│   ├── whatsapp-button.tsx # Botón flotante de WhatsApp
│   ├── sections/           # Secciones de la landing (hero, servicios, faq, etc.)
│   └── ui/                 # Componentes reutilizables (shadcn/ui)
├── hooks/                  # Hooks personalizados
├── lib/
│   ├── whatsapp.ts         # Construcción de URLs y mensajes de WhatsApp
│   └── utils.ts            # Utilidades (cn, etc.)
├── public/                 # Assets estáticos (logos, favicon, íconos)
├── .env                    # Variables de entorno (no commitear datos sensibles)
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Requisitos previos

- [Node.js](https://nodejs.org/) 18.17 o superior
- npm, pnpm o yarn

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/CH0CHE/iuris360.git
cd iuris360
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (ver sección siguiente).

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Ubicación
NEXT_PUBLIC_UBICACION_OFICINA="Dirección completa de la oficina"
NEXT_PUBLIC_MAPS_URL="URL de embed de Google Maps"
NEXT_PUBLIC_UBICACION_WAZE="Enlace de Waze para indicaciones"

# Contacto
NEXT_PUBLIC_EMAIL_CONTACTO="contacto@ejemplo.com"
NEXT_PUBLIC_AREA_CODE="502"
NEXT_PUBLIC_PHONE_CONTACTO="12345678"
NEXT_PUBLIC_PHONE_OFICINA="87654321"

# Horario
NEXT_PUBLIC_HORARIO_OFICINA1="Lun - Vie: 9:00 - 16:00"
NEXT_PUBLIC_HORARIO_OFICINA2="Sáb: 10:00 - 14:00"
```

> **Nota:** Todas las variables expuestas al cliente deben usar el prefijo `NEXT_PUBLIC_`. No incluir el archivo `.env` en el control de versiones si contiene datos reales de contacto.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Compila la aplicación para producción |
| `npm run start` | Inicia el servidor de producción (requiere `build` previo) |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

## Secciones de la página

| Sección | Componente | Estado |
|---|---|---|
| Inicio | `components/sections/hero.tsx` | Activa |
| Servicios | `components/sections/services.tsx` | Activa |
| Preguntas frecuentes | `components/sections/faq.tsx` | Activa |
| Contacto | `components/sections/contact.tsx` | Activa |
| Ubicación | `components/sections/location.tsx` | Activa |
| Nosotros | `components/sections/about.tsx` | Oculta (disponible en código) |
| Artículos | `components/sections/articles.tsx` | Oculta (disponible en código) |
| Testimonios | `components/sections/testimonials.tsx` | Oculta (disponible en código) |

Para reactivar una sección oculta, importar el componente correspondiente en `app/page.tsx` y descomentar su uso.

## Integración con WhatsApp

El flujo de contacto funciona así:

1. El usuario completa el formulario en la sección **Contacto**.
2. Los datos se guardan en `sessionStorage` para reutilizarlos en el botón flotante.
3. Al enviar, se abre WhatsApp con un mensaje generado por `lib/whatsapp.ts`.

El botón flotante también usa los datos del formulario si el usuario ya los completó en la misma sesión.

## Despliegue

### Vercel (recomendado)

1. Importar el repositorio en [Vercel](https://vercel.com/).
2. Configurar las variables de entorno `NEXT_PUBLIC_*` en el panel del proyecto.
3. Desplegar. Vercel detecta Next.js automáticamente.

### Build local

```bash
npm run build
npm run start
```

La configuración actual en `next.config.mjs` desactiva la optimización de imágenes (`images.unoptimized: true`), lo que facilita despliegues estáticos si se requiere exportación en el futuro.

## Licencia

Proyecto privado. Todos los derechos reservados.
