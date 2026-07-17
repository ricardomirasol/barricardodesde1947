# Bar Ricardo desde 1947 — Web oficial

Web estática del bar-restaurante **Bar Ricardo desde 1947** (Valencia).

## Tecnología

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Mobile-first y responsive
- Blog basado en archivos markdown (carpeta `posts/`)

## Estructura del proyecto

```
├── index.html        # Inicio — gancho emocional + esencia de la marca
├── historia.html     # La historia completa desde 1947
├── menu.html         # Visión interactiva de la carta
├── reservas.html     # Los 3 espacios + widget de Cover Manager
├── contacto.html     # Ubicación, teléfono, horarios, email
├── blog.html         # Blog / Noticias
├── css/
│   └── styles.css    # Hoja de estilos principal (variables, nav, footer...)
├── js/
│   └── main.js       # JavaScript (menú móvil, futuras funciones)
├── posts/            # Artículos del blog en markdown
└── assets/
    └── img/          # Imágenes del sitio
```

## Paleta de colores

| Color   | Variable CSS        | Valor     |
|---------|---------------------|-----------|
| Negro   | `--color-negro`     | `#0d0d0d` |
| Blanco  | `--color-blanco`    | `#ffffff` |
| Granate | `--color-granate`   | `#6e1423` |
| Naranja | `--color-naranja`   | `#d97b29` (acentos en la sección Menú) |

## Tipografía

- **Playfair Display** — títulos (elegante, con carácter clásico)
- **Inter** — cuerpo de texto (limpia y muy legible)

Ambas cargadas desde Google Fonts.

## Cómo verlo

Al ser un sitio estático, basta con abrir `index.html` en el navegador,
o subir el proyecto a StackBlitz / cualquier hosting estático.
