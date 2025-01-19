import React from 'react';

const GoogleSlidesEmbed = ({ slideUrl, width = "960", height = "569", title = "Transformación Digital 2025" }) => {
  // Verifica si la URL es válida y contiene el ID de la presentación
  if (!slideUrl || !slideUrl.includes('docs.google.com/presentation/d/')) {
    return <p className="text-red-500">Por favor, proporciona una URL válida de Google Slides.</p>;
  }

  // Genera el enlace de incrustación
  const embedUrl = slideUrl.replace("/edit", "/embed");

  return (
    <div className="google-slides-embed-container max-w-full mx-auto px-4">
      {/* Título del componente */}
      <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>

      {/* Contenedor del iframe */}
      <div className="relative pb-[56.25%] mb-4 max-w-2xl max-h-2xl mx-auto">
        <iframe 
          src={embedUrl} 
          className="absolute top-0 left-0 w-full h-full" 
          frameBorder="0" 
          allowFullScreen="true" 
          title={title}
        />
      </div>
    </div>
  );
};

export default GoogleSlidesEmbed;
