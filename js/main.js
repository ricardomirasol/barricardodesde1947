/* ==========================================================================
   Bar Ricardo desde 1947 — JavaScript principal
   1) Menú hamburguesa para móvil (todas las páginas)
   2) Sistema de scroll interactivo de la página de Inicio (pared de cuadros)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MENÚ HAMBURGUESA
   -------------------------------------------------------------------------- */
const botonMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

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

/* --------------------------------------------------------------------------
   2. SCROLL INTERACTIVO DE LA PÁGINA DE INICIO
   --------------------------------------------------------------------------
   Cómo funciona:
   - El usuario scrollea una "pista" larga (.recorrido) mientras la pared
     de cuadros queda fija en pantalla (.escenario, position: sticky).
   - Según la posición del scroll se decide la fase:
       [intro] → [cuadro 1: enfoque → resumen] → [cuadro 2: ...] → [final]
   - Cada sección ocupa SECCION píxeles de scroll: en la primera parte el
     cuadro hace zoom y viaja a su posición (transición CSS de 1.5s), y a
     partir del 45% aparece el resumen (fade de 0.4s).
   - El movimiento en sí lo hace CSS (transition en .cuadro); aquí solo se
     calcula el desplazamiento y se asignan clases.
   -------------------------------------------------------------------------- */

const pared = document.getElementById("pared-cuadros");

if (pared) {
  const recorrido = document.getElementById("recorrido-inicio");
  const indicador = document.getElementById("indicador-scroll");
  const resumen = document.getElementById("resumen-cuadro");
  const resumenTitulo = document.getElementById("resumen-titulo");
  const resumenTexto = document.getElementById("resumen-texto");
  const resumenEnlace = document.getElementById("resumen-enlace");

  // Orden de enfoque y contenido de cada resumen
  const ORDEN = ["historia", "nosotros", "menu", "reservas", "contacto", "blog"];

  const DATOS = {
    historia: {
      titulo: "Historia",
      texto: "Descubre cómo Bar Ricardo ha sido parte de Valencia desde 1947, a través de tres generaciones de pasión, tradición y evolución.",
      enlace: "historia.html",
      etiqueta: "Ir a Historia",
    },
    nosotros: {
      titulo: "Nosotros",
      texto: "Ricardo y Susana lideran Bar Ricardo desde 2001, con un equipo dedicado a ofrecer la mejor experiencia.",
      enlace: "pages/nosotros.html",
      etiqueta: "Ir a Nosotros",
    },
    menu: {
      titulo: "Menú",
      texto: "Una propuesta gastronómica que mezcla la tradición valenciana con ingredientes frescos de calidad superior.",
      enlace: "menu.html",
      etiqueta: "Ir al Menú",
    },
    reservas: {
      titulo: "Reservas",
      texto: "Elige entre nuestra barra, planta baja, planta alta o terraza. Cada espacio con su propia atmósfera.",
      enlace: "pages/reservas.html",
      etiqueta: "Ir a Reservas",
    },
    contacto: {
      titulo: "Contacto",
      texto: "¿Dudas? ¿Comentarios? Estamos aquí para escucharte. Contáctanos por correo, teléfono o WhatsApp.",
      enlace: "pages/contacto.html",
      etiqueta: "Ir a Contacto",
    },
    blog: {
      titulo: "Blog",
      texto: "Historias del bar, menciones en prensa, y momentos que definen quiénes somos.",
      enlace: "blog.html",
      etiqueta: "Ir al Blog",
    },
  };

  // Tramos de scroll (en píxeles, se recalculan al redimensionar)
  let INTRO = 0;    // scroll antes del primer enfoque
  let SECCION = 0;  // scroll que ocupa cada cuadro
  let FINAL = 0;    // scroll del fundido final
  const bases = {}; // posición y tamaño original de cada cuadro principal

  let cuadroEnfocado = null;

  function medir() {
    const vh = window.innerHeight;
    INTRO = 0.6 * vh;
    SECCION = 1.6 * vh;
    FINAL = 1.4 * vh;

    // Altura total de la pista: intro + 6 secciones + fundido + pantalla final
    recorrido.style.height = INTRO + ORDEN.length * SECCION + FINAL + vh + "px";

    // Guarda la geometría original (sin transformar) de cada cuadro principal
    ORDEN.forEach((id) => {
      const el = document.getElementById("cuadro-" + id);
      bases[id] = {
        el: el,
        izq: el.offsetLeft,
        arriba: el.offsetTop,
        ancho: el.offsetWidth,
        alto: el.offsetHeight,
      };
    });
  }

  // Aplica el zoom + desplazamiento hacia la posición de enfoque
  function enfocar(id) {
    if (cuadroEnfocado === id) return;

    // Suelta el cuadro anterior (vuelve a su sitio con la misma transición)
    if (cuadroEnfocado) {
      const previo = bases[cuadroEnfocado];
      previo.el.classList.remove("cuadro--enfocado");
      previo.el.style.transform = "";
    }

    cuadroEnfocado = id;
    if (!id) return;

    const movil = window.innerWidth < 768;
    const b = bases[id];
    const anchoPared = pared.clientWidth;
    const altoPared = pared.clientHeight;

    // Posición de destino: lado izquierdo centrado (en móvil, arriba centrado)
    const destinoX = movil ? anchoPared * 0.5 : anchoPared * 0.27;
    const destinoY = movil ? altoPared * 0.3 : altoPared * 0.5;

    // Zoom ~1.5x, limitado para que el cuadro no se salga de su zona
    let escala = movil ? 1.4 : 1.5;
    escala = Math.min(
      escala,
      (anchoPared * (movil ? 0.85 : 0.44)) / b.ancho,
      (altoPared * (movil ? 0.45 : 0.8)) / b.alto
    );
    escala = Math.max(escala, 1.05);

    const dx = destinoX - (b.izq + b.ancho / 2);
    const dy = destinoY - (b.arriba + b.alto / 2);

    b.el.classList.add("cuadro--enfocado");
    b.el.style.transform = "translate(" + dx + "px, " + dy + "px) scale(" + escala.toFixed(3) + ")";
  }

  // Los cuadros ya visitados se desvanecen suavemente
  function marcarPasados(indiceActual) {
    ORDEN.forEach((id, j) => {
      bases[id].el.classList.toggle("cuadro--pasado", j < indiceActual);
    });
  }

  function mostrarResumen(id) {
    const d = DATOS[id];
    if (resumenTitulo.textContent !== d.titulo) {
      resumenTitulo.textContent = d.titulo;
      resumenTexto.textContent = d.texto;
      resumenEnlace.href = d.enlace;
      resumenEnlace.textContent = d.etiqueta;
    }
    resumen.classList.add("resumen-cuadro--visible");
  }

  function ocultarResumen() {
    resumen.classList.remove("resumen-cuadro--visible");
  }

  // Traduce la posición del scroll a la fase correspondiente
  function aplicarEstado() {
    const y = window.scrollY;
    const finSecciones = INTRO + ORDEN.length * SECCION;

    // Indicador "Desliza para ver más": desaparece al empezar a scrollear
    indicador.classList.toggle("indicador-scroll--oculto", y > INTRO * 0.4);

    // FASE INTRO: pared completa
    if (y < INTRO) {
      pared.classList.remove("pared--final");
      enfocar(null);
      marcarPasados(0);
      ocultarResumen();
      return;
    }

    // FASE FINAL: fundido dramático de toda la pared
    if (y >= finSecciones) {
      ocultarResumen();
      enfocar(null);
      pared.classList.add("pared--final");
      return;
    }

    // FASES DE ENFOQUE: cuadro a cuadro
    pared.classList.remove("pared--final");
    const indice = Math.floor((y - INTRO) / SECCION);
    const progreso = ((y - INTRO) % SECCION) / SECCION;

    enfocar(ORDEN[indice]);
    marcarPasados(indice);

    // El resumen aparece cuando el zoom ya está prácticamente completado
    if (progreso > 0.45) {
      mostrarResumen(ORDEN[indice]);
    } else {
      ocultarResumen();
    }
  }

  // Scroll con requestAnimationFrame para no saturar el navegador
  let pendiente = false;
  window.addEventListener("scroll", () => {
    if (!pendiente) {
      pendiente = true;
      requestAnimationFrame(() => {
        aplicarEstado();
        pendiente = false;
      });
    }
  });

  window.addEventListener("resize", () => {
    const enfocadoAntes = cuadroEnfocado;
    enfocar(null);
    medir();
    cuadroEnfocado = null;
    if (enfocadoAntes) enfocar(enfocadoAntes);
    aplicarEstado();
  });

  medir();
  aplicarEstado();
}
