import { useEffect } from "react";
import ReactPixel, { initPixel } from "./utils/pixel";

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
import Wsp from "./components/wsp/wsp";
import IABanner from "./components/IABanner";

import DestoPlay from "./Pages/DestoPlay";
import EGameChampionship from "./Pages/EGameChampionship";
import Sorteo from "./Pages/Sorteo";
import Contact from "./components/Contact";
import PartnerHub from "./Pages/PartnerHub";
import DigitalMastery from "./Pages/DigitalMastery";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function PixelTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactPixel.pageView(); // Registrar cada cambio de ruta como una vista
    }, [location.pathname]);

    return null;
}

function App() {
    useEffect(() => {
        initPixel(); // Inicializar el pixel al cargar la app
    }, []);

    return (
        <Router>
            <PixelTracker />

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
                <Route
                    path="/Comunidad"
                    element={
                        <>
                            <ComunidadDestored />
                            <Members />
                            <Scrums />
                            <DestoPlay />
                            <Footer />
                        </>
                    }
                />
                <Route path="/partnerhub" element={<><PartnerHub /><Footer /></>} />
                <Route path="/digitalmastery" element={<><DigitalMastery /><Footer /></>} />
                <Route path="/sorteo" element={<><Sorteo /><Footer /></>} />
                <Route path="/EGame" element={<><EGameChampionship /><Footer /></>} />
                <Route path="/IA" element={<>
                    <IABanner/>     
                <Footer /></>} />

            </Routes>
        </Router>
    );
}

export default App;
