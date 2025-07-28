import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Destination from './destination';
import Thailande from './dossier-thailande/Thailande';
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

      <nav style={{ padding: '12px', backgroundColor: '#040405ff' }}>    {/* Calque sombre  */}  
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Accueil</Link>  
        <Link to="/destination" style={{ color: 'white', marginRight: '15px' }}>Destination</Link>
        <Link to="/Contact" style={{ color: 'white' }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={

          <header className="App-header">
            <div className="overlay-app"></div> {/* Calque sombre  */}
            <h1 className="title-app">Bienvenue dans mon Carnet de Vadrouille</h1>  {/* Titre  */}
            <p className="subtitle-app">  {/* Sous-titre  */}
              <strong>☀️ Découvrez mes voyages à travers le monde ☀️</strong>
            </p>
            <div className="home-content-app"> {/* Encadré  */}
              <div className="main-text">  {/* Texte principal  */}
                <p> 📌 Ce projet a été réalisé pour combiner ma passion ainsi que mes compétences en développement web. </p>
                <p> Il prend la forme d’un blog interactif développé avec React, servant à la fois de carnet de voyage et de vitrine technique.</p>
                <p>Vous pouvez retrouver l'ensemble du projet dans l'onglet contact</p>
              </div>
            </div>
          </header>
        } />

        <Route path="/destination" element={<Destination />} />
        <Route path="/thailande" element={<Thailande />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
