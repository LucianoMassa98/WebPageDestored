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
    <header className="flex items-center justify-between xl:justify-start w-full h-[10vh] z-50 bg-white px-6 md:px-12">
  {/* Logo */}
  <div className="flex-shrink-0">
    <img
      src="/Logo Destored.svg"
      alt="Logo Destored"
      className="h-full max-h-[8rem] object-contain"
    />
  </div>

  {/* Navigation */}
  <nav
    className={`fixed bg-white top-0 left-0 w-full h-full xl:static xl:flex xl:w-auto xl:h-auto xl:items-center xl:justify-center xl:gap-8 ${
      showMenu ? "flex flex-col items-center justify-center" : "hidden"
    } transition-all duration-500 z-10`}
  >
    <Link
      to="/"
      className="text-slate-600 transition-colors hover:text-purple-600 text-xl"
    >
      Inicio
    </Link>

    <a href="#members" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Profesionales
        </a>

        <a href="#scrums" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
          Equipos
        </a>

        
    {/* Puedes agregar más enlaces aquí */}
  </nav>

  {/* Menu Button */}
  <button
    onClick={() => setShowMenu(!showMenu)}
    className="xl:hidden text-3xl p-2 z-20"
    aria-label="Toggle Menu"
  >
    {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
  </button>
</header>

  );
};

export default Header;
