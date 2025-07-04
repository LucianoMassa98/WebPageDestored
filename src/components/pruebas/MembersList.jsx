import React from "react";
import { FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

import perfilGenerico from '../../public/perfil.webp'

import { RiStarFill } from "react-icons/ri";

const MembersList = ({ members }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center"
        >
          {/* Imagen de Perfil */}
          <img
            src={member.imagen || perfilGenerico} // Usa imagen o placeholder
            alt={`${member.nombre}`}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />

          {/* Nombre del Miembro */}
          <h3 className="text-lg font-semibold text-center mb-1">
            {member.nombre}
          </h3>

          {/* País y Área */}
          <p className="text-sm text-gray-500 text-center">
            {member.pais} • {member.area} • {member.rol}
          </p>

          {/* Presentación */}
          {member.presentacion && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              "{member.presentacion}"
            </p>
          )}


           {/* DesafioDesto */}
           <div style={{ display: 'flex', alignItems: 'center', color: '#6A1B9A', gap: '4px' }}>
  {member.desafio && (
    <>
      {member.desafio} <RiStarFill size={24} />
    </>
  )}
</div>


          {/* Enlaces */}
          <div className="mt-auto flex space-x-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
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
            {member.porfolio && (
              <a
                href={member.porfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600"
                title="Portafolio"
              >
                <FaGlobe size={24} />
              </a>
            )}
          </div>


        </div>
      ))}
    </div>
  );
};

export default MembersList;
