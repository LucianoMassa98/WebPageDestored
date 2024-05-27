import React, { useState } from "react";
// Icons
import { FaWhatsapp } from "react-icons/fa";
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full pt-12 pb-8 px-12 h-[10vh] z-50">
      <div className="w-32 mt-10 pt-[32px] md:w-42 lg:w-1/6">
          <img className="" src="/Logo Destored.svg" alt="Icono personalizado"/>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Home
        </a>
        <a href="#aboutUs" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Nosotros
        </a>
        <a href="#services" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Servicios
        </a>
        <a href="#products" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Productos
        </a>
        <a href="#contactUs" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Contáctanos
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine className="fixed" /> : <RiMenu3Fill />}
      </button>
             <a href="https://api.whatsapp.com/send?phone=5218184676497&text=Hola bienvenido!"
                className="fixed w-16 h-16 bottom-4 right-4 bg-[#0df053] shadow-lg hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center z-[100]"
                target="_blank" aria-label="WhatsApp">
                 <FaWhatsapp size={36}/>
              </a>
    </header>
  );
};

export default Header;
