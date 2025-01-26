import React from "react";

const DestoredInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80vw] mx-auto mt-8">
      <h1 className="text-[40px] text-center font-black font-bold mb-4">
        Tu puente hacia la transformación digital
      </h1>
      <p className="text-gray-600 text-justify mb-6 text-lg text-center">
        En Destored conectamos a pequeños y medianos negocios con soluciones
        innovadoras para potenciar su crecimiento en la era digital.
      </p>
     

      {/* Cards for each item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          {
            imgSrc: "prueba1.jpg",
            imgAlt: "Planes Personalizados",
            title: "Planes Personalizados",
            description:
              "Soluciones adaptadas a tus necesidades, desde formación hasta estrategias avanzadas.",
          },
          {
            imgSrc: "prueba2.jpg",
            imgAlt: "Red de Expertos",
            title: "Red de Expertos",
            description:
              "Acceso a profesionales calificados en desarrollo, marketing y tecnología.",
          },
          {
            imgSrc: "prueba3.jpg",
            imgAlt: "Capacitación y Soporte",
            title: "Capacitación y Soporte",
            description:
              "Preparamos a tu equipo y garantizamos asistencia técnica continua.",
          },
          {
            imgSrc: "prueba4.jpg",
            imgAlt: "Resultados Medibles",
            title: "Resultados Medibles",
            description:
              "Generamos impacto directo en productividad, ventas y alcance digital.",
          },
        ].map(({ imgSrc, imgAlt, title, description }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-40 object-cover"
              src={imgSrc}
              alt={imgAlt}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0%, 100% 80%, 75% 100%, 25% 100%, 0% 80%, 0% 0%)",
              }}
            />
            <h3 className="text-xl font-semibold text-purple-600 mt-4 text-center">
              {title}
            </h3>
            <p className="text-gray-600 text-center mt-2">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestoredInfo;
