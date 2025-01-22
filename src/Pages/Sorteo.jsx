import React from "react";

const SorteoDigital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-6">
          ¡Sorteamos una Transformacion Digital!
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
        ¡Participa en nuestro sorteo y gana increíbles premios para impulsar tu negocio o marca!
        Cada mes, tienes la oportunidad de obtener una transformación digital gratuita, que incluye el desarrollo de sitios webs, la implementación de CRMs y mucho más.
        </p>
      </div>

      {/* Call to Action */}
      <h2>¿Como participar?</h2>


      <a href="https://www.instagram.com/destored_/" 
       className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2"
      > Seguirnos en Instagram </a>

  {/* Benefits Section */}
<div className="mt-12 text-center">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
    ¿Qué incluye el premio?
  </h2>
  <ul className="list-disc list-inside text-lg sm:text-xl space-y-2">
    <li>Recopilación de requisitos para transformar tu idea, marca o negocio.</li>
    <li>Plan de acción mensual detallado en marketing, informática y/o ventas.</li>
    <li>Implementación del 10% del plan.</li>
  </ul>
  <h2 className="text-2xl sm:text-3xl font-semibold my-6">
    Puntos extra por compartir al menos 1 contenido
  </h2>
  <ul className="list-disc list-inside text-lg sm:text-xl space-y-2">
    <li>Implementación completa del plan.</li>
    <li>Soporte técnico y asesoramiento durante 1 mes.</li>
  </ul>
</div>


      {/* Footer */}
      <div className="mt-16 text-center mb-6">
        <p className="text-sm mb-4">
          Términos y condiciones aplican. Sorteo válido hasta ultimo miercoles de cada mes. Participa y transforma tu negocio con nosotros.
        </p>
        <a 
  href="https://www.instagram.com/mariano_rojass?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
  className="bg-white hover:bg-purple-500 text-violet-500 py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 mt-6"
>
  Último ganador
</a>

      </div>
    </div>
  );
};

export default SorteoDigital;
