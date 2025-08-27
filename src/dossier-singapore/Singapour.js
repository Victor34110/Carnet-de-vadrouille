import React from "react";
import "./Singapour.css";

// 👉 Images (exemples)
import airport from "./airport.jpeg";
import capsule from "./capsule.jpeg";
import fondsingapourr from "./fondsingapourr.jpg";
import lv from "./louis-vuitton.jpg";
import marina from "./marina.jpeg";
import merlion from "./merlion.jpeg";
import pool from "./pool.jpeg";
import restaurant from "./restaurant.jpeg";
import towers from "./towers.jpeg";
import gardens from "./gardens.jpeg";

// 👉 Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// 👉 Styles Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Singapour() {
  return (
    <div className="singapore-container">
      
      <div className="singapore-text" data-aos="fade-up">
        <h1>Singapour</h1>

        <div className="subtitle-app-sing">  {/* Sous-titre  */}
              <strong>Singapour, la vitrine technologique de l’Asie !</strong></div>

        <p>
          <em>Souvent surnommée la Côte d’Azur de l’Asie, Singapour incarne la modernité à son paroxysme.</em></p>
        
        <p>Ce petit État insulaire, à la pointe de l’innovation urbaine et écologique, s’impose comme un modèle mondial en matière de développement technologique, d’architecture futuriste et de gestion intelligente de l’espace.
          Entre nature recréée, infrastructures ultra-connectées et design visionnaire, Singapour fascine autant qu’elle inspire.</p>
        

      </div>

      {/* Slider 3D Coverflow */}
      <div className="singapore-slider" data-aos="fade-up">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,   // angle des slides latérales
            stretch: 0,   // espace entre slides (0 = auto)
            depth: 150,   // profondeur 3D
            modifier: 1,  // intensité
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="coverflow-swiper"
        >
          {[airport, capsule, fondsingapourr, lv, marina, merlion, pool, restaurant,towers,gardens].map((src, i) => (
            <SwiperSlide key={i} className="coverflow-slide">
              <img src={src} alt={`singapore-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


<div className="singapore-text" data-aos="fade-up">

        <div className="subtitle-app-sing">  {/* Sous-titre  */}
          <strong>Que faire à Singapour ?</strong></div>

        <p>C’est lors de ma fin de voyage d’australie, que  j’ai choisi de terminer mon voyage par une escale à Singapour.</p>

        <p>Parmi les expériences uniques à vivre à Singapour, je vous recommande vivement de <strong>passer une nuit dans une capsule.</strong>
          Cet hébergement futuriste, peu commun en Europe, vous plonge immédiatement dans l’ambiance moderne et avant-gardiste de la ville.</p>

        <p>Montez ensuite au sommet de l’emblématique <strong>Marina Bay Sands</strong>, cet impressionnant bâtiment en forme de bateau posé sur trois tours.
        Là-haut, un bar/restaurant panoramique vous offre une vue spectaculaire sur toute la ville.</p>

        <p>Autre arrêt incontournable : <strong>les Supertree Grove</strong>, ces immenses arbres artificiels qui s’illuminent une fois la nuit tombée.
        Ils symbolisent parfaitement la fusion entre nature et haute technologie, et offrent un spectacle à la fois visuel et écologique, absolument à voir.</p>

        <p>Et pour conclure votre séjour en beauté, ne partez pas sans passer par <strong>Changi Airport</strong>, souvent désigné comme le plus bel aéroport du monde.
        Sa fontaine en forme de vortex, nichée au cœur d’un jardin tropical intérieur, est <strong>un véritable chef-d’œuvre.</strong></p>
        

      </div>








    </div>
  );
}

export default Singapour;