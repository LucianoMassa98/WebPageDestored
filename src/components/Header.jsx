import React, { useState } from "react";
// Icons
import { FaWhatsapp } from "react-icons/fa";
import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

import {Link} from "react-router-dom"

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
        <Link to ="/" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Home
        </Link>
        <a href="#aboutUs" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Nosotros
        </a>
        <a href="#services" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Servicios
        </a>
        <a href="#products" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Productos
        </a>
        <Link to ="/Contact" target="_blank" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
          Contáctanos
        </Link>
        <a href="/WebPage-Destored-Maquetado/index.html" target="_blank" className="text-slate-600 transition-colors hover:text-purple-600 text-lg">
        WebPage
        </a>
       
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 z-50"
      >
        {showMenu ? <RiCloseLine className="fixed" /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
