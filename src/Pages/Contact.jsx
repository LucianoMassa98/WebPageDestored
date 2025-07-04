import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-16 px-5" id="contacto">
      <h1 className="text-3xl font-bold text-violet-700 mb-4">Contáctanos</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Si desea obtener más información sobre Destored, tiene alguna consulta o
        desea establecer contacto profesional, por favor no dude en comunicarse
        con nosotros. Puede enviarnos un correo electrónico o seguirnos en
        nuestras redes sociales. Estaremos encantados de atenderle.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-morado w-full max-w-2xl">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-lg font-medium text-violet-700 mb-2">
            Correo electrónico
          </h3>
          <a
            href="mailto:info@destored.org"
            className="text-morado-500 hover:text-violet-800 break-all"
          >
            info@destored.org
          </a>
        </div>
        {/* Aquí podrías agregar un formulario de contacto en el futuro */}
      </div>
      <div className="flex justify-center items-center gap-6 mt-10">
        <a
          href="https://www.facebook.com/destored0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/destored_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/destored"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://kick.com/destoplay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <RiLiveLine />
        </a>
        <a
          href="https://www.youtube.com/channel/destored"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.tiktok.com/@destored"
          target="_blank"
          rel="noopener noreferrer"
          className="text-morado hover:text-violet-600 text-2xl"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Contact;
