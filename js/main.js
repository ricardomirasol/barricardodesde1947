/* ==========================================================================
   Bar Ricardo desde 1947 — JavaScript principal
   Por ahora solo contiene el menú hamburguesa para móvil.
   Aquí irán en el futuro: carga del blog desde markdown, galerías, etc.
   ========================================================================== */

// Menú hamburguesa: en pantallas pequeñas el menú está oculto
// y este botón lo muestra/oculta al pulsarlo.
const botonMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

botonMenu.addEventListener("click", () => {
  const abierto = menu.classList.toggle("nav__menu--abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
});

// Cierra el menú móvil al pulsar cualquier enlace
menu.querySelectorAll(".nav__enlace").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("nav__menu--abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});
