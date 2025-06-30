import React from "react";
import { FaCheckCircle, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  "Automatización de procesos y operaciones",
  "Cloud computing seguro y escalable",
  "Comercio digital y gestión de ecommerce",
  "Consultoría tecnológica y roadmap digital",
  "Desarrollo de software, APIs y gestión de datos",
  "Proyectos de inteligencia artificial y automatización predictiva",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

const BusinessTech = () => (
  <section
    id="business-tech"
    className="relative bg-gradient-to-br from-[#e0e7ff] via-white to-[#f3e8ff] py-12 px-2 sm:py-20 sm:px-4 mt-8"
  >
    {/* Gráfico decorativo de engranajes */}
    <div className="absolute left-4 top-4 opacity-20 z-0">
      <FaCogs className="text-[#9C1DD8] text-6xl animate-spin-slow" />
    </div>
    <div className="max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white p-4 sm:p-12 relative overflow-hidden z-10">
      <div className="absolute -top-16 -right-16 w-40 h-40 sm:w-56 sm:h-56 bg-[#9C1DD8] opacity-10 rounded-full"></div>
      <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-4xl font-extrabold text-[#9C1DD8] mb-6 sm:mb-10 text-center">
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaCogs className="inline-block text-[#00d9fa] text-3xl sm:text-4xl" />
        </motion.span>
        Tecnología aplicada
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center bg-gradient-to-r from-[#f3e8ff] to-white rounded-xl shadow-md p-3 sm:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={cardVariants}
          >
            <FaCheckCircle className="text-[#00d9fa] mr-3 sm:mr-4 text-2xl sm:text-3xl flex-shrink-0" />
            <span className="text-base sm:text-lg text-gray-800">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessTech;
