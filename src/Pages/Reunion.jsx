import React, { useState } from "react";
import { X, Calendar } from "lucide-react";

const AgendarReunion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
      {/* Forma decorativa */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400 rounded-full opacity-20 transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full opacity-25 transform -translate-x-8 translate-y-8"></div>

      <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <Calendar className="w-7 h-7" /> Agendar una Reunión
      </h2>

      <p className="text-lg text-gray-200 mb-6 text-center leading-relaxed">
        Para coordinar una reunión, utiliza el calendario a continuación y selecciona la fecha y hora que mejor te convenga. Para más información, visita <a href="https://www.destored.org" className="text-white underline font-semibold">www.destored.org</a>.
      </p>

      {/* Calendario embebido */}
      <div className="bg-gray-100 shadow rounded-lg p-4 h-[60vh]">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0mqvUCIiZ9aLcfqxaabrIFwjPWMVPFps7AMzc8_Wruw26V2flGiaxqU9iBW4_ZMlZVm_HA6eEX?gv=true"
          className="w-full h-full rounded-lg"
          allowFullScreen
          title="Calendario de Reuniones"
        ></iframe>
      </div>
    </section>
  );
};

export default AgendarReunion;
