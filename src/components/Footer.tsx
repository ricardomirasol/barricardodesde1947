export function Footer() {
	return (
		<footer className="bg-negro px-5 py-14 text-blanco">
			<div className="mx-auto grid max-w-contenido gap-8 md:grid-cols-3">
				<div>
					<h3 className="font-titulos text-lg font-semibold">Bar Ricardo desde 1947</h3>
					<p className="mt-2 font-cuerpo text-sm text-blanco/60">
						Bar-restaurante en Valencia.
					</p>
				</div>
				<div>
					<h3 className="font-titulos text-lg font-semibold">Contacto</h3>
					<p className="mt-2 font-cuerpo text-sm text-blanco/60">Dirección · Valencia</p>
					<p className="font-cuerpo text-sm text-blanco/60">Teléfono · Email</p>
				</div>
				<div>
					<h3 className="font-titulos text-lg font-semibold">Síguenos</h3>
					<p className="mt-2 font-cuerpo text-sm text-blanco/60">
						<a href="#instagram" className="hover:text-granate-claro">
							Instagram
						</a>{' '}
						·{' '}
						<a href="#facebook" className="hover:text-granate-claro">
							Facebook
						</a>
					</p>
				</div>
			</div>
			<p className="mx-auto mt-10 max-w-contenido border-t border-blanco/10 pt-6 font-cuerpo text-xs text-blanco/40">
				© 2026 Bar Ricardo desde 1947. Todos los derechos reservados.
			</p>
		</footer>
	);
}
