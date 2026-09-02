/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				negro: '#0d0d0d',
				blanco: '#ffffff',
				granate: '#6e1423',
				'granate-claro': '#8c2436',
				'gris-claro': '#f5f3f0',
				'gris-texto': '#4a4a4a',
				naranja: '#d97b29',
			},
			fontFamily: {
				titulos: ['"Playfair Display"', 'Georgia', 'serif'],
				cuerpo: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			},
			maxWidth: {
				contenido: '1200px',
			},
		},
	},
	plugins: [],
};
