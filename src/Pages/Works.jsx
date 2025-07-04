import React from "react";


const projects = [
  {
    img: "https://dmarket.up.railway.app/logo.webp",
    title: "Digital Market",
    description: "Plataforma en versión Beta dedicada a la compra, venta e intercambio de productos de supermercado, con opciones de retiro o envío. Diseñada para ofrecer una experiencia de usuario intuitiva y segura.",
    link: "https://dmarket.up.railway.app/",
    colaboradores: ["Juan Pérez", "Ana Gómez"]
  },
  {
    img: "work6.png",
    title: "Mcoach",
    description: "Plataforma de coaching profesional enfocada en el desarrollo personal, brindando herramientas y acompañamiento para el crecimiento individual.",
    link: "https://marcocerdera.com/",
    colaboradores: ["Marcos Cerdera"]
  },
  {
    img: "work4.png",
    title: "OFIX",
    description: "Plataforma innovadora para la contratación y oferta de servicios del hogar, diseñada para facilitar procesos rápidos y seguros entre usuarios y proveedores.",
    link: "https://ofix.tech",
    colaboradores: ["Equipo OFIX"]
  },
  {
    img: "https://laliga.up.railway.app/assets/logo-CiF1n9KN.webp",
    title: "Liga de Fútbol Amateur",
    description: "Sistema prototípico para la gestión de torneos de fútbol amateur (Liga Veteranos Del Sur) en San Juan, con funcionalidades para el seguimiento de partidos y estadísticas.",
    link: "https://laliga.up.railway.app/",
    colaboradores: ["Ramiro Massa"]
  },
  {
    img: "work1.png",
    title: "VendePorInsta",
    description: "Optimiza la gestión de tu consultorio odontológico mediante herramientas de marketing digital, permitiendo una mayor visibilidad y eficiencia en la atención.",
    link: "https://vendeporinsta.up.railway.app/",
    colaboradores: ["Paola Díaz"]
  },
  {
    img: "work2.png",
    title: "YMS",
    description: "Sistema integral diseñado para la gestión y comercialización de productos en el sector avícola, ofreciendo soluciones completas para mejorar la operación del negocio.",
    link: "https://yms.up.railway.app/",
    colaboradores: ["Equipo YMS"]
  },
  {
    img: "aconex.webp",
    title: "AConex",
    description: "Plataforma que optimiza la gestión de clínicas, facilitando la interacción entre pacientes y profesionales de manera eficiente y organizada.",
    link: "https://aconex.up.railway.app/login",
    colaboradores: ["Equipo AConex"]
  },
  {
    img: "A todo motor.png",
    title: "A Todo Motor",
    description: "Sistema integral para la gestión de competidores y la organización de rallys, mejorando la experiencia de los participantes y facilitando la administración de eventos.",
    link: "https://atodomotor.up.railway.app/login",
    colaboradores: ["Equipo Rally"]
  },
  {
    img: "work7.png",
    title: "WeedSJ",
    description: "Prototipo de plataforma destinada a la comunidad del cannabis en Argentina, ofreciendo información, foros y espacios de debate sobre el sector.",
    link: "https://weed.destored.org/",
    colaboradores: ["Comunidad WeedSJ"]
  },
  {
    img: "landing.webp",
    title: "Portfolio Contador Público",
    description: "Portfolio profesional de Ramiro Massa, contador público de la Universidad Nacional de San Juan, FACSO, destacando su experiencia y servicios en el ámbito contable.",
    link: "https://portfoliocontador.up.railway.app/",
    colaboradores: ["Ramiro Massa"]
  },
  {
    img: "informes.webp",
    title: "Informe de Ventas",
    description: "Informe básico de ventas, con la capacidad de leer archivos CSV y presentar datos de manera clara y precisa para la toma de decisiones.",
    link: "https://paola.up.railway.app/",
    colaboradores: ["Paola Díaz"]
  },
  {
    img: "work5.png",
    title: "Maqueta - Turismo Rally",
    description: "Plataforma de eCommerce enfocada en hospedaje, gastronomía y eventos para el Rally Safari Tras las Sierras, en Valle Fértil, San Juan, brindando una experiencia completa para los turistas.",
    link: "https://atm.up.railway.app/",
    colaboradores: ["Equipo Rally"]
  },
  {
    img: "work5.png",
    title: "Maqueta - Comunidad Misionera",
    description: "Propuesta visual para una comunidad misionera en San Juan, Argentina, destacando la conexión y el compromiso en la misión de servicio.",
    link: "https://www.figma.com/proto/WGRU7QuG83gf5ckoDJfeFX/Digital-Market?node-id=23-727&p=f&t=DMxg166l3hovLPul-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3",
    colaboradores: ["Comunidad Misionera"]
  }
];


const Works = () => {
  return (
    <div id="products" className="p-2 md:p-4 xl:p-8 bg-gradient-to-b from-indigo-900 to-purple-700 text-white min-h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-black">Destored en Acción</h1>
        <p className="text-sm md:text-base text-gray-300">
          Adéntrate en nuestro universo y explora una amplia gama de productos digitales que hemos desarrollado con pasión y dedicación. ¡Descubre nuestros proyectos y déjate inspirar!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-xl shadow flex flex-row items-center p-2 md:p-3 gap-3 hover:shadow-lg transition-all min-h-[80px] md:min-h-[100px]"
            style={{ minHeight: "70px" }}
          >
            <img
              src={project.img}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
              alt={project.title}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-bold truncate">{project.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm truncate">{project.description}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2">
                <span className="text-[10px] font-semibold text-purple-700">Colaboradores:</span>
                <ul className="flex flex-wrap gap-x-1 text-[10px] text-gray-700">
                  {project.colaboradores && project.colaboradores.map((colab, i) => (
                    <li key={i} className="after:content-[','] last:after:content-['']">{colab}</li>
                  ))}
                </ul>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-600 font-bold underline decoration-dotted hover:text-purple-800 transition-all duration-200 mt-1"
                >
                  ¡Visitar Sitio Web!
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
