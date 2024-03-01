import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../App/App';
import './Entete.css';





function Entete(props) {

  const context = useContext(AppContext);

  //console.log(context);
  //console.log(props);
  return (
    
    <div>
      <header>
       <NavLink to="/"><h1>Videodrome</h1></NavLink>
      </header>

      <nav>
        {context.estLog ? <NavLink to="/admin">Admin  </NavLink> :''}
        {/*{props.logged ? <NavLink to="/admin">Admin  </NavLink> :''} */}

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