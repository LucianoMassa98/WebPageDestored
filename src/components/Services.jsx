import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';

const Services = () => {



        // Descuento 50%  para suscripcion de stakeholder para los produt owners  y codigo de referidos (descuento 10%) para ganar 25usd

        const cardData = [
          {
            image: 'x',
            enlace: 'https://calendar.app.google/yda9BeiMuCzenjVZ8',
            cta: 'Agendar renión',
            title: 'Colaboradores',
            message: 'Únete como colaborador en tu área de conocimiento digital y aporta ideas, visión o habilidades al desarrollo de proyectos.',
            price: 'Challenge de Ingreso',
            features: [
              'Entrevista técnica en tu área de conocimiento: Marketing, Publicidad, Ventas o Informática.',
              'Completar un challenge de ingreso con duración de 1 semana.',
              'Acceso a nuevas oportunidades laborales.',
              'Beneficios exclusivos para miembros.'
            ]
          },
          {
            image: 'e',
            enlace: 'https://calendar.app.google/yda9BeiMuCzenjVZ8',
            cta: 'Agendar renión',
            title: 'Product Owner / Scrum Master',
            message: 'Lidera proyectos, prioriza objetivos y alinea equipos para garantizar el éxito del producto o servicio. Optimiza procesos ágiles, potencia la productividad y fomenta la mejora continua con metodología Scrum.',
            price: 'Gratis',
            features: [
              'Entrevista y evaluación técnica en vivo con 10 preguntas clave.',
              'Experiencia en al menos un área de conocimiento: Marketing, Publicidad, Ventas o Informática.',
              'Acceso a nuevas oportunidades laborales.',
              'Beneficios exclusivos para miembros.'
            ]
          },
          {
            image: 'b',
            enlace: 'https://forms.gle/rKKx1xGFgN6BoxCs5',
            cta: 'Completar Formulario',
            title: 'Stakeholder',
            message: 'Contribuye a la toma de decisiones estratégicas y define la dirección de los proyectos.',
            price: '$50 USD',
            features: [
              'Reunión de cierre estratégico.',
              'Beneficios exclusivos para miembros.',
              'Descuentos exclusivos en servicios en la nube.',
              'Documentación detallada para crear tu producto o servicio digital.',
              '1 Mentoría sobre gestión de proyectos y metodología Scrum (incluye plan de acción).',
              'Acceso a un equipo de especialistas personalizados en Marketing, Publicidad, Ventas e Informática.',
              'Seguimiento durante 1 ciclo de sprint.'
            ]
          },
          {
            image: 'c',
            enlace: 'https://forms.gle/rKKx1xGFgN6BoxCs5',
            cta: 'Completar Formulario',
            title: 'Enterprise',
            message: 'Diseñado para empresas que buscan soluciones estratégicas personalizadas y equipos especializados para maximizar el éxito de sus proyectos. Requiere un presupuesto desde $1000 USD en adelante.',
            price: 'Personalizado',
            features: [
              'Consultoría estratégica personalizada para tu empresa.',
              'Planes de acción ajustados a los objetivos de negocio.',
              'Reunión ejecutiva para definir la visión del proyecto.',
              'Implementación de metodologías ágiles a medida.',
              'Documentación completa del proceso de desarrollo y gestión.',
              'Mentorías enfocadas en liderazgo y gestión de equipos en entornos Scrum.',
              'Acceso dedicado a un equipo de especialistas en Marketing, Ventas y Software, ajustados a las necesidades de tu empresa.',
              'Seguimiento continuo durante múltiples ciclos de sprint.',
              'Descuentos especiales en servicios digitales y en la nube.'
            ]
          }
        ];
        
  
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="services">
      <div className="mb-8 mt-12 text-center">
        <h1 className="text-[40px] text-center font-black">
        Únete a Nuestra Red de Porfesionales Digitales</h1>
        <p className="text-xl text-gray-500 text-center">
        Si eres un Product Owner, un Scrum Master, o simplemente tienes una mentalidad innovadora, colaborativa y te apasiona el trabajo digital, ¡te estamos buscando!        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 mb-8 flex-col">
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
