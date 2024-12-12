import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinFill 
  
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
        <img src="/Logo Destored.svg" alt="Icono personalizado" />

        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">

          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiLinkedinFill />{" "}
          </a>
         

        </nav>
      </div>
      

      <div className="mt-20">
      <p className="text-gray-300 text-center">
          San Juan - Argentina
        </p>
        <p className="text-gray-300 text-center">
          © Destored 2024 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
