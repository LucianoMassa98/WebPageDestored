import React, { useState, useEffect } from "react";
import { RiPlayFill } from "react-icons/ri";

const DestoredInfo = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openInstagramVideo = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80vw] mx-auto mt-8">
      <h1 className="text-[40px] text-center font-black font-bold mb-4">
        Tu puente hacia la transformación digital
      </h1>
      <p className="text-gray-600 text-justify mb-6 text-lg text-center">
        Conectamos tu proyecto, empresa o negocio con un equipo de profesionales
        especializados en tecnologías digitales, ofreciendo soluciones personalizadas
        y adaptadas a tus objetivos.
      </p>

      {/* Cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Profesionales */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono3.png"
            alt="Profesionales"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Profesionales
          </h3>
          <p className="text-gray-600 text-justify mt-2">
            Perfecto para quienes inician su carrera digital o desean ofrecer
            servicios especializados.
          </p>
        </div>

        {/* Negocios */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono2.png"
            alt="Negocios"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Negocios
          </h3>
          <p className="text-gray-600 text-justify mt-2">
            Soluciones diseñadas para pymes y nuevos proyectos que buscan crecer
            de manera rápida y eficiente.
          </p>
        </div>

        {/* Empresas */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono1.png"
            alt="Empresas"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Empresas
          </h3>
          <p className="text-gray-600 text-justify mt-2">
            Soluciones avanzadas para empresas con equipos más grandes que necesitan
            una estructura ágil y escalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestoredInfo;
