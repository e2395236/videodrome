import { NavLink } from "react-router-dom";
import "./Entete.css";

function Entete() {
  return (
    <div>
      <header>
     
        <nav>
        <NavLink to="/">
          <h1>Videodrome</h1>
        </NavLink>
     

          <NavLink to="/liste-films">Films</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Entete;
