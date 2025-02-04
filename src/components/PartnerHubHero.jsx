import React from "react";
import { ArrowDown } from "lucide-react";

const PartnerHubHero = ({ partnerimg }) => {
  const scrollToMentorship = () => {
    document.getElementById("mentorship-section").scrollIntoView({
      behavior: "smooth", // Corregir a 'smooth'
    });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white relative overflow-hidden py-16">
      {/* Forma decorativa */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-30 transform translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          Desto Partner Hub
        </h1>
        <p className="text-lg text-center mb-12">

        Digitaliza tu negocio y marca con IA al mejor precio del mercado.    
            </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <img
            src={partnerimg}
            alt="Imagen de Partner"
            className="w-full md:w-1/2 h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />

          <ul className="list-disc text-white space-y-6 md:w-1/2">
            <li>
              <strong className="text-xl">Mentorías 1 a 1 sobre uso de IA:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aplicada a marketing e informática.</li>
                <li>Aplicada al desarrollo de software y metodologías ágiles.</li>
              </ul>
            </li>
            <li>
              <strong className="text-xl">Recursos y herramientas:</strong>
              <ul className="list-disc pl-5 space-y-1">
              <li>Guía detallada para desarrollar y lanzar tu producto digital MVP.</li>  
              <li>Configuración profesional de Meta Business y Ads.</li>  
              <li>Configuración optimizada de Google Workspace y Ads.</li>  
              <li>Integración y configuración de OpenAI y su API.</li>  
              <li>Implementación y configuración de GitHub y Railway.</li>  
              <li>1 mes de hosting gratuito.</li>


              </ul>
            </li>
            <li>
              <strong className="text-xl">Comunidad y soporte:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Grupo privado de WhatsApp para networking y estrategias de negocio.</li>
                <li>Soporte técnico disponible 24/7.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Contenedor para el precio y el botón */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <h2 className="px-6 py-3 bg-transparent text-white font-bold shadow-lg ">
          Accede ahora por solo 50 USD.</h2>
          <button
  onClick={scrollToMentorship}
  className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:from-indigo-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
>
  Ver Más
  <ArrowDown className="ml-2 w-6 h-6 inline" />
</button>

        </div>
      </div>
    </section>
  );
};

export default PartnerHubHero;
