// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import Page404 from './404'; // Assure-toi que le chemin d'importation est correct
import Film from '../Film/Film';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/entete" element={<Entete />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
