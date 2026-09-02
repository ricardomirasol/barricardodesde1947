import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ZoomParallax } from './components/ZoomParallax';
import { Secciones } from './components/Secciones';
import { Footer } from './components/Footer';
import { useLenis } from './hooks/useLenis';
import { IMAGENES_PARALLAX } from './data/secciones';

function App() {
	useLenis();

	return (
		<>
			<Nav />
			<main>
				<Hero />
				<ZoomParallax images={IMAGENES_PARALLAX} />
				<Secciones />
			</main>
			<Footer />
		</>
	);
}

export default App;
