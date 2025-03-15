import React, { useRef } from "react";
import partnerimg from "../../public/partnerHub.webp";

import PaymentSection from "../components/PaymentSection.jsx";
//import ResourcesAndTools  from "../components/ResourcesAndTools.jsx";
//import AI_MentorshipSection from "../components/AI_MentorshipSection.jsx";
//import CommunityAndSupport from "../components/CommunityAndSupport.jsx";
import PartnerHubHero from "../components/PartnerHubHero.jsx";
 
const PartnerHub = () => {
  
  return (
    <div className="bg-gray-100 p-6">
     
     <PartnerHubHero partnerimg={partnerimg} />


   

{/* Sección de información */}
<div className="info-section mt-8 text-center" id="info-section">
  <h1 className="text-2xl font-bold">¿Cómo empezar?</h1>
  <p>
    Agenda tu primera sesión gratuita&nbsp;
    <a href="https://www.destored.org/reunion" className="text-purple-600">aquí</a>.  
    Para personalizar la experiencia, completa el &nbsp;
    <a href="https://forms.gle/YnvRXqXVgWJnUWpEA" className="text-purple-600">formulario</a>.
  </p>
 
  <p className="mt-4">
    Tras el pago, podras acceder al
    <a href="https://docs.google.com/document/d/1Tlsbz1hRiyp6SY_q1D5ljd04G_iwcFNuK0j7MxTpWE0/edit?usp=sharing" className=" text-bold text-purple-600"> <strong>Guía de uso de DestHub</strong></a>
    , que recomendamos guardar.
  </p>
  <p className="mt-4">
    ¿Dudas o no recibiste el acceso al manual? <a href="https://api.whatsapp.com/send?phone=5492644631495&text=¡Hola! Me gustaría recibir ayuda sobre Desthub" className="text-purple-600 font-bold">Contáctanos</a>.
  </p>
</div>






  {/* Sección de adquisición */}
  <PaymentSection />

      
    </div>
  );
};

export default PartnerHub;
