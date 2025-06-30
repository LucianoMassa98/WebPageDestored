import React, { useEffect } from 'react';

import logoDestored from '../../public/Logo Destored.svg';

const InstagramLandingPage = () => {
  useEffect(() => {
    // Código del píxel de Meta
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', 'YOUR_PIXEL_ID'); // Reemplaza YOUR_PIXEL_ID con tu ID de píxel
    fbq('track', 'PageView');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-600 via-purple-700 to-white relative">
      {/* Logo */}
      <div className="absolute top-6">
        <img
          src={logoDestored} // Reemplaza con la ruta de tu logo
          alt="Logo"
          className="h-64 w-auto" // Ajuste para hacer el logo más grande
        />
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
         DestoPlay
        </h1>
        <p className="text-lg text-white mb-8">
        Participa en nuestros sorteos y gana una transformación digital gratuita. Cada miércoles, 
        Luciano Massa te guíará en vivo para llevar tu proyecto, negocio y empresa al siguiente nivel.
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
          href="https://www.yourwebsite.com" // Reemplaza con tu enlace de sitio web
          className="text-white text-sm hover:underline"
        >
          Visítanos en nuestro sitio web
        </a>
      </div>
    </div>
  );
};

export default InstagramLandingPage;
