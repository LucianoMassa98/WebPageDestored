import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
      Los Colaboradores que Hacen Posible Nuestro Éxito
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="Yemas del sol.png" className="w-40" />
        <img src="Vende por insta.png" className="w-40" />
        <img src="Super el once.png" className="w-40" />
        <img src="M&Cgroup.png" className="w-40" />
      </div>
    </div>
  );
};

//<img width="1200" height="675" src="" class="attachment-jannah-image-post size-jannah-image-post wp-post-image" alt="Acceso para agencias de Shopify" data-main-img="1" decoding="async" fetchpriority="high" title="Cómo agregar su agencia como colaborador a su tienda Shopify 1"></img>
export default Clients;
