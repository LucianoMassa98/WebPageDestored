import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
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
        Facilitar la Transformación Digital: Nos dedicamos a facilitar
         la transformación digital de empresas y organizaciones mediante la
          entrega de soluciones de software innovadoras y servicios de soporte
           técnico de calidad.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">

         
          <img
            src="IMG_8767.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
           <img
            src="IMG_8823.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
           <img
            src="IMG_8824.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />    
           <img
            src="IMG_8753.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
           <img
            src="IMG_8743.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />

        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">#DestoTeam</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            +12 colaboradores
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
