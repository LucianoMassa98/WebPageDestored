import Clients from "./components/Clients";
import Header from "./components/Header";

import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Services from "./components/Services";
import TechIconsRow from "./components/TechIconsRow";

import Footer from "./components/Footer";
import ComunidadDestored from "./components/ComunidadDestored";
import DestoredInfo from "./components/DestoredInfo";
import SuccessCases from "./components/SuccessCases";
import Members from "./components/Members";
import Scrums from "./components/Scrums";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Wsp from "./components/wsp/wsp";
import DestoPlay from "./Pages/DestoPlay";
import EGameChampionship from "./Pages/EGameChampionship";

import Sorteo from "./Pages/Sorteo";

import Contact from "./components/Contact"

import PartnerHub from "./Pages/PartnerHub";
import DigitalMastery from "./Pages/DigitalMastery";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const slideUrl = "https://docs.google.com/presentation/d/e/2PACX-1vR0yI-QCZFSgqzCeK7aMb9PGG_nlcIaOgz1vX1gvT8O5m2M918Zo8scMSH0hyaF622SYVyu8MpD2qaE/embed?start=true&loop=true&delayms=3000";  // Asegúrate de poner la URL correcta

  return (
    <Router>
        <Wsp />

      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header />
            <Hero />
            <TechIconsRow /> 
 
            <DestoredInfo /> 
            <Services /> 
            <About /> 

            <Works /> 
            <SuccessCases /> 

            <Contact /> 
            <Footer /> 
          </>
          
          }
        />
        <Route path="/Comunidad" element={
            <>
            <ComunidadDestored />
            <Members />
            <Scrums />
            <DestoPlay />
            <Footer />

            </>
      
          } />
        
       
<Route path="/destoplay" element={
  
  <>
            <DestoPlay />
            <Footer />

            </>
  
  } />

<Route path="/partnerhub" element={
  
  <>
            <PartnerHub />
            <Footer />

            </>
  
  } />
  <Route path="/digitalmastery" element={
  
  <>
            <DigitalMastery />
            <Footer />

            </>
  
  } />


<Route path="/sorteo" element={
  
            <>
            <Sorteo />
            <Footer />
            </>
  
  } />

<Route path="/EGame" element={
  
  <>
  <EGameChampionship />
  <Footer />
  </>

} />
      </Routes>
    </Router>
  );
}

export default App;


//<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR0yI-QCZFSgqzCeK7aMb9PGG_nlcIaOgz1vX1gvT8O5m2M918Zo8scMSH0hyaF622SYVyu8MpD2qaE/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>