import ReactPixel from 'react-facebook-pixel';

const pixelId = '1387077495787986'; // Reemplaza con tu ID de Pixel

export const initPixel = () => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Registrar vista de página
};

export const trackEvent = (event, data = {}) => {
    ReactPixel.track(event, data);
};

export default ReactPixel;
