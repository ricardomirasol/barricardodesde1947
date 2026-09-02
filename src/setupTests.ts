// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom no implementa estas APIs, que sí usan Lenis (ResizeObserver)
// y las animaciones `whileInView` de Framer Motion (IntersectionObserver).
class ObservadorVacio {
	observe() {}
	unobserve() {}
	disconnect() {}
	takeRecords() {
		return [];
	}
}

global.ResizeObserver = global.ResizeObserver || (ObservadorVacio as any);
global.IntersectionObserver = global.IntersectionObserver || (ObservadorVacio as any);

if (!window.matchMedia) {
	window.matchMedia = ((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	})) as any;
}
