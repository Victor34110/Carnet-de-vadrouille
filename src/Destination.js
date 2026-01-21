import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';

function Destination() {
  return (
    <div className="destination-container">
      <div className="destination-overlay" />

      <header className="destination-header">
        <h1 className="destination-title">Destinations</h1>
        <p className="destination-subtitle">
          Une sélection de voyages, photos et récits — clique sur une carte pour explorer :)
        </p>
      </header>

      <section className="destination-grid">
        <Link to="/thailande" className="destination-Card destination-Card--thailande">
          <span className="destination-Card-tag">Asie</span>
          <span className="destination-Card-name">Thaïlande</span>
          <span className="destination-Card-secret">Découvrir →</span>
        </Link>

        <Link to="/australie" className="destination-Card destination-Card--australie">
          <span className="destination-Card-tag">Océanie</span>
          <span className="destination-Card-name">Australie</span>
          <span className="destination-Card-secret">Découvrir →</span>
        </Link>

        <Link to="/bali" className="destination-Card destination-Card--bali">
          <span className="destination-Card-tag">Indonésie</span>
          <span className="destination-Card-name">Bali</span>
          <span className="destination-Card-secret">Découvrir →</span>
        </Link>

        <Link to="/singapour" className="destination-Card destination-Card--singapour">
          <span className="destination-Card-tag">City trip</span>
          <span className="destination-Card-name">Singapour</span>
          <span className="destination-Card-secret">Découvrir →</span>
        </Link>
      </section>
    </div>
  );
}

export default Destination;
