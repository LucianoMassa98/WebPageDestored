import React, { useState } from "react";
import { Copy } from "lucide-react";

// Aquí puedes importar el QR desde una URL o desde un archivo local
import qrImage from "../../public/qr_ETH.png"; // Cambia esta ruta por la ubicación del QR generado

const PaymentSection = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Clear the "copied" status after 2 seconds
  };

  // Mensaje común para WhatsApp
  const whatsappMessage = "Comprobante de pago realizado. Aquí está la información.";

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Formas de Pago</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Transferencia Bancaria */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Transferencia Bancaria (Argentina)</h3>
          <p className="text-gray-600">
            Banco: <span className="font-semibold">Galicia</span>
          </p>
          <p className="text-gray-600">
            CBU:{" "}
            <span className="font-mono text-purple-700 break-all">
              0070112530004219242108
            </span>
            <button
              onClick={() => copyToClipboard("0070112530004219242108")}
              className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
              title="Copiar CBU"
            >
              <Copy className="w-5 h-5 text-purple-700" />
            </button>
          </p>
          <p className="text-gray-600">
            Titular: <span className="font-semibold">Luciano Gaston Massa Iribarren</span>
          </p>
          <p className="text-gray-600">
            Monto: <span className="font-semibold text-purple-700">$50,000 ARS</span>
          </p>
        </div>

        {/* Pago en USDT */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Pago con USDT (Red ERC20)</h3>
          <img src={qrImage} alt="QR Code para pago USDT" />
          <p className="text-gray-600">
            Dirección USDT:{" "}
            <span className="font-mono text-purple-700 break-all">
              0x7874A8178785890261E81Bef2760b5D4c97535C4
            </span>
            <button
              onClick={() => copyToClipboard("0x7874A8178785890261E81Bef2760b5D4c97535C4")}
              className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
              title="Copiar Dirección USDT"
            >
              <Copy className="w-5 h-5 text-purple-700" />
            </button>
          </p>
          <p className="text-gray-600">
            Monto: <span className="font-semibold text-purple-700">50 USDT</span>
          </p>
          <p className="text-red-600 font-semibold mt-2">
            🚨 Recuerda: solo utiliza la red ERC20 para transferencias. Usar otra red podría ocasionar la pérdida de fondos.
          </p>
        </div>
      </div>

      {/* Botón de Compartir Comprobante con el estilo requerido */}
      <a
        href={`https://wa.me/5492644631495?text=${encodeURIComponent(whatsappMessage)}`}
        className="mt-4 px-6 py-3 bg-purple-700 text-white text-center font-semibold rounded-lg hover:bg-purple-800 mx-auto block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Compartir comprobante
      </a>

      {/* Mensaje de Copiado */}
      {copiedText && (
        <p className="text-green-600 text-center mt-4">
          ¡Copiado al portapapeles: {copiedText}!
        </p>
      )}
    </section>
  );
};

export default PaymentSection;
