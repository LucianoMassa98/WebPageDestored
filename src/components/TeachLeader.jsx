import React, { useState } from 'react';

const TeachLeader = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYorShpFr0KR7E7XNlY3RHhNogivhKmomckkAnGZUfO7bTYQ/viewform?embedded=true'; // URL del formulario
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setLoading(true);
    setIsModalOpen(true);
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simula el tiempo de carga de 500ms
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex justify-center items-center">
      {/* Fondo con formas geométricas y degradados */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-purple-600 to-violet-500">
        {/* Agregar formas geométricas y más colores con un fondo radial y formas circulares */}
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-purple-700 via-indigo-600 to-violet-500 opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-700 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-400 via-yellow-300 to-pink-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-teal-400 via-blue-500 to-purple-600 rounded-full opacity-50"></div>
      </div>

      <div className="text-center text-white p-6 z-10">
        <h1 className="text-4xl font-bold mb-4">¿Eres un Tech Leader?</h1>
        <p className="text-lg mb-8">
          ¿Te interesa brindar sesiones 1 a 1 semanales a dueños de negocios u otros profesionales digitales para que apliquen IA, Cloud, Blockchain o Ciberseguridad a sus procesos?
        </p>
        <p className="text-lg mb-8">
          Solo debes registrarte y nos pondremos en contacto contigo para más detalles.
        </p>

        {/* Botón para abrir el modal */}
        <button
          onClick={openModal}
          className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-purple-200 hover:scale-105"
        >
          Registro
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white font-bold py-1 px-2 rounded-full"
              >
                Cerrar
              </button>
              {loading ? (
                <p>Cargando...</p>
              ) : (
                <iframe
                  src={formUrl}
                  width="100%"
                  height="500"
                  title="Formulario"
                  className="border-0"
                ></iframe>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachLeader;
