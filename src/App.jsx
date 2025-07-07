import { useEffect } from "react";
import ReactPixel, { initPixel } from "./utils/pixel";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Wsp from "./components/wsp";

import Works from "./Pages/Works";
import About from "./Pages/About";
import Services from "./Pages/Services";
import BusinessTech from "./components/BusinessTech";
import Footer from "./components/Footer";
import DestoredIntro from "./components/DestoredIntro";
import DestoredForYou from "./components/DestoredForYou";
import WhyDestored from "./components/WhyDestored";
import Testimonial from "./components/Testimonial";
import Chatbot from "./Pages/Chatbot";

import Contact from "./Pages/Contact";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function PixelTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactPixel.pageView();
    }, [location.pathname]);

    return null;
}

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Wsp />
            <Footer />
        </>
    );
}

function App() {
    useEffect(() => {
        initPixel();
    }, []);

    return (
        <Router>
            <PixelTracker />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Hero />
                            <DestoredIntro />
                            <BusinessTech />
                            <DestoredForYou />
                            <WhyDestored />
                            <Testimonial />
                        </Layout>
                    }
                />
                <Route
                    path="/portafolio"
                    element={
                        <Layout>
                            <Works />
                        </Layout>
                    }
                />
                <Route
                    path="/chatbot"
                    element={
                        <Layout>
                            < Chatbot/>
                        </Layout>
                    }
                />
                <Route
                    path="/quienes-somos"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/servicios"
                    element={
                        <Layout>
                            <Services />
                        </Layout>
                    }
                />
                <Route
                    path="/contacto"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
