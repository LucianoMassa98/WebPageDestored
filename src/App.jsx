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
import FloatingButtons from "./components/FloatingButtons"
import PartnerHubHero from "./components/PartnerHubHero";
import partnerimg from "../public/partnerHub.webp";

import DestoPlay from "./Pages/DestoPlay";
import DesafioDesto from "./Pages/DesafíoDesto";

import Reunion from "./Pages/Reunion";

import Contact from "./components/Contact";
import TeachLeader from "./components/TeachLeader";
import LandingToken from "./Pages/LandingToken";
import TeachLeadersPage from "./Pages/TeachLeadersPage";

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
                            <PartnerHubHero partnerimg={partnerimg} />


                            <About />
                            <TeachLeader />

                            <SuccessCases />
                            <Works />
                            <FloatingButtons />


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

                            <DesafioDesto />
                            <Members />
                            <Scrums />
                            <DestoPlay />

                            <Footer />
                        </>
                    }
                />
             
                <Route path="/reunion" element={<><Reunion /></>} />

                <Route path="/token" element={<><LandingToken /><Footer /></>} />
                <Route path="/teachleaders" element={<><TeachLeadersPage /></>} />

               

            </Routes>
        </Router>
    );
}

export default App;
