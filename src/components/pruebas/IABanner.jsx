import React, { useState } from 'react';

import ExpandableList from "./ExpandableList"
import Chatbot from "../Chatbot"


const IABanner = () => {

  const problemas = [
    {
      title: 'Integración de IA con sistemas de acceso tradicionales',
      content: 'Los sistemas estructurados, basados en protocolos de seguridad humanos y artificiales, pueden no ser fácilmente compatibles con soluciones de IA.',
    },
    {
      title: 'Desafíos en la interpretación de datos desestructurados',
      content: 'La IA necesita analizar datos desestructurados, como textos escritos en lenguaje humano, que pueden ser ambiguos o mal estructurados.',
    },
    {
      title: 'Seguridad en la IA',
      content: 'Las IA pueden ser vulnerables a ataques como el envenenamiento de datos o el sesgo algorítmico, lo que requiere medidas adicionales de seguridad.',
    },
    {
      title: 'Complejidad en el manejo de la privacidad de los datos',
      content: 'El procesamiento de datos sensibles, como conversaciones, requiere cumplir con regulaciones como el GDPR.',
    },
    {
      title: 'Gestión de permisos y autenticación',
      content: 'Los sistemas asistidos por IA pueden complicar la gestión de permisos de acceso.',
    },
    {
      title: 'Desafíos de interoperabilidad',
      content: 'Los datos desestructurados generados por la IA pueden provenir de diferentes fuentes y utilizar varios lenguajes y formatos.',
    },
    {
      title: 'Auditoría y trazabilidad',
      content: 'Los programadores deben implementar soluciones de trazabilidad para asegurar la transparencia en las acciones de la IA.',
    },
  ];

  const beneficios = [
    {
      title: "Base de conocimientos compartida",
      content: "El Hub proporciona un espacio donde se comparten y mejoran bases de conocimiento entre partners, lo que permite que tu chatbot se entrene con una gran cantidad de datos y escenarios reales. Esto optimiza la capacidad del chatbot para responder con precisión y agilidad a diferentes consultas.",
    },
    {
      title: "Soporte y herramientas exclusivas",
      content: "Al ser parte de nuestro Partner Hub, tendrás acceso a herramientas de desarrollo avanzadas y soporte especializado en IA y chatbots, que simplificarán la creación y optimización de soluciones basadas en IA para tus clientes.",
    },
    {
      title: "Colaboración constante",
      content: "Trabaja en conjunto con otros desarrolladores y expertos, donde puedes compartir mejores prácticas, aprender nuevas técnicas y colaborar en proyectos comunes para mejorar las capacidades de tus chatbots.",
    },
    {
      title: "Escalabilidad y flexibilidad",
      content: "Nuestro Hub te permite acceder a recursos técnicos escalables, lo que te permite crear chatbots que se adaptan fácilmente a las necesidades cambiantes de tus clientes, ya sea en términos de volumen de usuarios o de funcionalidades adicionales.",
    },
    {
      title: "Oportunidades de negocio",
      content: "Al ser parte del Destored Partner Hub, tendrás la posibilidad de acceder a oportunidades comerciales exclusivas, como nuevos clientes, proyectos colaborativos y la posibilidad de formar parte de una red de expertos en IA y chatbots.",
    },
  ];

  const oportunidades = [
    {
      title: "Optimización de la integración IA-sistemas tradicionales",
      content: "Desarrollar soluciones híbridas que faciliten la compatibilidad entre la IA y los protocolos de seguridad estructurados, mejorando la eficiencia sin comprometer la seguridad.",
    },
    {
      title: "Mejor interpretación de datos desestructurados",
      content: "Implementar algoritmos avanzados de procesamiento de lenguaje natural (NLP) que permitan a la IA comprender mejor los datos ambiguos y mejorar su precisión.",
    },
    {
      title: "Fortalecimiento de la seguridad en IA",
      content: "Crear modelos de IA más resilientes contra ataques, aplicando técnicas de seguridad como aprendizaje adversarial y detección de anomalías en tiempo real.",
    },
    {
      title: "Cumplimiento de normativas de privacidad",
      content: "Desarrollar soluciones de procesamiento de datos que cumplan con regulaciones como GDPR, garantizando privacidad sin comprometer la funcionalidad de la IA.",
    },
    {
      title: "Gestión avanzada de permisos y autenticación",
      content: "Integrar sistemas de identidad digital basados en blockchain y autenticación multifactor para una gestión más segura y flexible de los permisos de acceso.",
    },
    {
      title: "Interoperabilidad entre sistemas de IA",
      content: "Desarrollar estándares abiertos y APIs unificadas que permitan la comunicación eficiente entre diferentes sistemas de IA y fuentes de datos.",
    },
    {
      title: "Mejora en auditoría y trazabilidad de IA",
      content: "Implementar soluciones de trazabilidad basadas en blockchain para garantizar transparencia y confianza en las acciones tomadas por sistemas de IA.",
    },
  ];


  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Título */}
      <h2 className="text-4xl font-extrabold mb-6 text-center">Futuro de la programación con IA</h2>

      {/* Párrafo */}
      <p className="text-lg mb-6 leading-relaxed text-center">
      El acceso a los sistemas será cada vez más asistido por IA, permitiendo interpretar y procesar datos desestructurados provenientes de la diversidad de lenguajes humanos. 
      Al mismo tiempo, las organizaciones seguirán implementando sistemas de acceso estructurados, respaldados por protocolos de seguridad tanto humanos como artificiales.
      </p>

      
      <div>
      <ExpandableList 
        titulo="Problemas" 
        descripcion="" 
        items={problemas} 
      />
    </div>
    <div>
      <ExpandableList 
        titulo="Oportunidades" 
        descripcion="" 
        items={oportunidades} 
      />
    </div>
    <div>
      <ExpandableList 
        titulo="Ventajas Exclusivas de Destored Partner Hub" 
        descripcion="Accede al Destored Partner Hub y aprovecha las siguientes ventajas exclusivas para optimizar el desarrollo de tus soluciones basadas en IA." 
        items={beneficios} 
      />
    </div>



      {/* Conclusión */}
      <p className="text-lg font-semibold text-center mt-4">
  Accede ahora al  
  <a 
    href="/partnerhub" 
    className="ml-1 px-1 py-1 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-white mr-1"
  >
    Partner Hub
  </a> 
   y transforma tu capacidad de ofrecer soluciones inteligentes y personalizadas que mejoren la experiencia del cliente mientras maximizas la eficiencia de tus operaciones. ¡La oportunidad está a tu alcance!
</p>





      <Chatbot/>



    </div>
  );
};

export default IABanner;
