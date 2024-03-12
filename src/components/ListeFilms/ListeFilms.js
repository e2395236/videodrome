import { Link } from 'react-router-dom';
import './ListeFilms.css';
import TuileFilm from '../TuileFilms/TuileFilm';
import { useEffect, useState } from 'react';
import Filtres from '../Filtres/Filtres';


function ListeFilms() {


 const urlListeFilms = "https://four1f-node-api.onrender.com/films";
 //const urlListeFilms = "data/titre-desc.json";
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

  const tuileFilm = listeFilms.map((film) => {
    return (
      <div key={film.id} className="tuileFilm">
        <Link to={`/films/${film.id}`}>
          <TuileFilm data={film} />
        </Link>
      </div>
    );
  });
  

  
  
  



  
  return (
    <main>
          <aside>
      <Filtres urlFiltre={urlFiltre} setUrlFiltre={setUrlFiltre} />
      </aside>

      <section>

      <div className="container">
          {tuileFilm}
        </div>
 
      </section>
    </main>

  );
  }  

export default ListeFilms;