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


   

{/* Sección de información */}
<div className="info-section mt-8" id="info-section">
<h1 className="text-2xl font-bold">¿Cómo empezar?</h1>
<p>
Agenda tu primera reunión sin costo adicional y da el primer paso con nosotros.
 Para una experiencia más personalizada y productiva, te recomendamos completar el formulario en www.destored.org/demo antes de la reunión.
</p>




  <section id="mentorship-section" className="space-y-4"> 
  <AI_MentorshipSection />
    <ResourcesAndTools />
    <CommunityAndSupport  />
</section>
  
</div>

  {/* Sección de adquisición */}
  <PaymentSection />

      
    </div>
  );
};

export default PartnerHub;
