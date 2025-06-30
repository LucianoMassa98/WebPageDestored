import React from "react";
import { FaUserGraduate, FaRocket, FaUsers, FaNetworkWired } from "react-icons/fa";
import { motion } from "framer-motion";

const profiles = [
  {
    icon: <FaUserGraduate className="text-[#9C1DD8] text-4xl mb-3" />,
    title: "Profesional Digital",
    desc: "Buscás oportunidades, mentorías y formación.",
  },
  {
    icon: <FaRocket className="text-[#00d9fa] text-4xl mb-3" />,
    title: "Emprendedor o Empresa",
    desc: "Necesitás software o publicidad para crecer.",
  },
  {
    icon: <FaUsers className="text-[#9C1DD8] text-4xl mb-3" />,
    title: "Coordinador",
    desc: "Liderás equipos y proyectos tecnológicos.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const DestoredForYou = () => (
  <section className="relative bg-gradient-to-br from-white to-[#f3e8ff] py-20 px-4 mt-8">
    {/* SVG decorativo de personas conectadas */}
    <svg
      className="absolute top-6 right-10 w-32 h-20 opacity-20 z-0"
      viewBox="0 0 120 60"
      fill="none"
    >
      <circle cx="20" cy="40" r="8" fill="#9C1DD8" />
      <circle cx="60" cy="20" r="8" fill="#00d9fa" />
      <circle cx="100" cy="40" r="8" fill="#9C1DD8" />
      <line
        x1="20"
        y1="40"
        x2="60"
        y2="20"
        stroke="#00d9fa"
        strokeWidth="3"
      />
      <line
        x1="60"
        y1="20"
        x2="100"
        y2="40"
        stroke="#9C1DD8"
        strokeWidth="3"
      />
    </svg>
    <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl bg-white p-12 text-center z-10 relative">
      <h2 className="flex items-center justify-center gap-3 text-4xl font-extrabold text-[#9C1DD8] mb-10">
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          <FaNetworkWired className="inline-block text-[#00d9fa] text-3xl sm:text-4xl" />
        </motion.span>
        ¿Es para vos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {profiles.map((p, idx) => (
          <motion.div
            key={p.title}
            className="bg-gradient-to-t from-[#f3e8ff] to-white rounded-xl shadow-md p-8 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={cardVariants}
          >
            {p.icon}
            <div className="font-bold text-lg mb-2">{p.title}</div>
            <div className="text-gray-600">{p.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="bg-gradient-to-r from-[#9C1DD8] to-[#00d9fa] hover:from-[#00d9fa] hover:to-[#9C1DD8] text-white font-bold rounded-full px-10 py-4 text-lg shadow-lg transition"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
      >
        Quiero ser parte
      </motion.button>
    </div>
  </section>
);

export default DestoredForYou;
