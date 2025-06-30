import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Gracias a Destored pude lanzar mi app en menos de 3 meses y contar con el respaldo de un equipo completo.",
    author: "— Matías G., Emprendedor Tech",
    image: null, // Puedes poner aquí la ruta de la imagen si tienes una, ej: "/matias.jpg"
  },
  // Puedes agregar más testimonios en el futuro:
  // {
  //     quote: "Otro testimonio...",
  //     author: "— Nombre Apellido, Rol",
  //     image: "/ruta/imagen.jpg"
  // }
];

const Testimonial = () => (
  <section className="relative bg-gradient-to-br from-[#f3e8ff] via-white to-[#e0e7ff] py-20 px-4 mt-8">
    {/* SVG decorativo de burbujas de diálogo */}
    <svg
      className="absolute right-8 top-8 w-24 h-20 opacity-15 z-0"
      viewBox="0 0 80 60"
      fill="none"
    >
      <ellipse cx="30" cy="30" rx="28" ry="18" fill="#9C1DD8" />
      <ellipse cx="60" cy="20" rx="16" ry="10" fill="#00d9fa" />
    </svg>
    <motion.div
      className="max-w-2xl mx-auto rounded-2xl shadow-2xl bg-white p-12 flex flex-col items-center text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <FaCommentDots className="inline-block text-[#00d9fa] text-3xl sm:text-4xl" />
        </motion.span>
        <span className="text-2xl sm:text-3xl font-bold text-[#9C1DD8]">
          Testimonios
        </span>
      </div>
      {testimonials.map((t, idx) => (
        <div key={idx} className="mb-6 last:mb-0 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <RiDoubleQuotesL className="text-5xl text-[#9C1DD8] mr-2" />
            <RiDoubleQuotesR className="text-5xl text-[#00d9fa] ml-2" />
          </div>
          {t.image && (
            <img
              src={t.image}
              alt={t.author}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#9C1DD8]"
            />
          )}
          <p className="text-2xl md:text-3xl italic text-gray-800 mb-4 font-medium leading-relaxed">
            {t.quote}
          </p>
          <div className="font-semibold text-[#9C1DD8]">{t.author}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Testimonial;
