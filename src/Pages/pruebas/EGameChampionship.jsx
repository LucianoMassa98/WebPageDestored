import React, { useState } from "react";

import game1 from "../../public/game1.webp"
import game2 from "../../public/game2.webp"
import comienzo from "../../public/comienzo.webp"

import egame from "../../public/logoEGame.webp"


const EGameChampionship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reglasYRequisitos = [
    {
      titulo: "Campeonatos por el Título (Gratis):",
      descripcion: "Competencias donde los gamers compiten por el título sin costo de inscripción.",
    },
    {
      titulo: "Campeones por Recompensa:",
      descripcion: "Compite en categorías con inscripción y gana premios en efectivo según tu posición en el ranking.",
    },
    {
      titulo: "Ranking Mensual:",
      descripcion: "Los jugadores se clasifican en función de su rendimiento en las competencias mensuales.",
    },
    {
      titulo: "Residencia en Sudamérica:",
      descripcion: "El campeonato está abierto únicamente a participantes residentes en países de Sudamérica.",
    },
    {
      titulo: "Edad mínima de 16 años:",
      descripcion: "Los participantes deben tener al menos 16 años para poder competir.",
    },
    {
      titulo: "Participación individual o en equipo:",
      descripcion: "Los jugadores pueden competir de manera individual o formar equipos para las competencias.",
    },
    {
      titulo: "Distribución de premios acumulados:",
      descripcion: "El 90% del monto acumulado por campeonato se reparte completamente al equipo ganador, y el 10% es destinado a la organización.",
    },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-700 py-8 text-center">
        <img
          src={egame}
          alt="Logo del Campeonato"
          className="mx-auto w-24 h-24 mb-4"
        />
        <h1 className="text-4xl font-bold">Campeonato eGame de Destored</h1>
        <p className="mt-2 text-lg">¡Donde los mejores gamers se enfrentan cada mes!</p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-blue-400">¿Cómo funciona?</h2>
          <p className="mt-4 text-lg text-gray-300">
            A principios de cada mes, abrimos las inscripciones para que los gamers participen. Durante el mes, se lleva a cabo un proceso de selección para elegir a los mejores, y al final del mes, ¡los seleccionados compiten por el título de campeón y recompensas en efectivo y más!
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg shadow-lg py-8 px-6 text-center">
          <h3 className="text-2xl font-semibold">¡Pre-Inscripciones abiertas ahora!</h3>
          <p className="mt-4 text-lg text-white">
            ¡No dejes pasar la oportunidad de demostrar tus habilidades y competir por increíbles recompensas! Contamos con inscripciones gratuitas y pagas, tanto para vos como para tu equipo.
          </p>
          <button
            className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
            onClick={toggleModal}
          >
            Pre-Inscríbete Aquí
          </button>
        </section>

        {/* Modal Section */}
        {isModalOpen && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="bg-white text-black rounded-lg p-6 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-black font-bold"
                onClick={toggleModal}
              >
                ×
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd3j7AjNU12OraC8hALiWdcAVlDrWX3-tw3ac10kr_M3s2K3Q/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        )}

        {/* Monthly Timeline Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-400 text-center mb-6">
            Cronograma Mensual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">1er Miércoles del mes</h4>
              <p className="mt-2 text-gray-300">Apertura de inscripciones.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">3er Miércoles del mes</h4>
              <p className="mt-2 text-gray-300">Selección de los mejores gamers.</p>
              <a href="https://docs.google.com/spreadsheets/d/1wRsa5HHyT2WYhKuQsjgbc8CDBSV6YFUoizWVf3Wncwg/edit?usp=sharing" className="text-purple-600">Lista de Inscriptos</a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-purple-500">Último Miércoles de cada mes</h4>
              <p className="mt-2 text-gray-300">Competencia final, coronación del campeón y entrega de recompensas.</p>
              <a href="https://kick.com/destoplay" className="text-purple-600">Transmisión oficial</a>
            </div>
          </div>
        </section>

        {/* Reglas y requisitos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-400 text-center mb-6">
            Reglas y Requisitos
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            {reglasYRequisitos.map((regla, index) => (
              <li key={index} className="mb-4">
                <span className="text-purple-500 font-semibold">{regla.titulo}</span> {regla.descripcion}
              </li>
            ))}
          </ul>
        </section>

        {/* Illustrative Images Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src={game1}
              alt="Imagen 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={comienzo}
              alt="Imagen 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={game1}
              alt="Imagen 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default EGameChampionship;
