import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BotIcon, Send, Sparkles } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! 👋 Soy DestoBot, tu asistente virtual de Destored. Estoy aquí para contarte todo sobre nuestros servicios y cómo podemos ayudarte a llevar tu negocio al siguiente nivel. ¿En qué te puedo ayudar hoy?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const messagesEndRef = useRef(null);
  const messagesAreaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesAreaRef.current?.scrollTo({ top: 0, behavior: "instant" });
  };

  // Efecto para la carga inicial - scroll hacia arriba
  useEffect(() => {
    if (isInitialLoad) {
      scrollToTop();
      setIsInitialLoad(false);
    }
  }, [isInitialLoad]);

  // Efecto para scroll automático en nuevos mensajes
  useEffect(() => {
    if (!isInitialLoad && messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isInitialLoad]);

  const quickResponses = [
    "¿Qué servicios ofrecen?",
    "¿Cómo pueden ayudar a mi empresa?",
    "Quiero conocer sus precios",
    "¿Tienen experiencia en mi sector?"
  ];

  const sendMessage = async (message) => {
    const messageToSend = message || inputText;
    if (!messageToSend.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { text: messageToSend, sender: "user", timestamp }]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://chatbot-deepseek-production.up.railway.app/chat",
        { user_message: messageToSend },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { 
            text: response.data.response, 
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
        ]);
      }, 1000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { 
          text: "Disculpa, hay un problema técnico. Por favor intenta nuevamente o contáctanos directamente.", 
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <BotIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white flex items-center">
                  DestoBot
                  <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
                </h1>
                <p className="text-purple-200 text-sm">Tu asistente virtual de Destored</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-green-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">En línea</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 h-full flex flex-col">
          
          {/* Messages Area */}
          <div 
            ref={messagesAreaRef}
            className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 max-h-[60vh] md:max-h-[70vh]"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div className={`max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                  {msg.sender === "bot" && (
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <BotIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-purple-200">DestoBot</span>
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-sm"
                        : "bg-white/20 text-white rounded-bl-sm backdrop-blur-sm"
                    } shadow-lg`}
                  >
                    <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-purple-100" : "text-purple-200"}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <BotIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-purple-200">DestoBot está escribiendo...</span>
                  </div>
                  <div className="bg-white/20 text-white rounded-2xl rounded-bl-sm backdrop-blur-sm px-4 py-3 shadow-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="px-4 md:px-6 py-2">
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(response)}
                  className="px-3 py-1 text-xs md:text-sm bg-white/10 hover:bg-white/20 text-purple-100 rounded-full border border-white/20 transition-all duration-200 hover:scale-105"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 md:p-6 border-t border-white/20">
            <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-2 backdrop-blur-sm border border-white/20">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe tu mensaje sobre Destored..."
                className="flex-1 bg-transparent text-white placeholder-purple-200 outline-none px-3 py-2 text-sm md:text-base"
                disabled={isTyping}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!inputText.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-purple-200 mt-2 text-center">
              Pregúntame sobre nuestros servicios, experiencia y cómo podemos ayudar a tu negocio
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/5 backdrop-blur-md border-t border-white/20 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-200 text-sm">
            Powered by <span className="font-bold text-white">Destored</span> - Transformando ideas en soluciones digitales
          </p>
        </div>
      </div>

      {/* Estilos CSS adicionales para las animaciones */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }

          /* Scrollbar personalizado */
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }

          .overflow-y-auto::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }

          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: rgba(147, 51, 234, 0.5);
            border-radius: 3px;
          }

          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(147, 51, 234, 0.7);
          }

          /* Responsive text scaling */
          @media (max-width: 640px) {
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
