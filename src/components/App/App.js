// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// videodrome-2\src\components\App\App.js
import React from 'react';

import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import NotFound  from '../404/404';
import { useState } from 'react';
import Admin from '../Admin/Admin';
import { Navigate } from'react-router-dom';
import Film from '../Film/Film';
import './App.css';



function App() {

  const [estLog, setEstLog] = useState(false);

    function login (e) {
     e.preventDefault()
     //console.log("login")

    if (e.target.usager.value === "admin") {
    setEstLog(prevEstLog => !prevEstLog);

    }
  
  }


  return (

    <Router>
      <Entete handleLogin={login} estLog={estLog} />
      <Routes>
  
        <Route path="/login" element={<login />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/entete" element={<Entete />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="/admin" element={estLog ? <Admin /> : <Navigate to="/" />} />
      </Routes>
    
    </Router>
  );
}

export default App;
