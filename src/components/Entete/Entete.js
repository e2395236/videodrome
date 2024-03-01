import { NavLink } from 'react-router-dom';
import './Entete.css';



function Entete(props) {
  return (
    
    <div>
      <header>
       <NavLink to="/"><h1>Videodrome</h1></NavLink>
      </header>

      <nav>

        <NavLink to="/accueil">Accueil </NavLink> 
        <NavLink to="/liste-films">Films</NavLink> 

        <form onSubmit={props.handleLogin}>
          <input type="text" name="usager" id="login" placeholder='Login' />
         <button type="submit">Connexion</button>
        </form>

      </nav>

  
    
   
    
    </div>

  
  );
}

export default Entete;