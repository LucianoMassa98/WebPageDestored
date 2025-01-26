import React, { useRef,useState } from "react";
import partnerimg from "../../public/partnerHub.webp";
import digitalmastery from "../../public/digitalmastery.webp";
import ProjectFormModal from "../components/ProjectFormModal.jsx";



const DigitalMastery = () => {


  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <header className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-4">
          Digital Master
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Soluciones estratégicas personalizadas y equipos especializados para alcanzar el éxito de tus proyectos empresariales.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-between space-x-6">
          <img
            src={digitalmastery}
            alt="Imagen de Partner"
            className="w-full md:w-1/4 h-auto mb-4 md:mb-0 rounded-lg"
          />
          <ul className="list-disc text-gray-700 pl-5 space-y-2">
            <li>Acceso a Partner Hub.</li>
            <li>Consultoría estratégica ajustada a las necesidades de tu empresa.</li>
            <li>Desarrollo de planes de acción enfocados en tus metas.</li>
            <li>Implementación de metodologías ágiles específicas para tu equipo.</li>
            <li>Seguimiento continuo y optimización durante los ciclos de trabajo.</li>
            <li>Informes periódicos con métricas claves y análisis de desempeño.</li>
            <li>Soporte técnico y estratégico disponible 24/7.</li>
          </ul>
        </div>

        {/* Botón centrado */}
        <ProjectFormModal />
      </header>

      {/* Partner Hub Section */}
      <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-4">
          Partner Hub
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Accede a material exclusivo, plantillas prácticas y mentorías personalizadas para implementar IA y potenciar tu negocio.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-between space-x-6">
          <img
            src={partnerimg}
            alt="Imagen de Partner"
            className="w-full md:w-1/4 h-auto mb-4 md:mb-0 rounded-lg"
          />
          <ul className="list-disc text-gray-700 pl-5 space-y-2">
            <li>Guía completa para crear tu producto digital.</li>
            <li>Tres plantillas y planes de acción para proyectos digitales.</li>
            <li>Grupo privado de WhatsApp para networking y estrategias de negocio.</li>
            <li>Dos sesiones de mentoría en el uso práctico de IA para dueños de negocios.</li>
            <li>Soporte técnico por dos meses para configurar herramientas digitales.</li>
            <li>Soporte técnico disponible 24/7.</li>
          </ul>
        </div>

        {/* Botón conocer más Partner Hub */}
        <a
          href="https://www.destored.org/partnerhub"
          className="mt-4 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 mx-auto block text-center"
        >
          Conocer más sobre Partner Hub
        </a>
      </div>
      
     
    </div>
  );
};

export default DigitalMastery;
