import "./BotonFlotante.css"
import { Link } from 'react-router-dom';

function BotonFlotante() {
  return (
    <button className="boton-flotante">
      <Link to='/#' className="boton-flotante">Home</Link>
    </button>

    
    // <Link to='/#'><button className="boton-flotante">Home</button> </Link>
    

  );
}

export default BotonFlotante;   