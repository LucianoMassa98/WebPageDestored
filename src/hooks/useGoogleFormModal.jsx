import { useState, useEffect } from "react";

const useGoogleFormModal = (formUrl) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir o cerrar el modal
  const [loading, setLoading] = useState(true); // Estado para saber si el formulario está cargando
  const [error, setError] = useState(null); // Estado para capturar errores
  const [iframeSrc, setIframeSrc] = useState(""); // Fuente del iframe para el formulario

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (formUrl) {
      setLoading(true);
      setIframeSrc(`${formUrl}?embedded=true`); // Prepara la URL del formulario para incrustar en un iframe

      // Después de cargar el formulario, cambiamos el estado a 'false'
      setLoading(false);
    }
  }, [formUrl]);

  return {
    isModalOpen,
    openModal,
    closeModal,
    loading,
    error,
    iframeSrc,
  };
};

export default useGoogleFormModal;
