import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ruta } from '../data/secciones';

const ENLACES = [
	{ etiqueta: 'Inicio', href: ruta(''), activo: true },
	{ etiqueta: 'Historia', href: ruta('historia.html') },
	{ etiqueta: 'Nosotros', href: ruta('pages/nosotros.html') },
	{ etiqueta: 'Menú', href: ruta('menu.html') },
	{ etiqueta: 'Reservas', href: ruta('pages/reservas.html') },
	{ etiqueta: 'Contacto', href: ruta('pages/contacto.html') },
	{ etiqueta: 'Blog', href: ruta('blog.html') },
];

export function Nav() {
	const [abierto, setAbierto] = useState(false);

	return (
		<header className="fixed left-0 top-0 z-[100] h-[72px] w-full bg-negro text-blanco">
			<div className="mx-auto flex h-full max-w-contenido items-center justify-between px-5">
				<a href={ruta('')} className="font-titulos text-xl tracking-[0.02em]">
					Bar Ricardo
					<span className="block font-cuerpo text-[0.8rem] uppercase tracking-[0.2em] text-granate-claro">
						desde 1947
					</span>
				</a>

				<button
					type="button"
					className="px-2 py-1 text-[1.6rem] leading-none md:hidden"
					aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
					aria-expanded={abierto}
					onClick={() => setAbierto((v) => !v)}
				>
					{abierto ? '✕' : '☰'}
				</button>

				<nav className="hidden md:block">
					<ul className="flex items-center gap-1">
						{ENLACES.map((enlace) => (
							<li key={enlace.etiqueta}>
								<a
									href={enlace.href}
									className={`block px-4 py-3 text-[0.95rem] uppercase tracking-[0.05em] transition-colors hover:text-granate-claro ${
										enlace.activo ? 'font-semibold text-granate-claro' : 'text-blanco'
									}`}
								>
									{enlace.etiqueta}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<AnimatePresence>
				{abierto && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25, ease: 'easeOut' }}
						className="absolute left-0 top-[72px] w-full overflow-hidden bg-negro md:hidden"
					>
						<ul className="flex flex-col py-2 pb-4">
							{ENLACES.map((enlace) => (
								<li key={enlace.etiqueta}>
									<a
										href={enlace.href}
										onClick={() => setAbierto(false)}
										className={`block px-5 py-3 text-[0.95rem] uppercase tracking-[0.05em] transition-colors hover:text-granate-claro ${
											enlace.activo ? 'font-semibold text-granate-claro' : 'text-blanco'
										}`}
									>
										{enlace.etiqueta}
									</a>
								</li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
