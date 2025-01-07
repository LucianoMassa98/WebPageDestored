import "./Hero.css"
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

//<blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C2kSJdxu3Mr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%', width: '-webkit-calc(100% - 2px)', width: 'calc(100% - 2px)' }}></blockquote><script async src="//www.instagram.com/embed.js"></script>
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";


const Hero = () => {

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
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-4 flex items-center justify-center p-8 xl:p-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl  xl:leading-[7.5rem]"> <h1
            className={`text-5xl xl:text-7xl  xl:leading-[7.5rem] title-css ${showText ? "show" : ""
              }`}
          >
           Bienvenido a {" "} <strong className="text-purple-600"> Destored</strong>
          </h1>
          
          </h1>
          <p
            className={`text-gray-500 text-2xl leading-[2.5rem] ${showText ? "show-3" : ""
              }`}>
Una red descentralizada de <strong>profesionales digitales para tu proyecto, empresa o negocio.</strong>          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">

            <a href="#services">
              <button
                className={`w-full xl:w-auto bg-primary hover:bg-purple-900 text-white py-2 px-8 rounded-xl text-xl ${showText ? "show-3" : ""
                  }`}>
              Contratar Talento             
            </button>
            </a>

          

            <Link to="/Comunidad" className="text-slate-600 transition-colors hover:text-purple-600 text-xl">
  <button
    className={`w-full xl:w-auto bg-primary hover:bg-purple-900 text-white py-2 px-8 rounded-xl text-xl ${showText ? "show-3" : ""}`}
  >
    Soy Talento
  </button>
</Link>



            <button
              className={`w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl ${showText ? "show-5" : ""}`}
              onClick={openInstagramVideo}
            >
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
              Mira nuestro <br /> Vídeo de introducción
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
                    src="https://www.instagram.com/reel/C2kSJdxu3Mr/embed/captioned/?rd=https%3A%2F%2Fembedinstagramfeed.com&autoplay=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    allowTransparency="true"
                    style={{ maxWidth: '100%', maxHeight: '700px' }} // Consider adjusting this based on content and design needs0
                  ></iframe>
                </div>
              </div>
            )}
           
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-4 flex items-center justify-center relative xl:p-10 z-0">
        {/* Content image */}
        <div className="z-40 m-auto p-0">
          

        <div className="bg-white/o  rounded-lg flex-col justify-center max-w-[250px] mx-auto">

<h2 className="text-xl font-bold tracking-[1px] text-purple-600">
 Talentos del
</h2>

<div className="flex items-center gap-2 text-lg text-gray-500">
  <RiCheckboxBlankCircleFill className="text-primary" /> Marketing
</div>
<div className="flex items-center gap-2 text-lg text-gray-500">
  <RiCheckboxBlankCircleFill className="text-primary" /> Diseño
</div>
<div className="flex items-center gap-2 text-lg text-gray-500">
  <RiCheckboxBlankCircleFill className="text-primary" /> Software
</div>

<div className="flex items-center gap-2 text-lg text-gray-500">
  <RiCheckboxBlankCircleFill className="text-primary" /> Gestión Ágil
</div>
</div>




        </div>

        <div className="logo-container absolute w-[70%] h-[70%] p-9 block xl:block">

  <div className="logo1">
    <img
      src="logo1.png"
      className="w-10 h-10 md:w-20 md:h-20 rounded-full absolute top-[10%]"
    />
  </div>

  <div className="logo2">
    <img
      src="logo2.png"
      className="w-10 h-10 md:w-20 md:h-20 rounded-full absolute top-[10%] left-[90%]"
    />
  </div>

  <div className="logo3">
    <img
      src="logo3.png"
      className="w-10 h-10 md:w-20 md:h-20 rounded-full absolute top-[85%]"
    />
  </div>

  <div className="logo4">
    <img
      src="logo4.png"
      className="w-10 h-10 md:w-20 md:h-20 rounded-full absolute top-[90%] left-[90%]"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;



