import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Función para enviar el mensaje y recibir la respuesta del bot
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Mensaje del usuario
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      // Enviar el mensaje al servidor a través de la API
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      // Respuesta del bot
      const botReply = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      // En caso de error, mostrar un mensaje genérico
      const botError = { sender: "bot", text: "Lo siento, no pude procesar tu mensaje." };
      setMessages((prev) => [...prev, botError]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante del Chatbot */}
      <button
        className="bg-violet-500 text-white p-3 rounded-full shadow-lg hover:bg-violet-600 transition transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icono de celular */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.75a2 2 0 012 2v16.5a2 2 0 01-2 2H9a2 2 0 01-2-2V3.75a2 2 0 012-2h3z"
          />
        </svg>
      </button>

      {/* Ventana del Chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white w-80 h-96 shadow-xl rounded-lg border border-violet-500 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Encabezado del Chatbot */}
            <div className="bg-violet-500 text-white flex items-center justify-between px-4 py-2">
              <h3 className="text-lg font-semibold">Destored Bot</h3>
              <button
                className="text-white hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Espacio para Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-violet-200 self-end"
                      : "bg-violet-100 self-start"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input para Mensajes */}
            <div className="border-t border-gray-200 bg-white flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border-none px-4 py-2 focus:outline-none"
                placeholder="Escribe tu mensaje aquí..."
              />
              <button
                onClick={sendMessage}
                className="bg-violet-500 text-white px-4 py-2 hover:bg-violet-600"
              >
                Enviar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
