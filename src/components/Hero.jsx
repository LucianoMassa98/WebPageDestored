import React, { useState, useEffect } from "react";

//<blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C2kSJdxu3Mr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%', width: '-webkit-calc(100% - 2px)', width: 'calc(100% - 2px)' }}></blockquote><script async src="//www.instagram.com/embed.js"></script>
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {  

  const [showText, setShowText] = useState(false); // Estado para controlar la visibilidad del texto, es para la animacion del movimiento inicial
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowText(true); // Cuando el componente se monta, establece showText en true para mostrar el texto, es para la animacion de movimiento inicial
  }, []);

  const openInstagramVideo = () => {
   console.log(showModal)
    setShowModal(true);
  };

  const closeModal = () => {
    console.log(showModal)
    setShowModal(false);

  };

  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
        <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] "></h1>
        <h1 className={`text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] title-css ${showText ? "show" : ""
                }`}>
            Diseño & Desarrollo Productos{" "}
            <span className={`text-primary py-2 px-6 border-8 border-primary relative inline-block ${showText ? "show-2" : ""
              }`}>
              Digitales
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className={`text-gray-500 text-2xl leading-[2.5rem] ${showText ? "show-3" : ""
              }`}>
          Encontrar soluciones que se adapten a las necesidades únicas de tu empresa, negocio o idea es nuestra prioridad.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#services">
            <button
              className={`w-full xl:w-auto bg-primary hover:bg-purple-900 text-white py-2 px-8 rounded-xl text-xl ${showText ? "show-3" : ""
                }`}>
              Contáctanos
              </button>
            </a>
            <button className={`w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl ${showText ? "show-5" : ""}`}  onClick={openInstagramVideo}>
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
              Mira nuestro <br /> Vídeo de introducción
            </button>
            {showModal && (
              <div className="fixed inset-0 z-10 overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
              <div className="bg-white p-5 border border-gray-400 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:max-w-md m-4">
              <span className="text-gray-400 float-right text-4xl font-bold hover:text-black focus:text-black cursor-pointer" onClick={closeModal}>&times;</span>
              <iframe
              className="w-full h-auto"
              src="https://www.instagram.com/reel/C2kSJdxu3Mr/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              allowTransparency="true"
              style={{ minHeight: '310px' }} // Consider adjusting this based on content and design needs
              ></iframe>
              </div>
              </div>
             )}
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-2 flex flex-col justify-center gap-1 max-w-[250px] mx-auto -mt-12">
            
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              Productos/Servicios
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> App Web/Mobile
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> Ecommerce
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> Chatbot
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> Soporte Ténico
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="chatbot.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-6 xl:border-l-8 border-gray-400 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="developer.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-6 xl:border-l-8 border-gray-400 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="sitio-web.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-sm absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
