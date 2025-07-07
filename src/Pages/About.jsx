import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import React from 'react';
import imgVision from '../../public/vision.png';

const About = () => {
  return (
    <div id="aboutUs" className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre Destored
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Una comunidad que conecta talento, tecnología e innovación en Latinoamérica
          </p>
        </div>
      </div>

      {/* Nosotros Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 p-4 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Nosotros</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-blue-200 shadow-xl">
                  <img 
                    src="https://avatars.githubusercontent.com/u/104081998?v=4" 
                    alt="Luciano Massa - Cofundador de Destored" 
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy Luciano "Lucho" Massa, cofundador de Destored, y junto a un equipo de personas increíbles decidimos crear este proyecto con una premisa clara: <span className="font-semibold text-blue-600">el futuro de la tecnología será impulsado por la inteligencia artificial, y ese futuro va a necesitar personas capacitadas</span>, no solo en cantidad, sino con verdadera capacidad.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoy hay una sobreoferta de profesionales digitales, pero escasean quienes logran adaptarse a entornos donde la innovación, la automatización y el talento multidisciplinario conviven. Por eso, en Destored creemos que la única forma de resolverlo es a través de una <span className="font-semibold text-purple-600">red inteligente de profesionales</span>, donde cada contrato con la red no solo garantiza resultados, sino que protege tu inversión conectándote con las personas correctas para tu proyecto.
              </p>
            </div>
          </div>
          
          <div className="mt-12 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nacimos con la visión de crear una herramienta que permita a personas y organizaciones diseñar, desarrollar y distribuir software y datos de manera descentralizada. Queremos que cualquier persona con una buena idea pueda llevarla a la práctica con los recursos adecuados y profesionales preparados.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Hoy Destored es mucho más que una empresa. Es una <span className="text-blue-600 font-bold">comunidad abierta de desarrolladores, creativos, marketers y profesionales digitales de 7 países de Latinoamérica</span>, nacida en San Juan, Argentina, y en constante expansión. Estamos conectados por la convicción de que el futuro se construye desde el talento colectivo y la innovación aplicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Image Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative max-w-full w-full md:max-w-[600px] mx-auto">
            <img src={imgVision} alt="Destored en San Juan, Argentina" className="rounded-2xl w-full h-auto shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg">
            San Juan, Argentina 2023 · 21 septiembre
          </p>
          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              En 2024, conectamos con más de 300 profesionales digitales de 7 países diferentes en América 🌎
            </h3>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 p-4 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Nuestra Misión</h2>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-center gap-4 mb-6">
              <span className="text-5xl text-purple-800">
                <RiDoubleQuotesL />
              </span>
              <p className="max-w-4xl text-center text-lg text-gray-700 leading-relaxed">
                Nuestra misión es impulsar a personas y negocios a alcanzar su máximo potencial digital, brindando soluciones tecnológicas y publicitarias estratégicas, junto con formación profesional a través de un ecosistema automático, colaborativo, flexible y sostenible.
              </p>
              <span className="text-5xl text-purple-800">
                <RiDoubleQuotesR />
              </span>
            </div>
            <p className="text-center text-lg text-gray-600 italic">
              Apostamos a convertirnos en un puente entre ideas y resultados tangibles, generando oportunidades reales para quienes deciden transformar su presente a través de la tecnología y la creatividad.
            </p>
          </div>
        </div>
      </section>

      {/* Modelo de Negocio Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 p-4 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zm-5-7c0-1.66-1.34-3-3-3S8 10.34 8 12s1.34 3 3 3 3-1.34 3-3z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Nuestro Modelo de Negocio</h2>
          </div>
          
          <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            En Destored operamos bajo un modelo híbrido que combina servicios profesionales y formación de talento digital:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Soluciones Digitales */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Soluciones digitales a medida</h3>
              <p className="text-gray-700 leading-relaxed">
                Diseñamos, desarrollamos y mantenemos aplicaciones web, plataformas de gestión, ecommerce y herramientas específicas para empresas y proyectos que buscan optimizar sus operaciones digitales.
              </p>
            </div>
            
            {/* Consultoría */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L12 9.33 9.41 11.92 6 8.5 4.59 9.91 9.41 14.73 12 12.17l8.5 8.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultoría y gestión publicitaria</h3>
              <p className="text-gray-700 leading-relaxed">
                Gestionamos campañas de marketing digital, branding, estrategia de contenidos y generación de leads a través de nuestro laboratorio creativo AdLab.
              </p>
            </div>
            
            {/* Formación */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Formación y profesionalización</h3>
              <p className="text-gray-700 leading-relaxed">
                Capacitamos, preparamos y entrenamos equipos internos para clientes y talentos independientes, integrándolos a proyectos reales dentro de Destored y su red de clientes, asegurando experiencia práctica y oportunidades laborales concretas.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Este enfoque nos permite generar valor no solo para nuestros clientes, sino también para nuestra comunidad de profesionales, fomentando un entorno donde <span className="font-semibold text-gray-800">el conocimiento, las oportunidades y los negocios crecen de forma conjunta</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;