import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {

  
  const [messages, setMessages] = useState([]); // Almacena el historial de mensajes
  const [inputText, setInputText] = useState(""); // Almacena el mensaje actual del usuario

  // Función para enviar el mensaje al backend
  const sendMessage = async (message) => {
    if (!inputText.trim()) return; // Evita enviar mensajes vacíos

    // Añade el mensaje del usuario al historial
    setMessages((prev) => [...prev, { text: inputText, sender: "user" }]);
    setInputText(""); // Limpia el input

    try {
      // Envía el mensaje al backend
      const response =await axios.post('https://chatbot-deepseek-production.up.railway.app/chat', { user_message: message }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      

      // Añade la respuesta del chatbot al historial
      setMessages((prev) => [
        ...prev,
        { text: response.data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Hubo un error al procesar tu mensaje.", sender: "bot" },
      ]);
    }
  };

  return (

    <div className="flex flex-col max-w-full sm:max-w-md lg:max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-6">
    {/* Cabecera del chatbot */}
    <div className="bg-purple-700 text-white p-4">
      <h2 className="text-lg font-semibold">Chatbot de Destored</h2>
    </div>
  
    {/* Área de mensajes */}
    <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
        >
          <span
            className={`inline-block px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-purple-700 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  
    {/* Input y botón de enviar */}
    <div className="flex p-4 bg-gray-800">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage(inputText)}
        placeholder="Escribe tu mensaje..."
        className="flex-1 p-2 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-500"
      />
      <button
        onClick={() => sendMessage(inputText)}  // Llamada de la función en referencia
        className="px-4 bg-purple-700 text-white rounded-r-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Enviar
      </button>
    </div>
  </div>
  
  );
};

export default Chatbot;
