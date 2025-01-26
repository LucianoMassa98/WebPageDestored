import React from "react";
import { RiStarFill } from "react-icons/ri";
import bannerComunidad from "../../public/bannerComunidad.jpg";

const ComunidadDestored = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerComunidad})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Title and Subtitle */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-wide">
            Comunidad en Destored
          </h2>
          <p className="text-lg text-gray-300 mt-4 px-4 text-2xl">
            Conectando desarrolladores, emprendedores y creadores de contenido
            en un espacio dedicado a la tecnología y la innovación.
          </p>
          <a
            href="https://www.destored.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg mt-6 underline"
          >
            www.destored.org
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Community Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Comunidad Abierta de Destored
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Únete a un espacio donde  <strong> desarrolladores, emprendedores y creadores
            de contenido </strong> se conectan, comparten conocimientos y colaboran en
            proyectos. Recibirás avisos importantes, aprenderás de los mentores
            de la comunidad y serás parte de un grupo que impulsa la tecnología
            y la innovación.
          </p>
          <a
            href="https://chat.whatsapp.com/LOal4051AfnLoxMlccbLNs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 block"
          >
            Comunidad en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComunidadDestored;
