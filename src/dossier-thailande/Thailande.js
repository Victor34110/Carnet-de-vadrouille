import React from 'react';
import './Thailande.css';

import bangkok4 from './bangkok4.jpg';  /* photo Bangkok1 */
import bangkok5 from './bangkok5.jpg';  /* photo Bangkok2 */

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Thailande() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <>
    
    <div className="premiere-section">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="thailande-title">🌴 Vlog Thaïlande 🌴</h1>


        <p>Pour notre premier voyage en Thaïlande, nous sommes partis <strong> 15 jours </strong> à la découverte du pays. Après  <strong>4 jours </strong> à Bangkok pour explorer l’effervescence de la capitale,
          nous avons poursuivi notre aventure <strong>dans le sud</strong>, à la recherche de  <strong>plages paradisiaques </strong> et d’eaux turquoise.
        </p>

        <p>Snorkeling, farniente et paysages tropicaux étaient au rendez-vous entre Ao Nang, Railay et Koh Lanta.
         Un parfait mélange de découvertes culturelles et de moments inoubliables les pieds dans le sable.
        </p>
      
        <p>Retrouvez ici,  un résumé clair de notre parcours et des activités incontournables que nous avons testées pendant <strong>ces 15 jours en Thaïlande </strong>.
        </p>

      <ul className="thailande-list">
         <li>Notre itinéraire en Thaïlande✈️</li>
         <li>Villes visitées & activités incontournables🪸🤿</li>
         <li>Budget global & bilan du voyage📊📸</li>
      </ul>

      </div>
     </div>

       {/* 2e SECTION */}


      <div className="deuxieme-section">
        <div className="overlay-2"></div>

      <div className="texte-itineraire">
        
        <h1>Notre itinéraire en Thaïlande 🏝️</h1>
       
        <p>Pour commencer ce voyage, il faut bien sûr se rendre en Thaïlande…
        </p>
        
        <p>Plusieurs options s’offrent à vous : atterrir à <strong> Bangkok</strong>, la capitale (souvent plus économique), ou directement sur une île du sud comme <strong>Phuket</strong>.
           De notre côté, nous avons choisi de débuter notre aventure à Bangkok, où nous avons séjourné 3 nuits pour découvrir la ville et son ambiance unique.
        </p>

        <p>Nous avons ensuite pris un vol intérieur (environ 1h) jusqu’à <strong> la province de Krabi</strong>, afin de découvrir les plages paradisiaques et les îles du sud.
        </p>

        <p>Après <strong>4 nuits</strong> à Ao Nang, nous avons poursuivi notre route en minivan jusqu’à <strong> Koh Lanta </strong>, une île magnifique et authentique, encore préservée de la foule touristique.
        </p>

       <p>Nous y avons passé <strong>6 nuits</strong>, le temps de profiter pleinement de son ambiance paisible, de ses couchers de soleil et de ses plages sauvages.
      </p>

      
      
     </div>
     
    </div>


      {/* 3e SECTION  */}

      <div className="troisieme-section">
      <div className="overlay-3"></div>

      <div className="texte-bangkok">

      <h1>Villes visitées & activités </h1>
      <h2>1. Bangkok</h2>

       <p>Dès votre arrivée, vous serez plongés dans l’ambiance bouillonnante de cette ville ultra dynamique : circulation intense, chaleur humide, foule, odeurs de street food… 
        Bangkok ne laisse pas indifférent !
       </p>

      <p>Si vous atterrissez ou repartez de Bangkok — ce qui est très souvent le cas lors d’un circuit en Thaïlande — profitez-en pour <strong> y rester 2 à 3 jours </strong>. 
      </p>

      <p>C’est parfait pour vous <strong>remettre du décalage horaire</strong> et vous <strong>acclimater en douceur à l’Asie</strong>.
      </p>

      <p><strong>Conseil hébergement 🛏️</strong>: choisissez un hôtel <strong>proche du centre</strong>, pour avoir facilement accès aux quartiers animés comme <strong>Chinatown</strong>, aux centres commerciaux, et <strong>aux principaux temples</strong>.
      </p>

      <ul className="activitebangkok-list">
        <p> <strong>Que faire à Bangkok en 2 ou 3 jours ?</strong> </p>
         <li> <strong>MBK Center🛍️ </strong> : un centre commercial emblématique, parfait pour le shopping à prix abordables.</li>
         <li> <strong>Chinatown🍜 </strong> : idéal pour goûter à la <strong>street food locale </strong>dans une ambiance unique.</li>
         <li> <strong>Temples🛕 </strong> : ne manquez pas des sites emblématiques comme le<strong> Wat Pho </strong> (bouddha couché), <strong> Wat Arun </strong>ou encore <strong>le Grand Palais </strong> .</li>
      </ul>
      

  </div> 

   
    <img src={bangkok4} alt="Marché flottant" className="photo4" />   {/* pour photo placé ou on veut */}
    <img src={bangkok5} alt="Photo Bangkok 5" className="photo5" />

  </div>   






        {/* 4e SECTION  */}

      <div className="quatrieme-section">

        <div className="overlay-4"></div>
      
      <div className="texte-ao-nang">
    <h2>2. Ao Nang / Railay</h2>

    <p><strong>Ao Nang </strong> se situe à une <strong> vingtaine </strong> de kilomètres de <strong> Krabi </strong>. Moins surpeuplée que Phuket, 
      c’est une excellente alternative pour profiter de belles plages et d’un peu plus de calme la nuit. 
       </p>

       <p>La ville offre de <strong>longues plages</strong> de sable fin et une rue animée bordée de cafés, restaurants, pubs et agences d’excursions.
         De nombreux hôtels sont disponibles pour <strong> tous les budgets</strong>.
       </p>

       <ul className="activitebangkok-list">
        <p> <u>Côté activités :</u> </p>
         <li> Baignade, plongée, snorkelin 🤿🐠</li>
         <li> kayak dans la mangrove 🛶🌿</li>
         <li> Randonnée, quad, visite de ferme d’ananas, éléphant 🐘🌄</li>
         <li> Spectacle de feu, pub, boite de nuit 🍻🎉</li>
      </ul>
      
       <p> <strong>Ao Nang </strong> est aussi le point de départ pour <strong> Railay </strong>, accessible uniquement en <strong> long tail boat </strong>(20 min environ).
       </p>

       <p>Juste à côté, <strong> Phra Nang Beach </strong>est souvent classée parmi  <strong>les plus belles plages du monde </strong>.
         Railay est aussi un spot prisé pour l’escalade avec près de 700 voies.
       </p>

       <p>Après 4 nuits à Ao Nang, nous avons pris un mini-van pour rejoindre la fameuse <strong>île de Koh Lanta </strong>, très appréciée des Français.
         Moins cher et plus tranquille que le bateau, le trajet dure environ 2h. Vous trouverez dans la ville de nombreuses agences de voyages qui proposent ce service.
       </p>

      </div>
    </div>


        {/* 5e SECTION  */}

<div className="cinquieme-section">
  <div className="overlay-5"></div>
    <div className="texte-koh-phiphi">
 
    <h2>3. Koh Phi Phi</h2>

      <p>Parmi les plus beaux endroits de Thaïlande, <strong> les îles de Koh Phi Phi </strong> figurent dans le haut de la liste.
       Elles se trouvent également dans <strong>la mer d’Andaman</strong>, entre Phuket et Koh Lanta.
      </p>

       <p>Tout le monde a déjà entendu parler de ces îles grâce au film, <strong> « La plage » </strong> mettant en scène Léonardo di Caprio.
        La fameuse plage de <strong>Maya Bay </strong> sur <strong> Koh Phi Phi </strong> est rapidement devenu l’endroit <strong> à voir absolument </strong> lors d’un circuit en Thaïlande du Sud.
       </p>
      

       <p> Ce tourisme de masse à eu des conséquences sur l’écosystème et les coraux.
         A tel point, que les autorités thaïlandaises, se sont enfin décidés à agir et ont tout bonnement <strong> interdit l’accès à la plage </strong> depuis 2018.
       </p>

       <p>Un ponton a désormais été installé de l’autre coté, ce qui permet de débarquer plus facilement et d’accéder à la plage. 
       </p>

       <p>La deuxième île, <strong>Koh Phi Phi Don </strong>, offre elle aussi de <strong>très belles plages</strong>. Les activités ne manquent pas : <strong> plongée, snorkeling, paddle, ski nautique ou wakeboard</strong>.
        Il est possible d’y loger facilement grâce au grand nombre d’hôtels et d’auberges de jeunesse.
         L’île est aussi connue pour sa <strong> vie nocturne animée</strong>, avec de nombreux bars, restaurants et boutiques ouverts le soir.
       </p>

       <p>De notre côté, nous avons préféré visiter <strong> Koh Phi Phi </strong> uniquement le temps <strong>d’une excursion à la journée depuis Ao Nang</strong>.
         La traversée dure environ <strong>1 heure en bateau </strong>. 
       </p>

      </div>
    </div>



        {/* 6e SECTION  */}


      <div className="sixieme-section">
        <div className="overlay-6"></div>
           <div className="texte-koh-lanta" data-aos="fade-up">

    <h2>4.Koh Lanta</h2>

      <p>Située à environ <strong>70 km au sud de Krabi</strong>, dans la mer d’Andaman, <strong> Koh Lanta </strong> est accessible en bateau depuis Krabi ou Phuket.
      </p>

       <p>Si vous cherchez une île avec de <strong> belles plages de sable fin et peu fréquentées </strong>, c’est un excellent choix.
         Plus vous vous éloignez de la zone du port, plus l’ambiance devient paisible.
       </p>
      

       <p> Pour notre part, <strong> gros coup de cœur pour Koh Lanta </strong>: une île tranquille, peu touristique, avec <strong>des plages paradisiaques</strong> et une vaste superficie à explorer.
        On vous conseille vivement de <strong> loger vers le sud </strong> de l’île et de <strong>louer un scooter</strong>.
         Les routes y sont calmes, idéales pour se laisser guider au fil des plages.
       </p>

       <ul className="plagekohlanta-list">
        <p> <u>Voici quelques plages que nous avons particulièrement aimées :</u> 🌊☀️</p>
         <li> <strong> Khantiang Beach </strong> : une jolie plage dominée par le Diamond Cliff.
           Le bar/restaurant du même nom est parfait pour admirer un <strong>magnifique coucher de soleil</strong>. </li>
         <li> <strong> Khlong Chak Beach </strong> : plus petite et intime, parfaite pour un moment au calme.</li>
         <li> <strong> Bamboo Beach </strong> : grande plage sauvage bordée par la jungle.</li>
      </ul>


       <p>📍 Petit clin d’œil :<strong> le célèbre totem de Koh Lanta </strong> se trouve près du <strong> Why Not Bar </strong>, dans le sud de l’île ! 
       </p>

       <ul className="excursionkohlanta-list">
        <p> <u>Excursions depuis Koh Lanta:</u> 🐠🤿 </p>
         <li> <strong> Excursion des 4 îles </strong> : partez à la journée découvrir <strong>Koh Chueak</strong>, <strong> Koh Waen </strong>, <strong> Koh Muk </strong> et <strong> Koh Ngai </strong>,
           avec plusieurs arrêts snorkeling et détente sur des plages magnifiques.</li>
         <li> <strong>Journée à Koh Rok </strong>: au programme,<strong> snorkeling </strong> autour de l’île et temps libre sur la plage pour profiter de ce petit coin de paradis.</li>
      </ul>

       

      </div>
    </div>
   </> 
  );
}

export default Thailande;