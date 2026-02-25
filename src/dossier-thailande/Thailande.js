import React from 'react';
import './Thailande.css';
import Navbar from '../Navbar';


import bangkok4 from './pictures/bangkok4.jpg';
import bangkok5 from './pictures/bangkok5.jpg';
import bangkok2 from './pictures/bangkok2.jpg';
import bangkok3 from './pictures/bangkok3.jpg';
import mangrove from './pictures/mangrove.jpg';
import kohPhiPhi from './pictures/koh-phi-phi.jpg';
import kohLanta1 from './pictures/koh-lanta1.jpg';
import kohLanta2 from './pictures/koh-lanta2.jpg';
import sunsetthai from './pictures/sunsetthai.jpg';
import khantiangBeach from './pictures/khantiang-beach.jpeg';
import khlongChakBeach from './pictures/khlon-chak.jpg';
import bambooBeach from './pictures/bamboo-beach.jpeg';
import kohRokPhoto from './pictures/koh-rok.jpeg';
import fourIslandsPhoto from './pictures/four-islands.jpg';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Thailande() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const lantaCarousel = [
    {
      src: sunsetthai,
      alt: "Coucher de soleil Koh Lanta",
      caption: "Le coucher de soleil depuis Khantiang Beach"
    },
    {
      src: kohLanta2,
      alt: "Plage Koh Lanta",
      caption: "tempete sur la plage de Khlong Chak"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === lantaCarousel.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? lantaCarousel.length - 1 : prev - 1));
  };



  return (
    <div className="thailand-page">

      <Navbar title="Carnet de Vadrouille" variant="thailand" />

      {/* ----- HERO SECTION ---- */}
      <section className="thailand-hero">
        <div className="thailand-hero-overlay" />
        <div className="thailand-hero-grain" />

        <div className="thailand-hero-content" data-aos="fade-up" data-aos-delay="200">
          <h1 className="thailand-title">Thaïlande</h1>
          <div className="thailand-subtitle">
            <p>
              15 jours entre tradition et paradis tropical — De l'effervescence de Bangkok
              aux plages secrètes de Koh Lanta.
            </p>
          </div>

          <div className="thailand-hero-stats">
            <div className="thailand-stat" data-aos="fade-up" data-aos-delay="400">
              <span className="stat-number">15</span>
              <span className="stat-label">Jours</span>
            </div>
            <div className="thailand-stat" data-aos="fade-up" data-aos-delay="500">
              <span className="stat-number">4</span>
              <span className="stat-label">Destinations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ITINÉRAIRE ===== */}
      <section className="thailand-itinerary" data-aos="fade-up">
        <div className="thailand-container">
          <div className="section-header">
            <span className="section-label">La Route</span>
            <h2>Notre Itinéraire</h2>
          </div>
          <div className="itinerary-content">
            <p className="lead-text">
              Plusieurs options s'offrent à vous : atterrir à <strong>Bangkok</strong>, la capitale
              (souvent plus économique), ou directement sur une île du sud comme <strong>Phuket</strong>.
            </p>
            <p>
              De notre côté, nous avons choisi de débuter notre aventure à Bangkok, où nous avons
              séjourné 3 nuits pour nous immerger dans l'énergie vibrante de la capitale.
            </p>
            <p>
              Ensuite, vol intérieur d'environ 1h jusqu'à <strong>la province de Krabi</strong>,
              porte d'entrée vers les plages paradisiaques du sud. Après 4 nuits à Ao Nang,
              direction <strong>Koh Lanta</strong> en minivan (2h de trajet), une île magnifique
              et authentique où nous avons posé nos valises pendant 6 nuits.
            </p>
          </div>
        </div>
      </section>


      {/* ----- 01 — BANGKOK ----- */}
      <section className="thailand-destination bangkok" data-aos="fade-up">
        <div className="thailand-container">

          <div className="destination-header-inline">
            <div>
              <h2>Bangkok</h2>
              <p className="destination-tagline">L'effervescence de la capitale</p>
            </div>
          </div>

          <div className="dual-column">
            <div className="column-text">
              <p className="intro-text">
                Dès votre arrivée, vous serez plongés dans l'ambiance bouillonnante de cette ville
                ultra dynamique : circulation intense, chaleur humide, foule, odeurs de street food…
                Bangkok ne laisse pas indifférent !
              </p>

              <div className="info-card" data-aos="fade-right">
                <h3>Conseil pratique</h3>
                <p>
                  Si vous atterrissez ou repartez de Bangkok, profitez-en pour y rester
                  <strong> 2 à 3 jours</strong>. C'est parfait pour vous remettre du décalage
                  horaire et vous acclimater en douceur à l'Asie.
                </p>
                <p>
                  <strong>Hébergement :</strong> choisissez un hôtel proche du centre pour avoir
                  facilement accès aux quartiers animés.
                </p>
              </div>

              <div className="activities-list">
                <h4>Que faire à Bangkok ?</h4>
                <ul>
                  <li>MBK Center — shopping à prix abordables</li>
                  <li>Chinatown — street food locale unique</li>
                  <li>Wat Pho, Wat Arun, Grand Palais</li>
                  <li>Balade en bateau sur le Chao Phraya</li>
                </ul>
              </div>
            </div>

            <div className="column-image">
              <div className="feature-image" data-aos="zoom-in">
                <img src={bangkok2} alt="Bangkok temple" />
              </div>
              <div className="image-caption">
                <p>
               Chinatown
                </p>
              </div>
            </div>
          </div>

          {/* Petite mosaïque */}
          <div className="image-mosaic" data-aos="fade-up" style={{ marginTop: '2rem' }}>

            <div className="mosaic-item">
              <img src={bangkok3} alt="Bangkok rue" />
            </div>
            
            
            <div className="mosaic-item">
              <img src={bangkok4} alt="Bangkok nuit" />
            </div>
          </div>

        </div>
      </section>


      {/* ------- 02 — AO NANG / RAILAY ------ */}
      <section className="thailand-destination aonang" data-aos="fade-up">
        <div className="thailand-container">

          <div className="destination-header-inline">
            <div>
              <h2>Ao Nang / Railay</h2>
              <p className="destination-tagline">Entre plages et falaises spectaculaires</p>
            </div>
          </div>

          <div className="dual-column dual-column--reversed">

            <div className="column-image">
              <div className="feature-image" data-aos="zoom-in">
                <img src={mangrove} alt="Mangrove Ao Nang" />
              </div>
              <div className="image-caption">
                <p>
                  La mangrove offre en kayak
                </p>
              </div>
            </div>

            <div className="column-text">
              <p>
                <strong>Ao Nang</strong> se situe à une vingtaine de kilomètres de Krabi.
                Moins surpeuplée que Phuket, c'est une excellente alternative pour profiter
                de belles plages et d'un peu plus de calme.
              </p>
              <p>
                La ville offre de longues plages de sable fin et une rue animée bordée de cafés,
                restaurants, pubs et agences d'excursions. De nombreux hôtels disponibles pour
                tous les budgets.
              </p>

              <div className="highlight-box">
                <h4>Ne manquez pas Railay !</h4>
                <p>
                  Accessible uniquement en <strong>long tail boat</strong> (20 min),
                  Railay est un petit paradis coincé entre des falaises calcaires.
                  Juste à côté, <strong>Phra Nang Beach</strong> est souvent classée
                  parmi les plus belles plages du monde.
                </p>
              </div>

              <div className="activities-list">
                <h4>Activités à Ao Nang</h4>
                <ul>
                  <li>Baignade, plongée, snorkeling</li>
                  <li>Kayak dans la mangrove</li>
                  <li>Randonnée, quad, visite de ferme</li>
                  <li>Vie nocturne animée</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ----- 03 — KOH PHI PHI ------ */}
      <section className="thailand-destination phiphi" data-aos="fade-up">
        <div className="thailand-container">

          <div className="destination-header-inline">
            <div>
              <h2>Koh Phi Phi</h2>
              <p className="destination-tagline">Les îles mythiques de "La Plage"</p>
            </div>
          </div>

          <div className="dual-column">
            <div className="column-text">
              <p className="intro-text">
                Parmi les plus beaux endroits de Thaïlande, les îles de Koh Phi Phi figurent
                dans le haut de la liste. Rendues célèbres par le film "La Plage" avec Leonardo DiCaprio.
              </p>

              <div className="info-box warning">
                <h4>Impact du tourisme</h4>
                <p>
                  Maya Bay a été fermée au public en 2018 pour permettre à l'écosystème de se
                  régénérer. Un ponton a depuis été installé de l'autre côté pour un accès contrôlé.
                </p>
              </div>

              <p>
                La deuxième île, <strong>Koh Phi Phi Don</strong>, offre de très belles plages
                et de nombreuses activités : plongée, snorkeling, paddle, ski nautique.
                L'île est aussi connue pour sa vie nocturne animée.
              </p>

              <div className="tip-box">
                <h4>💡 Notre recommandation</h4>
                <p>
                  Nous avons visité Koh Phi Phi uniquement le temps d'une excursion à la journée
                  depuis Ao Nang. La traversée dure environ 1 heure en bateau. Idéal pour découvrir
                  sans s'installer sur une île très touristique.
                </p>
              </div>
            </div>

            <div className="column-image">
              <div className="feature-image" data-aos="zoom-in">
                <img src={kohPhiPhi} alt="Koh Phi Phi" />
              </div>
              <div className="image-caption">
                <p>
                  Les eaux turquoise de Koh Phi Phi
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ----- 04 — KOH LANTA ----- */}
      <section className="thailand-destination kohlanta featured" data-aos="fade-up">
        <div className="thailand-container">

          <div className="destination-header-inline">
            <div>
              <h2>Koh Lanta</h2>
              <p className="destination-tagline">Notre coup de cœur absolu !</p>
            </div>
          </div>

          <div className="dual-column dual-column--reversed">

            <div className="column-image">
              <div className="feature-image" data-aos="zoom-in">
                <img src={kohLanta1} alt="Koh Lanta" />
              </div>
              <div className="image-caption">
                <p>
                  Lanta Miami Resort 
                </p>
              </div>
            </div>

            <div className="column-text">
              <p className="intro-text">
                Située à environ 70 km au sud de Krabi, Koh Lanta est accessible en bateau ou en minivan.
                Plus calme que d’autres îles thaïlandaises, elle séduit par ses plages paradisiaques,
                son ambiance détendue et sa vaste superficie qui invite à l’exploration.
              </p>
              <p>
                Pour profiter pleinement de l’île, il est vivement conseillé de louer un scooter,
                généralement proposé par les hôtels, afin de parcourir Koh Lanta à votre rythme.
                Vous pourrez ainsi rejoindre facilement les différents points d’intérêt,
                faire des arrêts dans de nombreuses plages le long de la côte et découvrir des coins plus sauvages.
              </p>
              <p>
                Ne manquez pas Koh Lanta Old Town, un quartier typique au charme authentique,
                avec ses maisons sur pilotis, ses petits cafés et son atmosphère locale.
                En haute saison, l’île accueille également des marchés animés, parfaits pour goûter
                à la cuisine thaïlandaise et découvrir l’artisanat local.
              </p>

              <div className="highlight-box gold">
                <h4>Pourquoi on a adoré</h4>
                <p>
                  Plus vous vous éloignez du port, plus l'ambiance devient paisible.
                </p>
                <p>
                  <strong>Conseil :</strong> logez vers le sud de l'île et louez un scooter.
                  Les routes sont calmes, idéales pour se laisser guider au fil des plages.
                </p>
              </div>
            </div>
          </div>

          <div className="beaches-showcase" data-aos="fade-up">
            <h3>Nos plages préférées</h3>
            <div className="beach-cards">
              <div className="beach-card" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-image">
                  <img src={khantiangBeach} className="beach-image" alt="Khantiang Beach" />
                </div>
                <h4>Khantiang Beach</h4>
                <p>Le spot parfait pour un magnifique coucher de soleil.</p>
              </div>
              <div className="beach-card" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-image">
                  <img src={khlongChakBeach} className="beach-image" alt="Khlong Chak Beach" />
                </div>
                <h4>Khlong Chak Beach</h4>
                <p>Plus petite et intime, parfaite pour un moment au calme.</p>
              </div>
              <div className="beach-card" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-image">
                  <img src={bambooBeach} className="beach-image" alt="Bamboo Beach" />
                </div>
                <h4>Bamboo Beach</h4>
                <p>Grande plage sauvage bordée par la jungle.</p>
              </div>
            </div>
            <p className="beach-note">
              📍 Le totem de Koh Lanta se trouve près du Why Not Bar, dans le sud !
            </p>
          </div>

          <div className="excursions-section">
            <h3>Excursions depuis Koh Lanta</h3>
            <p className="excursions-intro">
              Je vous conseil de Profitez de votre sejour pour explorer les quatre îles emblématiques
              au sud-est de Koh Lanta à bord d’un bateau traditionnel à longue queue.
              Cette excursion permet de découvrir Koh Chuek, Koh Mook, Koh Ngai et Koh Maa,
              avec plusieurs arrêts pour la baignade, le snorkeling et l’exploration de paysages préservés.
            </p>
            <div className="excursion-grid">
              <div className="excursion-card" data-aos="flip-up">
                <div className="feature-image">
                  <img src={fourIslandsPhoto} className="excursion-image" alt="Les 4 Îles" />
                </div>
                <h4>Les 4 Îles</h4>
                <p>Snorkeling et plages de rêve au programme.</p>
              </div>
              <div className="excursion-card" data-aos="flip-up" data-aos-delay="100">
                <div className="feature-image">
                  <img src={kohRokPhoto} className="excursion-image" alt="Koh Rok" />
                </div>
                <h4>Koh Rok</h4>
                <p>Snorkeling exceptionnel — un vrai coin de paradis préservé.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel  */}
        <div className="thailand-carousel-container" data-aos="fade-up">
          <div className="thailand-carousel">
            {lantaCarousel.map((slide, index) => (
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
              {lantaCarousel.map((_, index) => (
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
            <p>{lantaCarousel[currentSlide].caption}</p>
          </div>
        </div>

      </section>


      {/* ----- OUTRO ----- */}
      <section className="thailand-outro" data-aos="fade-up">
        <div className="thailand-container">
          <div className="outro-content">
            <h2>Un voyage inoubliable</h2>
            <p>
              La Thaïlande offre un contraste parfait pour un premier voyage en Asie du Sud-Est.
            </p>
          </div>
        </div>
      </section>

    </div >
  );
}

export default Thailande;