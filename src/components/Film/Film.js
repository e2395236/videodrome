import { useParams } from 'react-router-dom';
import Entete from '../Entete/Entete';
import './Film.css';
import react,  { useState, useEffect, useContext } from 'react';
import TuileFilm from '../TuileFilms/TuileFilm';
import { AppContext } from '../App/App';







function Film(props) {
  let { id } = useParams();

  const context = useContext(AppContext);




 
  
  // Récupère l'identifiant du film depuis l'URL

  // Ici, tu peux utiliser l'identifiant pour charger les détails du film depuis ton API ou tes données
const urlFilm = "https://four1f-node-api.onrender.com/films/" + id;
const [film, setFilm] = useState({});

useEffect(() => {
  fetch(urlFilm)
    .then(response => response.json())
    .then(data => {
      setFilm(data);
    });
}, []);


let blocAjoutCommentaire;

if (context.estLog) {
  blocAjoutCommentaire = <div>
    <form>
      <input type="text" name="commentaire" id="commentaire" />
      <button type="submit" onClick={ajouterCommentaire}>Ajouter un commentaire</button>
    </form>
  </div>;

} else {
  blocAjoutCommentaire = <div>
    <p>Connectez-vous pour ajouter un commentaire</p>
  </div>;

}

function ajouterCommentaire() {
  console.log('Ajouter un commentaire');
}



// useEffect(() => {
  
//   fetch(urlFilm)
//     .then(response => response.json())
//     .then(data => {
      
//       setFilm(data);
//       console.log(data.notes);  


    
//     })

// }, []);



  async function soumettreNote() {
   // console.log('Soumettre note');

   let aNotes;

   if (!film.notes) {
    aNotes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   } else {
    aNotes = film.notes;
     film.notes.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
   }
   //console.log(aNotes);
     
   

    const oOptions = {
      method: 'PUT',
      headers: {
        
        "Content-Type": "application/json",
       // "Accept": "application/json"
      },

      body: JSON.stringify({notes: aNotes}),
    
    }

    let putNote = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);

        Promise.all([putNote, getFilm])
        .then(reponse => { reponse[1].json() })
        .then(data => {
          setFilm(data);
          console.log(putNote);
          console.log(getFilm);

        });

      }

      
  




  return (
    <div>
   
  
      <h2>{film && film.titre}</h2> 

            <h3>{film && film.realisation}</h3>
            {/* <img src={`img/${film.titreVignette}`} alt={film.titre}/> */}

  
     
            <p>{film && film.annee}</p>
            <p>{film && film.duree} minutes</p>
            <p>{film && film.resume}</p>
            <p>{film && film.notes}</p>
            <p>{film && film.description}</p>
            <p>{film && film.genres } </p> 
         

      <button onClick={soumettreNote}>Vote</button>

            {blocAjoutCommentaire}

     
    </div>
  );
}

export default Film;
