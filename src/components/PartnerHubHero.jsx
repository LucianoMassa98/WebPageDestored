import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import ExpandableList from "./ExpandableList";

const PartnerHubHero = ({ partnerimg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px es el umbral para móvil
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Inicializa el tamaño al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const scrollToMentorship = () => {
    document.getElementById("mentorship-section").scrollIntoView({
      behavior: "smooth",
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
          Digitaliza tu negocio o marca personal con IA, Cloud, Blockchain o Ciberseguridad por 1 año al mejor precio. Recibe capacitaciones semanales 1 a 1 con un Teach Leader, documentación y herramientas para aplicarlo por tu cuenta, todo por 50 USD anuales.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {isMobile && !showMore ? (
            <div className="w-full md:w-1/2 text-center">
              <button
                onClick={() => setShowMore(true)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Ver más <ArrowDown className="inline ml-2" />
              </button>
            </div>
          ) : (
            <>
              <img
                src={partnerimg}
                alt="Imagen de Partner"
                className="w-full md:w-1/2 h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />

              <div className="md:w-1/2 space-y-6">
                <ExpandableList titulo="Recursos y herramientas" items={recursos} />
                <ExpandableList titulo="Comunidad y soporte" items={comunidad} />
                <ExpandableList titulo="Sesiones Exclusivas 1 a 1" items={sesiones} />
              </div>
            </>
          )}
        </div>

        {showMore && (
          <div className="mt-8">
            <button
              onClick={() => setShowMore(false)}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              Ver menos <ArrowDown className="inline ml-2 rotate-180" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnerHubHero;
