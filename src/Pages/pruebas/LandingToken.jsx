import React from "react";
import { PaperClipIcon, UsersIcon, CloudIcon, ShieldCheckIcon, TrendingUpIcon } from '@heroicons/react/solid'; // Example icon import

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-6 flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        <img src="Logo Destored.svg" alt="Destored Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold text-purple-300">Destored Token</h1>
        <p className="mt-4 text-lg text-gray-200">
          Un modelo descentralizado para la gobernanza de software, datos y publicidad.
        </p>
        <p className="mt-2 text-sm text-yellow-400">*Este es un proyecto en fase de maqueta*</p>
      </header>
      
   {/* Token Image Placeholder */}
<div className="mt-6 w-48 h-48 bg-purple-700 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-lg overflow-hidden">
  <img 
    src="digitalmastery.webp" 
    alt="Imagen del Token" 
    className="w-full h-full object-cover" 
  />
</div>


      {/* Token Information Section */}
      <section className="w-full max-w-4xl bg-white text-gray-900 p-8 rounded-2xl shadow-lg text-center mt-10">
        <h2 className="text-2xl font-bold text-purple-700">¿Qué es el Token de Destored?</h2>
        <p className="mt-4 text-lg">
          Este token es un modelo de gobernanza en la red de Polygon, permitiendo a los usuarios
          participar en la toma de decisiones y acceder a beneficios exclusivos en nuestro ecosistema.
        </p>
      </section>

      {/* Distribución del Token */}
      <section className="mt-10 max-w-full mx-auto bg-purple-800 p-6 rounded-xl shadow-lg border-2 border-purple-600">
  <h2 className="text-2xl font-semibold text-purple-300 text-center">Distribución del Token (10M)</h2>
  <ul className="mt-6 space-y-4 text-gray-300 text-sm">
    <li className="flex items-start">
      <UsersIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Fundador Activo: <strong>40%</strong> (4,000,000 tokens)
      </span>
    </li>
    <li className="flex items-start">
      <ShieldCheckIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Fundadores Pasivos: <strong>10%</strong> (1,000,000 tokens)
      </span>
    </li>
    <li className="flex items-start">
      <PaperClipIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Partner Hub (50 tokens iniciales por cada uno): <strong>15%</strong> (Hasta 1,500,000 tokens)
      </span>
    </li>
    <li className="flex items-start">
      <CloudIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Comunidad e Inversores: <strong>20%</strong> (Hasta 2,000,000 tokens)
      </span>
    </li>
    <li className="flex items-start">
      <TrendingUpIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Fondo de Gobernanza y Recompensas: <strong>10%</strong> (1,000,000 tokens)
      </span>
    </li>
    <li className="flex items-start">
      <PaperClipIcon className="w-5 h-5 mr-3 text-yellow-400" />
      <span className="leading-relaxed">
        Liquidez y Tesorería: <strong>5%</strong> (500,000 tokens)
      </span>
    </li>
  </ul>
</section>


      {/* Voting & Benefits Section */}
      <section className="w-full max-w-4xl mt-10 p-8 rounded-2xl shadow-lg bg-white text-gray-900 text-center">
        <h2 className="text-2xl font-bold text-purple-700">Beneficios y Gobernanza</h2>
        <p className="mt-4 text-lg">
          Los poseedores de más del 1% de los tokens podrán tomar decisiones estratégicas dentro de Destored,
          incluyendo el desarrollo de Partner Hub y nuevas iniciativas. Además, los clientes pueden utilizar tokens
          para contratar transformadores digitales de manera directa.
        </p>
      </section>

      {/* Estado del Proyecto */}
      <section className="mt-10 max-w-3xl mx-auto bg-purple-700 p-6 rounded-xl shadow-lg border-2 border-purple-500">
        <h2 className="text-2xl font-semibold text-yellow-300">Estado del Proyecto</h2>
        <p className="mt-4 text-gray-200">
          Actualmente, esta es una idea en desarrollo y estamos explorando su viabilidad. Buscamos recibir feedback y colaboración para llevarlo a producción.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-green-300">¿Te interesa participar?</h2>
        <p className="mt-2 text-gray-300">Únete a la conversación y ayúdanos a mejorar este modelo.</p>
        <button className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg shadow-md transition ease-in-out duration-300">
          Únete al Desarrollo
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
