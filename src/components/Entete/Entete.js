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
      <header className='flex-row gap-md '>
       <div className='flex-row '>
          <NavLink  to="/" className='flex-row'>
            <img src="img/logo.png" alt="logo"/>
            <h1 className='flex-row'>Vidéodrôme</h1>
          </NavLink>
       </div>
      <nav >

        {context.estLog ? <NavLink to="/admin">Admin  </NavLink> :''}
        {/*{props.logged ? <NavLink to="/admin">Admin  </NavLink> :''} */}

        <NavLink to="/accueil">Accueil </NavLink> 
        <NavLink to="/liste-films">Films</NavLink> 

     

      </nav>
      <form className='flex-row-end' onSubmit={props.handleLogin}>
          <input type="text" name="usager" id="login" placeholder='Login' />
         <button type="submit">Connexion</button>
        </form>

      </header>

  
    
   
    
    </div>

  
  );
}

export default Entete;