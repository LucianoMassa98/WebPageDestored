import React, { useState } from "react";

const ProjectFormModal = () => {
  // Estado para controlar la apertura y cierre del modal
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300 w-full mt-4"
      >
        Solicitar Servicios
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Cerrar modal al hacer clic fuera
        >
          <div
            className="bg-white w-full md:w-[80%] lg:w-[60%] xl:w-[40%] rounded-lg p-4 relative"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Formulario de Proyecto</h2>
              <button
                onClick={closeModal}
                className="text-xl font-semibold text-gray-600 hover:text-gray-800"
              >
                ×
              </button>
            </div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScOt2z2nB0S7PSH1ztfmeFfGxsHIWzDziJFMXKp9Q-mky0CtA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="mt-4"
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
