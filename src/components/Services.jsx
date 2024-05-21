import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';

const Services = () => {  
  
  const cardData = [{
    image:'e',
    title:'Paquete básico',
    message:'Tiempo producción: 100hs',
    price :'1.000',
    features:['Desarrollo de software a medida', 'Soporte técnico y diseño', 'Consultoría de software', '1 informe semanal (meet opcional) + 1 informe mensual escrito']
  },
  {
    image:'d',
    title:'Paquete Estándar',
    message:'Tiempo producción: 100hs',
    price :'1.500',
    features:['Desarrollo de software a medida con funcionalidades adicionales', 'Consultoría de software', '+2 informe inter-mensual(meets opcionales)', '1 informe mensual escrito','Equipo +4 devs']
  },
  {
    image:'b',
    title:'Paquete Premium',
    message:'Tiempo producción: 100hs',
    price :'2.500',
    features:['Desarrollo de software a medida con características especiales', 'Diseño y soporte técnico avanzado, incluyendo asistencia prioritaria', 'Consultoría de software y team Leader','+3 informe mensual escrito y equipo de +5 its']
  },
  {
    image:'x',
    title:'Paquete personalizable',
    message:'Proyectos específicos fuera de los paquetes de menor o mayor envergadura',
    price :'',
    features:['Chatbots y software por suscripción', 'Consultoría de software', 'Creación de productos digitales', 'Diseño de maquetas con Figma', 'Despliegue de software en la nube']
  }]
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="services">
       <div className="mb-8 mt-12 text-center">
         <h1 className="text-[40px] text-center font-black">
          Apartado de Precios
         </h1>
         <p className="text-xl text-gray-500 text-center">
         Elige el plan perfecto para tus necesidades
         </p>
       </div>
       <div className="max-w-[1400px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 mb-8 flex-col">
        {cardData.map((card, index)=>
         <div key={index} className={`shadow-xl rounded-lg hover:scale-105 duration-300 border p-8 flex-col ${
              selectedCard === index ? 'border-[#9C1DD8]' : 'border-gray-200'
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
               <span className="text-2xl font-bold">$</span>
               <span className="text-2xl font-bold">{card.price}</span>
               <span className="text-xl font-normal text-gray-400"> US/mes</span>
           </p>
           <button className="w-full block bg-[#9C1DD8] hover:text-[#00d9fa] hover:bg-gray-50 text-white
           duration-150 rounded font-medium px-12 py-2 mt-8 mb-4">
           Agendar meet
           </button>
           <div className="text-left mx-4 flex-1">
           <p className="font-medium pb-2 pt-3">Que Obtienes: </p>
             {card.features.map((feature, index)=>(
                <ul key={index} 
                 className="space-y-2">
                   <li className="flex text-md leading-6">
                     <FaCheck className="w-6 h-6 text-purple-500 flex-shrink-0"/>
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
