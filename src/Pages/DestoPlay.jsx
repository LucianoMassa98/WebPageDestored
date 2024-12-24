import React, { useEffect } from 'react';
import logoDestored from '../../public/Logo Destored.svg';

const DestoPlay = () => {
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
          src={logoDestored}
          alt="Logo Destored"
          className="h-64 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-white mb-4">DestoPlay</h1>
        <p className="text-lg text-white mb-8">
          Cada miércoles a las 10 PM (Argentina), 
          <a href="https://lucianomassa.up.railway.app/" className="text-orange-400 underline ml-1">Luciano Massa</a>
          utilizará su experiencia como Product Manager y Software Developer para realizar una transformación digital 
          <a href="https://kick.com" className="text-green-400 underline ml-1">en vivo por Kick</a> a los participantes ganadores cada mes.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-4">¿Qué encontrarás en DestoPlay?</h2>
          <ul className="list-disc list-inside text-white">
            <li>Temas educativos y herramientas digitales.</li>
            <li>Casos de éxito y experiencias reales.</li>
            <li>Sorteos en vivo los últimos miércoles de cada mes.</li>
          </ul>
        </section>
      </div>

      {/* How to Participate Section */}
      <div className="flex flex-col items-center mt-10">
        <p className="text-2xl font-bold text-white mb-4">¿Cómo participar este mes?</p>
        <a
          href="https://www.instagram.com/destored_/"
          className="px-8 py-4 text-lg font-semibold text-white bg-purple-800 rounded-full hover:bg-purple-900 transition"
        >
          Síguenos en Instagram
        </a>
      </div>

      {/* Footer Link */}
      <div className="absolute bottom-4">
        <a
          href="https://www.destored.com"
          className="text-black text-sm hover:underline"
        >
          Visítanos en nuestro sitio web
        </a>
      </div>
    </div>
  );
};

export default DestoPlay;
