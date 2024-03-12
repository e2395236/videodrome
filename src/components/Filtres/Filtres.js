import { useEffect, useState } from 'react';
import './Filtres.css';

function Filtres(props) {
  const [filtreActif, setFiltreActif] = useState("");

  const changerFiltre = (nouveauFiltre, cleFiltre) => {
    props.setUrlFiltre(nouveauFiltre);
    setFiltreActif(cleFiltre);
  };

  return (
    <ul className="menu-filtres">
      <li className="menu-item">
        Titre
        <ul className="sous-menu">
          <li className={filtreActif === "titreAsc" ? "active" : ""} onClick={() => changerFiltre('data/titre-asc.json', 'titreAsc')}>
            <button>A-Z</button>
          </li>
          <li className={filtreActif === "titreDesc" ? "active" : ""} onClick={() => changerFiltre('data/titre-desc.json', 'titreDesc')}>
            <button>Z-A</button>
          </li>
        </ul>
      </li>
      <li className="menu-item">
        Année
        <ul className="sous-menu">
          <li className={filtreActif === "anneeAsc" ? "active" : ""} onClick={() => changerFiltre('data/annee-asc.json', 'anneeAsc')}>
            <button>Plus récent</button>
          </li>
          <li className={filtreActif === "anneeDesc" ? "active" : ""} onClick={() => changerFiltre('data/annee-desc.json', 'anneeDesc')}>
            <button>Plus ancien</button>
          </li>
        </ul>
      </li>
      <li className="menu-item">
        Réalisateur
        <ul className="sous-menu">
          <li className={filtreActif === "realAsc" ? "active" : ""} onClick={() => changerFiltre('data/realisation-asc.json', 'realAsc')}>
            <button>A-Z</button>
          </li>
          <li className={filtreActif === "realDesc" ? "active" : ""} onClick={() => changerFiltre('data/realisation-desc.json', 'realDesc')}>
            <button>Z-A</button>
          </li>
        </ul>
      </li>
      {/* Assure-toi de remplir les genres avec la logique appropriée */}
      <li className="menu-item">Genre
        <ul className="sous-menu">
          {/* Ajoute ici les éléments pour les genres, avec la logique onClick correspondante */}
        </ul>
      </li>
    </ul>
  );
}

export default Filtres;

