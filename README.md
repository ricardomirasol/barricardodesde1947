# Bar Ricardo desde 1947 — Web oficial

Web del bar-restaurante **Bar Ricardo desde 1947** (Valencia).

La **página de Inicio** es una aplicación React + TypeScript con animaciones de
Framer Motion y scroll suave con Lenis. El resto de páginas siguen siendo
estáticas y se sirven desde `public/`, así que conviven en el mismo despliegue.

## Tecnología

- React 19 + TypeScript (Create React App)
- Framer Motion — animaciones y el efecto *zoom parallax* del Inicio
- Lenis (`@studio-freight/lenis`) — scroll suave
- Tailwind CSS 3 — estilos de la página de Inicio
- HTML5 + CSS3 + JS vanilla — resto de páginas (`public/`)

## Estructura del proyecto

```
├── src/                        # Página de Inicio (React)
│   ├── App.tsx                 # Composición: Nav → Hero → ZoomParallax → Secciones → Footer
│   ├── index.css               # Directivas de Tailwind
│   ├── components/
│   │   ├── Nav.tsx             # Barra fija + menú móvil animado
│   │   ├── Hero.tsx            # Gancho emocional de apertura
│   │   ├── ZoomParallax.tsx    # Mosaico de imágenes que hace zoom con el scroll
│   │   ├── Secciones.tsx       # Las seis puertas de entrada al resto de la web
│   │   └── Footer.tsx
│   ├── data/secciones.ts       # Textos y enlaces de las secciones e imágenes
│   └── hooks/useLenis.ts       # Scroll suave (se desactiva con prefers-reduced-motion)
│
├── public/                     # Se copia tal cual al build
│   ├── index.html              # Plantilla de la página de Inicio (React)
│   ├── historia.html           # La historia completa desde 1947
│   ├── menu.html               # Visión interactiva de la carta
│   ├── blog.html               # Blog / Noticias
│   ├── pages/                  # Contacto, reservas, nosotros...
│   ├── css/styles.css          # Estilos de las páginas estáticas
│   ├── js/main.js              # JS de las páginas estáticas (menú móvil)
│   ├── posts/                  # Artículos del blog en markdown
│   └── assets/img/             # Imágenes del sitio
│
├── tailwind.config.js          # Paleta y tipografías de la marca
└── postcss.config.js
```

## Cómo funciona el Inicio

La página se recorre de arriba abajo en tres tiempos:

1. **Hero** — titular a pantalla completa sobre fondo negro.
2. **Zoom parallax** — durante `300vh` de scroll, siete imágenes fijas en
   pantalla crecen a distinta velocidad (`scale` de 1 a 4–9 según la posición),
   de modo que la imagen central acaba ocupando todo el encuadre.
3. **Secciones** — las seis tarjetas (Historia, Nosotros, Menú, Reservas,
   Contacto y Blog) aparecen al entrar en pantalla y enlazan con las páginas
   estáticas.

Todo el movimiento lo controla `useScroll` de Framer Motion, así que no hay
cálculos manuales de scroll como en la versión anterior.

## Paleta de colores

| Color   | Clase Tailwind    | Valor     |
|---------|-------------------|-----------|
| Negro   | `negro`           | `#0d0d0d` |
| Blanco  | `blanco`          | `#ffffff` |
| Granate | `granate`         | `#6e1423` |
| Granate claro | `granate-claro` | `#8c2436` |
| Gris claro | `gris-claro`   | `#f5f3f0` |
| Gris texto | `gris-texto`   | `#4a4a4a` |
| Naranja | `naranja`         | `#d97b29` (acentos en la sección Menú) |

Las páginas estáticas usan las mismas variables CSS en `public/css/styles.css`.

## Tipografía

- **Playfair Display** (`font-titulos`) — títulos
- **Inter** (`font-cuerpo`) — cuerpo de texto

Ambas cargadas desde Google Fonts en `public/index.html`.

## Comandos

```bash
npm install     # instalar dependencias
npm start       # servidor de desarrollo en http://localhost:3000
npm test        # tests
npm run build   # build de producción en build/
```

El servidor de desarrollo sirve también las páginas estáticas: por ejemplo
`http://localhost:3000/historia.html`.

## Despliegue (GitHub Pages)

La portada es una app de React, así que **Pages no puede servir el repositorio
tal cual**: hace falta un paso de build. De eso se encarga
`.github/workflows/deploy-pages.yml`, que compila y publica la carpeta `build/`
(que ya contiene el Inicio en React y las páginas estáticas de `public/`).

Para activarlo, una única vez, en **Settings → Pages → Build and deployment**
hay que poner **Source: GitHub Actions**. A partir de ahí cada push a la rama
configurada vuelve a desplegar.

El workflow pasa la ruta base del sitio a `PUBLIC_URL`, de modo que los enlaces
y los assets funcionan igual en la raíz del dominio que en un subdirectorio
como `/barricardodesde1947/`.
