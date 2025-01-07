import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';

const Services = () => {



        // Descuento 50%  para suscripcion de stakeholder para los produt owners  y codigo de referidos (descuento 10%) para ganar 25usd

        const cardData = [
          {
            image: 'b',
            enlace: './Comunidad#members',
            cta: 'Comunidad Destored',
            title: 'Comunidad',
            message: 'Explora nuestra red de expertos en software, marketing, diseño y gestión de proyectos ágiles. Encuentra soluciones para tus proyectos con profesionales capacitados.',
            price: 'Acceso gratuito',
            features: [
              'Acceso a una comunidad de expertos certificados que completaron el #DesafioDesto.',
              'Crecimiento constante con nuevas oportunidades y talentos.',
              'Networking exclusivo para colaborar en proyectos digitales.',
              'Participación en webinars y talleres gratuitos.',
              'Acceso a recursos y herramientas compartidas por la comunidad.',
              'Visibilidad para tus proyectos y servicios dentro de la red.',
              'Oportunidad de formar parte de equipos multidisciplinarios.',
              'Apoyo de mentores con experiencia en tecnología y marketing.',
              'Foros interactivos para resolver dudas y compartir conocimientos.',
              'Acceso anticipado a convocatorias de proyectos y desafíos especiales.'
            ]
          },
          {
            image: 'b',
            enlace: 'https://mpago.la/2muX7cf',
            cta: 'Comprar',
            title: 'Negocio',
            message: 'Accede a material exclusivo y sesiones de mentoría personalizadas.',
            price: '$50.000 ARS',
            features: [
              'Guía detallada para crear tu propio producto digital desde cero.',
              'Curso grabado de 1 hora con fundamentos sobre la creación de soluciones digitales.',
              'Descuentos exclusivos en servicios en la nube como Railway para implementar tu proyecto.',
              '2 sesiones de mentoría personalizadas para dueños de negocios digitales, con enfoque práctico.',
              'Acceso a un grupo privado de negocios para intercambiar estrategias y recursos.',
              '3 plantillas descargables para planificación de proyectos digitales.',
              'Soporte técnico de dós meses para configurar herramientas digitales esenciales.'
            ]
          },
          {
            image: 'c',
            enlace: 'https://forms.gle/tf1zPxVgfpLMugZV8',
            cta: 'Completar Formulario',
            title: 'Empresa',
            message: 'Diseñado para empresas que buscan soluciones estratégicas personalizadas y equipos especializados para maximizar el éxito de sus proyectos.',
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
              'Descuentos especiales en servicios digitales y en la nube.',
              'Análisis de mercado y recomendaciones estratégicas.',
              'Reportes trimestrales con métricas clave de desempeño del proyecto.',
              'Soporte extendido para la adopción de nuevas tecnologías en tu empresa.'
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
