import React from "react";

const ScrumCard = ({ title, description, openSpots, onClick }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className={`mt-2 text-sm ${openSpots > 0 ? "text-green-500" : "text-red-500"}`}>
        {openSpots > 0 ? `Cupos disponibles: ${openSpots}` : "Sin cupos"}
      </p>
      <button
        onClick={onClick}
        className={`mt-4 px-4 py-2 rounded ${
          openSpots > 0 ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={openSpots === 0}
      >
        {openSpots > 0 ? "Solicitar Integración" : "Cupos llenos"}
      </button>
    </div>
  );
};

export default ScrumCard;
