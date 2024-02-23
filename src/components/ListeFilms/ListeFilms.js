import { Link } from 'react-router-dom';
import './ListeFilms.css';
import TuileFilm from '../TuileFilms/TuileFilm';
import Entete from '../Entete/Entete';
import { useEffect, useState } from 'react';
import Filtres from '../Filtres/Filtres';


function ListeFilms() {


 // const urlListeFilms = "https://four1f-node-api.onrender.com/films";
 const urlListeFilms = "data/titre-desc.json";
 const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
 const [listeFilms, setListeFilms] = useState([]);



 useEffect(() => {
 
  fetch(urlFiltre)
    .then(response => response.json())
    .then(data => {
      setListeFilms(data);

     
  
    });
}, [urlFiltre]);

  //chaque tuile film doit etre à l'interieur d'une balise link


  const tuileFilm = listeFilms.map((film, index) => {
    return (
      <Link key={film.id} data={index} to={`/films/${film.id}`}>


        <TuileFilm data={film} />
      </Link>
    );
  });
  



  
  return (
    <main>
      <Entete />


      <Filtres urlFiltre={urlFiltre} setUrlFiltre={setUrlFiltre} />



      <h2>Liste des films</h2>
  
      <div className="container">
        <div className="row">
          {tuileFilm}
        </div>
      </div>
    </main>
  );


}

export default ListeFilms;