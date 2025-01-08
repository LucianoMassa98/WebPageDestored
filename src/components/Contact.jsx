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
    <div className="bg-white text-center py-10 px-5" id="contact">
      <h2 className="text-2xl font-semibold text-violet-600 mb-6">Contáctanos</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-morado">
        <div>
          <h3 className="text-lg font-medium text-violet-700"> Únete a nuestro programa de comisiones para vendedores, colabora con nosotros o resuelve tus dudas con una consulta.</h3>
          <a
            href="mailto:hello@destored.com"
            className="text-morado-500 hover:text-violet-800"
          >
            destored57@gmail.com
          </a>
        </div>
        
      </div>
      <div className="flex justify-center items-center gap-6 mt-8">
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
