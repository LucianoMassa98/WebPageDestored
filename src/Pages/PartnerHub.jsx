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
  <strong>¡Atención!</strong> Si aún no has realizado la compra, detén tu lectura y solicita una demostración gratuita dirigiéndote a <a href="https://www.destored.org/demo" className="text-blue-500">www.destored.org/demo</a>.
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
