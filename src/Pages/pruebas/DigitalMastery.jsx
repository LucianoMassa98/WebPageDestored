import React from "react";
import { Briefcase, Layout, BarChart3, ShieldCheck, Users } from "lucide-react";
import digitalmastery from "../../public/digitalmastery.webp";
import ProjectFormModal from "../../components/ProjectFormModal.jsx";

const DigitalMastery = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800 min-h-screen p-6">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl p-8 relative overflow-hidden">
        {/* Formas decorativas */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full opacity-20 transform translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400 rounded-full opacity-25 transform -translate-x-8 translate-y-8"></div>

        <h1 className="text-4xl font-extrabold text-center mb-4 text-purple-800">Digital Mastery</h1>
        <p className="text-lg text-purple-700 text-center mb-6">
          Soluciones estratégicas personalizadas y equipos especializados para impulsar el éxito de tus proyectos empresariales.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={digitalmastery}
            alt="Imagen de Digital Mastery"
            className="w-full md:w-1/3 h-auto rounded-xl shadow-lg"
          />
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-violet-300" />
              Consultoría estratégica adaptada a tus necesidades.
            </li>
            <li className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-violet-300" />
              Diseño y desarrollo completamente personalizado.
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-6 h-6 text-violet-300" />
              Capacitación en metodologías ágiles para tu equipo.
            </li>
            <li className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-violet-300" />
              Informes periódicos con métricas clave y análisis de rendimiento.
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-violet-300" />
              Soporte técnico y estratégico disponible 24/7.
            </li>
          </ul>
        </div>

        
      </div>

      {/* Botón centrado */}
      <div className="text-center mt-8">
          <ProjectFormModal />
        </div>
    </div>
  );
};

export default DigitalMastery;
