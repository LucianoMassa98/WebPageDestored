import ScrumList from "./ScrumList";
import React, { useEffect, useState } from "react";


import bannerScrum from '../../public/equipos.png'
const Scrums = () => {
  const [scrumData, setScrumData] = useState([]);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // URL del archivo Google Sheets en formato JSON
    const url =
      "https://docs.google.com/spreadsheets/d/1QfHKoctasgBnklGKKCaZEzSvs3nby_3eZxV2xq53CT4/gviz/tq?tqx=out:json";

    fetch(url)
      .then((response) => response.text()) // Leer como texto
      .then((text) => {
        // El texto contiene una función JavaScript, por lo que necesitamos extraer la parte de JSON
        const jsonData = JSON.parse(
          text
            .replace("/*O_o*/\ngoogle.visualization.Query.setResponse(", "")
            .replace(");", "")
        );

        // La primera fila (headers) contiene los nombres de las columnas
        const headers = jsonData.table.cols.map((col) => col.label); // Extraemos los nombres de las columnas

        // Los datos de las filas son las filas siguientes en la hoja
        const rows = jsonData.table.rows.map((row) => {
          const rowData = {};
          row.c.forEach((cell, index) => {
            if (cell && cell.v) {
              rowData[headers[index]] = cell.v; // Asignar el valor de la celda con el nombre de la columna
            }
          });
          return rowData;
        });

        // Mapeamos los datos de la fila a la estructura de scrumData
        const formattedscrumData = rows.map((row) => ({
          name: row["Marca temporal"] || "", // Asumimos que la columna 'Genética' tiene el nombre del producto
          tipo: row["Dirección de correo electrónico"] || "",
          title: row["Titulo"] || "",
          description: row["Descripción"] || "",
          urlCta: row["Enlace"] || "",
        }));

        setScrumData(formattedscrumData); // Guardamos los datos formateados en el estado
      })
      .catch((error) => console.error("Error al leer la hoja de cálculo:", error));
  }, []);

  return (
    <div className="scrums mx-auto p-6" id="scrums">
      {/* Banner y Título con Descripción en un solo contenedor */}
<div className="relative mb-6">
  <div className="relative h-auto">
    <img
      src={bannerScrum}
      alt="Banner Scrums"
      className="w-full h-[300px] sm:h-[400px] object-cover"
    />   
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="text-center text-white px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Forma tu Equipo</h1>
        <p className="text-lg max-w-2xl mx-auto mb-4">
        ¿Listo para liderar? En Destored, forma tu equipo, desarrolla proyectos y colabora con expertos en Latam. ¡Haz realidad tu visión!
        
        </p>
        
        {/* Botón Agregarme */}
        <button
          className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => setShowModal(true)}
              >
          Crear Equipo
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
                src="https://docs.google.com/forms/d/e/1FAIpQLSewsb7Ww-yFlmkZ0X30xwUBokfUeqnRwZbgamuis1fPWr8Efg/viewform?embedded=true"
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

  {/* Título y Descripción de Equipos */}
  <div className="text-center py-6 px-4 sm:px-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">Equipos</h1>
    <p className="text-lg text-gray-600">
    Conéctate con equipos afines para colaborar o invertir en proyectos alineados a tus objetivos.
        </p>
  </div>
</div>


      {/* Lista de Scrums */}
      <ScrumList scrums={scrumData} onSelect={(id) => console.log("Selected:", id)} />
    </div>
  );
};

export default Scrums;
