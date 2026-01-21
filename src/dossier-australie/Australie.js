import React from 'react';
import './Australie.css';
import { Link } from 'react-router-dom';

function Australie() {
  return (
    <div className="australie-container" data-aos="fade-up">
     
        <h1 className="australie-title">Australie 🇦🇺</h1>
        <p className="australie-subtitle">
          En préparation… photos + récit arrivent bientôt :)
        </p>

        <Link to="/destination" className="australie-back">
          ← Retour aux destinations
        </Link>
      </div>
    
  );
}

export default Australie;
