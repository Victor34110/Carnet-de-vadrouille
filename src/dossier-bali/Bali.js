import React from 'react';
import './Bali.css';
import Navbar from '../Navbar';

import lembogan from './pictures/lembogan.jpg'; 
import amed from './pictures/amed.jpg'; 
import card from './pictures/card.png'; 
import cretubud from './pictures/cretaubud.jpg'; 
import kastara from './pictures/kastara.jpg'; 
import kuta from './pictures/kuta.jpg'; 
import penida from './pictures/penida.jpg'; 
import plagelembogan from './pictures/plagelembogan.jpg'; 
import sablenoir from './pictures/sablenoir.jpg'; 
import surflembogan from './pictures/surflembogan.jpg'; 
import ubudvillage from './pictures/ubudvillage.jpg'; 
import uluwatu from './pictures/uluwatu.jpg'; 
import fruit from './pictures/fruit.jpg'; 
import snorkeling from './pictures/snorkeling.jpg'; 
import balancoire from './pictures/balancoire.jpg'; 
import fiin from './pictures/fiin.jpg'; 
import yellowbridge from './pictures/yellowbridge.jpg';
import finnss from './pictures/finnss.jpg';


import lembo from './pictures/Nusa_Lembongan_Map.jpg';
import amedcarte from './pictures/amed-carte.jpg';
import amedone from './pictures/Amed-plongé.jpg';
import amedtwo from './pictures/pyramide-amed.jpg';
import amethree from './pictures/Snorkeling-turtle.jpg';

import { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bali() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (



  <div className="bali-container" style={{ overflowX: 'hidden' }}>

    <Navbar title="Carnet de Vadrouille" variant="bali" />
  

    <section className="bali-hero" data-aos="fade-up">
      <div className="bali-hero-overlay" />
      <div className="bali-hero-content">

        <h1 className="title-bali">Bali</h1>

        <p className="bali-subtitle">
          Entre rizières, temples et plages — un itinéraire simple pour profiter
          sans se faire piéger par le “trop touristique”.
        </p>

        <div className="bali-hero-actions">
          <a className="bali-cta" href="#kuta">Commencer l’itinéraire</a>
          <a className="bali-cta ghost" href="#ubud">Voir les étapes</a>
        </div>
      </div>
    </section>


    <section className="bali-intro" data-aos="fade-up">
      <div className="bali-intro-grid">
        <div className="bali-intro-card">
          <h2 className="bali-intro-title">Avant de partir</h2>

          <div className="bali-block">
            <p>
              Pour commencer ce périple, <strong>précisons que je suis parti d'Australie</strong> :
              un vrai avantage, car les vols sont donc beaucoup plus courts et bien moins chers
              que depuis la France.
              Bali, c'est une île dont on entend tout et son contraire : qu'elle perd peu à peu son côté sauvage,
              qu'elle devient trop touristique, presque « carte postale » à cause des célébrités et influenceurs.
              <strong> Pour ma part, je vous conseille d'y aller pour vous faire votre propre avis</strong>,
              car dans tous les cas, cette destination fera partie de vos voyages de rêve.
            </p>

            <p>
              Pour se rendre à Bali, <strong>on atterrit à l'aéroport de Denpasar</strong>.
              <strong> Attention au choc thermique</strong> : ici, le taux d'humidité est très élevé.
              Pour vos premières nuits, je vous conseille de séjourner 1 à 2 jours à Kuta.
              Pour vos trajets : <strong>taxi, hôtel, ou Grab</strong>.
            </p>
          </div>
        </div>

      
        <aside className="bali-facts">
          <div className="bali-facts-card">
            <h3 className="bali-facts-title">Infos rapides</h3>

            <ul className="bali-facts-list">
              <li><span>Arrivée</span><b>Denpasar (DPS)</b></li>
              <li><span>1ères nuits</span><b>Kuta (1–2 jours)</b></li>
              <li><span>Déplacements</span><b>Grab • Hôtel</b></li>
              <li><span>Durée du séjour</span><b>10 à 15 jours</b></li>
            </ul>

            <div className="bali-facts-tip">
              Astuce : prends une carte eSIM + Grab dès le début!
            </div>
          </div>
        </aside>
      </div>
    </section>

   
    <div className="pict-card" data-aos="fade-up">
      <img src={card} alt="Carte de l'itinéraire à Bali" />
      <div className="legend">Carte de l'itinéraire à Bali</div>
    </div>

    <div className="bali-block-list" data-aos="fade-up">
      <ul>
        <li><a className="bali-block-link" href="#kuta">2 jours à Kuta (proche de l'aéroport) 🐚</a></li>
        <li><a className="bali-block-link" href="#ubud">2 jours à Ubud</a></li>
        <li><a className="bali-block-link" href="#amed">2 jours à Amed</a></li>
        <li><a className="bali-block-link" href="#nusa-lembongan">5 jours à Nusa Lembongan</a></li>
        <li><a className="bali-block-link" href="#canggu">3 jours à Canggu</a></li>
      </ul>
    </div>
  
  

      <h1 id="kuta" data-aos="fade-up">─── Kuta ───</h1>
      
      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-image-wrapper">
          <img src={kuta} alt="Village de Kuta"/>
          <div className="legend">Village de Kuta</div>
        </div>

        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Kuta est un arrêt idéal pour s'acclimater en douceur à l'ambiance balinaise. La ville,
              animée mais pratique, se trouve à seulement quelques kilomètres de l'aéroport,
              ce qui en fait une étape parfaite pour débuter ou conclure un voyage.
            </p>
          </div>
        </div>
      </div>


      
      <h1 id="ubud" data-aos="fade-up">─── Ubud ───</h1>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>Ubud est le cœur culturel et spirituel de Bali,</strong> au milieu des rizières et des singes.
              Ubud regorge de lieux à découvrir : <strong>la célèbre Monkey Forest</strong>,
              des complexes de piscines à flanc de rizières comme le fameux <strong>Cretya Ubud</strong>,
              ou encore d'excellentes adresses pour se régaler, comme le restaurant de <strong>Kastara.</strong>
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={ubudvillage} alt="Village d'Ubud" />
          <div className="legend">Les toits d'Ubud</div>

        </div>
      </div>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-image-wrapper">
          <img src={cretubud} alt="Cretya Day Club" />
           <div className="legend">Cretya Ubud</div>
        </div>
         

        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Ubud est une ville animée qui offre de nombreuses activités.
              Je vous conseille d'y passer 2 à 3 jours afin de profiter des incontournables.
            </p>
          </div>
        </div>
      </div>

      <div className="picture" data-aos="fade-up">
        <img src={kastara} alt="Restaurant Kastara" />
      <div className="legend">Restaurant Kastara à Ubud</div>
      </div>


     

      <h1 id="amed" data-aos="fade-up">─── Amed ───</h1>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>Amed c'est le Bali authentique</strong> : Située au nord-est de l'île, <strong>Amed reste à l'écart des circuits touristiques classiques.</strong> C'est un Bali plus authentique:
              routes aménagées tardivement, habitants vivant encore beaucoup de leurs activités traditionnelles comme la récolte de sel, la pêche,
              la culture du riz ou la fabrication artisanale de sarung.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={amed} alt="Hauteurs d'Amed" />
            <div className="legend">Village d'Amed</div>
        </div>
      </div>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>Ses plages de sable noir, façonnées par les volcans environnants, offrent un décor unique !!</strong>
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={sablenoir} alt="Plage de sable noir" />
          <div className="legend">Plage de sable noir d'Amed</div>
        </div>
      </div>

      <div className="bali-content-with-image bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
               Mais si Amed attire avant tout, c'est pour ses <strong>fonds marins exceptionnels ainsi que pour ses tortues</strong> : <strong>snorkeling</strong> et <strong>plongée sont ici rois</strong>.
            Parmi les spots incontournables, l'épave du Liberty. C'est un ancien navire américain qui repose à seulement quelques mètres du rivage qui offre spectacle sous-marin incroyable!!
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={snorkeling} alt="Snorkeling à Amed" />
          <div className="legend">Snorkeling à Amed</div>
        </div>
      </div>

      <div className="bali-gallery" data-aos="fade-up">
        <div className="bali-gallery-row">
          
          <div className="bali-gallery-item">
            <img src={amedtwo} alt="Snorkeling à Amed" />
          </div>
          <div className="bali-gallery-item">
            <img src={amethree} alt="Tortue à Amed" />
          </div>
            <div className="bali-gallery-item">
            <img src={amedone} alt="Plongée à Amed" />
          </div>
        </div>
      </div>
     


     
      <h1 id="nusa-lembongan" data-aos="fade-up">─ Nusa Lembongan ─</h1>

       
        <div className="picture-redimention" data-aos="fade-up">
          <img src={lembo} alt="Carte de Nusa Lembongan"/>
          <div className="legend">Carte de Nusa Lembongan</div>
        </div>
        

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Nusa Lembogan est le trésor discret de Bali.
              On y retrouve tout ce qui fait le charme de l'île principale : temples, offrandes,surf, plages incroyables, sourires balinais et paysages spectaculaires.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={surflembogan} alt="Spot de surf à Nusa Lembogan" />
          <div className="legend">Spot de surf à Nusa Lembogan</div>
        </div>
      </div>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>Ses atouts ?</strong> Des plages blanches mêlant corail et sable, une mer turquoise, de superbes spots de snorkeling et de plongée, des falaises, du surf, une mangrove et même des champs de culture d'algues.
              <strong> Avec un peu de chance, vous pourrez y nager aux côtés des raies manta.</strong>
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={lembogan} alt="Coucher de soleil à Nusa Lembogan" />
          <div className="legend">Coucher de soleil à Nusa Lembogan</div>
        </div>
      </div>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Il y a aussi un détail qui change tout : 
              ici, il y a <strong>quasi pas de voitures</strong>, et plus aucune une fois passé le petit pont jaune menant à Nusa Ceningan.
              Là-bas, on <strong>découvre des vues imprenables, de superbes plages de sable blanc, des zones de surf, des beach club…</strong>
              Bref, tout ce qu'il faut pour profiter, avec en prime beaucoup moins de touristes.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={yellowbridge} alt="Pont jaune de Nusa Lembogan" />
          <div className="legend">Le pont jaune de Nusa Lembogan</div>
        </div>
      </div>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              La location d'un scooter est <strong>presque indispensable</strong> pour explorer toute l'île. Elle regorge de plages secrètes accessibles uniquement en deux-roues.
              Et avec seulement <strong>45 minutes de bateau depuis Sanur</strong>, Nusa Lembogan est, pour moi, un véritable coup de cœur.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={plagelembogan} alt="Plage paradisiaque à Nusa Lembogan" />
          <div className="legend">Plage paradisiaque à Nusa Lembogan</div>
        </div>
      </div>

      


      <h1 data-aos="fade-up">─── Nusa Penida ───</h1>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>-- À faire absolument --</strong> Depuis Nusa Lembogan, Profitant de la proximité des 2 îles,
              il est possible de réserver une excursion à la journée pour découvrir les plus beaux spots de <strong>Nusa Penida</strong>.
              Le programme comprend généralement une session de <strong>snorkeling avec les raies manta</strong>, puis la visite de 3 à 4 lieux incontournables de l'île, avec un taxi qui vous récupère directement au port.
              La journée se termine par le retour sur Nusa Lembogan
            </p>

            <p>
              Puis retour à kuta, Pour notre retour sur l'île de Bali, et pour terminer notre séjour,
              nous avons choisi de revenir à Kuta, idéalement située à mi-chemin <strong>entre Canggu et Uluwatu</strong>.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={penida} alt="Kelingking Beach" />
          <div className="legend">Kelingking Beach à Nusa Penida</div>
        </div>
      </div>

     

      <h1 id="canggu" data-aos="fade-up">─── Canggu ───</h1>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Canggu est incontournable pour son ambiance branchée : on y trouve certains <strong>des meilleurs beach clubs de Bali</strong>,
              comme le <strong>célèbre Finns Beach Club</strong>, parfait pour un cocktail face au coucher de soleil.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={fiin} alt="Coucher de soleil sur Canggu" />
          <div className="legend">Coucher de soleil sur Canggu</div>
        </div>
      </div>

      <div className="picture" data-aos="fade-up">
        <img src={finnss} alt="The Finns Beach Club" />
      <div className="legend">The Finns Beach Club à Canggu</div>
       </div>

   


      <h1 data-aos="fade-up">─── Uluwatu ───</h1>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              De l'autre côté, <strong>Uluwatu</strong> est une véritable icône pour les surfeurs du monde entier, avec ses vagues spectaculaires,
              ses falaises impressionnantes et ses plages préservées <strong>idéales pour une journée au bord de l'eau</strong>.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={uluwatu} alt="Plage d'Uluwatu" />
        <div className="legend">Plage d'Uluwatu</div>
 </div>
      </div>

  


      <h1 data-aos="fade-up">❋ Goûter Bali ❋</h1>

      <div className="bali-content-with-image" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              Ici, on mange pour seulement quelques euros, alors je vous conseille de goûter à un maximum de plats.
              Et si, comme moi, vous n'aimez pas la nourriture trop épicée, n'hésitez pas à le préciser : cela vous évitera quelques surprises mdrr.
            </p>

            <p>
              Je vous recommande aussi de tester <strong>des restaurants plus traditionnels. </strong>
              Parfois, surtout sur les petites îles, le "restaurant" est en réalité la maison de l'habitant… et la cuisine y est tout aussi délicieuse, voire plus authentique.
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={fruit} alt="Dégustation de fruits locaux" />
          <div className="legend">Dégustation de fruits locaux</div>
        </div>
      </div>

      {/* Section Ressentis */}
      <h1 data-aos="fade-up">Mes ressentis sur Bali</h1>

      <div className="bali-content-with-image bali-content-with-image--reverse" data-aos="fade-up">
        <div className="bali-text-content">
          <div className="bali-block">
            <p>
              <strong>Bali était pour moi mon premier voyage en Asie. </strong>
              Je n'avais pas de point de comparaison à l'époque, mais maintenant, après avoir découvert la Thaïlande, je peux dire que Bali reste mon coup de cœur… et l'est encore aujourd'hui.
            </p>
            <p>
              Un véritable coup de cœur pour tout ce qu'elle représente : 
              <strong> la diversité de ses paysages, la gentillesse de ses habitants, ce sentiment de liberté et de vacances permanentes,
              et ce "mood" surf omniprésent sur l'île.</strong>
            </p>

            <p>
              <strong>Côté points négatifs</strong>, je dirais surtout <strong>les trajets</strong> : les distances se mesurent moins en kilomètres qu'en heures...
              On peut facilement mettre 1h30 à 2h pour parcourir seulement 20 kilomètres.
              Certains reprochent aussi à l'île de devenir trop superficielle, trop "instagrammable", mais personnellement, cela ne m'a pas dérangé :)
            </p>
          </div>
        </div>
        <div className="bali-image-wrapper">
          <img src={balancoire} alt="Beach Club sur Nusa Lembogan" />
          <div className="legend">Beach Club sur Nusa Lembogan</div>
        </div>
      </div>

     

     
      <h1 data-aos="fade-up">▸▸ Conseils pratiques ◂◂</h1>

      <div className="bali-section">
        <div className="bali-content-card" data-aos="fade-up">
          <div className="bali-block">
            <p>
              📍 Si j'avais un conseil à donner pour Bali : restez environ deux jours dans chaque endroit afin de varier les découvertes,
              puis profitez un peu plus longtemps d'une île comme Nusa Lembogan !
            </p>

            <p>
              📍 Meilleure période : d'avril à octobre (saison sèche).
            </p>

            <p>
              📍 Transport : installez l'application Grab. Le scooter reste la meilleure option pour se déplacer,
              sauf pour les longs trajets comme rejoindre Amed ou Ubud,
              où il vaut mieux opter pour un chauffeur. Attention toutefois à la circulation!
            </p>

            <p>
              📍 Budget : on peut vivre très confortablement avec 25 à 50 € par jour, selon son style de voyage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bali;
