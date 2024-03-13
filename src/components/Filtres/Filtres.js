import { useEffect, useState } from 'react';
import './Filtres.css';

function Filtres(props) {
  const [filtreActif, setFiltreActif] = useState("");
  // const genres = ['Comédie', 'Drame', 'Horreur', 'Action'];



  const changerFiltre = (typeFiltre, direction) => {
    const url = `https://four1f-node-api.onrender.com/films?orderBy=${typeFiltre}&orderDirection=${direction}`;
    props.setUrlFiltre(url); // Utilise l'URL construite pour la requête API
    props.setFiltreActif(`${typeFiltre}${direction}`); // Met à jour filtreActif dans le composant parent
  };
  


  
  
  

  return (
		<ul className="menu-filtres">
			<li className="menu-item">
				Titre
				<ul className="sous-menu">
					<li
						className={filtreActif === "titreAsc" ? "active" : ""}
						onClick={() => changerFiltre("titre", "asc")}>
						<button>A-Z</button>
					</li>
					<li
						className={filtreActif === "titreDesc" ? "active" : ""}
						onClick={() => changerFiltre("titre", "desc")}>
						<button>Z-A</button>
					</li>
				</ul>
			</li>

			<li className="menu-item">
				Année

				<ul className="sous-menu">
					<li
						className={filtreActif === "anneeAsc" ? "active" : ""}
						onClick={() => changerFiltre("annee", "Desc")}>
						<button>Plus récent</button>
					</li>
					<li
						className={filtreActif === "anneeDesc" ? "active" : ""}
						onClick={() => changerFiltre("annee", "Asc")}>
						<button>Plus ancien</button>
					</li>
				</ul>

			</li>
			<li className="menu-item">
				Réalisateur

				<ul className="sous-menu">
					<li
						className={filtreActif === "realAsc" ? "active" : ""}
						onClick={() =>
							changerFiltre("realisation", "Asc")}>
						<button>A-Z</button>
					</li>
					<li
						className={filtreActif === "realDesc" ? "active" : ""}
						onClick={() =>
							changerFiltre("realisation", "Desc")
						}
					>
						<button>Z-A</button>
					</li>
				</ul>

			</li>

			{/* <li className="menu-item">
				Genre
				<ul className="sous-menu">
					{genres.map((genre, index) => (
						<li
							key={index}
							className={filtreActif === genre ? "active" : ""}
							onClick={() =>
								changerFiltre(`data/${genre.toLowerCase()}.json`, genre)
							}
						>
							<button>{genre}</button>
						</li>
					))}
				</ul>
        
			</li> */}
		</ul>
	);
}

export default Filtres;

