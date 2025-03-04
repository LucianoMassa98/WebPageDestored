import React, { useState } from "react";
import logoDestored from "../../public/Logo Destored.svg";
import useDesafiosData from "../hooks/UseDesafiosData.jsx";
import useGoogleFormModal from "../hooks/useGoogleFormModal.jsx";

const DesafioDesto = () => {
  const [showModal, setShowModal] = useState(false);
  const { destoDesafios, loading, error } = useDesafiosData();

  // Renderizamos la interfaz de usuario dependiendo del estado
  if (loading) {
    return <p>Cargando desafíos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-gray-900 via-purple-700 to-white relative px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="mt-6 mb-10">
        <img
          src={logoDestored}
          alt="Logo Destored"
          className="h-auto max-w-full w-32 sm:w-40 md:w-48"
        />
      </div>

      {/* Main Content */}
      <div className="text-center mt-8 sm:mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">DesafioDesto</h1>
        <p className="text-lg sm:text-xl text-white mb-8 px-4 sm:px-10">
        Crea y comparte desafíos para ayudar a otros a mejorar sus habilidades, reafirmando tus conocimientos. Colabora con freelancers, potencia tu marca personal y demuestra tu expertise, contribuyendo al crecimiento de la comunidad digital.
        </p>

        {/* Botón Agregarme */}
        <button
          className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowModal(true)}
        >
          Crear Desafio
        </button>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <iframe
src="https://docs.google.com/forms/d/e/1FAIpQLScRvqcM1RpfWDM0ATgJtcbyrJlaSRJ93iMkyED8XspLWHfOLQ/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title="Formulario de Google"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        )}

      {/* Lista de destoDesafios */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-8">
  {destoDesafios.map((desafio, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-2xl p-6 transition-all hover:shadow-lg"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{desafio.titulo}</h2>
      <p className="text-sm text-gray-600">{desafio.descripcion}</p>

      <div className="mt-4 space-y-1">
        <span className="block text-xs font-medium text-gray-500">
          🏷️ Categoría: {desafio.categoria}
        </span>
        <span className="block text-xs font-medium text-gray-500">
          ⏳ Duración: {desafio.duracion}
        </span>
        <span className="block text-xs font-medium text-gray-500">
          🎯 Dificultad: {desafio.dificultad}
        </span>
      </div>

      <details className="mt-4">
        <summary className="text-sm text-violet-600 font-semibold cursor-pointer hover:underline">
          🔍 Ver más detalles
        </summary>
        <div className="mt-2 space-y-2">
          {desafio.requisitos && (
            <p className="text-sm text-gray-600">
               {desafio.requisitos}
            </p>
          )}
          {desafio.recompensa && (
            <p className="text-sm text-gray-500">
               {desafio.recompensa}
            </p>
          )}
          {desafio.enlace && (
            <a
              href={desafio.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-500 text-sm font-semibold hover:underline block"
            >
              🔗 Enlace relacionado
            </a>
          )}
        </div>
      </details>

      {desafio.nombreAlias && (
        <p className="text-xs text-gray-500 mt-3">
          ✍️ Publicado por: {desafio.nombreAlias}
        </p>
      )}
    </div>
  ))}
</div>

      </div>


    </div>
  );
};

export default DesafioDesto;
