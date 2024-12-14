import React from "react";
import ScrumCard from "./ScrumCard";

const ScrumList = ({ scrums, onSelect }) => {

  const cta =(data)=>{
    alert(data)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scrums.map((scrum) => (
        <ScrumCard
          key={scrum.id}
          title={scrum.title}
          description={scrum.description}
          openSpots={scrum.openSpots}
          onClick={() => cta(scrum.urlCta)}
        />
      ))}
    </div>
  );
};

export default ScrumList;
