import ScrumList from "./ScrumList";
import React, { useEffect, useState } from "react";


import bannerScrum from '../../public/bannerScrums.jpg'
const Scrums = () => {
  const [scrumData, setScrumData] = useState([]);

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
          title: row["title"] || "",
          description: row["description"] || "",
          urlCta: row["urlCta"] || "",
          openSpots: row["openSpots"] || "",
        }));

        setScrumData(formattedscrumData); // Guardamos los datos formateados en el estado
      })
      .catch((error) => console.error("Error al leer la hoja de cálculo:", error));
  }, []);

  return (
    <div className="scrums mx-auto p-6" id="scrums">
      {/* Banner con capa gris y botón */}
      <div className="relative mb-6">
        <div className="bg-gray-800 relative h-60">
          <img
            src={bannerScrum}
            alt="Banner Scrums"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Equipos Abiertos</h1>
              <p className="text-lg max-w-2xl mx-auto mb-4">
                Únete y/o crea equipos para proyectos innovadores y colabora con profesionales de todas partes.
              </p>
              <a 
    href="https://forms.gle/dVayVfVRZuiRbuWd6" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-purple-600 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow-md transition duration-200 mt-4 text-center"
  >
    Agregar Equipo
  </a>
            </div>
          </div>
        </div>
      </div>

      {/* Título y descripción */}
      <h1 className="text-3xl font-bold text-center mb-6">Scrums Abiertos</h1>
      <p className="text-lg text-center text-gray-600 mb-4">
        Aquí podrás colaborar con profesionales de diferentes áreas, impulsar proyectos
        innovadores y fortalecer tu red de contactos. ¡Descubre oportunidades únicas para
        crecer profesionalmente!
      </p>

      {/* Lista de Scrums */}
      <ScrumList scrums={scrumData} onSelect={(id) => console.log("Selected:", id)} />
    </div>
  );
};

export default Scrums;
