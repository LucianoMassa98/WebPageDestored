import { useState, useEffect } from "react";

const useDesafiosData = () => {
  const url = 'https://docs.google.com/spreadsheets/d/1oY01BE7D_hyu6VywfRsG1Z1j2Z4A6vK-CNEd8qEbYSE/gviz/tq?tqx=out:json';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [destoDesafios, setDestoDesafios] = useState([]); // Corregido nombre de estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const jsonData = JSON.parse(
          text.replace("/*O_o*/\ngoogle.visualization.Query.setResponse(", "").replace(");", "")
        );

        const headers = jsonData.table.cols.map((col) => col.label);

        const rows = jsonData.table.rows.map((row) => {
          const rowData = {};
          row.c.forEach((cell, index) => {
            if (cell && cell.v) {
              rowData[headers[index]] = cell.v;
            }
          });
          return rowData;
        });

        const formattedDesafios = rows.map((row) => ({
          marcaTemporal: row["Marca temporal"] || "",
          email: row["Dirección de correo electrónico"] || "",
          titulo: row["Nombre del desafío"] || "",
          descripcion: row["Descripción"] || "",
          categoria: row["Categoría "] || "",
          duracion: row["  Duración recomendada  "] || "",
          dificultad: row["  Nivel de dificultad  "] || "",
          requisitos: row["  Requisitos previos (si aplica)  "] || "",
          recompensa: row["¿Qué obtendrán los que lo completen?"] || "",
          enlace: row["Enlace relacionado (opcional)  "] || "",
          nombreAlias: row["  Tu nombre o alias (Opcional)  "] || "",
        }));

        setDestoDesafios(formattedDesafios); // Corregido nombre de estado
        setLoading(false); // Cambio de estado cuando los datos son cargados

      } catch (err) {
        setError("Error al leer la hoja de cálculo: " + err.message); // Captura el error
        setLoading(false); // Cambia el estado de carga al finalizar
      }
    };

    fetchData();
  }, [url]); // Dependencia del URL para recargar los datos si cambia

  return { destoDesafios, loading, error }; // Retorna los datos corregidos
};

export default useDesafiosData;
