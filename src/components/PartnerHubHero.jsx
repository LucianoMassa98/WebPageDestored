import React from "react";
import { ArrowDown } from "lucide-react";
import ExpandableList from "./ExpandableList";

const PartnerHubHero = ({ partnerimg }) => {
  const scrollToMentorship = () => {
    document.getElementById("mentorship-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  const sesiones = [
    { title: "Exploración del impacto de IA", content: "Cómo la IA transformará el futuro rol de los trabajadores en los negocios." },
    { title: "Enfoque en Cloud", content: "Optimización de procesos y recursos a través de soluciones basadas en la nube." },
    { title: "Cloud y Marketing Digital", content: "Integración de la nube para mejorar la personalización y automatización en campañas publicitarias." },
    { title: "Blockchain", content: "Uso de la IA para fortalecer la seguridad y eficiencia en soluciones basadas en blockchain." },
    { title: "Ciberseguridad", content: "Aplicación de IA para mejorar la protección y detección de amenazas en sistemas digitales." },
    { title: "Desarrollo de Software", content: "Integración de IA en el ciclo de vida del desarrollo de software para optimizar la programación y el testing." }
  ];

  const recursos = [
    { title: "Guía MVP", content: "Guía detallada para desarrollar y lanzar tu producto digital MVP." },
    { title: "Meta Business y Ads", content: "Configuración profesional de Meta Business y Ads." },
    { title: "Google Workspace y Ads", content: "Configuración optimizada de Google Workspace y Ads." },
    { title: "OpenAI", content: "Integración y configuración de OpenAI y su API." },
    { title: "GitHub y Railway", content: "Implementación y configuración de GitHub y Railway." },
    { title: "Hosting Gratuito", content: "1 mes de hosting gratuito." }
  ];

  const comunidad = [
    { title: "Networking", content: "Grupo privado de WhatsApp para networking y estrategias de negocio." },
    { title: "Soporte 24/7", content: "Soporte técnico disponible 24/7." }
  ];

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
          Digitaliza tu negocio y marca con IA durante 1 año al mejor precio del mercado.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <img
            src={partnerimg}
            alt="Imagen de Partner"
            className="w-full md:w-1/2 h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />

          <div className="md:w-1/2 space-y-6">
            <ExpandableList titulo="Sesiones Exclusivas 1 a 1" items={sesiones} />
            <ExpandableList titulo="Recursos y herramientas" items={recursos} />
            <ExpandableList titulo="Comunidad y soporte" items={comunidad} />
          </div>
        </div>

        {/* Contenedor para el precio y el botón */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <h2 className="px-6 py-3 bg-transparent text-white font-bold">
          Obtén acceso a 48 sesiones 1:1 durante un año completo, junto con materiales y recursos estratégicos, todo por tan solo 50 USD.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PartnerHubHero;
