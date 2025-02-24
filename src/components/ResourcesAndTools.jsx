import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import { X } from "lucide-react"; // Added for the close icon

const ResourcesAndTools  = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-800 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
      {/* Forma decorativa */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400 rounded-full opacity-20 transform translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full opacity-25 transform -translate-x-8 translate-y-8"></div>

      <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FileText className="w-7 h-7" /> Recursos y Herramientas
      </h2>

      <p className="text-lg text-gray-200 mb-6 text-center leading-relaxed">
      Te ayudamos a desarrollar y lanzar tu MVP con una guía detallada, proporcionándote documentación y soporte para configurar Meta Business, Google Workspace y Ads según tu estrategia. Te orientamos en la integración de OpenAI y su API, y en la gestión de GitHub y Railway. Además, te ofrecemos 1 mes de hosting gratuito.          </p>

      {/* Botón para abrir el modal */}
      <div className="text-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-purple-200 transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" /> Acceder
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre con icono */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-purple-700 hover:text-purple-900 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-semibold text-purple-700 text-center mb-4">
              Accede a la documentación
            </h3>

            <p className="text-gray-700 text-center mb-4">
              Aprende los marcos prácticos para tu negocio con nuestra documentación.
            </p>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/drive/folders/1FBMNIArIAk91ElB-JqR3fdcmfQmALGwy?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Acceder Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResourcesAndTools ;
