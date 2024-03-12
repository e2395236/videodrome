import { NavLink } from 'react-router-dom';
import './Entete.css';
 

function Entete(props) {
  return (
    <header>
      <nav>
        <NavLink to="/accueil">
        <img src={`${process.env.PUBLIC_URL}/img/svg/logo.svg`} alt="logo" title="logo" />
        </NavLink>

        <ul>
          <li><NavLink to="/liste-films">FILMS</NavLink></li>
          <li><NavLink to="/series">SÉRIES</NavLink></li> {/* Remplace "#" par le chemin correspondant à tes séries */}
        </ul>
      </nav>

      <div>
        {/* Remplace "#" par le chemin correspondant à tes pages admin et connexion */}
        <NavLink to="/admin" className="multi-line-link"><span></span>admin</NavLink>
        <NavLink to="/connexion" className="multi-line-link"><span></span>connexion</NavLink>
      </div>
    </header>
  );
}

export default Entete;
