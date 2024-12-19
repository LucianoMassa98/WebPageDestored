import Clients from "./components/Clients";
import Header from "./components/Header";
import HeaderCommunity from "./components/HeaderCommunity";
import HeaderMembers from "./components/HeaderMembers";

import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/Reviews";
import Services from "./components/Services";
import ServicesContrato from "./components/ServicesContrato";

import Footer from "./components/Footer";
import ComunidadDestored from "./components/ComunidadDestored";
import DestoredInfo from "./components/DestoredInfo";
import SuccessCases from "./components/SuccessCases";
import Members from "./components/Members";
import Scrums from "./components/Scrums";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Wsp from "./components/wsp/wsp";
import Chatbot from "./components/Chatbot";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
             
              <Hero />
              
              <DestoredInfo />
              
              
              <Wsp />
              <Services />
              <Works />
              <ServicesContrato />

             
              <SuccessCases />

              <About />
              <Footer />
            </>
          }
        />
        <Route path="/Comunidad" element={
      <>
      < HeaderCommunity/>
      <ComunidadDestored />
      <Scrums />
      </>
      
      } />
        <Route path="/Miembros" element={

<>
           <HeaderMembers />
          <Members />
          </>
          
          } />

       

      </Routes>
    </Router>
  );
}

export default App;
