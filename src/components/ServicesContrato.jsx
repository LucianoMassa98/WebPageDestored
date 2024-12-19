import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';

const Services = () => {



        // Descuento 50%  para suscripcion de stakeholder para los produt owners  y codigo de referidos (descuento 10%) para ganar 25usd

        const cardData = [
          {
            image: 'x',
            enlace: 'https://wa.me/5492644631495?text=Solicito%20challenge%20de%20ingreso',
            cta: 'Solicitar Challenge',
            title: 'Colaborador',
            message: 'Únete como colaborador en tu área de conocimiento digital: Marketing, Publicidad, Ventas o Informática y aporta ideas, visión o habilidades al desarrollo de proyectos.',
            price: 'Challenge de Ingreso',
            features: [
              'Completar un challenge de ingreso con duración de 1 semana.',
              'Entrevista estratégica',
              'Acceso a nuevas oportunidades laborales.',
              'Beneficios exclusivos para miembros.'
            ]
          },
          {
            image: 'e',
            enlace: 'https://wa.me/5492644631495?text=Solicito%20evaluacion%20para%20ingresar%20como%20ScrumMaster%20a%20la%20red%20Destored',
            cta: 'Solicitar Evauluación',
            title: 'Scrum Master',
            message: 'Optimiza procesos ágiles, potencia la productividad y fomenta la mejora continua con metodología Scrum.',
            price: 'Evaluación',
            features: [
              'Entrevista y evaluación técnica en vivo con 10 preguntas clave.',
              'Experiencia en al menos un área de conocimiento: Marketing, Publicidad, Ventas o Informática.',
              'Acceso a nuevas oportunidades laborales.',
              'Beneficios exclusivos para miembros.'
            ]
          },
          {
            image: 'e',
            enlace: 'https://wa.me/5492644631495?text=Solicito evaluacion para ingresar como Product Owner a la red Destored',
            cta: 'Solicitar Evauluación',
            title: 'Product Owner',
            message: 'Lidera proyectos, prioriza objetivos y alinea equipos para garantizar el éxito del producto o servicio. ',
            price: 'Evaluación',
            features: [
              'Entrevista y evaluación técnica en vivo con 10 preguntas clave.',
              'Experiencia en al menos un área de conocimiento: Marketing, Publicidad, Ventas o Informática.',
              'Acceso a nuevas oportunidades laborales.',
              'Beneficios exclusivos para miembros.'
            ]
          },
        ];
        
  
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="servicesContrato">
      <div className="mb-8 mt-12 text-center">
        <h1 className="text-[40px] text-center font-black">
        Únete Como Prefesional Digital</h1>
        <p className="text-xl text-gray-500 text-center">
        ¡Se miembro y forma parte de la transformación digital del futuro!       </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 mb-8 flex-col">
        {cardData.map((card, index) =>
          <div key={index} className={`shadow-xl rounded-lg hover:scale-105 duration-300 border p-8 flex-col ${selectedCard === index ? 'border-[#9C1DD8]' : 'border-gray-200'
            }`}
            onClick={() => setSelectedCard(index)} // Set selected card on click
          >
            <div className="text-left mx-4 mb-3">
              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>
              <p className="text-sm">
                {card.message}
              </p>
            </div>
            <p className="relative text-sm mx-4">
              <span className="text-2xl font-bold"></span>
              <span className="text-2xl font-bold">{card.price}</span>
              <span className="text-xl font-normal text-gray-400"> </span>
            </p>
            <a href={card.enlace} target="_blank" rel="noopener noreferrer" className="w-full block bg-[#9C1DD8] hover:text-[#00d9fa] hover:bg-gray-50 text-white
           duration-150 rounded font-medium px-12 py-2 mt-8 mb-4 text-center">
              {card.cta}
            </a>
            <div className="text-left mx-4 flex-1">
              <p className="font-medium pb-2 pt-3">Más Información: </p>
              {card.features.map((feature, index) => (
                <ul key={index}
                  className="space-y-2">
                  <li className="flex text-md leading-6">
                    <FaCheck className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-600 pl-4">{feature}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
