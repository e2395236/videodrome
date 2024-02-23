import './Filtres.css';
import { useEffect, useState } from 'react';





function Filtres(e) {

    const urlListeFilms = "data/titre-desc.json";
    const [urlFiltre, setUrlFiltre] = useState (urlListeFilms) ;


   
  
    
      function anneeAsc(e) {
        setUrlFiltre ('data/anne-asc.json') 
       console.log ('clic sur le bouton anneeAsc');





      }
    
    
      function anneeDesc() {
      
        setUrlFiltre ('data/anne-desc.json');
       
      }
    
      function realisateurAsc(e) {
      
        setUrlFiltre('data/realisation-asc.json');
      }


      function realisateurDesc() {
          setUrlFiltre ('data/realisateur-desc.json');
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
      

  <ul>
    <li onClick={(e) => {anneeAsc(e); filtreActif() }}> <button>Années - croissante (Année - Année)</button></li> 
    <li onClick={(e) => {anneeDesc(e) }}> <button>Années - croissante inverse (Année - Année)</button></li>
  <li onClick={(e) => {realisateurAsc(e); filtreActif() }}> <button>Realisateurs - alphabetique (A - Z)</button></li> 
  <li onClick={(e) => {realisateurDesc(e) }}> <button>Realisateurs - alphabetique inverse (Z - A)</button></li>

</ul>

  )

  }

    export default Filtres;