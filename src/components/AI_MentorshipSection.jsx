import React, { useState } from "react";
import { X, Calendar } from "lucide-react";

const AI_MentorshipSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
      {/* Forma decorativa */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400 rounded-full opacity-20 transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full opacity-25 transform -translate-x-8 translate-y-8"></div>

      <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <Calendar className="w-7 h-7" /> Mentorías de IA
      </h2>

      <p className="text-lg text-gray-200 mb-6 text-center leading-relaxed">
      Las mentorías de Inteligencia Artificial están dirigidas a negocios y profesionales digitales que buscan comprender y aplicar tecnologías de IA en sus procesos. Ofrecen orientación personalizada sobre su integración en marketing, software, informática y gestión ágil, con un límite de 2 sesiones mensuales.
      </p>

      {/* Botón para abrir el modal */}
      <div className="text-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-purple-200 transition-all flex items-center justify-center gap-2"
        >
          <Calendar className="w-5 h-5" /> Agendar Mentoría
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre con icono */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-purple-700 hover:text-purple-900 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-semibold text-purple-700 text-center mb-4">
              
            </h3>

            <div className="bg-gray-100 shadow rounded-lg p-4 h-[60vh]">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0mqvUCIiZ9aLcfqxaabrIFwjPWMVPFps7AMzc8_Wruw26V2flGiaxqU9iBW4_ZMlZVm_HA6eEX?gv=true"
                className="w-full h-full rounded-lg"
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
