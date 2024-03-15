import React, { useState } from 'react';
import './EtoilesVote.css';

function EtoilesVote({ notes, onVote }) {
  const [hover, setHover] = useState(0); // État pour le survol
  const [vote, setVote] = useState(null); // État pour stocker le vote de l'utilisateur
  // const nombreDeVotes = notes.length;



  // Calcul de la moyenne des votes
  const moyenneVotes = notes.length > 0
      ? (notes.reduce((acc, curr) => acc + curr, 0) / notes.length).toFixed(2)
      : 'Aucun vote enregistré';

  const handleVote = (ratingValue) => {
      onVote(ratingValue); 
      setVote(ratingValue); 
  };

  return (
    <div>
      {[...Array(5)].map((etoile, index) => {
          const ratingValue = index + 1;
          return (
              <span
                  key={index}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => handleVote(ratingValue)}
                  style={{
                      cursor: 'pointer',
                      color: ratingValue <= (hover || vote) ? '#da9100' : 'gray',
                      fontSize: '1.7rem',
                  }}>
                  ★
              </span>
          );
      })}
      <p className='nb-votes'>
        {notes.length > 0 ? 
          `${moyenneVotes} / 5 (${notes.length} ${notes.length > 1 ? 'votes' : 'vote'})` : 
          'Aucun vote enregistré'}
      </p>
    </div>
  );
        }  


export default EtoilesVote;