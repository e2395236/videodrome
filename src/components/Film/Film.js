import { useParams } from 'react-router-dom';
import Entete from '../Entete/Entete';
import TuileFilm from '../TuileFilms/TuileFilm';

function Film() {
  let { id } = useParams(); // Récupère l'identifiant du film depuis l'URL

  // Ici, tu peux utiliser l'identifiant pour charger les détails du film depuis ton API ou tes données

  return (
    <div>
      <Entete />
      {/* Affiche les détails du film ici */}
      <h1>Film ID: {id}</h1> {/* Exemple d'utilisation de l'ID */}

     
    </div>
  );
}

export default Film;
