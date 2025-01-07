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
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Desarrolladores
            </h3>
            <p className="text-gray-600">
              Conéctate con otros profesionales para colaborar en proyectos de
              software y compartir conocimiento técnico.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Emprendedores
            </h3>
            <p className="text-gray-600">
              Participa en nuestra red para impulsar tus ideas de negocio y
              encontrar oportunidades de crecimiento.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Creadores de Contenido
            </h3>
            <p className="text-gray-600">
              Únete a otros creativos para desarrollar contenido que inspire y
              eduque a nuestra comunidad.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ComunidadDestored;
