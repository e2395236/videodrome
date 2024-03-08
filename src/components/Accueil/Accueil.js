
import './Accueil.css';
import Entete from '../Entete/Entete';
import React from 'react';
import data from './Accueil.json';




//import { useState } from 'react';






function Accueil() {

 
 

 
  
  return (
    <main>

    <Entete />
   
  
    <div className="wrapper">

      <p>{data}</p>
     
  
    </div>

  </main>
  );
}

export default Accueil;