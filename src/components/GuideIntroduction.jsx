import React from 'react';

const GuideIntroduction = () => {
  const handleDownload = () => {
    // Aquí puedes colocar la URL de descarga de la guía
    window.location.href = 'https://docs.google.com/document/d/1SK3XW19cF8shUkxEVaEpZ5O84Qe8SA_JJHQcGGWelNs/edit?usp=sharing'; // Reemplaza con la ruta correcta
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Introducción a la Guía</h2>
      <p className="text-gray-700 mb-4 text-center">
      Esta guía ofrece un marco completo para diseñar, desarrollar e implementar soluciones digitales, con un enfoque en la contratación de profesionales clave para formar equipos sólidos.
       Incluye tres planes de acción genéricos para informática, marketing y ventas, basados en la experiencia de más de 300 profesionales y 15 proyectos. 
       Su contenido práctico y estratégico, condensado en 16 páginas, está diseñado para ser leído en una hora.
      </p>



      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800"
        >
          Acceder a la Guía
        </button>
      </div>
    </section>
  );
};

export default GuideIntroduction;
