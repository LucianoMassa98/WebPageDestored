import React, { useState } from "react";
// Icons

import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

import {Link} from "react-router-dom"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full pt-12 pb-8 px-12 h-[10vh] z-50">
      <div className="flex-shrink-0">
    <img
      src="/Logo Destored.svg"
      alt="Logo Destored"
      className="h-full max-h-[8rem] object-contain"
    />
  </div>
      <nav
        className={`bg-white z-10 fixed w-[100%] md:w-[100%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 `}
      >
    
        <a href="#aboutUs" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Nosotros
        </a>
        <a href="#services" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Servicios
        </a>
        <a href="#contacto" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Contáctanos
        </a>
        <a href="#products" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Productos
        </a>
        <Link to ="/Comunidad" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Comunidad
        </Link>
        <Link to ="/IABeta" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          IA
        </Link>
        
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-3xl p-2 z-10"
      >
        {showMenu ? <RiCloseLine className="fixed" /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
