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
        Tu puente hacia la transformación digital
      </motion.h1>
      <motion.p
        className="text-gray-600 text-justify mb-6 text-lg text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        En Destored conectamos a pequeños y medianos negocios con soluciones
        innovadoras para potenciar su crecimiento en la era digital.
      </motion.p>

      {/* Cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          {
            imgSrc: "prueba1.jpg",
            imgAlt: "Planes Personalizados",
            title: "Planes Personalizados",
            description:
              "Soluciones adaptadas a tus necesidades, desde formación hasta estrategias avanzadas.",
          },
          {
            imgSrc: "prueba2.jpg",
            imgAlt: "Red de Expertos",
            title: "Red de Expertos",
            description:
              "Acceso a profesionales calificados en desarrollo, marketing y tecnología.",
          },
          {
            imgSrc: "prueba3.jpg",
            imgAlt: "Capacitación y Soporte",
            title: "Capacitación y Soporte",
            description:
              "Preparamos a tu equipo y garantizamos asistencia técnica continua.",
          },
          {
            imgSrc: "prueba4.jpg",
            imgAlt: "Resultados Medibles",
            title: "Resultados Medibles",
            description:
              "Generamos impacto directo en productividad, ventas y alcance digital.",
          },
        ].map(({ imgSrc, imgAlt, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transform transition-all"
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
  );
};

export default DestoredInfo;
