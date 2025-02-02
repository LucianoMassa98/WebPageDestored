import React, { useState } from "react";
import { Copy, ChevronDown, ChevronUp } from "lucide-react";
import qrImage from "../../public/qr_ETH.png";

const PaymentSection = () => {
  const [copiedText, setCopiedText] = useState("");
  const [openSection, setOpenSection] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const whatsappMessage = "Comprobante de pago realizado. Aquí está la información.";

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Formas de Pago</h2>
      
      <div className="flex flex-col gap-4">
        {/* Transferencia Bancaria */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank")}
          >
            Transferencia Bancaria (Argentina)
            {openSection === "bank" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank" && (
            <div className="mt-2">
              <p className="text-gray-600">Banco: <span className="font-semibold">Galicia</span></p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">0070112530004219242108</span>
                <button
                  onClick={() => copyToClipboard("0070112530004219242108")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">Titular: <span className="font-semibold">Luciano Gaston Massa Iribarren</span></p>
              <p className="text-gray-600">Monto: <span className="font-semibold text-purple-700">$52,000 ARS</span></p>

              {/* Botón Compartir Comprobante */}
              <a
                href={`https://wa.me/5492644631495?text=${encodeURIComponent(whatsappMessage)}`}
                className="mt-4 px-6 py-3 bg-purple-700 text-white text-center font-semibold rounded-lg hover:bg-purple-800 mx-auto block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Compartir comprobante
              </a>
            </div>
          )}
        </div>
        
        {/* Pago en USDT */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("usdt")}
          >
            Pago con USDT (Red ERC20)
            {openSection === "usdt" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "usdt" && (
            <div className="mt-2">
              <img src={qrImage} alt="QR Code para pago USDT" className="w-32 mx-auto" />
              <p className="text-gray-600">
                Dirección USDT: <span className="font-mono text-purple-700 break-all">0x7874A8178785890261E81Bef2760b5D4c97535C4</span>
                <button
                  onClick={() => copyToClipboard("0x7874A8178785890261E81Bef2760b5D4c97535C4")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">Monto: <span className="font-semibold text-purple-700">50 USDT</span></p>
              <p className="text-red-600 font-semibold mt-2">🚨 Recuerda: solo utiliza la red ERC20 para transferencias. Usar otra red podría ocasionar la pérdida de fondos.</p>

              {/* Botón Compartir Comprobante */}
              <a
                href={`https://wa.me/5492644631495?text=${encodeURIComponent(whatsappMessage)}`}
                className="mt-4 px-6 py-3 bg-purple-700 text-white text-center font-semibold rounded-lg hover:bg-purple-800 mx-auto block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Compartir comprobante
              </a>
            </div>
          )}
        </div>
        
        {/* Atención Asistida */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("support")}
          >
            Atención de un Asistente de Ventas
            {openSection === "support" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "support" && (
            <div className="mt-2">
              <p className="text-gray-600">Si necesitas asistencia personalizada, contáctanos por WhatsApp.</p>
              <a
                href="https://wa.me/5492644631495"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 block text-center"
              >
                Chatear con un Asesor
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Mensaje de Copiado */}
      {copiedText && (
        <p className="text-green-600 text-center mt-4">¡Copiado al portapapeles: {copiedText}!</p>
      )}
    </section>
  );
};

export default PaymentSection;
