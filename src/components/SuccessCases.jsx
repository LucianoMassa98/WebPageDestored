import React, { useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';

// Componente de Caso de Éxito
const SuccessCase = ({ name, role, description, videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  // Función para abrir el modal
  const openModal = () => setShowModal(true);
  
  // Función para cerrar el modal
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-2xl font-semibold text-purple-600 mt-4">{name}</h3>
      <p className="text-gray-500 italic">{role}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      
      <button
        className={`w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl mt-4 ${showModal ? "show-5" : ""}`}
        onClick={openModal}
      >
        <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />
        Mirar testimonio<br />en vídeo
      </button>

      {/* Modal para mostrar el video */}
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
              src={videoUrl}
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
  );
};

// Componente principal que contiene todos los casos de éxito
const SuccessCases = () => {
  const [cases] = useState([
    {
      name: 'Bruno Segovia',
      role: 'QA',
      description: 'Bruno jugó un papel fundamental en asegurar la calidad del sistema de ecommerce para uno de nuestros clientes más importantes. Su atención al detalle y habilidad para identificar y resolver errores antes de la implementación fueron claves para garantizar el éxito y la satisfacción del cliente.',
      videoUrl: 'https://www.instagram.com/reel/C-1DY07OFxd/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com&autoplay=1',
    },
    {
      name: 'Daniel Mena',
      role: 'Diseñador UX/UI',
      description: 'Daniel contribuyó significativamente al diseño y desarrollo visual de YMS APP, Digital Market y Ofix. Su creatividad y habilidad para traducir conceptos en interfaces atractivas y funcionales han elevado la calidad de cada proyecto, impactando directamente en la experiencia del usuario.',
      videoUrl: 'https://www.instagram.com/reel/C-1DY07OFxd/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com&autoplay=1',
    },
    {
      name: 'Braian Vargas',
      role: 'Marketer',
      description: 'Braian Vargas destacó como marketer en Destored, contribuyendo al crecimiento de AdLab con estrategias de marketing innovadoras y campañas efectivas. Su creatividad, liderazgo y trabajo en equipo dejaron una huella significativa en nuestros proyectos y comunidad profesional. Un ejemplo de éxito impulsado por talento y visión.',
      videoUrl: 'https://www.instagram.com/reel/C0z3utag_7o/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com&autoplay=1',
    }
  ]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-black-600 mb-6">
        Casos de Éxito de Nuestros Colaboradores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem, index) => (
          <SuccessCase
            key={index}
            name={caseItem.name}
            role={caseItem.role}
            description={caseItem.description}
            videoUrl={caseItem.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessCases;
