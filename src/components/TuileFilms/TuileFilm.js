
import './TuileFilm.css';

function TuileFilm(props) {
  return (
    
    <div  >
    <article>
    
    <h2>{props.data.titre}</h2>
    <h3>{props.data.realisateur}</h3>
    <img src={`img/${props.data.titreVignette}`} alt={props.data.titre}/>
    <p>{props.data.annee}</p>
    <p>{props.data.duree} minutes</p>

    <p>{props.data.resume}</p>
    </article>
    
    </div>
  );
}

export default TuileFilm;