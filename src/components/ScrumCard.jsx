import React from "react";

const ScrumCard = ({ title, description, openSpots, onClick }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
     
      <button
        onClick={onClick}
        className={`mt-4 px-4 py-2 rounded bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={openSpots === 0}
      >
        Contacto
      </button>
    </div>
  );
};

export default ScrumCard;
