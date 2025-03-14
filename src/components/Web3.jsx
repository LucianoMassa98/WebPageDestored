import { motion } from "framer-motion";

const Web3 = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-violet-900 text-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
      {/* Fondo con formas difuminadas */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
          <g filter="url(#blurFilter)">
            <circle cx="200" cy="150" r="100" fill="#8A2BE2" />
            <circle cx="600" cy="350" r="150" fill="#4B0082" />
            <circle cx="400" cy="500" r="120" fill="#6A0DAD" />
          </g>
          <defs>
            <filter id="blurFilter" x="-100" y="-100" width="1000" height="800" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="80" />
            </filter>
          </defs>
        </svg>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Destored 3.0: Innovación y Oportunidad</h2>
        <p className="text-lg mb-4 text-gray-200">Explora nuestra transición a Web3 y sé parte del futuro digital.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          {[
            'Oportunidades de inversión exclusivas',
            'Gobernanza descentralizada',
            'Repartición justa de tokens',
            'Acceso a DAO de innovación',
            'Tokenización de activos digitales',
            'Economía colaborativa basada en blockchain',
            'Datos seguros y verificados en la red'
          ].map((feature, index) => (
            <motion.li 
              key={index} 
              className="text-sm text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
        <a 
          href="./token" 
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Descubre más
        </a>
      </div>
    </div>
  );
};

export default Web3;