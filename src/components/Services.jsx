import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';

const Services = () => {



        // Descuento 50%  para suscripcion de stakeholder para los produt owners  y codigo de referidos (descuento 10%) para ganar 25usd

        const cardData = [
          {
            image: 'b',
            enlace: './Comunidad',
            cta: 'Más',
            title: 'TalentTech Community',
            message: 'Conecta con nuestra red de talento digital y accede a recursos valiosos para tu negocio o marca personal.',
            price: 'Acceso gratuito',
            features: [
              'Regístrate como miembro destacado',
              'Participa en desafíos exclusivos',
              'Crea y/o únete a equipos colaborativos',
              'Accede a recursos y herramientas compartidos por la comunidad',
              'Soporte técnico intermitente'
            ]
          },
          {
            image: 'b',
            enlace: './partnerhub',
            cta: 'Más',
            title: 'Partner Hub',
            message: 'Transforma tu negocio con acceso exclusivo a recursos estratégicos, mentorías personalizadas y herramientas digitales líderes.',
            price: '$50 USD anuales',
            features: [
              'Mentorías 1 a 1 sobre uso de IA en negocio o marca.',
              'Guía para desarrollar y lanzar tu M.V.P.',
              'Grupo privado de WhatsApp.',
              'Ecosistema de herramientas digitales de Google, Meta y OpenAI.',
              'Soporte técnico disponible 24/7.'
            ]
          },
          {
            image: 'c',
            enlace: './demo',
            cta: 'Solicitar Demo',
            title: 'Partner Hub Demo',
            message: 'Obtén acceso exclusivo y limitado a recursos estratégicos para impulsar y digitalizar tu negocio o marca.',
            price: 'Completar Requisitos',
            features: [
              'Acceder a los servicios del Partner Hub durante 15 días'
            ]
          }
        ];
        
        
        
        
        
        
  
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="services">
      <div className="mb-8 mt-12 text-center">
        <h1 className="text-[40px] text-center font-black">
         Nuestros Servicios</h1>
        <p className="text-xl text-gray-500 text-center">
        ¡Transformación digital del futuro de los proyectos, negocios y empresas!       </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 mb-8 flex-col">
  {cardData.map((card, index) => (
    <div
      key={index}
      className={`shadow-xl rounded-lg hover:scale-105 duration-300 border p-8 flex-col ${
        selectedCard === index ? "border-[#9C1DD8]" : "border-gray-200"
      }`}
      onClick={() => setSelectedCard(index)} // Set selected card on click
    >
      <div className="text-left mx-4 mb-3">
        <h3 className="text-2xl font-bold">{card.title}</h3>
        <p className="text-sm">{card.message}</p>
      </div>
      <p className="relative text-sm mx-4">
        <span className="text-2xl font-bold"></span>
        <span className="text-2xl font-bold">{card.price}</span>
        <span className="text-xl font-normal text-gray-400"> </span>
      </p>
      {/* Adjusted anchor tag */}
      <a
        href={card.enlace}
        className="w-full block bg-[#9C1DD8] hover:text-[#00d9fa] hover:bg-gray-50 text-white
          duration-150 rounded font-medium px-12 py-2 mt-8 mb-4 text-center"
      >
        {card.cta}
      </a>
      <div className="text-left mx-4 flex-1">
        <p className="font-medium pb-2 pt-3">Detalle</p>
        {card.features.map((feature, index) => (
          <ul key={index} className="space-y-2">
            <li className="flex text-md leading-6">
              <FaCheck className="w-6 h-6 text-purple-500 flex-shrink-0" />
              <span className="text-gray-600 pl-4">{feature}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

export default Services;
