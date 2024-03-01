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

export const AppContext = React.createContext({});



function App() {

  const [estLog, setEstLog] = useState(true);
  const [logged, setLogged] = useState({estLog: true, usager: ''});

    function login (e) {
     e.preventDefault()
     //console.log("login")

    if (e.target.usager.value == "admin") {
      e.target.reset()
    setLogged({estLog: true, usager: e.target.usager.value});

    }
  
  }


  return (
    <AppContext.Provider value={logged}>


    <Router>

      <Entete handleLogin={login}  logged={logged} />

      <Routes>
        <Route path="/login" element={<login />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/entete" element={<Entete />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/films/:id" element={<Film logged={logged}  />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/admin" element={estLog ? <Admin /> : <Navigate to="/" />} />
      </Routes>
    
    </Router>
          
    </AppContext.Provider>
  );
}

export default App;
