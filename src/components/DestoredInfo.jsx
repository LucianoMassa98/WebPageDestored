import React from "react";
import { motion } from "framer-motion";

const DestoredInfo = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }, // Animación al hacer clic
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80vw] mx-auto mt-8">
      <motion.h1
        className="text-[40px] text-center font-black mb-4 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Haz Crecer tu Negocio con Tecnología
      </motion.h1>
      <motion.p
        className="text-gray-600 text-justify mb-6 text-lg text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
      En Destored, hemos creado DestHub, una solución integral diseñada para ayudar a pequeños y medianos negocios a evolucionar en la era digital.
       Conectamos tu empresa con expertos, estrategias y herramientas que impulsan tu crecimiento de manera eficiente.</motion.p>

      {/* Contenedor desplazable para las tarjetas en móvil */}
      <div className="overflow-x-auto mt-6">
        <div className="flex space-x-6 p-4">
          {[
            {
              imgSrc: "prueba1.jpg",
              imgAlt: "Planes Personalizados",
              title: "Planes Personalizados",
              description:
                "Soluciones a medida, desde formación inicial hasta estrategias digitales avanzadas.",
            },
            {
              imgSrc: "prueba2.jpg",
              imgAlt: "Red de Expertos",
              title: "Red de Expertos",
              description:
                "Accede a un equipo de profesionales en desarrollo, marketing y tecnología listos para potenciar tu negocio.",
            },
            {
              imgSrc: "prueba3.jpg",
              imgAlt: "Capacitación y Soporte",
              title: "Capacitación y Soporte",
              description:
                "Entrenamos a tu equipo y brindamos asistencia técnica continua para asegurar resultados óptimos.",
            },
            {
              imgSrc: "prueba4.jpg",
              imgAlt: "Resultados Medibles",
              title: "Resultados Medibles",
              description:
                "Maximizamos tu productividad, ventas y presencia digital con estrategias enfocadas en el impacto real.",
            },
          ].map(({ imgSrc, imgAlt, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transform transition-all w-64" // Ancho fijo
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap" // Agregar animación al hacer clic
            >
              <motion.img
                className="w-full h-40 object-cover rounded-md shadow-lg"
                src={imgSrc}
                alt={imgAlt}
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 0%, 100% 80%, 75% 100%, 25% 100%, 0% 80%, 0% 0%)",
                }}
                whileHover={{ rotate: 3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
                {title}
              </h3>
              <p className="text-gray-600 text-center mt-2">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestoredInfo;
