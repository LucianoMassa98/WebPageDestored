import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Wsp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5492644631495&text=¡Hola! Me gustaría recibir más información sobre Destored. ¿Podrías ayudarme?"
      className="w-16 h-16 bg-[#0df053] shadow-lg hover:bg-green-600 
        text-white hover:text-white p-3 rounded-full flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}
