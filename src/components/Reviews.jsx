import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import React, { useState } from 'react';

const Reviews = () => {
  const teamMembers = [
    { image: 'IMG_8767.jpg', name: 'John Doe', instagram: 'https://www.instagram.com/johndoe' },
    { image: 'IMG_8823.jpg', name: 'Jane Smith', instagram: 'https://www.instagram.com/janesmith' },
    { image: 'IMG_8824.jpg', name: 'Alice Johnson', instagram: 'https://www.instagram.com/alicejohnson' },
    { image: 'IMG_8753.jpg', name: 'Bob Brown', instagram: 'https://www.instagram.com/bobbrown' },
    { image: 'IMG_8743.jpg', name: 'Charlie Davis', instagram: 'https://www.instagram.com/charliedavis' },
    // Add more team members as needed
  ];

  const [showAllMembers, setShowAllMembers] = useState(false);

  const handleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  return (
    <div id="aboutUs" className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Nuestra Misión
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Facilitar la Transformación Digital: Nos dedicamos a facilitar la transformación digital de empresas y organizaciones mediante la entrega de soluciones de software innovadoras y servicios de soporte técnico de calidad.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex justify-center gap-4">
          {teamMembers.slice(0, 4).map((member, index) => (
            <a key={index} href={member.instagram} target="_blank" rel="noopener noreferrer">
              <img src={member.image} className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white" />
            </a>
          ))}
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">#DestoTeam</h3>
          <h5 className="text-center text-[20px] text-gray-500 cursor-pointer" onClick={handleShowAllMembers}>
            +12 colaboradores
          </h5>
        </div>
      </div>
      {showAllMembers && (
        <div className="relative flex justify-center mt-4">
          <div className="bg-gray-200 p-4 rounded-lg max-h-48 overflow-y-auto w-10/12 sm:w-2/3 md:w-1/3 lg:w-1/4 shadow-lg z-10 custom-scrollbar">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 w-full bg-white rounded shadow hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
              >
                <img src={member.image} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full ring-2 ring-primary p-1 bg-white" />
                <span className="text-gray-700">{member.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a0aec0;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default Reviews;