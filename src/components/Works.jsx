import React from "react";

const Works = () => {
  return (
    <div id="products" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
        Destored en Acción: Nuestros Productos
        </h1>
        <p className="text-xl text-gray-500">
        Sumérgete en el emocionante mundo de Destored y descubre una variedad de productos digitales que hemos desarrollado con pasión y dedicación. 
        ¡Explora nuestras creaciones y déjate inspirar por lo que podemos lograr juntos!
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 zoom-container">
          <img
            src="work1.jpeg"
            className="w-full h-[600px] object-cover rounded-3xl zoomable"
          />
          <p className="text-gray-500">Desktop & Web App - Noviembre, 2023</p>
          <h3 className="text-2xl font-bold">Digital Market</h3>
          <p className="text-gray-500">
          Una aplicación web para dueños de supermercados que simplifica la gestión de stock,
           ventas, compras, gastos y cierres de caja, todo en un solo lugar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work2.JPEG"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">ChatBot - Enero, 2024</p>
            <h3 className="text-2xl font-bold">
              ChatBot de WhatsApp para gestión de turnos
            </h3>
          </div>
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work5.JPEG"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Web App - Diciembre, 2023</p>
            <h3 className="text-2xl font-bold">
              Agenda digital para clínicas o consultorios médicos
            </h3>
          </div>  
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work4.JPEG"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Desktop App - Junio, 2023</p>
            <h3 className="text-2xl font-bold">
            Sistema de gestión de seguros para vehículos
            </h3>
          </div>
          <div className="flex flex-col gap-4 zoom-container">
            <img
              src="work3.JPEG"
              className="w-full h-56 object-cover rounded-3xl zoomable"
            />
            <p className="text-gray-500">Desktop & Web App - Noviembre, 2022</p>
            <h3 className="text-2xl font-bold">
              Sistema de gestión avícola para compra, produccion y venta
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Works;
