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
      Tu puente hacia la transformación digital
      </h1>
      <p className="text-gray-600 text-justify mb-6 text-lg text-center">
      Conectando tu proyecto, empresa o negocio con un profesional y/o equipo especializado en teconologías digitales y un plan adaptado a tus objetivos.
</p>
      

      {/* Cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {/* Profesionales */}



  <div className="bg-white rounded-lg shadow-md p-4">
    <img
      className="w-full h-40 object-contain rounded-t-lg"
      src="icono3.png" // Aquí pones la ruta de la imagen para "Equipos personalizados"
      alt="Profesionales"
    />
    <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
      Profesionales
    </h3>
    <p className="text-gray-600 text-justify mt-2">
      Ideal si estas comenzando en tu carrera digital
    </p>
    <ul className="text-gray-600 text-justify mt-4 list-disc pl-5">
      <li>Accede a una comunidad en crecimiento siempre disponible a brindarte ayuda</li>
      <li>Forma y/o colabira con equipos facilmente</li>
      <li>Capaciciones y material educativo</li>
    </ul>
  </div>

  {/* Negocios */}
  <div className="bg-white rounded-lg shadow-md p-4">
    <img
      className="w-full h-40 object-contain rounded-t-lg"
      src="icono2.png" // Aquí pones la ruta de la imagen para "Presupuestos ágiles y flexibles"
      alt="Negocios"
    />
    <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
      Negocios
    </h3>
    <p className="text-gray-600 text-justify mt-2">
    Ideales para pymes y proyectos que recién comienzan.
        </p>
    <ul className="text-gray-600 text-justify mt-4 list-disc pl-5">
      <li>Presupuestos flexibles para maximizar tu inversión con el menor costo posible del mercado.</li>
      <li>Forma equipos multidisciplinarios para diseñar, desarrollar y lanzar tu negocio al ámbito digital.</li>
      <li>Agrega valor a través de la integración de soluciones tecnológicas.</li>
    </ul>
  </div>

  {/* Empresas */}
  <div className="bg-white rounded-lg shadow-md p-4">
    <img
      className="w-full h-40 object-contain rounded-t-lg"
      src="icono1.png" // Aquí pones la ruta de la imagen para "Metodología Scrum Descentralizada"
      alt="Empresas"
    />
    <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
      Empresas
    </h3>
    <p className="text-gray-600 text-justify mt-2">
      Soluciones diseñadas para empresas con 10 o más empleados.
    </p>
    <ul className="text-gray-600 text-justify mt-4 list-disc pl-5">
      <li>Implementa metodologías ágiles y Scrum para una dirección efectiva de tus proyectos.</li>
      <li>Contrata y/o capacita roles clave para optimizar el rendimiento de tu empresa.</li>
      <li>Sistematiza y digitaliza áreas estratégicas para aumentar la eficiencia operativa.</li>
    </ul>
  </div>
</div>

   

      

    </div>
  );
};

export default DestoredInfo;
