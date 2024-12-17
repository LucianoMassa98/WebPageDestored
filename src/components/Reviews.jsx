import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import React from 'react';
import imgVision from '../../public/vision.png';

const About = () => {

  

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

        Crear una herramienta que capacite a personas y organizaciones para diseñar, desarrollar y distribuir software y datos de manera descentralizada, utilizando marcos ágiles de desarrollo como Scrum para fomentar la eficiencia, la colaboración y la adaptabilidad en cada proyecto.        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        
      <div class="relative max-w-full w-full md:max-w-[600px]">
  <img src={imgVision} alt="img" class="rounded-lg w-full h-auto" />
  <div class="absolute inset-0 bg-gray-800 opacity-50 rounded-lg"></div>
</div>

        <div>
          <h3 className="text-center text-[24px] font-bold">#DestoTeam</h3>
          <h5 className="text-center text-[20px] text-gray-500 cursor-pointer">
            +50 Miembros
          </h5>
        </div>
      </div>
      
    </div>
  );
};

export default About;