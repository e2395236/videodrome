
import './TuileFilm.css';

function TuileFilm(props) {
  return (
    <div className="tuile-film">
      <article>
       
        <img src={`img/${props.data.titreVignette}`} alt={props.data.titre}/>
        <h2>{props.data.titre} <span className='medium-text'>({props.data.annee})</span>  </h2>
 
        {/* <p>{props.data.duree} minutes</p>
        <p>{props.data.resume}</p> */}
      </article>
    </div>
  );
}

export default TuileFilm;
