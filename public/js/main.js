/* ==========================================================================
   Bar Ricardo desde 1947 — JavaScript de las páginas estáticas
   Menú hamburguesa para móvil.

   La página de Inicio ya no vive aquí: es una app React (src/) con sus
   animaciones en Framer Motion, así que su antiguo sistema de scroll
   interactivo se ha retirado de este archivo.
   ========================================================================== */

const botonMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("nav__menu--abierto");
    botonMenu.setAttribute("aria-expanded", abierto);
  });

  menu.querySelectorAll(".nav__enlace").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("nav__menu--abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    });
  });
}
