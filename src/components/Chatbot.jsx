import React, { useState } from "react";
import axios from "axios";
import { BotIcon, X } from "lucide-react"; // Iconos de Lucide

const Chatbot = ({ isChatOpen, setIsChatOpen }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar chatbot

  const sendMessage = async (message) => {
    if (!inputText.trim()) return;

    setMessages((prev) => [...prev, { text: inputText, sender: "user" }]);
    setInputText("");

    try {
      const response = await axios.post(
        "https://chatbot-deepseek-production.up.railway.app/chat",
        { user_message: message },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

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
    <div>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        <BotIcon  size={39}/>
      </button>

      {/* Panel del chatbot */}
      {isOpen && (
        <div className="mt-2 w-[350px] max-h-[500px] flex flex-col bg-gray-800 text-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-purple-700 px-4 py-2">
            <div>
              <h2 className="text-lg font-bold">DestoBot

              <span className="text-xs bg-yellow-400 ml-1 text-black px-2 py-0.5 rounded-full">BETA</span>

              </h2>
              <span className="text-sm text-green-300">🟢 En línea</span>

            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
            

          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-900 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-3 py-2 rounded-lg max-w-xs ${
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

          {/* Input */}
          <div className="flex p-2 bg-gray-800">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage(inputText)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-2 rounded-l-lg text-purple-600 bg-gray-100 focus:outline-none"
            />
            <button
              onClick={() => sendMessage(inputText)}
              className="px-4 bg-purple-700 rounded-r-lg hover:bg-purple-600"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
