import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Activa el scroll suave de Lenis durante la vida del componente.
 * Se desactiva si el usuario ha pedido reducir el movimiento.
 */
export function useLenis() {
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		let frame = requestAnimationFrame(function raf(time: number) {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		});

		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, []);
}
