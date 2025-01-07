import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col items-center gap-4">
        {/* Logo centrado y responsivo */}
        <img
          src="/Logo Destored.svg"
          alt="Icono personalizado"
          className="w-20 md:w-32 xl:w-40" // Responsivo: Ajusta el tamaño según el viewport
        />

        {/* Información del footer */}
        <div className="text-center mt-4">
          <p className="text-gray-300 text-sm md:text-base">
            San Juan - Argentina
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            © Destored 2025 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
