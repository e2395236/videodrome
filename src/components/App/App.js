// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// videodrome-2\src\components\App\App.js
import React from 'react';

import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import NotFound  from '../404/404';

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
        <Route path="/404" element={<NotFound />} />
      </Routes>
    
    </Router>
  );
}

export default App;
