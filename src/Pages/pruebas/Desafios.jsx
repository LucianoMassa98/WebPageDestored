import React, { useEffect, useState } from "react";
import logoDestored from "../../public/Logo Destored.svg";
import useDesafiosData from "../../hooks/UseDesafiosData.jsx";

const DestoPlay = () => {
  const [showModal, setShowModal] = useState(false);
  const { destoDesafios, loading, error } = useDesafiosData(
  );

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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">DestoPlay</h1>
        <p className="text-lg sm:text-xl text-white mb-8 px-4 sm:px-10">
          Mira a los creadores de contenido dentro de la comunidad con contenido de
          educación y entretenimiento
        </p>

        {/* Botón Agregarme */}
        <button
          className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowModal(true)}
        >
          Agregarme
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
                src="https://docs.google.com/forms/d/e/1FAIpQLSd42DrWEzt3DQ1vOIi0ew2ijNryVX0ejfT_Xd030FiJyjGzdA/viewform?embedded=true"
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

        {/* Lista de DestoPlays */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-8">
          {destoPlays.map((play, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={play.logo}
                alt={play.titulo}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {play.titulo}
                </h2>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={play.canal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 text-sm font-semibold hover:underline"
                  >
                    Visitar canal
                  </a>
                  <span className="text-xs font-medium text-gray-500">
                  Plataforma: {play.plataforma}
                  </span>
                </div>
                <details className="mt-4">
                  <summary className="text-sm text-violet-600 cursor-pointer">
                    Ver más
                  </summary>
                  <p className="text-sm text-gray-600">{play.descripcion}</p>
                  <p className="text-sm text-gray-500 mt-2">{play.objetivo}</p>
                  <p className="text-sm text-gray-500 mt-1">{play.contenido}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default DestoPlay;
