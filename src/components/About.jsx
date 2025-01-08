import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import React from 'react';
import imgVision from '../../public/vision.png';

const About = () => {

  

  return (
    <div id="aboutUs" className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Misión
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">

        Crear una herramienta que capacite a personas y organizaciones para diseñar, desarrollar y distribuir software y datos de manera descentralizada.</p>
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
  <h3 className="text-center text-[24px] font-bold">
    Más de 300 profesionales de 7 países se unieron en 2024.
  </h3>
  <h5 className="text-center text-[20px] text-gray-500 cursor-pointer">
    +50 capacitaciones y 9 equipos destacados.
  </h5>
  <h5 className="text-center text-[20px] text-gray-500 cursor-pointer">
    Súmate al <a href="https://forms.gle/HRuD9aoqfeFihSDw9" className="text-purple-600 no-underline">#DesafioDesto2025</a> y descubre más.
  </h5>
 
</div>



      </div>
      
    </div>
  );
};

export default About;