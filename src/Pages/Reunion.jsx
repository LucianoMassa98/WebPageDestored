import React, { useState } from "react";

const CalendarPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white min-h-screen w-screen h-screen flex items-center justify-center p-0 m-0 overflow-hidden">
      <div className="w-full h-full relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-70">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0mqvUCIiZ9aLcfqxaabrIFwjPWMVPFps7AMzc8_Wruw26V2flGiaxqU9iBW4_ZMlZVm_HA6eEX?gv=true"
          className="w-full h-full border-0 rounded-xl shadow-lg"
          allowFullScreen
          loading="lazy"
          title="Calendario de Turnos"
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarPage;
