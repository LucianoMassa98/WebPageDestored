import React, { useState } from 'react';

// Componente PaymentSection
const PaymentSection = () => {


    const paymentGateways = [{
      title: "Mercado Pago",
      url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084955cc4800195967f60a61bd7",
      color: "bg-blue-500",
      icon: "https://pbs.twimg.com/profile_images/1609933607006519297/JfQLdV9q_400x400.jpg", // Icono de Mercado Pago
      shape: "rounded-full", // Icono circular
    },
    {
      title: "PayPal",
      url: "https://www.paypal.me/Lucianomassa26",
      color: "bg-blue-300",
      icon: "https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg", // Sustituye con el icono de PaySolamente
      shape: "rounded-full", // Icono cuadrado
    }]
 
   

  return (
    <div className="flex justify-center items-center bg-white p-8">
    <div className="relative w-full max-w-lg mx-auto">
      <div className="space-y-4">
        {paymentGateways.map((gateway, index) => (
          <a
            key={index}
            href={gateway.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 bg-white ${gateway.color} text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 relative`}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={gateway.icon}
                alt={gateway.title}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="ml-4 font-medium">{gateway.title}</span>
            
            {/* Figura blanca ocupando todo el ancho y alto del botón con transparencia del 10% */}
            <div className=" relative inset-0 bg-white opacity-100
             rounded-full"></div>
          </a>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default PaymentSection;
