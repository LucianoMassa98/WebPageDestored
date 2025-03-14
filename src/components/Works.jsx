import React, { useEffect, useState } from "react";



/*  {
    img: "work5.png",
    year: "2025",
    title: "Demo",
    description: "Prueba el partnerhub durante 15 días",
    buttonText: "Completar Formulario",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuIb-cpT4yCvVjT8wFcets0hqW84ybdcnQEvCU4FQ5xQgQkg/viewform?embedded=true",
  },*/
  const projects = [
    {
      "img": "work6.png",
      "title": "Mcoach",
      "description": "Coaching profesional enfocado en el desarrollo personal.",
      "link": "https://marcocerdera.com/"
    }
,    
    {
      img: "work4.png",
      title: "OFIX - Servicios para el hogar",
      description: "Plataforma innovadora para contratar y ofrecer servicios del hogar de manera rápida y segura.",
      link: "https://ofix.tech",
    },
    {
      img: "work1.png",
      title: "VendePorInsta - Automatización de ventas",
      description: "Optimiza la gestión de tu consultorio o clínica odontológica con herramientas de marketing.",
      link: "https://vendeporinsta.up.railway.app/",
    },
    {
      img: "work7.png",
      title: "WeedSJ - Comunidad Cannábica",
      description: "Prototipo de plataforma para la comunidad del cannabis, con información, foros y espacios de debate sobre el sector en Argentina.",
      link: "https://weed.destored.org/",
  },
    {
      img: "work1.png",
      title: "VendePorInsta - SaaS de gestion de clinicas",
      description: "Optimiza la gestión de tus clincias con tus pacientes y profesionales para",
      link: "https://aconex.up.railway.app/login",
    },
    {
      img: "A todo motor.png",
      title: "A Todo Motor - Gestion de Rally",
      description: "Sistema integral para la gestión de competidores y organizacion de rally.",
      link: "https://atodomotor.up.railway.app/login",
    },
    {
      img: "work2.png",
      title: "YMS APP - Ecommerce para aviarias",
      description: "Sistema integral para la gestión y venta de productos en el sector avícola.",
      link: "https://yms.up.railway.app/",
    },
   
    
  {
    img: "work5.png",
    title: "Maqueta - Liga de Fútbol Amateur",
    description: "Prototipo de sistema para la gestión de torneos de fútbol amateur en San Juan, con seguimiento de partidos y estadísticas.",
    link: "https://laliga.up.railway.app/",
  },
    {
      img: "work5.png",
      title: "Maqueta - Turismo Rally ",
      description: "Plataforma de eCommerce para hospedaje, gastronomía y eventos del Rally Safari Tras las Sierras en Valle Fértil, San Juan.",
      link: "https://atm.up.railway.app/",
    },
    {
      img: "work5.png",
      title: "Maqueta - Ecommerce Digital Market",
      description: "Plataforma para gestion de negocios",
      link: "https://www.figma.com/design/29yJ7c59VPQH9MFd6aitGx/Digital-Market?node-id=0-1&p=f&t=IW2F4WWyomBc4t9a-0",
    },
    {
      img: "work5.png",
      title: "Maqueta - Comunidad Misionera",
      description: "idea foto para comunidad misionera en San Juan, Argentina",
      link: "https://www.figma.com/proto/WGRU7QuG83gf5ckoDJfeFX/Digital-Market?node-id=23-727&p=f&t=DMxg166l3hovLPul-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3",
    },
    {
      img: "work5.png",
      title: "Maqueta - SaaS Digital Market",
      description: "idea de Saas para gestion de negocios",
      link: "https://www.figma.com/proto/WGRU7QuG83gf5ckoDJfeFX/Digital-Market?node-id=23-727&p=f&t=DMxg166l3hovLPul-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3",
    },
  ];
  
  
  const Works = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedForm, setSelectedForm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
  
    // Divide los proyectos en páginas de 3 elementos cada una
    const pages = [];
    for (let i = 0; i < projects.length; i += itemsPerPage) {
      pages.push(projects.slice(i, i + itemsPerPage));
    }
  
    // Funciones para cambiar de página
    const nextPage = () => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <div id="products" className="p-8 xl:p-20 bg-gradient-to-b from-indigo-900 to-purple-700 text-white">
        <div className="mb-8 text-center">
          <h1 className="text-[40px] font-black">Destored en Acción</h1>
          <p className="text-xl text-gray-300">
          Adéntrate en nuestro universo y explora una amplia gama de productos digitales que hemos desarrollado con pasión y dedicación. ¡Descubre nuestros proyectos y déjate inspirar!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pages[currentPage].map((project, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all">
              <img src={project.img} className="w-full h-56 object-cover rounded-2xl" alt={project.title} />
              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  className="inline-block mt-4 text-purple-600 font-bold underline decoration-dotted hover:text-purple-800 hover:scale-110 transition-all duration-300"
                >
                  ¡Visitar Sitio Web!
                </a>
              ) : (
                <button
                  className="mt-4 bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                  onClick={() => {
                    setShowModal(true);
                    setSelectedForm(project.formLink);
                  }}
                >
                  {project.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l-lg disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r-lg disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <iframe
                src={selectedForm}
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
    );
  };
  
  export default Works;
  