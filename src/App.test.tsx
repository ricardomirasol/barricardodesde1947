import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el titular de la portada', () => {
	render(<App />);
	expect(
		screen.getByRole('heading', { name: /tres generaciones sirviendo la misma mesa/i })
	).toBeInTheDocument();
});

test('enlaza con las seis secciones de la web', () => {
	render(<App />);
	['Ir a Historia', 'Ir a Nosotros', 'Ir al Menú', 'Ir a Reservas', 'Ir a Contacto', 'Ir al Blog'].forEach(
		(etiqueta) => {
			expect(screen.getByText(etiqueta)).toBeInTheDocument();
		}
	);
});
