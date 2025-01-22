import React from "react";

const EGameChampionship = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-700 py-8 text-center">
        <h1 className="text-4xl font-bold">Campeonato eGame de Destored</h1>
        <p className="mt-2 text-lg">¡Donde los mejores gamers se enfrentan cada mes!</p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-blue-400">¿Cómo funciona?</h2>
          <p className="mt-4 text-lg text-gray-300">
            A principios de cada mes, abrimos las inscripciones para que los gamers participen. Durante el mes, se lleva a cabo un proceso de selección para elegir a los mejores, y al final del mes, ¡los seleccionados compiten por el título de campeón y recompensas en efectivo!
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-lg py-8 px-6 text-center">
          <h3 className="text-2xl font-semibold">¡Inscripciones abiertas ahora!</h3>
          <p className="mt-4 text-lg text-white">

          ¡No dejes pasar la oportunidad de demostrar tus habilidades y competir por increíbles recompensas en efectivo! Contamos con inscripciones gratuitas y pagas, tanto para vos como para tu equipo.          </p>
          <button
            className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            Inscríbete Aquí
          </button>
        </section>

        {/* Monthly Timeline Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-400 text-center mb-6">
            Cronograma Mensual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">Inicio de Mes</h4>
              <p className="mt-2 text-gray-300">Apertura de inscripciones.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">Durante el Mes</h4>
              <p className="mt-2 text-gray-300">Selección de los mejores gamers.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">Final de Mes</h4>
              <p className="mt-2 text-gray-300">Competencia final, coronación del campeón y entrega de recompensas.</p>
            </div>
          </div>
        </section>

        {/* Ranking and Categories Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-400 text-center mb-6">
            Categorías y Ranking
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="mb-4">
              <span className="text-purple-500 font-semibold">Campeonatos por el Título (Gratis):</span> Competencias donde los gamers compiten por el título sin costo de inscripción.
            </li>
            <li className="mb-4">
              <span className="text-purple-500 font-semibold">Campeones por Recompensa:</span> Compite en categorías con inscripción y gana premios en efectivo según tu posición en el ranking.
            </li>
            <li>
              <span className="text-purple-500 font-semibold">Ranking Mensual:</span> Los jugadores se clasifican en función de su rendimiento en las competencias mensuales.
            </li>
          </ul>
        </section>
      </main>

      
    </div>
  );
};

export default EGameChampionship;
