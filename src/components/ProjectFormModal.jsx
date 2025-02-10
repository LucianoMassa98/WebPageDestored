import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProjectFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center">
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="bg-gradient-to-r from-indigo-300 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
      >
        Completar Formulario
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fadeIn"
          style={{ pointerEvents: "none" }} // Evita capturar clics fuera del modal
        >
          <div
            className="bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-lg p-6 relative shadow-xl border border-indigo-300 transition-all"
            style={{ pointerEvents: "auto" }} // Permite interacción dentro del modal
          >
            {/* Botón para cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
            >
              <FaTimes />
            </button>

            {/* Título */}
            <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
              Caso de estudio
            </h2>

            {/* Descripción */}
            <p className="text-gray-700 text-center mb-6 px-4 mt-6">
              Completa el formulario para brindarnos información sobre tu empresa y servicios de interés. Recibirás un enlace para agendar una reunión y una copia de tus respuestas por correo.
            </p>

            {/* Formulario */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScOt2z2nB0S7PSH1ztfmeFfGxsHIWzDziJFMXKp9Q-mky0CtA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg shadow-md border border-gray-300"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFormModal;
