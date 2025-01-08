import React from "react";

const TechIconsRow = () => {
  const icons = [
    "https://img.icons8.com/ios-filled/50/808080/internet-of-things.png",
    "https://img.icons8.com/ios-filled/100/808080/cloud.png",
    "https://img.icons8.com/ios-filled/100/808080/blockchain.png",
    "https://img.icons8.com/ios-filled/100/808080/artificial-intelligence.png",
    "https://img.icons8.com/ios-filled/100/808080/security-shield-green.png",
  ];

  return (
    <div className="w-full bg-transparent flex justify-center items-center">
      <div className="flex animate-scroll space-x-8 py-4">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Tech Icon ${index}`}
            className="w-8 h-8 object-contain"
          />
        ))}
        {/* Repite los iconos para crear un efecto continuo */}
        {icons.map((icon, index) => (
          <img
            key={index + icons.length}
            src={icon}
            alt={`Tech Icon ${index}`}
            className="w-8 h-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default TechIconsRow;
