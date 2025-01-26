import React, { useRef } from "react";
import partnerimg from "../../public/partnerHub.webp";
import { ArrowDown } from "lucide-react"; // Agregar el ícono de flecha hacia abajo

import PaymentSection from "../components/PaymentSection.jsx";
import GuideIntroduction from "../components/GuideIntroduction.jsx";
import AI_MentorshipSection from "../components/AI_MentorshipSection.jsx";
import AccessRequest from "../components/AccessRequest.jsx";

const PartnerHub = () => {
  const paymentRef = useRef(null);

  const scrollToPayment = () => {
    paymentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <header className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto mb-8">
  <h1 className="text-4xl font-bold text-purple-600 text-center mb-4">
    Partner Hub
  </h1>
  <p className="text-lg text-gray-700 text-center mb-6">
    Accede a material exclusivo, plantillas prácticas y mentorías
    personalizadas para implementar IA y potenciar tu negocio.
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

  {/* Botón centrado */}
  <button
  onClick={scrollToPayment}
  className="mt-4 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 mx-auto block flex items-center justify-center"
>
  Comprar
  <ArrowDown className="ml-2 w-5 h-5" />
</button>
  </header>

      {/* Access to WhatsApp Group */}
      <AccessRequest />
      {/* Guide Section */}
      <GuideIntroduction />

      {/* AI Mentorship Section */}
      <AI_MentorshipSection />

      {/* Payment Section */}
      <div ref={paymentRef}>
        <PaymentSection />
      </div>
    </div>
  );
};

export default PartnerHub;
