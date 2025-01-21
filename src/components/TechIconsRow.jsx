import React from "react";
import { FaGoogle, FaFacebook, FaMicrosoft, FaAmazon, FaGithub,

 } from "react-icons/fa";

const TechLogosRow = () => {
  const logos = [
    { icon: <FaGoogle />, alt: "Google" },
    { icon: <FaFacebook />, alt: "Meta" },
    { icon: <FaMicrosoft />, alt: "Microsoft" },
    { icon: <FaAmazon />, alt: "Amazon" },
    { icon: <FaGithub />, alt: "GitHub" },

  ];

  return (
    <div className="w-full bg-transparent flex justify-center items-center overflow-hidden">
      <div className="flex  space-x-8 py-4">
        {/* Muestra los íconos de las empresas */}
        {logos.map((logo, index) => (
          <div key={index} className="w-30 h-30 flex justify-center items-center text-gray-500">
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogosRow;
