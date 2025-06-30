import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  "Consultoría estrategica brindada por administradores disponibles sin costo inicial para definir tu proyecto.",
  "Talento digital validado y coordinado por líderes tecnológicos.",
  "Gestión centralizada de proyectos, métricas y equipos.",
  "Soluciones integrales en software, datos, cloud y comercio digital.",
  "Capacitación y mentorías continuas para equipos y profesionales.",
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.13 },
  }),
};

const WhyDestored = () => (
  <section
    id="why-destored"
    className="relative bg-gradient-to-br from-[#9C1DD8] via-[#6e1bb2] to-[#00d9fa] py-20 px-4 mt-8"
  >
    {/* SVG decorativo de escudo */}
    <svg
      className="absolute left-8 top-8 w-20 h-20 opacity-15 z-0"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M32 4L60 16V32C60 48 32 60 32 60C32 60 4 48 4 32V16L32 4Z"
        fill="#fff"
        stroke="#00d9fa"
        strokeWidth="3"
      />
    </svg>
    <div className="max-w-3xl mx-auto rounded-2xl shadow-2xl p-12 text-center bg-white bg-opacity-90 z-10 relative">
      <h2 className="flex items-center justify-center gap-3 text-4xl font-extrabold text-[#9C1DD8] mb-8">
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          <FaStar className="inline-block text-[#00d9fa] text-3xl sm:text-4xl" />
        </motion.span>
        ¿Por qué elegir Destored?
      </h2>
      <ul className="text-lg text-gray-800 space-y-6 mt-8 text-left max-w-xl mx-auto">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={itemVariants}
          >
            <FaCheckCircle className="text-[#00d9fa] mr-4 text-3xl" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyDestored;
