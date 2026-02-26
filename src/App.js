import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './Navbar';
import 'aos/dist/aos.css';

import Destination from './Destination';
import Thailande from './dossier-thailande/Thailande';
import Bali from './dossier-bali/Bali';
import Singapour from './dossier-singapore/Singapour';
import Australie from './dossier-australie/Australie';
import Contact from './Contact';
import palmier from './palmier-bali.jpeg';


import boussole from './hero-page/boussole.png';
import timbre from './hero-page/timbre.png';
import heroPalmier from './hero-page/palmier.png';
import terre from './hero-page/terre.png';
import valise from './hero-page/valise.png';
import holiday from './hero-page/holiday.png';
import kangaroo from './hero-page/kangaroo.png';
import van from './hero-page/van.png';
import avion from './hero-page/avion.png';
import wildafree from './hero-page/wildafree.png';
import visa from './hero-page/visa.png';
import journal from './hero-page/extrait_journal.png';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>



      <Routes>
        <Route path="/" element={
          <header className="App-header">

            <Navbar title="Carnet de Vadrouille" variant="default" />

            <div className="hero">



              <div className="pushpin"></div>


              <div className="scrapbook-item scrapbook-photo2">
                <img src={boussole} alt="Boussole" />
              </div>

              <div className="scrapbook-item scrapbook-photo3">
                <img src={visa} alt="timbre" />
              </div>


              <div className="scrapbook-item scrapbook-photo4">
                <img src={heroPalmier} alt="palmier" />
              </div>


              <div className="scrapbook-item scrapbook-photo5">
                <img src={terre} alt="terre" />
              </div>


              <div className="scrapbook-item scrapbook-photo6">
                <img src={valise} alt="Valise" />
              </div>


              <div className="scrapbook-item scrapbook-photo7">
                <img src={holiday} alt="Holidays" />
              </div>


              <div className="scrapbook-item scrapbook-photo8">
                <img src={timbre} alt="timbre" />
              </div>

              <div className="scrapbook-item scrapbook-photo9">
                <img src={kangaroo} alt="Kangaroo" />
              </div>


              <div className="scrapbook-item scrapbook-photo10">
                <img src={van} alt="Van" />
              </div>


              <div className="scrapbook-item scrapbook-photo11">
                <img src={avion} alt="Avion" />
              </div>


              <div className="scrapbook-item scrapbook-photo12">
                <img src={wildafree} alt="Wild Free" />
              </div>

              <div className="scrapbook-item scrapbook-photo13">
                <img src={journal} alt="Journal" />
              </div>


              <div className="stamp-badge">
                GLOBE<br />TROTTER<br />★
              </div>


              <div className="polaroid-photo">
                <img src={palmier} alt="Palmier Bali" />
                <div className="polaroid-caption">Bali, Indonésie</div>
              </div>


              <h1 className="title-app">
                Carnet de Vadrouille
              </h1>


              <div className="stamp-text-container">
                <span className="stamp-text">LET'S EXPLORE</span>
              </div>


              <div className="scrapbook-content">
                <div className="tape-piece"></div>

                <p className="handwritten-text">
                  Bienvenue dans mon journal de voyage !
                </p>

                <p className="handwritten-text">
                  Ici je partage mes <strong>aventures</strong>, mes découvertes et
                  tous les moments qui ont marqué mes voyages à travers le monde.
                </p>

                <p className="handwritten-text handwritten-text--kicker">
                  📍 Thaïlande • Bali • Singapour • Australie
                </p>

                <div className="hero-actions">
                  <Link to="/destination" className="hero-btn hero-btn--left">
                    Mes destinations
                  </Link>

                  <Link to="/Contact" className="hero-btn hero-btn--right">
                    Contact
                  </Link>
                </div>

              </div>

              <div className="mini-stamp mini-stamp--hero">
                VOYAGE 2025
              </div>

            </div>
          </header>
        } />




        <Route path="/destination" element={<Destination />} />
        <Route path="/thailande" element={<Thailande />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bali" element={<Bali />} />
        <Route path="/Singapour" element={<Singapour />} />
        <Route path="/Australie" element={<Australie />} />

      </Routes>
    </Router>
  );
}

export default App;
// Projet créé par Victor Galian – Carnet de Vadrouille © 2025

