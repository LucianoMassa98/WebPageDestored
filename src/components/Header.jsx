import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Servicios", to: "/servicios" },
  { label: "Chatbot", to: "/chatbot", highlight: true },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Portafolio", to: "/portafolio" },
  { label: "Contacto", to: "/contacto" },
];

const HEADER_HEIGHT = 70; // px

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Cierra el menú al hacer clic fuera (overlay)
  const handleOverlayClick = (e) => {
    if (e.target.id === "header-overlay") setShowMenu(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100" style={{height: HEADER_HEIGHT}}>
        <div className="flex items-center justify-between px-6 md:px-12" style={{height: HEADER_HEIGHT}}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Logo Destored.svg"
              alt="Logo Destored"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className={`text-slate-700 font-medium hover:text-purple-600 transition-colors text-lg flex items-center gap-2`}
              >
                {link.label}
                {link.highlight && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold animate-pulse">
                    Nuevo
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden xl:flex">
            <Link
              to="https://dashboard.destored.org"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition-colors"
            >
              Iniciar
            </Link>
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setShowMenu(true)}
            className="xl:hidden text-3xl p-2 text-purple-700 focus:outline-none"
            aria-label="Abrir menú"
          >
            <RiMenu3Fill />
          </button>
        </div>

        {/* Overlay y Menú Mobile */}
        {showMenu && (
          <div
            id="header-overlay"
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex"
            onClick={handleOverlayClick}
          >
            <aside className="bg-white w-72 max-w-full h-full shadow-lg flex flex-col p-8 gap-8 animate-slide-in-right relative">
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-3xl text-slate-600 hover:text-purple-600 transition-colors"
                aria-label="Cerrar menú"
              >
                <RiCloseLine />
              </button>
              <Link to="/" className="mb-6 flex items-center gap-2" onClick={() => setShowMenu(false)}>
                <img
                  src="/Logo Destored.svg"
                  alt="Logo Destored"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className={`text-slate-700 font-medium hover:text-purple-600 transition-colors text-lg flex items-center gap-2`}
                    onClick={() => setShowMenu(false)}
                  >
                    {link.label}
                    {link.highlight && (
                      <span className="ml-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold animate-pulse">
                        Nuevo
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
              <Link
                to="https://dashboard.destored.org"
                className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-purple-700 transition-colors text-center"
                onClick={() => setShowMenu(false)}
              >
                Únete
              </Link>
            </aside>
          </div>
        )}
      </header>
      {/* Espaciador para evitar que el Hero quede tapado */}
      <div style={{height: HEADER_HEIGHT}} aria-hidden="true"></div>
      {/* Animación para menú móvil */}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </>
  );
};

export default Header;
   
