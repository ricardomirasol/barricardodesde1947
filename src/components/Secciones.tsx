import { motion } from 'framer-motion';
import { SECCIONES } from '../data/secciones';

/** Las seis puertas de entrada al resto de la web, reveladas al hacer scroll. */
export function Secciones() {
	return (
		<section className="bg-blanco px-5 py-24">
			<div className="mx-auto max-w-contenido">
				<motion.h2
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="font-titulos text-3xl font-semibold text-negro md:text-4xl"
				>
					La casa, por dentro
				</motion.h2>

				<ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{SECCIONES.map((seccion, index) => (
						<motion.li
							key={seccion.id}
							initial={{ opacity: 0, y: 32 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
						>
							<a
								href={seccion.enlace}
								className="group flex h-full flex-col border border-negro/10 bg-gris-claro p-8 transition-colors hover:border-granate"
							>
								<h3 className="font-titulos text-2xl font-semibold text-negro">
									{seccion.titulo}
								</h3>
								<p className="mt-4 flex-1 font-cuerpo text-[0.95rem] leading-relaxed text-gris-texto">
									{seccion.texto}
								</p>
								<span className="mt-6 inline-flex items-center gap-2 font-cuerpo text-[0.8rem] uppercase tracking-[0.15em] text-granate">
									{seccion.etiqueta}
									<span
										aria-hidden="true"
										className="transition-transform group-hover:translate-x-1"
									>
										→
									</span>
								</span>
							</a>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	);
}
