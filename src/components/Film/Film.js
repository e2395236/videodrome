import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

import Entete from '../Entete/Entete';
import EtoilesVote from '../EtoilesVote/EtoilesVote';
import './Film.css';

function Film() {
  const { id } = useParams();
  const urlFilm = `https://api-films-dxmx.onrender.com/api/films/` + id;
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(urlFilm)
      .then(response => response.json())
      .then(data => {
        setFilm(data);
      });
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
    <div>
      <Entete />
      <div className="film-container">
        <h2 className="film-titre">{film.titre} <span className='large-text'>({film.annee})</span></h2> 
        <img src={film.image} alt={film.titre} className="film-image"/> 
        <p className="film-realisation">réalisé par : {film.realisateur}</p>
        <p className="film-resume">{film.synopsis}</p>
        <p className="film-genres">Genres: {film.genres && film.genres.length > 0 ? film.genres.join(', ') : 'Non spécifié'}</p>
        <p className="film-acteurs">Acteurs: {film.acteurs && film.acteurs.length > 0 ? film.acteurs.join(', ') : 'Non spécifié'}</p>
        {film.notes && <EtoilesVote notes={film.notes} onVote={soumettreVote} />}
      </div>
    </div>
  );
}

export default Film;
