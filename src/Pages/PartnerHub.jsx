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
  Si aún no has realizado la compra, no te preocupes. Lo más importante es que agendes tu primera reunión sin costo adicional. Para que podamos ofrecerte una sesión más personalizada y productiva, te recomendamos ingresar a nuestra demostración gratuita en <a href="https://www.destored.org/demo" className="text-blue-500">www.destored.org/demo</a> antes de la reunión.
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
