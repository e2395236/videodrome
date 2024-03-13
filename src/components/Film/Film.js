import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EtoilesVote from '../EtoilesVote/EtoilesVote';
import './Film.css';

function Film(){
  const { id } = useParams();
  const urlFilm = `https://four1f-node-api.onrender.com/films/${id}`;

  const [film, setFilm] = useState({});

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(urlFilm)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
        setLoaded(true); // Définir à true une fois que les données sont chargées
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, [urlFilm]);



  const soumettreVote = async (note) => {
    const nouvellesNotes = film.notes ? [...film.notes, note] : [note];
    const options = {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: nouvellesNotes }),
    };

    try {
      await fetch(urlFilm, options);
      const response = await fetch(urlFilm);
      const updatedFilm = await response.json();
      setFilm(updatedFilm);
    } catch (error) {
      console.error("Erreur lors de la soumission de la note", error);
    }
  };

  return (
    <main>
      <section className="film-section">
      <div className={`poster-container ${loaded ? 'loaded' : ''}`}>
      <img
  src={`${process.env.PUBLIC_URL}/img/${film.titreVignette}`}
  alt={film.titre}
  className="poster"
  width="400px"
  title={film.titre}
  onLoad={() => setLoaded(true)} // Ajoute ceci
/>


        </div>

        <div className={`info-container ${loaded ? 'loaded' : ''}`}>
          <div className="card">
            <div className="card-header">
              <h1>{film.titre}</h1>
              <img src={`${process.env.PUBLIC_URL}/img/svg/lignes.svg`} alt="lignes" />
              <h2>{film.annee}</h2>
            </div>

            <div className="card-body">
            <p>réalisé par <strong>{film.realisation}</strong></p>

              <p>{film.genres && film.genres.join(', ')}</p>
              {/* <p>{film.acteurs && film.acteurs.join(', ')}</p> */}
              <p>Durée : {film.duree} minutes</p>
              <p>{film.description}</p>
            </div>

            <div className="votes">
             {film.notes && <EtoilesVote notes={film.notes} onVote={soumettreVote} />} 
              {/* Ici, tu dois intégrer le composant EtoilesVote avec les données du film */}
         
            </div>

            <div className="card-footer">
            <img src={`${process.env.PUBLIC_URL}/img/svg/rectangle.svg`} alt="rectangle" />
            </div>
          </div>
        </div>

        
      </section>
    </main>
  );
}

export default Film;

