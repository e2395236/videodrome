
import './Accueil.css';
import Entete from '../Entete/Entete';
import React from 'react';
import data from './Accueil.json';




//import { useState } from 'react';






function Accueil() {

 
 

 
  
  return (
    <main>


   
  
    <div>

      <p className='medium-text'>{data}</p>
     
  
    </div>

  </main>
  );
}

export default Accueil;