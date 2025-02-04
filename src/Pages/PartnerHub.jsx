import React, { useRef } from "react";
import partnerimg from "../../public/partnerHub.webp";

import PaymentSection from "../components/PaymentSection.jsx";
import ResourcesAndTools  from "../components/ResourcesAndTools.jsx";
import AI_MentorshipSection from "../components/AI_MentorshipSection.jsx";
import CommunityAndSupport from "../components/CommunityAndSupport.jsx";
import PartnerHubHero from "../components/PartnerHubHero.jsx";
 
const PartnerHub = () => {
  
  return (
    <div className="bg-gray-100 p-6">
     
     <PartnerHubHero partnerimg={partnerimg} />


     {/* Sección de adquisición */}
  <PaymentSection />

{/* Sección de información */}
<div className="info-section mt-8" id="info-section">
  <h1 className="text-2xl font-bold">¿Cómo empezar?</h1>
  <p>
    Agenda tus mentorías en los horarios que mejor se adapten a ti. Si no encuentras disponibilidad compatible, contáctanos.  
    Además, accede a los recursos exclusivos.  
    <strong>Importante:</strong> Si aún no realizaste la compra, abstente de acceder a cualquier recurso y solicita la atención de un asistente de ventas en la sección superior.
  </p>

  <section id="mentorship-section" className="space-y-4"> 
  <AI_MentorshipSection />
    <ResourcesAndTools />
    <CommunityAndSupport  />
</section>
  
</div>



      
    </div>
  );
};

export default PartnerHub;
