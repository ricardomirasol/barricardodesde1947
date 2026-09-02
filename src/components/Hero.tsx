import { motion } from 'framer-motion';

/** Gancho emocional de apertura, antes de que empiece el zoom parallax. */
export function Hero() {
	return (
		<section className="flex min-h-screen flex-col items-center justify-center bg-negro px-5 text-center text-blanco">
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="font-cuerpo text-[0.8rem] uppercase tracking-[0.35em] text-granate-claro"
			>
				Valencia · desde 1947
			</motion.p>

			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
				className="mt-6 max-w-4xl font-titulos text-4xl font-semibold leading-tight md:text-6xl"
			>
				Tres generaciones sirviendo la misma mesa
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
				className="mt-6 max-w-xl font-cuerpo text-base leading-relaxed text-blanco/70"
			>
				Tradición, producto y hospitalidad en el corazón de Valencia.
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.9 }}
				className="mt-16 flex flex-col items-center gap-2 text-blanco/60"
			>
				<motion.span
					aria-hidden="true"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
					className="text-2xl leading-none"
				>
					↓
				</motion.span>
				<span className="font-cuerpo text-[0.7rem] uppercase tracking-[0.25em]">
					Desliza para ver más
				</span>
			</motion.div>
		</section>
	);
}
