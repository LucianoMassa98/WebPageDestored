import React from "react";
import { RiStarFill } from "react-icons/ri";

const ComunidadDestored = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-wide text-purple-600 text-center mb-6">
          Comunidad en Destored
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Nuestra comunidad reúne a desarrolladores, emprendedores y creativos apasionados por el mundo de la tecnología y la innovación.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Desarrolladores</h3>
            <p className="text-gray-600">
              Conéctate con otros profesionales para colaborar en proyectos de software y compartir conocimiento técnico.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Emprendedores</h3>
            <p className="text-gray-600">
              Participa en nuestra red para impulsar tus ideas de negocio y encontrar oportunidades de crecimiento.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center items-center text-purple-600 text-4xl mb-4">
              <RiStarFill />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Creadores de Contenido</h3>
            <p className="text-gray-600">
              Únete a otros creativos para desarrollar contenido que inspire y eduque a nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Quieres ser parte de nuestra comunidad?
          </h3>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            Únete ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComunidadDestored;
