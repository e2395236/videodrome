import React, { useState, useEffect } from 'react';
import './Commentaires.css';
import { useParams } from'react-router-dom';


function Commentaires({ estLog, film }) {
    const [nouveauCommentaire, setNouveauCommentaire] = useState('');
    const [commentaires, setCommentaires] = useState(film.commentaires || []);
    const [erreur, setErreur] = useState('');
    const { id } = useParams();
    const urlPostCommentaire = `https://four1f-node-api.onrender.com/films/${id}/commentaires`;
  
    useEffect(() => {
     
      setCommentaires(film.commentaires || []);
    }, [film]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setErreur('');
  
      if (!film || !film.id) {
        setErreur('L\'identifiant du film est indéfini.');
     
        return;
      }
  
      if (!nouveauCommentaire.trim()) {
        setErreur('Le commentaire ne peut pas être vide.');
       
        return;
      }
  
      const commentaireData = {
        film: film.id,
        usager: localStorage.getItem('usagerNom') || "Inconnu",
        commentaire: nouveauCommentaire,
      };
  
      try {
        const reponse = await fetch(urlPostCommentaire, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(commentaireData),
        });
  
        if (!reponse.ok) {
          throw new Error('Échec de l\'envoi du commentaire');
        }
  
        const contentType = reponse.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Le format de la réponse n\'est pas JSON');
        }
  
        const commentairesAjoutes = await reponse.json(); // Cela peut être un objet ou un tableau
  
        // Si l'API renvoie un tableau de commentaires
        if (Array.isArray(commentairesAjoutes)) {
          setCommentaires([...commentaires, ...commentairesAjoutes]);
        } else { // Si l'API renvoie un seul commentaire
          setCommentaires([...commentaires, commentairesAjoutes]);
        }
  
        setNouveauCommentaire(''); // Réinitialiser le champ de saisie du commentaire
        console.log('Commentaire(s) ajouté(s)');
      } catch (erreur) {
        console.error('Erreur lors de l\'ajout du commentaire:', erreur);
        setErreur('Erreur lors de l\'ajout du commentaire: ' + erreur.message);
      }
    };
  
    // La suite de ton composant...

  

  return (
    <div className="commentaires-container">
      {estLog ? (
        <>
          <h2>Commentaires</h2>
          {commentaires.length > 0 ? (
            <ul>
              {commentaires.map((commentaire, index) => (
                <li key={index}><strong>{commentaire.usager}:</strong> {commentaire.commentaire}</li>
              ))}
            </ul>
          ) : <p>Aucun commentaire pour le moment.</p>}
          <form onSubmit={handleSubmit}>
            <textarea value={nouveauCommentaire} onChange={(e) => setNouveauCommentaire(e.target.value)} placeholder="Ajoutez un commentaire..." required />
            <button type="submit">Soumettre</button>
          </form>
          {erreur && <p className="erreur">{erreur}</p>}
        </>
      ) : <p>Connectez-vous pour voir les commentaires.</p>}
    </div>
  );
}

export default Commentaires;
