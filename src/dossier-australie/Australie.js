import React from 'react';
import './Australie.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Australie() {
  return (
    <div className="australie-wrapper">
      <Navbar title="Carnet de Vadrouille" variant="australie" />
      <div className="australie-container" data-aos="fade-up">

        <div className="australie-content">
          <h1 className="australie-title">Australie 🇦🇺</h1>
          <p className="australie-subtitle">
            En préparation… photos + récit arrivent bientôt :)
          </p>

          <Link to="/destination" className="australie-back">
            ← Retour aux destinations
          </Link>
        </div>
      </div>
    </div>

  );
}

export default Australie;
