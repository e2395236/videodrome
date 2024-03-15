import React from 'react';
import data from './Accueil.json';
import './Accueil.css';

function Accueil() {
  return (
    <main>
      <section className="accueil-section">
        {/* Itération sur le tableau de paragraphes pour afficher chaque paragraphe */}
        {data.paragraphes.map((paragraphe, index) => (
          <p key={index} className='medium-text'>{paragraphe}</p>
        ))}
        <img src={`${process.env.PUBLIC_URL}/img/svg/lignes-accueil.svg`} alt="lignes décoratives" />
      </section>
      <img src={`${process.env.PUBLIC_URL}/img/svg/group-8.svg`} alt="Logo Videodrome" />
    </main>
  );
}

export default Accueil;
