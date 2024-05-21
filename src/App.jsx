import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import 'semantic-ui-css/semantic.min.css';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Contact />
      <Reviews />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
