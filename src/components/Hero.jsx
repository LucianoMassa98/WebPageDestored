import "./Hero.css"
import React, { useState, useEffect, useRef, useCallback } from "react";
import laf from "../assets/laf2.mp4";
import atm from "../assets/atm.mp4";
import amd from "../assets/amd.mp4";
import yms from "../assets/yms.mp4";

const videoSources = [
  { 
    src: laf,
    alt: "laf", 
    industry: "Deporte", 
    type: "video" 
  },
  { src: yms, alt: "yms", industry: "Agro Avícola", type: "video" },
  { src: atm, alt: "atm", industry: "Deporte", type: "video" },
  { src: amd, alt: "amd", industry: "Talento Remoto", type: "video" },
];

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [videosReady, setVideosReady] = useState(false);
  const [videoLoadStatus, setVideoLoadStatus] = useState({});
  const timeoutRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    setShowText(true);
  }, []);

  // Función para precargar videos
  const preloadVideo = useCallback((videoSrc, index) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.muted = true;
      video.playsInline = true;
      
      const handleCanPlay = () => {
        setVideoLoadStatus(prev => ({
          ...prev,
          [index]: 'loaded'
        }));
        
        setLoadedVideos(prev => {
          const newLoaded = [...prev, { ...videoSources[index], originalIndex: index }];
          return newLoaded.sort((a, b) => a.originalIndex - b.originalIndex);
        });
        
        videoRefs.current[index] = video;
        resolve(video);
      };

      const handleError = () => {
        setVideoLoadStatus(prev => ({
          ...prev,
          [index]: 'error'
        }));
        resolve(null);
      };

      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Timeout de seguridad (10 segundos máximo)
      setTimeout(() => {
        if (!videoRefs.current[index]) {
          handleError();
        }
      }, 10000);
      
      video.load();
    });
  }, []);

  // Precargar todos los videos al montar el componente
  useEffect(() => {
    const loadVideos = async () => {
      // Inicializar estado de carga
      const initialStatus = {};
      videoSources.forEach((_, index) => {
        initialStatus[index] = 'loading';
      });
      setVideoLoadStatus(initialStatus);

      // Precargar videos en paralelo
      const loadPromises = videoSources.map((video, index) => 
        preloadVideo(video.src, index)
      );

      try {
        await Promise.allSettled(loadPromises);
        setVideosReady(true);
      } catch (error) {
        console.warn('Error al precargar algunos videos:', error);
        setVideosReady(true); // Continuar aunque algunos videos fallen
      }
    };

    loadVideos();
  }, [preloadVideo]);

  // Animación automática del carrusel - solo inicia cuando hay videos cargados
  useEffect(() => {
    if (!videosReady || loadedVideos.length === 0) return;

    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % loadedVideos.length);
    }, 5000); // 5 segundos para dar tiempo a ver cada video completo
    
    return () => clearTimeout(timeoutRef.current);
  }, [current, videosReady, loadedVideos.length]);

  const openInstagramVideo = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const goTo = (idx) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? loadedVideos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % loadedVideos.length);
  };

  // Mostrar mensaje de carga mientras se cargan los videos
  const renderLoadingState = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg font-medium">Preparando experiencia...</p>
        <p className="text-indigo-100 text-sm mt-2">
          {Object.values(videoLoadStatus).filter(status => status === 'loaded').length} de {videoSources.length} videos listos
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 bg-gradient-to-br from-indigo-900 via-purple-700 to-purple-400"
      style={{marginTop: 0, paddingTop: 0}}
    >
      {/* Columna izquierda: Bienvenida y acciones */}
      <div className="xl:col-span-4 flex items-center justify-center p-2 sm:p-4 md:p-8 xl:p-16">
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <h1
            className={`font-extrabold text-3xl sm:text-4xl md:text-5xl xl:text-7xl leading-tight text-white drop-shadow-lg title-css text-center xl:text-left ${showText ? "show" : ""}`}
          >
            Bienvenido a{" "}
            <span className="text-indigo-200 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-300 bg-clip-text text-transparent">
              Destored
            </span>
          </h1>
          <p
            className={`text-indigo-100 text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-center xl:text-left ${showText ? "show-3" : ""}`}
          >
            Una plataforma que conecta personas y empresas con soluciones de software y datos para potenciar sus ideas y negocios.
          </p>
          {/* Métricas y datos destacados */}
          <div className="flex flex-row flex-nowrap overflow-x-auto justify-center xl:justify-start gap-3 sm:gap-6 mt-1 mb-1 px-0 sm:px-0">
            <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-xl px-2 py-1 min-w-[80px] sm:min-w-[110px]">
              <span className="text-xl sm:text-3xl font-bold text-indigo-200">+50</span>
              <span className="text-indigo-100 text-xs sm:text-sm">Clientes</span>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-xl px-2 py-1 min-w-[80px] sm:min-w-[110px]">
              <span className="text-xl sm:text-3xl font-bold text-indigo-200">5</span>
              <span className="text-indigo-100 text-xs sm:text-sm">Sectores</span>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-xl px-2 py-1 min-w-[80px] sm:min-w-[110px]">
              <span className="text-xl sm:text-3xl font-bold text-indigo-200">24/7</span>
              <span className="text-indigo-100 text-xs sm:text-sm">Soporte</span>
            </div>
          </div>
          {/* Fin métricas */}
          {/* Botones de acción */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-4">
            <a href="https://dashboard.destored.org/register" className="w-full md:w-auto hidden md:block" target="_blank" rel="noopener noreferrer">
              <button
                className={`w-full md:w-auto bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg text-xl transition-all duration-200 ${showText ? "show-3" : ""}`}
              >
                Regístrate
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Columna derecha: Visual y lista de tecnologías */}
      <div className="xl:col-span-4 flex items-start justify-center relative xl:p-16 pt-4 sm:pt-8 md:pt-12">
        {/* Formas decorativas SVG */}
        <svg
          className="absolute -top-10 -left-10 w-40 h-40 opacity-30 z-0 pointer-events-none hidden xl:block"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#a5b4fc" />
        </svg>
        <svg
          className="absolute top-1/2 right-0 w-32 h-32 opacity-20 z-0 pointer-events-none hidden xl:block"
          style={{ transform: "translateY(-50%)" }}
          viewBox="0 0 160 160"
        >
          <circle cx="80" cy="80" r="80" fill="#c4b5fd" />
        </svg>
        <svg
          className="absolute bottom-0 left-1/2 w-56 h-20 opacity-20 z-0 pointer-events-none hidden xl:block"
          style={{ transform: "translateX(-50%)" }}
          viewBox="0 0 400 80"
        >
          <ellipse cx="200" cy="40" rx="200" ry="40" fill="#818cf8" />
        </svg>
        <svg
          className="absolute top-10 right-24 w-16 h-16 opacity-40 z-0 pointer-events-none hidden xl:block"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#f3e8ff" />
        </svg>
        {/* Fin formas decorativas */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto flex flex-col items-center z-10">
          {/* Carrusel de imágenes */}
          <div className="relative flex items-center justify-center w-full h-56 sm:h-[22rem] md:h-[36rem] bg-white bg-opacity-20 rounded-2xl sm:rounded-3xl shadow-2xl mb-2 sm:mb-8 overflow-hidden max-h-[22rem] sm:max-h-[32rem]">
            {!videosReady || loadedVideos.length === 0 ? (
              renderLoadingState()
            ) : (
              <>
                {loadedVideos.map((img, idx) => (
                  <div
                    key={`${img.src}-${img.originalIndex}`}
                    className={`absolute left-0 top-0 w-full h-full transition-all duration-700 ease-in-out flex items-center justify-center
                      ${idx === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}
                    `}
                    style={{ pointerEvents: idx === current ? "auto" : "none" }}
                  >
                    {img.type === "video" ? (
                      <div className="w-full h-full relative">
                        <video
                          src={img.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          type="video/mp4"
                          poster="https://via.placeholder.com/600x400?text=Video+no+carga"
                          className="w-full h-full object-cover"
                          style={{ position: "absolute", left: 0, top: 0 }}
                          onError={e => { e.target.poster = "https://via.placeholder.com/600x400?text=Error+video"; }}
                        >
                          Tu navegador no soporta el video.
                        </video>
                        {/* Capa gris oscura con opacidad */}
                        <div
                          className="absolute left-0 top-0 w-full h-full"
                          style={{ background: "rgba(30,30,30,0.45)", pointerEvents: "none" }}
                        />
                      </div>
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain filter grayscale brightness-75"
                        style={{ position: "absolute", left: 0, top: 0 }}
                      />
                    )}
                    <span
                      className="absolute top-4 left-4 z-20 text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg select-none px-4 py-2 rounded"
                      style={{
                        background: "rgba(30,30,30,0.35)",
                        textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                        letterSpacing: "2px"
                      }}
                    >
                      {img.industry}
                    </span>
                  </div>
                ))}
                {/* Botón anterior - solo visible cuando hay videos cargados */}
                {loadedVideos.length > 1 && (
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-indigo-700 bg-opacity-70 hover:bg-indigo-900 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 focus:outline-none"
                    aria-label="Anterior"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
                  </button>
                )}
                {/* Botón siguiente - solo visible cuando hay videos cargados */}
                {loadedVideos.length > 1 && (
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-indigo-700 bg-opacity-70 hover:bg-indigo-900 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 focus:outline-none"
                    aria-label="Siguiente"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
                  </button>
                )}
                {/* Indicadores - solo visibles cuando hay videos cargados */}
                {loadedVideos.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                    {loadedVideos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 border-2 border-white
                          ${idx === current ? "bg-purple-600 scale-110 shadow" : "bg-white bg-opacity-40"}
                        `}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {/* Botón de registro solo en móvil */}
          <a href="https://dashboard.destored.org" className="w-full block md:hidden" target="_blank" rel="noopener noreferrer">
            <button
              className="w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg text-lg sm:text-xl transition-all duration-200 mt-2 mb-2"
            >
              Regístrate
            </button>
          </a>
          {/* Flecha "ver más" solo en móvil */}
          <div className="flex justify-center w-full md:hidden">
            <button
              type="button"
              className="animate-bounce mt-6 flex flex-col items-center text-indigo-100 focus:outline-none"
              onClick={() => {
                const section = document.getElementById("destored-intro");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs mt-1">Ver más</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




