import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Wsp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=5492644631495&text=¡Hola! Me gustaría recibir más información sobre Destored. ¿Podrías ayudarme?"
        className="group relative w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 
          hover:from-green-500 hover:to-green-700 shadow-2xl hover:shadow-green-500/50 
          text-white p-3 rounded-full flex items-center justify-center 
          transform hover:scale-110 transition-all duration-300 ease-in-out
          animate-pulse hover:animate-none"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} className="drop-shadow-lg" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
          bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
          shadow-lg">
          ¡Chatea con nosotros!
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 
            border-4 border-transparent border-l-gray-800"></div>
        </div>
        
        {/* Círculo de ondas */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 
          animate-ping opacity-75"></div>
      </a>
    </div>
  );
}
