import React from 'react';

import logoDestored from '../../public/Logo Destored.svg'
const InstagramLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-600 via-purple-700 to-white relative">
      {/* Logo */}
      <div className="absolute top-6">
        <img
          src={logoDestored}// Reemplaza con la ruta de tu logo
          alt="Logo"
          className="h-64 w-auto" // Ajuste para hacer el logo más grande
        />
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Sorteos Exclusivos Cada Mes 🎉
        </h1>
        <p className="text-lg text-white mb-8">
          ¡Para los seguidores de nuestro Instagram! Participa para ganar landing pages,
          membresías y accesos exclusivos.
        </p>

        <a
          href="https://www.instagram.com/destored_/" // Reemplaza con tu enlace de perfil de Instagram
          className="px-8 py-4 text-lg font-semibold text-white bg-purple-800 rounded-full hover:bg-purple-900 transition"
        >
          Perfil De Instagram
        </a>
      </div>

      {/* Footer Link */}
      <div className="absolute bottom-4">
        <a
          href="https://destored.up.railway.app/" // Reemplaza con tu enlace de sitio web
          className="text-violet text-sm hover:underline"
        >
          Visítanos en nuestro sitio web
        </a>
      </div>
    </div>
  );
};

export default InstagramLandingPage;
