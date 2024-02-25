import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">¿Cómo te podemos ayudar?</h1>
        <p className="text-[20px] text-gray-500">
        Por favor, proporciona tu dirección de correo electrónico para que podamos
         ponernos en contacto contigo lo antes posible a través de uno de nuestros asesores.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Introduce tu dirección de correo electrónico"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">App Web/Mobile/Desktop</h3>
          <p className="text-gray-500">
          Solucion personalizada para que se adapta a tu idea.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">ChatBot</h3>
          <p className="text-gray-500">
           Implementa tu Chatbot en Whatsapp, Facebook e Instagram.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Sistema de gestión</h3>
          <p className="text-gray-500">
            Diseña/Desarrolla software para la gestion de tu negocio.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Soporte Técnico</h3>
          <p className="text-gray-500">
          Brindamos soporte técnico rápido y confiable para resolver tus problemas informáticos.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
