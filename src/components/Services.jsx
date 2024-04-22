import React, { useState } from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill, RiRobot2Fill } from "react-icons/ri";
import { MdOutlineTextSnippet } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import axios from 'axios';

const Services = () => {

  const [post, setPost]= useState({
     name:'',
     phone:'',
     email:'',
     message:''
  })

  const handleInput = (event) => {
    setPost({...post, [event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(post)
    //axios.post('', {post})
    //.then(response=>console.log(response))
    //.catch(err=>console.log(err))
  }
  
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
        <form className="w-full space-y-4"
          onSubmit={handleSubmit} method="post">
          <div className="flex space-x-4">
          <div className="relative w-1/2">
          <FaUser className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
          <input
              type="text"
              onChange={handleInput}
              name="name"
              className="w-full block bg-gray-100 py-4 pl-10 pr-10 rounded-xl outline-none"
              placeholder="Escriba su nombre completo"
            />
          </div>
          <div className="relative w-1/2">
          <FaPhoneAlt className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
          <input
              type="text"
              onChange={handleInput}
              name="phone"
              className="w-full block bg-gray-100 py-4 pl-10 pr-10 rounded-xl outline-none"
              placeholder="Escriba su teléfono"
            />
          </div>
          </div>
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              onChange={handleInput}
              name="email"
              className="w-full block bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Introduce tu dirección de correo electrónico"
            />
          </div>
          <div className="relative">
            <MdOutlineTextSnippet className="absolute top-1/4 left-2 text-gray-500 text-xl" />
            <textarea
              type="text"
              onChange={handleInput}
              name="message"
              className="w-full block bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none resize-none"
              placeholder="Introduce tu mensaje"
          ></textarea>
          </div>
          <div className="relative">
          <button 
              type="submit"
              className="inline-block font-semibold py-4 px-6 bg-primary text-white rounded-xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          </div>
          <h3 className="text-[20px] font-bold">App Web/Mobile/Desktop</h3>
          <p className="text-gray-500">
          Solucion personalizada para que se adapta a tu idea.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiRobot2Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
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
