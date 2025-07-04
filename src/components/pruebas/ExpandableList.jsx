import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa los íconos

const ExpandableList = ({ titulo, descripcion, items }) => {
  const [openIndex, setOpenIndex] = useState(null); // Mantén el estado solo para el índice que se abre
  const [isListOpen, setIsListOpen] = useState(false); // Estado para controlar si la lista está abierta o cerrada

  const toggleList = () => {
    setIsListOpen(!isListOpen); // Cambiar el estado de la lista
  };

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Si el índice ya está abierto, lo cerramos, de lo contrario lo abrimos
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <p className="text-lg mb-4">{descripcion}</p>
      <h2 className="text-2xl font-semibold text-white mb-6">{titulo}</h2>



      <button
        className="w-full text-left p-4 text-lg font-semibold focus:outline-none bg-violet-700 hover:bg-transparent transition-all flex items-center justify-between"
        onClick={toggleList} // Alternar la visibilidad de la lista
      >
        <span>
          {isListOpen ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </span>
        <span>Ver {isListOpen ? 'menos' : 'más'}</span>
      </button>

      {isListOpen && (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-700">
              <button
                className="w-full text-left p-4 text-lg font-semibold focus:outline-none bg-violet-700 hover:bg-violet-600 transition-all flex items-center justify-between"
                onClick={() => toggleItem(index)} // Alternar la visibilidad de un ítem individual
              >
                <span>{item.title}</span>
                <span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-white" />
                  ) : (
                    <FaChevronDown className="text-white" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="p-4 text-base text-gray-300">{item.content}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableList;
