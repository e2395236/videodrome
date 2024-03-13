import { Link } from 'react-router-dom';
import './ListeFilms.css';
import TuileFilm from '../TuileFilms/TuileFilm';
import { useEffect, useState } from 'react';
import Filtres from '../Filtres/Filtres';

function ListeFilms() {
const urlListeFilms = "https://four1f-node-api.onrender.com/films";

 // const urlListeFilms = "https://api-films-dxmx.onrender.com/api/films";

 

 const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
 const [listeFilms, setListeFilms] = useState([]);
 const [filtreActif, setFiltreActif] = useState(""); // Ajout d'un état pour filtreActif
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  fetch(urlFiltre)
    .then(response => response.json())
    .then(data => {
      setListeFilms(data);
      // Déplace setTimeout ici, à l'intérieur de .then()
      setTimeout(() => setIsLoaded(true), 100);
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
}, [urlFiltre]);


const tuileFilm = listeFilms.map((film) => (
  <div key={film.id} className={`tuileFilm ${isLoaded ? 'loaded' : ''}`}>
    <Link to={`/films/${film.id}`}>
      <TuileFilm data={film} filtreActif={filtreActif} />
    </Link>
  </div>
));




 function getDescriptionFiltre(filtre) {
  const mapFiltres = {
    titreAsc: 'Titre alphabétique (A-Z)',
    titreDesc: 'Titre alphabétique (Z-A)',
    anneeAsc: 'Année ascendant',
    anneeDesc: 'Année descendant',
    realAsc: 'Réalisateur alphabétique (A-Z)',
    realDesc: 'Réalisateur alphabétique (Z-A)',

  };


  return mapFiltres[filtre] || filtre;
}


return (
  <main>
    <aside>
      <Filtres setUrlFiltre={setUrlFiltre} setFiltreActif={setFiltreActif} />
    </aside>
    <section className="liste-films">
      {filtreActif && <h2>Filtre appliqué: {getDescriptionFiltre(filtreActif)}</h2>}
      <div className="container">
        {tuileFilm}
      </div>
    </section>
  </main>
);
}

export default ListeFilms;
