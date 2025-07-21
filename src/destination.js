import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';

function Destination() {
  return (
    <div className="destination-container">
      <h1 className="destination-title">Destination :</h1>


      <div className="cards-container">
        <Link to="/thailande" className="card thailande">
          Thaïlande
        </Link>
        

         <Link to="/australie" className="card australie">
          Australie
        </Link>


        <Link to="/bali" className="card bali">
          Bali
        </Link>



        <Link to="/singapour" className="card singapour">
          Singapour
        </Link>

      </div>
    </div>
  );
}

export default Destination;
