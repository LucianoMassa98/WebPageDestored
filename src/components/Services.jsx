import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import React, { useState } from "react";

const Services = () => {
  const cardData = [
    {
      title: "Web Express",
      message:
        "Elige este plan si querés una introducción rápida o resolver desafíos puntuales en desarrollo web.",
      price: "$10 USD / mes",
      features: [
        "4 sesiones 1 a 1 en vivo",
        "Documentación por clase",
        "Prácticas guiadas",
        "Resolución de problemas reales",
        "Nivel básico o intermedio",
      ],
    },
    {
      title: "Web Builder",
      message:
        "Un camino sólido de 6 meses para aprender, practicar y aplicar desarrollo web en proyectos propios.",
      price: "$30 USD / 6 meses",
      features: [
        "24 sesiones semanales 1 a 1",
        "Plan progresivo por módulos",
        "Proyecto final acompañado",
        "Acceso a recursos estratégicos",
        "Soporte vía WhatsApp",
      ],
    },
    {
      title: "Web Mastery",
      message:
        "Plan anual para lograr autonomía completa como dev web o digitalizar tu negocio con bases sólidas.",
      price: "$50 USD / año",
      features: [
        "Clases semanales por 12 meses",
        "Diseño de roadmap personalizado",
        "Proyecto final escalable",
        "Mentoría técnica continua",
        "Acceso premium a comunidad privada",
      ],
    },
    {
      title: "Web Pro Teams",
      message:
        "Solución personalizada para empresas y equipos que necesitan formación en herramientas web modernas.",
      price: "Precio a medida",
      features: [
        "Sesiones adaptadas a roles del equipo",
        "Integración con herramientas internas",
        "Consultoría en tecnologías específicas",
        "Reportes de avance y feedback grupal",
        "Soporte técnico ampliado y confidencialidad",
      ],
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [expandedDetails, setExpandedDetails] = useState(null);

  const modalUrl =
    "https://forms.gle/mL6R1sypKQfcQik37";

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };

  const handleCloseFormModal = () => {
    setOpenFormModal(false);
  };

  const toggleDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  return (
    <section id="services" className="relative bg-gradient-to-br from-white to-[#f3e8ff] py-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-no-repeat bg-cover opacity-10 z-0"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-black text-[#9C1DD8]">Nuestros Servicios</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
        Aprendé diseño y desarrollo web desde cero o consolidá tus conocimientos técnicos con clases personalizadas 1 a 1, pensadas para ayudarte a crear soluciones reales para tu negocio o proyectos personales.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-2xl p-8 bg-white border transition-transform duration-300 hover:scale-105 ${
              selectedCard === index ? "border-[#9C1DD8]" : "border-gray-100"
            }`}
            onClick={() => setSelectedCard(index)}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#9C1DD8]">{card.title}</h3>
              <p className="text-gray-600 mt-1">{card.message}</p>
            </div>
            <p className="text-2xl font-bold text-gray-800">{card.price}</p>

            <div className="mt-4">
              <button
                onClick={() => toggleDetails(index)}
                className="flex items-center justify-between w-full text-left text-purple-600 font-medium border-t pt-4"
              >
                <span>Detalle</span>
                {expandedDetails === index ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>

              {expandedDetails === index && (
                <ul className="space-y-2 mt-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-md">
                      <FaCheck className="w-5 h-5 text-purple-500 mt-1" />
                      <span className="text-gray-600 pl-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 relative z-10">
        <button
          onClick={handleOpenFormModal}
          className="text-white bg-[#9C1DD8] hover:text-[#00d9fa] hover:bg-gray-50 border border-[#9C1DD8] rounded-full px-10 py-3 text-lg font-semibold transition duration-150"
        >
          Inscribirme
        </button>
      </div>

      {openFormModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl h-[80vh] relative">
            <button
              onClick={handleCloseFormModal}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold hover:text-purple-600"
            >
              ×
            </button>
            <iframe
              src={modalUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title="Formulario"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
