import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col items-center gap-4">
        {/* Enlace a www.destored.org que se abre en la misma ventana */}
        <a
          href="https://www.destored.org"
          className="text-gray-300 text-sm md:text-base"
        >
          www.destored.org
        </a>

        {/* Logo centrado y responsivo */}
        <a href="https://www.destored.org">
          <img
            src="/Logo Destored.svg"
            alt="Icono personalizado"
            className="w-20 md:w-32 xl:w-40" // Responsivo: Ajusta el tamaño según el viewport
          />
        </a>

        {/* Información del footer */}
        <div className="text-center mt-4">
          <p className="text-gray-300 text-sm md:text-base">
            Argentina
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            <a href="https://www.destored.org">
              © Destored 2025 - Todos los derechos reservados
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
