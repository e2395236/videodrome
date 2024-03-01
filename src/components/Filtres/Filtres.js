import { useEffect, useState } from 'react';

function Filtres(props) {
  const [filtreActif, setFiltreActif] = useState("");

  const changerFiltre = (nouveauFiltre, cleFiltre) => {
      props.setUrlFiltre(nouveauFiltre);
      setFiltreActif(cleFiltre);
  };

    return (
        <ul >
            <li className={filtreActif === "anneeAsc" ? "active" : ""}   onClick={() => changerFiltre('data/annee-asc.json', 'anneeAsc')}> <button>Années - croissante (Année - Année)</button></li>
            <li className={filtreActif === "anneeDesc" ? "active" : ""} onClick={() => changerFiltre('data/annee-desc.json', 'anneeDesc')}> <button>Années - décroissante (Année - Année)</button></li>
            <li className={filtreActif === "realAsc" ? "active" : ""} onClick={() => changerFiltre('data/realisation-asc.json', 'realAsc')}> <button>Réalisateurs - alphabétique (A - Z)</button></li>
            <li className={filtreActif === "realDesc" ? "active" : ""} onClick={() => changerFiltre('data/realisation-desc.json', 'realDesc')}> <button>Réalisateurs - alphabétique inverse (Z - A)</button></li>
            <li className={filtreActif === "titreAsc" ? "active" : ""} onClick={() => changerFiltre('data/titre-asc.json', 'titreAsc')}> <button>Titre - croissant (A - Z)</button></li>
            <li className={filtreActif === "titreDesc" ? "active" : ""} onClick={() => changerFiltre('data/titre-desc.json', 'titreDesc')}> <button>Titre - décroissant (Z - A)</button></li>
            
        </ul>
    );
}

export default Filtres;
