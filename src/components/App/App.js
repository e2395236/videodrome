// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import Page404 from '../404/404';
import Admin from '../Admin/Admin';
import Film from '../Film/Film';
import Commentaires from '../Commentaires/Commentaires'; // Assurez-vous de créer ce composant
import './App.css';

function App() {
  const [estLog, setEstLog] = useState(localStorage.getItem('estLog') === 'true');

  

  useEffect(() => {
    const loggedIn = localStorage.getItem('estLog') === 'true';
    setEstLog(loggedIn);
  }, []);
  

  function login(usager) {
    localStorage.setItem('admin', usager); // où `usager` est le nom ou l'identifiant de l'usager

    // Supposons que la valeur "admin" déclenche la connexion
    if (usager === "admin") {
      setEstLog(true);
      localStorage.setItem('estLog', 'true');
      console.log('Connexion réussie');
    }
  }

  function logout() {
    setEstLog(false);
    localStorage.setItem('estLog', 'false');
  }
  


  // Envoyer les données à la base de données
  async function envoyerDonnees(url, donnees) {
    const reponse = await fetch(url, {
      method: 'POST', // ou 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donnees),
    });
    return reponse.json();
  }

  return (
    <Router>
      <Entete handleLogin={login} handleLogout={logout} estLog={estLog} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/films/:id" element={<Film envoyerDonnees={envoyerDonnees} estLog={estLog} />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/film/:id" element={Film} />

        <Route path="/admin" element={estLog ? <Admin /> : <Navigate to="/" />} />
        <Route path="/commentaires" element={<Commentaires estLog={estLog} envoyerDonnees={envoyerDonnees} />} />
      </Routes>
    </Router>
  );
}

export default App;
