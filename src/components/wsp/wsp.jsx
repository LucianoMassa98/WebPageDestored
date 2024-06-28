import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import './wsp.css';


export default function wsp() {

    const [showText, setShowText] = useState(false); // Estado para controlar la visibilidad del texto, es para la animacion de movimiento inicial

    useEffect(() => {
        setShowText(true); // Cuando el componente se monta, establece showText en true para mostrar el texto, es para la animacion de movimiento inicial
    }, []);

    return (
        <div
            className={`fixed bottom-20 right-9 cursor-pointer z-20  ${showText ? "show-wsp" : ""
                }`}>
            <div class="icon-container  zoom-container-wsp">
              <a href="https://api.whatsapp.com/send?phone=5492644631495&text=Hola, Buenos días!"
                className="fixed w-16 h-16 bottom-4 right-4 bg-[#0df053] shadow-lg hover:bg-green-600 
                text-white hover:text-white p-3 rounded-full flex items-center justify-center z-[100] zoomable-wsp"
                target="_blank" aria-label="WhatsApp">
                 <FaWhatsapp size={36}/>
               </a>
            </div>
        </div>
    )
}

/*<i class='bx bxl-whatsapp text-9xl text-gray-400 zoomable-wsp'></i>/
/*<a href="https://api.whatsapp.com/send?phone=5218184676497&text=Hola bienvenido!"
className="fixed w-16 h-16 bottom-4 right-4 bg-[#0df053] shadow-lg hover:bg-green-600 
text-white hover:text-white p-3 rounded-full flex items-center justify-center z-[100]"
target="_blank" aria-label="WhatsApp">
 <FaWhatsapp size={36}/>s
</a>*/