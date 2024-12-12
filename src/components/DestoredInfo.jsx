import React, { useState, useEffect } from "react";

//<blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C2kSJdxu3Mr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%', width: '-webkit-calc(100% - 2px)', width: 'calc(100% - 2px)' }}></blockquote><script async src="//www.instagram.com/embed.js"></script>
import {
  RiPlayFill
} from "react-icons/ri";

const DestoredInfo = () => {
  
  const [showText, setShowText] = useState(false); // Estado para controlar la visibilidad del texto, es para la animacion del movimiento inicial

  useEffect(() => {
    setShowText(true); // Cuando el componente se monta, establece showText en true para mostrar el texto, es para la animacion de movimiento inicial
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openInstagramVideo = () => {
    console.log(showModal)
    setShowModal(true);
  };

  const closeModal = () => {
    console.log(showModal)
    setShowModal(false);

  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80vw] mx-auto mt-8">
      <h1 className="text-[40px] text-center font-black font-bold  text-center mb-4">
        ¿Qué es Destored?
      </h1>
      <p className="text-gray-600 text-justify mb-6 text-lg text-center">
      Destored conecta tu proyecto, empresa o negocio con profesionales y equipos multidisciplinarios especializados en tecnología y publicidad digital. 
      El objetivo con el cual armamos el equipo o encontramos un profesional es adaptar soluciones personalizadas a tus necesidades específicas, impulsando la transformación digital para llevar tu visión al siguiente nivel.
      </p>
      

      {/* Cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono1.png" // Aquí pones la ruta de la imagen para "Equipos personalizados"
            alt="Equipos personalizados"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Equipos personalizados
          </h3>
          <p className="text-gray-600 text-justify mt-2">
          Crea equipos multidisciplinarios a tu medida, selecciona profesionales con las habilidades exactas que tu proyecto, negocio o empresa necesita.
           Adaptamos el equipo según tus demandas, asegurando una ejecución eficiente y resultados de alta calidad.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono3.png" // Aquí pones la ruta de la imagen para "Presupuestos ágiles y flexibles"
            alt="Presupuestos ágiles y flexibles"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Presupuestos ágiles y flexibles
          </h3>
          <p className="text-gray-600 text-justify mt-2">
          Con presupuestos que se adaptan a las necesidades cambiantes de las tecnologías, permitiendo ajustes en el alcance y costos sin comprometer la calidad. 
          Con transparencia y flexibilidad, optimizamos la gestión financiera a lo largo del proceso.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            className="w-full h-40 object-contain rounded-t-lg"
            src="icono2.png" // Aquí pones la ruta de la imagen para "Metodología Scrum Descentralizada"
            alt="Metodología Scrum Descentralizada"
          />
          <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
            Metodología Scrum Descentralizada
          </h3>
          <p className="text-gray-600 text-justify mt-2">
          Un enfoque ágil con equipos autónomos que colaboran de manera descentralizada.
           Con ciclos de trabajo iterativos y entregas incrementales, garantiza flexibilidad y rapidez en la adaptación a cambios, manteniendo siempre los objetivos alineados.
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-black text-center mb-4 mt-6">
  Metodología Ágil: Un Enfoque Flexible y Colaborativo
</h1>
<p className="text-gray-600 text-justify mb-6 text-lg">
  En Destored, utilizamos metodologías ágiles para gestionar nuestros proyectos de manera eficiente y flexible. Esto significa que trabajamos en ciclos cortos, adaptándonos rápidamente a los cambios y manteniendo una comunicación constante entre todos los miembros del equipo. El enfoque ágil permite que todos los involucrados, desde los líderes hasta los colaboradores, puedan tomar decisiones que mejoren el rumbo del proyecto.
</p>
<ul className="list-disc list-inside space-y-2 text-gray-700">
  <li>Equipos que toman decisiones de manera colaborativa.</li>
  <li>Adaptación rápida a los cambios y necesidades del proyecto.</li>
  <li>Ambientes de trabajo flexibles y sin jerarquías estrictas.</li>
</ul>

      {/* Optional additional content for Scrum Descentralizado */}
      <div className="bg-white rounded-lg shadow-md p-4 mt-6">
  <h3 className="text-xl font-semibold text-purple-600 text-center">
    Más sobre nuestro modelo
  </h3>
  <p className="text-gray-600 text-justify mt-2">
    <br />
    Para conocer más sobre cómo Scrum puede transformar la gestión de proyectos en tu empresa, te invitamos a consultar la <a href="https://www.scrum.org/resources/what-is-scrum" className="text-purple-600" target="_blank" rel="noopener noreferrer">Guía de Scrum de Scrum.org</a> o explorar los recursos educativos y certificaciones oficiales que ofrece la organización.
  </p>

  <button
    className={`w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl ${showText ? "show-5" : ""}`}
    onClick={openInstagramVideo}
  >
    <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
    Video de Introducción a metodología Scrum
    <br /> 
  </button>
  {showModal && (
    <div className="fixed inset-0 z-10 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-5 border border-gray-400 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:max-w-md m-4">
        <span
          className="text-gray-400 float-right text-4xl font-bold hover:text-black focus:text-black cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
        <iframe
          className="w-full h-screen"
          src="https://www.instagram.com/reel/C_6sMuCpjjg/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com&autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          allowTransparency="true"
          style={{ maxWidth: '100%', maxHeight: '700px' }}
        ></iframe>
      </div>
    </div>
  )}

</div>

    </div>
  );
};

export default DestoredInfo;
