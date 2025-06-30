import React, { useState } from "react";
import { FaWhatsapp, FaRegCalendarAlt, FaWpforms } from "react-icons/fa";

// Array con la información de cada TeachLeader
const teachLeadersData = [
  {
    nombre: "Juan Pérez",
    pais: "Argentina",
    whatsapp: "+5491112345678",
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdEjemplo1/viewform?embedded=true",
    googleCalendar: "https://calendar.google.com/calendar/embed?src=ejemplo1%40gmail.com&ctz=America%2FArgentina%2FBuenos_Aires",
    estado: "Activo",
    email: "juan.perez@example.com",
    fechaCreacion: "2023-01-15",
    imagen: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    nombre: "María Gómez",
    pais: "México",
    whatsapp: "+525512345678",
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdEjemplo2/viewform?embedded=true",
    googleCalendar: "https://calendar.google.com/calendar/embed?src=ejemplo2%40gmail.com&ctz=America%2FMexico_City",
    estado: "inactivo",
    email: "maria.gomez@example.com",
    fechaCreacion: "2022-12-20",
    imagen: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

// Filtrar solo los TeachLeaders activos
const activeTeachLeaders = teachLeadersData.filter(leader => leader.estado === "Activo");

const TeachLeadersPage = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sección de presentación con imagen de fondo */}
      <div className="relative w-full h-80">
        <img
          src="/vision.png"
          alt="TeachLeaders Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-white">TeachLeaders de Destored</h1>
          <p className="text-lg text-gray-300 max-w-2xl mt-2">

          Los TeachLeaders de Destored son expertos que te guiarán en tu transformación digital. Conéctate con ellos, accede a sus agendas y aprovecha su experiencia para impulsar tu proyecto. Además, con tu membresía en DestHub, tendrás acceso a herramientas, documentación y recursos exclusivos para acelerar tu crecimiento.
          </p>
        </div>
      </div>

      {/* Lista de TeachLeaders */}
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTeachLeaders.map((leader, index) => (
          <div key={index} className="bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg rounded-lg p-6 relative">
            {/* Imagen de perfil con el logo de Destored */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={leader.imagen}
                alt={leader.nombre}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <img
                src="Logo Destored.svg"
                alt="Destored Logo"
                className="absolute bottom-0 right-14 w-12 h-12 bg-transparent rounded-full shadow-md"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white text-center">{leader.nombre}</h2>
            <p className="text-gray-300 text-center"><strong>País:</strong> {leader.pais}</p>
            <p className="text-gray-300 text-center"><strong>Email:</strong> {leader.email}</p>
            <p className="text-gray-300 text-center"><strong>Fecha de Creación:</strong> {leader.fechaCreacion}</p>

            <div className="mt-4 flex flex-col items-center gap-3">
              <a
                href={`https://wa.me/${leader.whatsapp.replace(/\D/g, '')}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20TeachLeader%20de%20Destored.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <FaWhatsapp className="text-xl" /> Contactar por WhatsApp
              </a>
              <button
                className="bg-gradient-to-br from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all"
                onClick={() => setModalContent({ title: `Formulario de ${leader.nombre}`, url: leader.googleForm })}
              >
                <FaWpforms className="text-xl" /> Ver Formulario
              </button>
              <button
                className="bg-gradient-to-br from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all"
                onClick={() => setModalContent({ title: `Agenda de ${leader.nombre}`, url: leader.googleCalendar })}
              >
                <FaRegCalendarAlt className="text-xl" /> Ver Agenda
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-purple-400">{modalContent.title}</h2>
              <button
                className="text-red-400 text-lg font-bold hover:text-red-500"
                onClick={() => setModalContent(null)}
              >
                ✕
              </button>
            </div>
            <iframe
              src={modalContent.url}
              title={modalContent.title}
              className="w-full h-96 border border-purple-400 rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachLeadersPage;
