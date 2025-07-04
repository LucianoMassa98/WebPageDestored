import { FaCheck, FaRocket, FaSeedling, FaBuilding } from "react-icons/fa6";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
  const cardData = [
    {
      title: "Starter",
      icon: <FaSeedling className="text-green-500 w-10 h-10 mb-2" />,
      message:
        "Ideal para quienes buscan una introducción rápida al ecosistema digital o resolver desafíos específicos sin costo.",
      price: "$0",
      features: [
        "Publicación ilimitada de proyectos",
        "Acceso a nuestra red de profesionales digitales",
        "Consultorías iniciales y soporte básico para definir tu proyecto",
      ],
    },
    {
      title: "Growth",
      icon: <FaRocket className="text-blue-500 w-10 h-10 mb-2" />,
      message:
        "Pensado para emprendedores que necesitan soluciones ágiles, asesoramiento personalizado y acompañamiento estratégico para sus primeros proyectos.",
      price: "$499.999 ARS / mes",
      features: [
        "Publicación de proyectos con prioridad",
        "Soporte personalizado y atención prioritaria durante 3 meses",
        "Acceso directo a líderes tecnológicos en software, datos y marketing",
        "Entregas quincenales garantizadas",
        "Resolución de desafíos operativos y estratégicos",
        "Reembolso disponible hasta 10 días hábiles",
        "500 puntos Desto para utilizar dentro de la plataforma",
      ],
    },
    {
      title: "Scale",
      icon: <FaBuilding className="text-purple-500 w-10 h-10 mb-2" />,
      message:
        "Diseñado para empresas que requieren soluciones digitales complejas y equipos multidisciplinarios para llevar sus proyectos al siguiente nivel.",
      price: "$1.349.999 ARS / mes",
      features: [
        "Atención estratégica dedicada durante 6 meses",
        "Acceso exclusivo a líderes tecnológicos en software, datos y marketing",
        "Entregas quincenales con revisión estratégica",
        "Resolución de problemas complejos y desafíos estructurales",
        "Formación de equipos de trabajo de 2 o más profesionales",
        "Reembolso disponible hasta 10 días hábiles",
      ],
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [openFormModal, setOpenFormModal] = useState(false);

  const modalUrl = "https://forms.gle/mL6R1sypKQfcQik37";

  const handleOpenFormModal = () => setOpenFormModal(true);
  const handleCloseFormModal = () => setOpenFormModal(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-[#f3e8ff]">
      {/* Hero/Header */}
      <header className="relative bg-[#9C1DD8] text-white py-8 flex flex-col items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Servicios digitales"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center max-w-xl px-4">
          <p className="text-lg md:text-xl font-medium drop-shadow">
            Adaptate al nuevo mundo del software y datos con la revolución de la IA.
          </p>
        </div>
      </header>

      {/* Servicios */}
      <section className="relative z-10 py-10 max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-3xl shadow-2xl p-6 md:p-8 pb-16 bg-white border-2 transition-transform duration-300 hover:scale-105 flex flex-col items-center ${
                selectedCard === index ? "border-[#9C1DD8]" : "border-gray-100"
              }`}
              onClick={() => setSelectedCard(index)}
            >
              <div className="mb-4 flex flex-col items-center">
                {card.icon}
                <h3 className="text-2xl font-bold text-[#9C1DD8]">{card.title}</h3>
                <p className="text-gray-600 mt-2 text-center">{card.message}</p>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-2">{card.price}</p>
              <ul className="space-y-2 mt-3 w-full">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-md">
                    <FaCheck className="w-5 h-5 text-purple-500 mt-1" />
                    <span className="text-gray-600 pl-3">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* CTA en la esquina inferior derecha */}
              <IconButton
                className="!absolute !bottom-6 !right-8 !bg-[#9C1DD8] hover:!bg-[#7a16a8] shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenFormModal();
                }}
                aria-label="Ir"
                sx={{
                  color: "#fff",
                  width: 48,
                  height: 48,
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#7a16a8",
                  },
                }}
              >
                <ArrowForwardIcon fontSize="medium" />
              </IconButton>
            </div>
          ))}
        </div>
      </section>
      {/* Modal de formulario */}
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
    </main>
  );
};

export default Services;
