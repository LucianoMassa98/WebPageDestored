import React, { useEffect, useState } from "react";
import MembersList from "./MembersList";
import bannerMiembros from '../../public/bannerMiembros.webp'; // Asegúrate de que esta ruta sea correcta

const ScrumPage = () => {
  const [membersData, setMemberData] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [filters, setFilters] = useState({
    area: '',
    pais: '',
    rol: ''
  });

  useEffect(() => {
    // URL del archivo Google Sheets en formato JSON
    const url = 'https://docs.google.com/spreadsheets/d/1pkwgZF-9fg2-0VUCA9T4Wmw76rQ_xeJPLeP6mvM4WVM/gviz/tq?tqx=out:json';

    fetch(url)
      .then(response => response.text()) // Leer como texto
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
          imagen: row['URL Imagen Perfil'] || '',
          rol: row['Rol'] || '',
        }));

        setMemberData(formattedMemberData);
        setFilteredMembers(formattedMemberData); // Inicialmente, todos los miembros están filtrados
      })
      .catch(error => console.error('Error al leer la hoja de cálculo:', error));
  }, []);

  // Función para filtrar miembros
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

  return (
    <div className="container mx-auto p-6">
      {/* Banner con capa oscura */}
      <div className="relative">
        <img 
          src={bannerMiembros} 
          alt="Banner Miembros" 
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Capa oscura */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-10">
          <h2 className="text-3xl font-bold mb-4">Miembros de la Red</h2>
          <p className="text-center max-w-3xl mx-auto text-lg">
            Encuentra a los colaboradores de los proyectos de Destored, especializados en transformación digital.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-6">
        <input
          type="text"
          name="area"
          placeholder="Filtrar por área"
          value={filters.area}
          onChange={handleFilterChange}
          className="border p-2 m-2 rounded"
        />
        <input
          type="text"
          name="pais"
          placeholder="Filtrar por país"
          value={filters.pais}
          onChange={handleFilterChange}
          className="border p-2 m-2 rounded"
        />
        <input
          type="text"
          name="rol"
          placeholder="Filtrar por rol"
          value={filters.rol}
          onChange={handleFilterChange}
          className="border p-2 m-2 rounded"
        />
      </div>

      {/* Lista de miembros filtrados */}
      <MembersList members={filteredMembers} />
    </div>
  );
};

export default ScrumPage;
