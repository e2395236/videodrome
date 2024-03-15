import { NavLink } from 'react-router-dom';
import './Entete.css';
 
function Entete(props) {


  const handleAuthAction = () => {
    if (props.estLog) {
      props.handleLogout();
      localStorage.removeItem('estLog');
    } else {
    
      props.handleLogin("admin");
    }
  };

  return (
    <header>
      <nav>
        <NavLink to="/accueil">
          <img src={`${process.env.PUBLIC_URL}/img/svg/logo.svg`} alt="logo" title="logo" />
        </NavLink>
        <ul>
          <li><NavLink to="/liste-films">FILMS</NavLink></li>
          <li><NavLink to="/series">SÉRIES</NavLink></li>
        </ul>
        </nav>
        {props.estLog && (   <span>Bonjour, Admin !</span> ) }
      <div>
  
       
          {props.estLog && (   <NavLink to="/admin" className="multi-line-link"><span></span>admin</NavLink> ) }

          
       
        <button onClick={handleAuthAction} className="multi-line-link">
          <span></span>{props.estLog ? "déconnexion" : "connexion"}
        </button>
      </div>

      
    </header>
  );
        }
export default Entete;

