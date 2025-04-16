import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  GraduationCap,
  Building2,
} from "lucide-react";

const DestoredInfo = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  const items = [
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Emprendedores",
      desc: "Digitaliza tu negocio.",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Freelancers",
      desc: "Mejorá tu técnica y conectá.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Estudiantes",
      desc: "Reforzá conocimientos clave.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Empresas",
      desc: "Capacitá en nuevas tecnologías.",
    },
  ];

  return (
    <div className="relative bg-white rounded-xl shadow-xl px-4 py-8 sm:py-10  mx-auto overflow-hidden">
      
      <motion.h2
        className="text-center text-[26px] sm:text-[32px] font-extrabold text-gray-800 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¿Para quién es esto?
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 z-10 relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className="font-semibold text-sm text-purple-700">{item.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestoredInfo;
