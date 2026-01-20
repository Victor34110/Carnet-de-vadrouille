import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Destination from './destination';
import Thailande from './dossier-thailande/Thailande';
import Bali from './dossier-bali/Bali';
import Singapour from './dossier-singapore/Singapour';
import Australie from './dossier-australie/Australie';
import Contact from './Contact';


function App() {
  useEffect(() => { /* effet de texte*/
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>  {/* Calque sombre  */}
<nav className="navbar">
  <div className="navbar__inner">
    <Link to="/" className="navbar__brand">Carnet de Vadrouille</Link>

    <div className="navbar__links">
      <Link to="/" className="navbar__link">Accueil</Link>
      <Link to="/destination" className="navbar__link">Destinations</Link>
      <Link to="/Contact" className="navbar__link navbar__cta">Contact</Link>
    </div>
  </div>
</nav>

      <Routes>
        <Route path="/" element={

          <header className="App-header">
            <div className="overlay-app"></div> {/* Calque sombre  */}

            <h1 className="title-app">Bienvenue dans mon Carnet de Vadrouille</h1>  {/* Titre  */}

            <div className="subtitle-app">  {/* Sous-titre  */}
              <strong>☀️ Découvrez mes voyages à travers le monde ☀️</strong></div> 
            <div className="subtitle-app">  {/* Sous-titre  */}
              <strong> 📌 Ce projet a été réalisé pour combiner ma passion ainsi que mes compétences en développement web📌 </strong> 
            </div>


            <div className="main-text">  {/* Texte principal  */}
                
                <p><strong> Il prend la forme d’un blog interactif développé avec React, servant à la fois de carnet de voyage et de vitrine technique.</strong></p>
                <p><strong>✦ Vous pouvez retrouver l'ensemble du projet dans l'onglet contact ✦</strong></p>
            </div>
            
          </header>
        } />



        <Route path="/destination" element={<Destination />}/>
        <Route path="/thailande" element={<Thailande />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Bali" element={<Bali />}/>
        <Route path="/Singapour" element={<Singapour/>}/>
        <Route path="/Australie" element={<Australie/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;   {/* Projet créé par Victor Galian – Carnet de Vadrouille © 2025*/}
