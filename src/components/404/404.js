import React from 'react';
import './404.css';

function Page404() {
  return (
    <main>

      <section >
 
      <img src={`${process.env.PUBLIC_URL}/img/svg/lignes-accueil.svg`} alt="lignes" />
 <div>
      <h1>404</h1>
      <p>Page non trouvée</p>
      </div>

      </section>
    </main>
  );
}

export default Page404;