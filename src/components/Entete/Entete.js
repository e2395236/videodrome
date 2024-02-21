import { NavLink } from 'react-router-dom';
import './Entete.css';



function Entete() {
  return (
    
    <div>
      <header>
       <NavLink to="/"><h1>Videodrome</h1></NavLink>
      </header>

  
      <NavLink to="/accueil">Accueil</NavLink> | <span></span>

       <NavLink to="/liste-films">Liste Films</NavLink> 
    
   
    
    </div>

  
  );
}

export default Entete;