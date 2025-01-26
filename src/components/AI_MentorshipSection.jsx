import React, { useState } from 'react';

const AI_MentorshipSection = () => {
  // Estado para controlar la apertura y cierre del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 text-center mb-4">Agenda De Mentorías de IA</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Las mentorías de Inteligencia Artificial (IA) están diseñadas para ayudar a los negocios a comprender y aplicar tecnologías de IA en sus procesos. A través de estas sesiones, podrás recibir orientación personalizada sobre cómo integrar soluciones de IA en tu empresa, optimizando así la eficiencia y la competitividad.
      </p>
     

      {/* Botón para abrir el modal */}
      <div className="text-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800"
        >
          Agendar Mentoría
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Cerrar modal si se hace clic fuera de él
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6"
            onClick={(e) => e.stopPropagation()} // Evitar que el clic dentro del modal lo cierre
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-purple-700">Agenda Tu Mentoría</h3>
              <button
                onClick={closeModal}
                className="text-purple-700 font-semibold text-lg"
              >
                X
              </button>
            </div>
            <div className="bg-white shadow rounded-lg p-4 h-[60vh]">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0mqvUCIiZ9aLcfqxaabrIFwjPWMVPFps7AMzc8_Wruw26V2flGiaxqU9iBW4_ZMlZVm_HA6eEX?gv=true"
                className="w-full h-full"
                allowFullScreen
                title="Calendario de Mentorías"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AI_MentorshipSection;
