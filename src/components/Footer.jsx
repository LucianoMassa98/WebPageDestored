import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Servicios", to: "/servicios" },
  { label: "Consultoría Gratis", to: "/consultoria" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: "/contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-gray-200 pt-12 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo y nombre */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/Logo Destored.svg"
              alt="Logo Destored"
              className="w-20 md:w-28"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide -ml-4">
              estored
            </span>
          </Link>
        </div>

        {/* Navegación */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-semibold text-white mb-2">Navegación</h3>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="text-gray-300 hover:text-purple-400 transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contacto y redes */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
          <a
            href="mailto:info@destored.org"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors text-base"
          >
            <FaEnvelope /> info@destored.org
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-purple-400 text-2xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-purple-400 text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">Argentina - San Juan</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <a
          href="https://www.destored.org"
          className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
        >
          © Destored 2025 - Todos los derechos reservados
        </a>
      </div>
    </footer>
  );
};

export default Footer;
