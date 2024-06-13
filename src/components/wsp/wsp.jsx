import React, { useState, useEffect } from "react";
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
                <i class='bx bxl-whatsapp text-9xl text-gray-400 zoomable-wsp'></i>
            </div>
        </div>
    )
}