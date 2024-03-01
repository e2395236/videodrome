
import './TuileFilm.css';

function TuileFilm(props) {
  return (
    <div className="tuile-film">
      <article>
       
        <img src={`img/${props.data.titreVignette}`} alt={props.data.titre}/>
        <p className='medium-text dark'>{props.data.titre} <span className='small-text dark'>({props.data.annee})</span>  </p>
 
        {/* <p>{props.data.duree} minutes</p>
        <p>{props.data.resume}</p> */}
      </article>
    </div>
  );
}

export default TuileFilm;
