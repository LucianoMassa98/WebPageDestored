import React, { useState } from 'react';
import { RiPlayFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';

// Componente de Caso de Éxito
const SuccessCase = ({ name, role, description, videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-2xl">
      <h3 className="text-xl font-bold text-purple-700 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 italic">{role}</p>
      <p className="text-base text-gray-700 mt-3">{description}</p>

      <button
        onClick={openModal}
        className="flex items-center gap-3 mt-5 px-5 py-3 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-xl transition-all text-base font-medium"
      >
        <RiPlayFill className="text-purple-600 text-3xl bg-purple-200 rounded-full p-1" />
        <FaInstagram className="text-pink-600 text-xl" />
        Testimonio
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden relative w-full max-w-2xl shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="w-full aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '0 0 0.75rem 0.75rem' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente principal
const SuccessCases = () => {
  const [cases] = useState([
    {
      name: 'Bruno Segovia',
      role: 'Pasante QA & Testing',
      description: 'Bruno destaca la innovación y compañerismo.',
      videoUrl: 'https://www.instagram.com/reel/C-1DY07OFxd/embed/captioned/?autoplay=1',
    },
    {
      name: 'Bayron Leiva',
      role: 'Pasante DevOps',
      description: 'Destaca su crecimiento profesional y agradece su oportunidad.',
      videoUrl: 'https://www.instagram.com/reel/C-1DY07OFxd/embed/captioned/?autoplay=1',
    },
    {
      name: 'Braian Vargas',
      role: 'Cofundador & Marketer',
      description: 'Contribuye al crecimiento con estrategias de marketing innovadoras. Su creatividad y trabajo en equipo dejaron una huella significativa.',
      videoUrl: 'https://www.instagram.com/reel/C0z3utag_7o/embed/captioned/?autoplay=1',
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Casos de Éxito de Nuestros Colaboradores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
