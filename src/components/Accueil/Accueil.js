
import './Accueil.css';

import React from 'react';
import data from './Accueil.json';




//import { useState } from 'react';






function Accueil() {

 
 

 
  
  return (
    <main>

      <section className="accueil-section">
      <p className='medium-text'>{data}</p>
      <img src={`${process.env.PUBLIC_URL}/img/svg/lignes-accueil.svg`} alt="lignes" />
      </section>



<img src={`${process.env.PUBLIC_URL}/img/svg/group-8.svg`} alt="videodrome" />


 

 
     


  </main>
  );
}

export default Accueil;