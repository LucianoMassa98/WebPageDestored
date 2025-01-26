import React, { useState } from "react";

const ScrumCard = ({ title, description, openSpots, onClick }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">
        {showFullDescription ? description : `${description.substring(0, 100)}...`}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onClick}
          className={`px-4 py-2 rounded ${
            openSpots === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={openSpots === 0}
        >
          Enlace
        </button>

        <button
          onClick={handleShowMore}
          className="px-4 py-2 rounded bg-white-500  text-purple-500 "
        >
          {showFullDescription ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default ScrumCard;
