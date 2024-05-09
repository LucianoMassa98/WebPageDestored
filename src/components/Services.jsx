import { FaCheck } from "react-icons/fa6";

const Services = ({title, price, storage, users, sendUp}) => {  
  const cardData = [{
    image:'e',
    title:'Paquete básico',
    message:'Tiempo producción: 100hs',
    price :'1000',
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
    price :'2500',
    features:['Desarrollo de software a medida con características especiales', 'Diseño y soporte técnico avanzado, incluyendo asistencia prioritaria', 'Consultoría de software y team Leader','+3 informe mensual escrito y equipo de +5 its']
  },
  {
    image:'x',
    title:'Paquete personalizable',
    message:'Proyectos específicos fuera de los paquetes de menor o mayor envergadura',
    price :'',
    features:['Chatbots y software por suscripción', 'Consultoría de software', 'Creación de productos digitales', 'Diseño de maquetas con Figma', 'Despliegue de software en la nube']
  }]

  return (
    <div id="services" className='flex flex-col justify-center bg-white p-8'>
       <div className="mb-2 mt-12 text-center">
         <h1 className="text-[40px] text-center font-black">
          Apartado de Precios
         </h1>
         <p className="text-xl text-gray-500 text-center">
         Elige el plan perfecto para tus necesidades
         </p>
       </div>
       <div className="flex flex-col gap-8 px-40 xl:flex-row">
        {cardData.map((card, index)=>
        <div key={index} className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           <h2 className="text-2xl font-bold text-left mt-3 mx-6">
              {card.title}
           </h2>
           <p className="text-sm text-left mb-5 mx-6">
              {card.message}
           </p>
           <div className="mx-6 flex justify-left items-left">
               <p className="text-2xl font-bold">$</p>
               <p className="text-2xl font-bold">{card.price}</p>
               <p className="text-xl text-gray-400">/mes</p>
           </div>
           <button className="bg-[#9C1DD8] hover:text-[#00d9fa] hover:bg-gray-50 text-white
           duration-150 rounded font-medium my-4 py-2 mx-6">
           Agendar meet
           </button>
           <div className="text-left">
           <p className="mx-8 font-medium pb-2 pt-3">Que Obtienes: </p>
            {card.features.map((feature, index)=>(
              <ul key={index} 
                 className="space-y-3 mx-8">
                <li className="flex  flex-col justify-left space-x-4 text-lg">
                <FaCheck className="w-6 h-6 color-green"/>
                <p className="text-gray-600">{feature}</p></li>
              </ul>
            ))}
           </div>
        </div>
          )}
       </div>
      </div>
  );
}

export default Services;
