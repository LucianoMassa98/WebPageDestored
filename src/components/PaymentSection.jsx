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
    <section className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-2xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Formas de Pago</h2>
      
      <p className="text-center text-red-600 font-semibold mb-4">
        ⚠️ Importante: Si tienes un código de descuento exclusivo, dirígete a la opción de ser atendido por un representante.
      </p>

      <div className="flex flex-col gap-4">
        {/* Transferencia Bancaria Argentina */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank_arg")}
          >
            Transferencia Bancaria (Argentina)
            {openSection === "bank_arg" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank_arg" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Banco: <span className="font-semibold">Galicia</span>
              </p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">0070112530004219242108</span>
                <button
                  onClick={() => copyToClipboard("0070112530004219242108")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">
                Titular: <span className="font-semibold">Luciano Gaston Massa Iribarren</span>
              </p>
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">$52,000 ARS</span>
              </p>

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

        {/* Transferencia Bancaria Colombia */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank_col")}
          >
            Transferencia Bancaria (Colombia)
            {openSection === "bank_col" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank_col" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Banco: <span className="font-semibold">Nequi</span>
              </p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">3026898020</span>
                <button
                  onClick={() => copyToClipboard("3026898020")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">
                Titular: <span className="font-semibold">Nixon Andrew Parra Beltrán</span>
              </p>
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">$200.000 COP</span>
              </p>

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

        {/* Transferencia Bancaria Costa Rica */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank_cr")}
          >
            Transferencia Bancaria (Costa Rica)
            {openSection === "bank_cr" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank_cr" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Banco: <span className="font-semibold">Scotiabank</span>
              </p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">CR95012300170000129271</span>
                <button
                  onClick={() => copyToClipboard("CR95012300170000129271")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">
                Titular: <span className="font-semibold">Bayron Jesús Leiva Rojas</span>
              </p>
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">$25,000 CRC</span>
              </p>

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
        {/* Transferencia Bancaria Ecuador */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank_cr")}
          >
            Transferencia Bancaria (Ecuador)
            {openSection === "bank_cr" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank_cr" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Banco: <span className="font-semibold">Guayaquil</span>
              </p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">1720498938</span>
                <button
                  onClick={() => copyToClipboard("1720498938")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">
                Titular: <span className="font-semibold">CURAY DARIO XAVIER</span>
              </p>
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">$50 USD</span>
              </p>

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
         {/* Transferencia Bancaria Mexico */}
         <div className="bg-gray-100 rounded-lg shadow-sm p-4">
         <button
  className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
  onClick={() => toggleSection("bank_mx")}
>
  Transferencia Bancaria (México)
  {openSection === "bank_mx" ? <ChevronUp /> : <ChevronDown />}
</button>
{openSection === "bank_mx" && (
  <div className="mt-2">
    <p className="text-gray-600">
      Banco: <span className="font-semibold">BBVA</span>
    </p>
    <p className="text-gray-600">
      CBU: <span className="font-mono text-purple-700 break-all">012580015637095185</span>
      <button
        onClick={() => copyToClipboard("012580015637095185")}
        className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
      >
        <Copy className="w-5 h-5 text-purple-700" />
      </button>
    </p>
    <p className="text-gray-600">
      Titular: <span className="font-semibold">Alejandra Guardado Mendez</span>
    </p>
    <p className="text-gray-600">
      Monto: <span className="font-semibold text-purple-700">$1,000 MXN</span>
    </p>

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

         {/* Transferencia Bancaria Perú 
           <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("bank_cr")}
          >
            Transferencia Bancaria (Perú)
            {openSection === "bank_cr" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "bank_cr" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Banco: <span className="font-semibold">Scotiabank</span>
              </p>
              <p className="text-gray-600">
                CBU: <span className="font-mono text-purple-700 break-all">CR95012300170000129271</span>
                <button
                  onClick={() => copyToClipboard("CR95012300170000129271")}
                  className="ml-2 p-2 bg-purple-100 rounded hover:bg-purple-200"
                >
                  <Copy className="w-5 h-5 text-purple-700" />
                </button>
              </p>
              <p className="text-gray-600">
                Titular: <span className="font-semibold">Bayron Jesús Leiva Rojas</span>
              </p>
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">$25,000 CRC</span>
              </p>

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
         
         
         
         */}
       

        {/* Pago con USDT (Cripto) */}
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
              <p className="text-gray-600">
                Monto: <span className="font-semibold text-purple-700">50 USDT</span>
              </p>
              <p className="text-red-600 font-semibold mt-2">
                🚨 Recuerda: solo utiliza la red ERC20 para transferencias. Usar otra red podría ocasionar la pérdida de fondos.
              </p>

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

        {/* Atención de un representante */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <button
            className="w-full flex justify-between items-center text-xl font-bold text-gray-800"
            onClick={() => toggleSection("support")}
          >
            Atención de un representante
            {openSection === "support" ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === "support" && (
            <div className="mt-2">
              <p className="text-gray-600">
                Si necesitas asistencia personalizada, contáctanos por WhatsApp.
              </p>
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
      
      {copiedText && (
        <p className="text-green-600 text-center mt-4">
          ¡Copiado al portapapeles: {copiedText}!
        </p>
      )}
    </section>
  );
};

export default PaymentSection;
