import React, { useEffect, useState } from "react";

const Works = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <div id="products" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Destored en Acción
        </h1>
        <p className="text-xl text-gray-500">
          Sumérgete en el emocionante mundo de Destored y descubre una variedad
          de productos digitales que hemos ayudado a desarrollar con pasión y dedicación.
          ¡Explora nuestras trabajos y déjate inspirar por lo que podemos
          lograr juntos!
        </p>

        
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 zoom-container">
          <img
            src="work5.png"
            className="w-full h-[600px] object-cover rounded-3xl zoomable"
          />
          <p className="text-gray-500">2025</p>
          <h3 className="text-2xl font-bold">Agrega tu proyecto</h3>
          <p className="text-gray-500">
          Agrega tu proyecto y participa en nuestros sorteos. Si tu propuesta destaca como la más ambiciosa, tendrás la oportunidad de formar un equipo rápidamente para llevarla a cabo.
          Cada mes realizamos sorteos y desarrollamos MVPs (Productos Mínimos Viables) para impulsar los proyectos más destacados.
                    </p>

                    
<button
          className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>

{/* Modal */}
{showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeuIb-cpT4yCvVjT8wFcets0hqW84ybdcnQEvCU4FQ5xQgQkg/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title="Formulario de Google"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Una nueva forma de contratar y ofrecer servicios para el hogar</p>
            <h3 className="text-2xl font-bold">
              OFIX
            </h3>
            <a 
  href="https://ofix.up.railway.app/"
  class="text-purple-600 text-lg font-bold underline decoration-dotted hover:text-purple-800 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400"
>
  ¡Visitar Sitio Web!
</a>
          </div>
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work1.png"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Gestión inteligente para tu consultorio o clínica odontológica.</p>
            <h3 className="text-2xl font-bold">
              VendePorInsta
            </h3>
            <a 
  href="https://vendeporinsta.up.railway.app/"
  class="text-purple-600 text-lg font-bold underline decoration-dotted hover:text-purple-800 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400"
>
  ¡Visitar Sitio Web!
</a>
          </div>
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Landing / Ecommerce / Plataforma: Desktop & Web App - 2024</p>
            <h3 className="text-2xl font-bold">
              YMS APP
            </h3>
            <a 
  href="https://yms.up.railway.app/"
  class="text-purple-600 text-lg font-bold underline decoration-dotted hover:text-purple-800 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400"
>
  ¡Visitar Sitio Web!
</a>
          </div>
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work3.png"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Gestiona y cronometra competencias automovilísticas más un marketplace.</p>
            <h3 className="text-2xl font-bold">
              ATM
            </h3>
            <a 
  href="https://atm.up.railway.app/"
  class="text-purple-600 text-lg font-bold underline decoration-dotted hover:text-purple-800 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400"
>
  ¡Visitar Sitio Web!
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
