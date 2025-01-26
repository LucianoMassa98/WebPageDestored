import ScrumList from "./ScrumList";
import React, { useEffect, useState } from "react";


import bannerScrum from '../../public/equipos.png'
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
          ¿Tienes una visión y estás listo para liderar? En Destored, ofrecemos la oportunidad de formar tu propio equipo y desarrollar proyectos innovadores junto a profesionales de todo el mundo. Colabora con expertos en diversas áreas, convierte tus ideas en realidad y sé parte de algo grande.
        </p>
        <a 
          href="https://forms.gle/dVayVfVRZuiRbuWd6" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-purple-600 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow-md transition duration-200 mt-4"
        >
          Crear Equipo
        </a>
      </div>
    </div>
  </div>

  {/* Título y Descripción de Equipos */}
  <div className="text-center py-6 px-4 sm:px-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">Equipos</h1>
    <p className="text-lg text-gray-600">
      Aquí podrás explorar y contactar equipos que comparten propósitos similares a los tuyos. Ya sea que busques colaborar o invertir, esta es tu oportunidad para unirte a proyectos que se alineen con tus objetivos e intereses.
    </p>
  </div>
</div>


      {/* Lista de Scrums */}
      <ScrumList scrums={scrumData} onSelect={(id) => console.log("Selected:", id)} />
    </div>
  );
};

export default Scrums;
