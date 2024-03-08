import { Link } from 'react-router-dom';
import './ListeFilms.css';
import TuileFilm from '../TuileFilms/TuileFilm';
import Entete from '../Entete/Entete';
import { useEffect, useState } from 'react';
import Filtres from '../Filtres/Filtres';


function ListeFilms() {


 const urlListeFilms = "https://api-films-dxmx.onrender.com/api/films";
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
   

    
        

      <div className="film-card" key={film.id}>
        <Link to={`/films/${film.id}`}>
          <TuileFilm data={film} />
        </Link>
      </div>
  
    
    );
  });
  
  
  



  
  return (
  <div>
    <Entete />
    <main className=''>

   


    <section>
   

      <Filtres urlFiltre={urlFiltre} setUrlFiltre={setUrlFiltre} />
    

  
      <div className="container">

        
      

   

      <h2>Liste des films</h2>

        <div className="grille-films">
            

          
          {tuileFilm}
        </div>
      </div>
      </section>
    </main>
    </div>
  );
  }  

export default ListeFilms;