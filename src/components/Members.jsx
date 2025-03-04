import React, { useEffect, useState } from "react";
import MembersList from "./MembersList";
import bannerMiembros from '../../public/miembros.jpg'; // Asegúrate de que esta ruta sea correcta
import { RiStarFill } from "react-icons/ri";

import RegisterModal from "./ProjectFormModal";
const Members = () => {
  const [membersData, setMemberData] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [filters, setFilters] = useState({
    area: '',
    pais: '',
    rol: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 3; // Para que solo se muestren 3 miembros por página
  const [areaOptions, setAreaOptions] = useState([]);
  const [paisOptions, setPaisOptions] = useState([]);
  const [rolOptions, setRolOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const url = 'https://docs.google.com/spreadsheets/d/1pkwgZF-9fg2-0VUCA9T4Wmw76rQ_xeJPLeP6mvM4WVM/gviz/tq?tqx=out:json';

    fetch(url)
      .then(response => response.text())
      .then(text => {
        const jsonData = JSON.parse(text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').replace(');', ''));
        const headers = jsonData.table.cols.map(col => col.label);
        const rows = jsonData.table.rows.map(row => {
          const rowData = {};
          row.c.forEach((cell, index) => {
            if (cell && cell.v) {
              rowData[headers[index]] = cell.v;
            }
          });
          return rowData;
        });

        const formattedMemberData = rows.map(row => ({
          createdAt: row['Marca temporal'] || '',
          correo: row['Dirección de correo electrónico'] || '',
          nombre: row['Nombre y Apellido'] || '',
          presentacion: row['Presentación'] || '',
          pais: row['País'] || '',
          area: row['Área'] || '',
          linkedin: row['URL Linkedin'] || '',
          porfolio: row['URL Porfolio'] || '',
          desafio: row['DesafioDesto'] || '',
          imagen: row['URL Imagen Perfil'] || '',
          rol: row['Rol'] || '',
        }));

        setMemberData(formattedMemberData);
        setFilteredMembers(formattedMemberData);

        // Obtener opciones únicas de área, país y rol
        setAreaOptions([...new Set(formattedMemberData.map(member => member.area))]);
        setPaisOptions([...new Set(formattedMemberData.map(member => member.pais))]);
        setRolOptions([...new Set(formattedMemberData.map(member => member.rol))]);
      })
      .catch(error => console.error('Error al leer la hoja de cálculo:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters, [name]: value };
      const filtered = membersData.filter(member => {
        return (
          (updatedFilters.area ? member.area.toLowerCase().includes(updatedFilters.area.toLowerCase()) : true) &&
          (updatedFilters.pais ? member.pais.toLowerCase().includes(updatedFilters.pais.toLowerCase()) : true) &&
          (updatedFilters.rol ? member.rol.toLowerCase().includes(updatedFilters.rol.toLowerCase()) : true)
        );
      });
      setFilteredMembers(filtered);
      return updatedFilters;
    });
  };

  const paginateMembers = () => {
    const startIndex = (currentPage - 1) * membersPerPage;
    const endIndex = startIndex + membersPerPage;
    return filteredMembers.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage); // Calcula el total de páginas

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="members mx-auto p-6" id="members">
      {/* Banner con capa oscura y diseño responsivo */}
      <div className="relative w-full">
        <div
          className="relative flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerMiembros})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center text-white px-4 py-6 sm:py-10">
            <h2 className="text-3xl font-bold mb-4">Profesionales Digitales</h2>
            <p className="text-lg max-w-3xl mx-auto mb-4">
              Regístrate gratis como miembro de la comunidad y destaca en una comunidad en constante crecimiento.
            </p>

            <div className="flex flex-col items-center">
             {/* Botón Agregarme */}
            <button
          className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowModal(true)}
              >
          Registrarme
        </button>

               {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdhwM7vfVmMAVx_1R8xUSSnYGOOijKpFASJo--Om2hU2QKaQg/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title="Formulario de Google"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        )}
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-semibold mt-12">Perfiles: {membersData.length}</h1>
        <h3 className="text-xl font-semibold mt-6">Filtrar por</h3>
        <div className="flex flex-wrap justify-center">
          <select
            name="area"
            value={filters.area}
            onChange={handleFilterChange}
            className="border p-2 m-2 rounded w-60"
          >
            <option value="">Selecciona un área</option>
            {areaOptions.map((area, index) => (
              <option key={index} value={area}>{area}</option>
            ))}
          </select>

          <select
            name="pais"
            value={filters.pais}
            onChange={handleFilterChange}
            className="border p-2 m-2 rounded w-60"
          >
            <option value="">Selecciona un país</option>
            {paisOptions.map((pais, index) => (
              <option key={index} value={pais}>{pais}</option>
            ))}
          </select>

          <select
            name="rol"
            value={filters.rol}
            onChange={handleFilterChange}
            className="border p-2 m-2 rounded w-60"
          >
            <option value="">Selecciona un rol</option>
            {rolOptions.map((rol, index) => (
              <option key={index} value={rol}>{rol}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de miembros filtrados */}
      <MembersList members={paginateMembers()} />

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="bg-gray-500 text-white py-2 px-6 rounded-l-md disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="bg-gray-500 text-white py-2 px-6 rounded-r-md disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Members;
