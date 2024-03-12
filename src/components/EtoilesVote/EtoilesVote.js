import React, { useState } from 'react';
import './EtoilesVote.css';

function EtoilesVote({ notes, onVote }) {
  const [hover, setHover] = useState(0); // État pour le survol
  const [vote, setVote] = useState(null); // État pour stocker le vote de l'utilisateur

  // Calcul de la moyenne des votes
  const moyenneVotes = notes.length > 0
      ? (notes.reduce((acc, curr) => acc + curr, 0) / notes.length).toFixed(2)
      : 'Aucun vote enregistré';

  const handleVote = (ratingValue) => {
      onVote(ratingValue); // Appelle onVote pour envoyer le vote
      setVote(ratingValue); // Met à jour le vote
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
                          color: ratingValue <= (hover || vote) ? 'gold' : 'gray'
                      }}>
                      ★
                  </span>
              );
          })}
          <p className='nb-votes'>{moyenneVotes} / 5 ({notes.length} votes)</p>
      </div>
  );
}


export default EtoilesVote;