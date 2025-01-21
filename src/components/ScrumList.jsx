import React, { useEffect, useState } from 'react';
import ScrumCard from "./ScrumCard";





const ScrumList = ({ scrums }) => {



  const redirectToUrl = (url) => {
    if (url) {
      window.location.href = url; // Redirige al URL especificado.
    } else {
      alert("No se proporcionó una URL válida.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scrums.map((scrum) => (
        <ScrumCard
          key={scrum.id}
          title={scrum.title}
          description={scrum.description}
          onClick={() => redirectToUrl(scrum.urlCta)}
        />
      ))}
    </div>
  );
};

export default ScrumList;
