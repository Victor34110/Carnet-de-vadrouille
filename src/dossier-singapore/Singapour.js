import React, { useState, useEffect } from "react";
import "./Singapour.css";
import Navbar from "../Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

import airport from "./pictures/airport.jpeg";
import capsule from "./pictures/capsule.jpeg";
import fondsingapourr from "./pictures/fondsingapourr.jpg";
import lv from "./pictures/louis-vuitton.jpg";
import marina from "./pictures/marina.jpeg";
import merlion from "./pictures/merlion.jpeg";
import pool from "./pictures/pool.jpeg";
import restaurant from "./pictures/restaurant.jpeg";
import towers from "./pictures/towers.jpeg";
import gardens from "./pictures/gardens.jpeg";

function Singapour() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const singaporeCarousel = [
    {
      src: gardens,
      alt: "Gardens by the Bay",
      caption: "Les célèbres Supertree Grove"
    },
    {
      src: marina,
      alt: "Marina Bay Sands",
      caption: "Marina Bay Sands"
    },
    {
      src: airport,
      alt: "Changi Airport Jewel",
      caption: "Le Jewel Changi Airport"
    },
    {
      src: pool,
      alt: "Infinity Pool Marina Bay",
      caption: "Infinity Pool Marina Bay"
    },
    {
      src: merlion,
      alt: "Le Merlion",
      caption: "Le Merlion"
    },
    {
      src: towers,
      alt: "Skyline de Singapour",
      caption: "La skyline de Singapour"
    },
    {
      src: capsule,
      alt: "Capsule Hotel",
      caption: "Capsule Hotel"
    },
    {
      src: restaurant,
      alt: "Street Food Singapour",
      caption: "Restaurant sur marina Bay"
    },
    {
      src: lv,
      alt: "Louis Vuitton Island",
      caption: "La boutique Louis Vuitton sur l'eau"
    },
    {
      src: fondsingapourr,
      alt: "Vue panoramique",
      caption: "Vue imprenable sur la baie"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === singaporeCarousel.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? singaporeCarousel.length - 1 : prev - 1));
  };

  return (
    <div className="singapore-page">
      <Navbar title="Carnet de Vadrouille" variant="singapore" />

      <div className="singapore-container">
        <div className="singapore-text" data-aos="fade-up">
          <h1 className="singapore-title">Singapour</h1>

          <div className="subtitle-app-sing">
            <strong>Singapour, la vitrine technologique de l’Asie !</strong>
          </div>

          <p className="intro-text">
            <em>Souvent surnommée la Côte d’Azur de l’Asie, Singapour incarne la modernité à son paroxysme.</em>
          </p>

          <p>
            Ce petit État insulaire, à la pointe de l’innovation urbaine et écologique, s’impose comme un modèle mondial en matière de développement technologique, d’architecture futuriste et de gestion intelligente de l’espace.
            Entre nature recréée, infrastructures ultra-connectées et design visionnaire, Singapour fascine autant qu’elle inspire.
          </p>
        </div>

        {/* Custom Carousel Style Thailande */}
        <div className="thailand-carousel-container" data-aos="fade-up">
          <div className="thailand-carousel">
            {singaporeCarousel.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}

            <button className="carousel-control prev" onClick={prevSlide} aria-label="Précédent">
              ‹
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Suivant">
              ›
            </button>

            <div className="carousel-dots">
              {singaporeCarousel.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="carousel-caption-bottom">
            <p>{singaporeCarousel[currentSlide].caption}</p>
          </div>
        </div>

        <div className="singapore-text" data-aos="fade-up">
          <div className="subtitle-app-sing">
            <strong>Que faire à Singapour ?</strong>
          </div>

          <p>
            C’est lors de ma fin de voyage d’australie, que j’ai choisi de terminer mon voyage par une escale à Singapour.
          </p>

          <p>
            Parmi les expériences uniques à vivre à Singapour, je vous recommande vivement de <strong>passer une nuit dans une capsule.</strong>
            Cet hébergement futuriste, peu commun en Europe, vous plonge immédiatement dans l’ambiance moderne et avant-gardiste de la ville.
          </p>

          <p>
            Montez ensuite au sommet de l’emblématique <strong>Marina Bay Sands</strong>, cet impressionnant bâtiment en forme de bateau posé sur trois tours.
            Là-haut, un bar/restaurant panoramique vous offre une vue spectaculaire sur toute la ville.
          </p>

          <p>
            Autre arrêt incontournable : <strong>les Supertree Grove</strong>, ces immenses arbres artificiels qui s’illuminent une fois la nuit tombée.
            Ils symbolisent parfaitement la fusion entre nature et haute technologie, et offrent un spectacle à la fois visuel et écologique, absolument à voir.
          </p>

          <p>
            Et pour conclure votre séjour en beauté, ne partez pas sans passer par <strong>Changi Airport</strong>, souvent désigné comme le plus bel aéroport du monde.
            Sa fontaine en forme de vortex, nichée au cœur d’un jardin tropical intérieur, est <strong>un véritable chef-d’œuvre.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Singapour;