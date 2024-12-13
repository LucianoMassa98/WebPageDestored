import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import DestoredInfo from "./components/DestoredInfo";
import SuccessCases from "./components/SuccessCases";
import FormComponent from "./components/FormComponent";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Wsp from "./components/wsp/wsp";
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
              <SuccessCases />

              <About />
              <Footer />
            </>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
//<Route path="/Contact" element={<FormComponent />} />