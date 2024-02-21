import { NavLink } from 'react-router-dom';
import './ListeFilms.css';
import TuileFilm from '../TuileFilms/TuileFilm';
import Entete from '../Entete/Entete';
import { useEffect, useState } from 'react';


function ListeFilms() {
  //const [etat, setEtat] = useState(true);

  const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  const [listeFilms, setListeFilms] = useState([]);



//const listeFilms = [
// {titre: 'Titanic Park II',realisateur: 'Joe Blo', resume: 'Le Ttitanic reprend du service en transportant des dinosaures', annee: 2020, duree: 220, image: 'https://via.placeholder.com/150' },
// {titre: 'I am a Hero',realisateur: 'Connor McDonald', resume: 'Le resume du film', annee: 2020, duree: 120, image: 'https://via.placeholder.com/150' },
 //{titre: 'Scream 17',realisateur: 'Kyle Shib', resume: 'Le resume du film', annee: 2020, duree: 120, image: 'https://via.placeholder.com/150' },
// {titre: 'Scream 18',realisateur: 'Wes Kraven', resume: 'Le resume du film', annee: 2024, duree: 100, image: 'https://via.placeholder.com/150' },
//];

useEffect(() => {
  
  console.log('rendu');

  fetch(urlListeFilms)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
})



//chaque tuile film doit etre à l'interieur d'une balise link
const tuileFilm = listeFilms.map((film, index) => {
  return (
    <NavLink key={index} to={`/film/${index}`}>
      <TuileFilm data={film} />
    </NavLink>
  );
});

console.log('rendu')





  




  return (
    
    <main>
     
      <Entete />
     <h2>Liste des films</h2> 
    
    <div>
    {tuileFilm}
    </div>
    </main>
  );
}

export default ListeFilms;