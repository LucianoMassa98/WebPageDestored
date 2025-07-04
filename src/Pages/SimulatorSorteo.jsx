import React, { useEffect, useState } from "react";

const SimulatorSorteo = () => {
  const [membersData, setMembersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const url = 'https://docs.google.com/spreadsheets/d/1qAVk34xPBeH3IYFR2iSglT4O6njkfsVVoWYqfRBceWg/gviz/tq?tqx=out:json';
    
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const jsonData = JSON.parse(text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').replace(');', ''));
        const rows = jsonData.table.rows.map(row => ({
          nombre: row.c[1]?.v || "Desconocido",
          usuario: row.c[0]?.v || "Anonimo"
        }));
        setMembersData(rows);
      })
      .catch(error => console.error('Error al leer la hoja de cálculo:', error));
  }, []);

  const handleSortear = () => {
    if (membersData.length < 5) {
      alert("No hay suficientes participantes para el sorteo.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const shuffled = [...membersData].sort(() => Math.random() - 0.5);
      setWinners(shuffled.slice(0, 5));
      setLoading(false);
    }, 3000); // Animación y sorteo de 3 segundos
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Simulación de Sorteo!</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        onClick={handleSortear}
        disabled={loading}
      >
        {loading ? "Realizando Sorteo..." : "Sortear Ganadores"}
      </button>

      {loading && (
        <div className="mt-4 flex items-center gap-2 text-gray-700 animate-pulse">
          <span className="text-lg">🌀</span>
          <span>Selección en progreso...</span>
        </div>
      )}

      {!loading && winners.length > 0 && (
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold text-gray-700">Ganadores:</h3>
          <ul className="mt-2 list-disc pl-6">
            {winners.map((winner, index) => (
              <li key={index} className="text-gray-800 font-medium py-1">
               
               <a href={`https://www.instagram.com/${winner.usuario}`} className="font-bold" target="_blank" rel="noopener noreferrer">
                  {index + 1}. {winner.usuario}
                </a>              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimulatorSorteo;
