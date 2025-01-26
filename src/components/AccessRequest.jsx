import React from "react";

const AccessRequest = () => {
  return (
    <section className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
        Acceso al Grupo Privado de WhatsApp
      </h2>
      <p className="text-lg text-gray-700 text-center mb-6">
      Únete a nuestro grupo privado de WhatsApp para conectar con emprendedores y expertos, acceder a contenido exclusivo sobre el uso de IA en negocios, 
      recibir actualizaciones sobre las últimas tendencias y aprovechar oportunidades de colaboración en proyectos digitales innovadores.
      </p>

     

      <div className="text-center mb-4">
        <a
          href="https://chat.whatsapp.com/Kxs6cq6r4CoIFTqIwUtLOq" // Reemplaza con el link de tu grupo de WhatsApp
          className="text-white bg-purple-600 hover:bg-purple-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder al Grupo
        </a>
      </div>
    </section>
  );
};

export default AccessRequest;
