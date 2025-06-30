import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";

const DestoredIntro = () => {
  // Handler para scroll suave a la sección BusinessTech
  const handleScrollToBusinessTech = () => {
    const section = document.getElementById("business-tech");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="destored-intro"
      className="relative bg-gradient-to-br from-[#f3e8ff] via-white to-[#e0e7ff] rounded-3xl shadow-2xl px-6 py-16 sm:py-20 mx-auto overflow-hidden flex flex-col items-center max-w-4xl mt-8 mb-8 z-20"
    >
      {/* Gráfico decorativo SVG de red de nodos */}
      <svg
        className="absolute top-4 left-1/2 -translate-x-1/2 w-44 h-16 opacity-30 z-0"
        viewBox="0 0 180 60"
        fill="none"
      >
        <circle cx="20" cy="40" r="6" fill="#9C1DD8" />
        <circle cx="60" cy="20" r="6" fill="#00d9fa" />
        <circle cx="120" cy="30" r="6" fill="#9C1DD8" />
        <circle cx="160" cy="45" r="6" fill="#00d9fa" />
        <line
          x1="20"
          y1="40"
          x2="60"
          y2="20"
          stroke="#9C1DD8"
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="20"
          x2="120"
          y2="30"
          stroke="#00d9fa"
          strokeWidth="2"
        />
        <line
          x1="120"
          y1="30"
          x2="160"
          y2="45"
          stroke="#9C1DD8"
          strokeWidth="2"
        />
      </svg>
      {/* ...existing code... */}
      <motion.h2
        className="flex items-center justify-center gap-3 text-center text-[32px] sm:text-[44px] font-extrabold text-gray-900 z-10 relative mb-4 leading-tight drop-shadow"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          initial={{ rotate: -20 }}
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="text-[#00d9fa]"
        >
          <FaProjectDiagram className="inline-block text-4xl sm:text-5xl drop-shadow" />
        </motion.span>
        Creamos conexiones.
        <br />Transformamos ideas en proyectos.
      </motion.h2>
      <motion.p
        className="text-center text-lg sm:text-xl text-gray-700 max-w-2xl mt-2 mb-10 z-10 relative font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Destored es una plataforma digital que vincula profesionales, emprendedores
        y líderes tecnológicos para desarrollar soluciones digitales, campañas
        publicitarias y proyectos basados en datos.
      </motion.p>
      <motion.button
        className="bg-gradient-to-r from-[#9C1DD8] to-[#00d9fa] hover:from-[#00d9fa] hover:to-[#9C1DD8] text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg sm:text-xl"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleScrollToBusinessTech}
      >
        Conocé cómo funciona
      </motion.button>
    </section>
  );
};

export default DestoredIntro;
