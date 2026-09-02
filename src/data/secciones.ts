/**
 * Las seis secciones a las que da paso la página de Inicio.
 * Los textos vienen de la versión estática anterior (js/main.js).
 */

const BASE = process.env.PUBLIC_URL || '';

export const ruta = (destino: string) => `${BASE}/${destino}`;

export interface Seccion {
	id: string;
	titulo: string;
	texto: string;
	enlace: string;
	etiqueta: string;
}

export const SECCIONES: Seccion[] = [
	{
		id: 'historia',
		titulo: 'Historia',
		texto:
			'Descubre cómo Bar Ricardo ha sido parte de Valencia desde 1947, a través de tres generaciones de pasión, tradición y evolución.',
		enlace: ruta('historia.html'),
		etiqueta: 'Ir a Historia',
	},
	{
		id: 'nosotros',
		titulo: 'Nosotros',
		texto:
			'Ricardo y Susana lideran Bar Ricardo desde 2001, con un equipo dedicado a ofrecer la mejor experiencia.',
		enlace: ruta('pages/nosotros.html'),
		etiqueta: 'Ir a Nosotros',
	},
	{
		id: 'menu',
		titulo: 'Menú',
		texto:
			'Una propuesta gastronómica que mezcla la tradición valenciana con ingredientes frescos de calidad superior.',
		enlace: ruta('menu.html'),
		etiqueta: 'Ir al Menú',
	},
	{
		id: 'reservas',
		titulo: 'Reservas',
		texto:
			'Elige entre nuestra barra, planta baja, planta alta o terraza. Cada espacio con su propia atmósfera.',
		enlace: ruta('pages/reservas.html'),
		etiqueta: 'Ir a Reservas',
	},
	{
		id: 'contacto',
		titulo: 'Contacto',
		texto:
			'¿Dudas? ¿Comentarios? Estamos aquí para escucharte. Contáctanos por correo, teléfono o WhatsApp.',
		enlace: ruta('pages/contacto.html'),
		etiqueta: 'Ir a Contacto',
	},
	{
		id: 'blog',
		titulo: 'Blog',
		texto:
			'Historias del bar, menciones en prensa, y momentos que definen quiénes somos.',
		enlace: ruta('blog.html'),
		etiqueta: 'Ir al Blog',
	},
];

/** Imágenes del zoom parallax: la barra al centro y el resto alrededor. */
export const IMAGENES_PARALLAX = [
	{ src: ruta('assets/img/placeholder-barra.svg'), alt: 'La barra de Bar Ricardo' },
	{ src: ruta('assets/img/placeholder-ricardo-susana.svg'), alt: 'Ricardo y Susana' },
	{ src: ruta('assets/img/placeholder-equipo.svg'), alt: 'El equipo del bar' },
	{ src: ruta('assets/img/placeholder-planta-baja.svg'), alt: 'La planta baja' },
	{ src: ruta('assets/img/placeholder-planta-alta.svg'), alt: 'La planta alta' },
	{ src: ruta('assets/img/placeholder-terraza.svg'), alt: 'La terraza' },
	{ src: ruta('assets/img/placeholder-contacto-directo.svg'), alt: 'Cómo encontrarnos' },
];
