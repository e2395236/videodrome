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

    fetch(urlFiltre).then(response => response.json()).then(data => {

      console.log(data);

      setListeFilms(data);
    });

  }, [urlFiltre]);

  //chaque tuile film doit etre à l'interieur d'une balise link


  const tuileFilm = listeFilms.map((film, index) => {
    return (
      <Link key={index} data={film} to={`/film/${film.id}}`}>
        <TuileFilm data={film} />
      </Link>
    );
  });
  

  function filtre (e) {
    //console.log(e.target);
    //appelle la fonction filtre au lieu de onClick
    const titreAlphabetique = e.target.value;
    setUrlFiltre('data/realisation-asc.json');
    //setUrlFilms('data/anne-asc.json');
    //setUrlFilms('data/realisation-desc.json');
    //setUrlFilms('data/anne-desc.json');
    //setUrlFilms('data/titre-asc.json');
    //setUrlFilms('data/titre-desc.json');

    //une seule fonction qui gere tous les films
  }

  function filtreActif () {
    //faire la gestion du filtre actif
    // Gérer le filtre actif en mettant en surbrillance visuelle l'option sélectionnée
    // Ajouter une classe CSS pour indiquer visuellement l'option active
    // Mettre en évidence l'option sélectionnée avec un style différent
    // Par exemple, changer la couleur de fond ou la couleur du texte
    // Implémenter la logique pour activer le filtre sélectionné
    // Mettre en place un mécanisme pour désactiver les autres filtres
    // Utiliser des classes CSS pour rendre le filtre actif distinct des autres


  }

  
  return (
    <main>
      <Entete />

      <Filtres filtre={filtre} /> 



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