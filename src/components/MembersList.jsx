import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const MembersList = ({ members }) => {
  const getPlaceholderImage = () =>
    "https://via.placeholder.com/200?text=No+Profile+Picture";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center"
        >
          {/* Imagen de Perfil */}
          <img
            src={member.imagenUrl || getPlaceholderImage()} // Usa imagenUrl o placeholder
            alt={`${member.nombre} ${member.apellido}`}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />
          {/* Nombre del Miembro */}
          <h3 className="text-lg font-semibold text-center mb-2">
            {member.nombre} {member.apellido}
          </h3>
          {/* Iconos de LinkedIn y Correo */}
          <div className="mt-auto flex space-x-4">
            {member.urlLinkedin && (
              <a
                href={member.urlLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {member.correo && (
              <a
                href={`mailto:${member.correo}`}
                className="text-gray-700"
                title="Enviar Correo"
              >
                <FaEnvelope size={24} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
