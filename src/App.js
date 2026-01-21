import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Destination from './Destination';
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
  <div className="navbar-container">
    <Link to="/" className="navbar-title">Carnet de Vadrouille</Link>

    <div className="navbar-links">
      <Link to="/" className="navbar-link">Accueil</Link>
      <Link to="/destination" className="navbar-link">Destinations</Link>
      <Link to="/Contact" className="navbar-link navbar-contact">Contact</Link>
    </div>
  </div>
</nav>

      <Routes>
       <Route path="/" element={
  <header className="App-header">
    <div className="overlay-app"></div>

    <div className="hero">

      <h1 className="title-app">
        Bienvenue dans mon Carnet de Vadrouille
      </h1>

      <p className="subtitle-app">
        ☀️ Découvrez mes voyages à travers le monde — photos, récits et coups de cœur.
      </p>

      <div className="hero-card">
        <p className="hero-text">
          Ce projet prend la forme d’un <strong>blog interactif</strong> développé avec <strong>React</strong>,
          à la fois carnet de voyage et vitrine technique.
        </p>
        <p className="hero-text hero-text--muted">
          ✦ Retrouvez l’ensemble du projet et les liens utiles dans l’onglet <strong>Contact</strong>. ✦
        </p>

        <div className="hero-actions">
          <Link to="/destination" className="hero-btn hero-btn--left">
            Explorer les destinations
          </Link>

          <Link to="/Contact" className="hero-btn hero-btn--right">
            Me contacter
          </Link>
        </div>
      </div>
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
