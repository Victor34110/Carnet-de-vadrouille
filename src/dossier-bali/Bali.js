import React from 'react';
import './Bali.css';


import lembogan from './lembogan.jpg'; 
import amed from './amed.jpg'; 
import card from './card.png'; 
import cretubud from './cretaubud.jpg'; 
import kastara from './kastara.jpg'; 
import kuta from './kuta.jpg'; 
import penida from './penida.jpg'; 
import plagelembogan from './plagelembogan.jpg'; 
import sablenoir from './sablenoir.jpg'; 
import surflembogan from './surflembogan.jpg'; 
import ubudvillage from './ubudvillage.jpg'; 
import uluwatu from './uluwatu.jpg'; 
import fruit from './fruit.jpg'; 
import snorkeling from './snorkeling.jpg'; 
import balancoire from './balancoire.jpg'; 
import fiin from './fiin.jpg'; 
import yellowbridge from './yellowbridge.jpg';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

  

function Bali() {

 useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation 1s et déclenchée qu'une fois
  }, []);

 return (
    <div className="bali-container">

<div className="title-bali" data-aos="fade-up">
   🏝️ BALI 🏝️
</div>


<div className="bali-block" data-aos="fade-up">
    <p>
    Pour commencer ce périple, <em>précisons que je suis parti d’Australie</em> : un vrai avantage, car les vols sont donc beaucoup plus courts et bien moins chers que depuis la France.
    Bali, c’est une île dont on entend tout et son contraire qu’elle perd peu à peu son côté sauvage, qu’elle devient trop touristique, presque « carte postale » à cause des célébrités et influenceurs qui s’y rendent.
    <strong>Pour ma part, je vous conseille d’y aller pour vous faire votre propre avis</strong>, car dans tous les cas, cette destination fera partie de vos voyages de rêve.
    </p>

    <p>
    Pour se rendre à Bali, <em>on atterrit à l’aéroport de Denpasar</em>. <strong>Attention au choc thermique par rapport à la France </strong> : ici, le taux d’humidité est très élevé.
    Pour vos premières nuits, je vous conseille de séjourner 1 à 2 jours à Kuta. Située au centre de l’animation balinaise, vous y trouverez de tout : centres commerciaux, marchés locaux, plage, et une bonne ambiance pour vous acclimater en douceur les premiers jours.
    Pour vos trajets, plusieurs options s’offrent à vous : <em>prendre un taxi sur place, réserver celui de votre hôtel, ou utiliser l’application Grab.</em>
    </p>
</div>

<div className="pict-card" data-aos="fade-up">
    <img src={card} alt="card" />
</div>



<div className="bali-block-list" data-aos="fade-up">
        <ul>
            <li> 2 jours à Kuta (proche de l’aeroport)🐚</li>
            <li> 2 jours à Ubud 🌿🐒</li>
            <li> 2 jours à Amed🤿🐠🌋</li>
            <li> 5 jours à Nusa lembongan☀️🍹🛵</li>
            <li> 3 jours à canggu uluwatu 🌊🌅🍹 </li>
        </ul>
</div>






    <h1>───Kuta─── </h1>

<div className="picture" data-aos="fade-up">
    <img src={kuta} alt="kuta"/>
</div>


<div className="legend" >
    Village de kuta
</div>


 <div className="bali-block" data-aos="fade-up">
        <p>
        Kuta est un arrêt idéal pour s’acclimater en douceur à l’ambiance balinaise. La ville,
        animée mais pratique, se trouve à seulement quelques kilomètres de l’aéroport,
        ce qui en fait une étape parfaite pour débuter ou conclure un voyage.
        </p>
</div>







  <h1>───Ubud───</h1>   

  <div className="bali-block" data-aos="fade-up">
        <p>
        <em>Ubud est le cœur culturel et spirituel de Bali,</em> au milieu des rizières et des singes.
        Ubud regorge de lieux à découvrir : <strong>la célèbre Monkey Forest</strong>,
        des complexes de piscines à flanc de rizières comme le fameux <strong>Cretya Ubud</strong>,
        ou encore d’excellentes adresses pour se régaler, comme le restaurant de <strong>Kastara.</strong>
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={ubudvillage} alt="Bali plage" />
</div>

<div className="legend" >
   🏯Village d’Ubud, entre rizières et toits en terre cuite🌿
</div>





   <h1>───Amed───</h1>  

<div className="bali-block" data-aos="fade-up">
        <p>
          <em>Amed c'est le Bali authentique</em> : Située au nord-est de l’île, <strong>Amed reste à l’écart des circuits touristiques classiques.</strong> C’est un Bali plus authentique que l’on découvre ici :
           routes aménagées tardivement, habitants vivant encore beaucoup de leurs activités traditionnelles comme la récolte de sel, la pêche,
           la culture du riz ou la fabrication artisanale de sarung.
        </p>
</div>


<div className="picture" data-aos="fade-up">
    <img src={amed} alt="Bali plage" />
</div>

<div className="legend" >
    🌅 Hauteurs d’Amed offrant une vue imprenable sur la mer 🌊
</div>


<div className="bali-block" data-aos="fade-up">
        <p>
           <strong> Ses plages de sable noir</strong>, façonnées par les volcans environnants, offrent un décor unique.
            Mais si Amed attire avant tout, c’est pour ses <em>fonds marins exceptionnels ainsi que pour ses tortues</em> : <strong>snorkeling</strong> et <strong>plongée sont ici rois</strong>.
            Parmi les spots incontournables, l’épave du Liberty. C'est un ancien navire américain qui repose à seulement quelques mètres du rivage, offrant un spectacle sous-marin inoubliable.🤿🐠
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={snorkeling} alt="Bali plage" />
</div>

<div className="legend" >
    🌊Village d’Amed et ses eaux turquoise🐠
</div>












   <h1>───Nusa Lembogan───</h1>  

   <div className="bali-block" data-aos="fade-up">
        <p>
           Nusa Lembongan est souvent éclipsée par les célèbres îles Gili. Mais elle reste un trésor discret de Bali.
            On y retrouve tout ce qui fait le charme de l’île principale : temples, offrandes, sourires balinais et paysages spectaculaires.
        </p>
</div>


<div className="picture" data-aos="fade-up">
    <img src={surflembogan} alt="Bali plage" />
</div>

<div className="legend" >
    🏄‍♂️ Spot de surf à Nusa Lembongan turquoise 🌴
</div>

<div className="bali-block" data-aos="fade-up">
        <p>
        Ses atouts ? Des plages blanches mêlant corail et sable, une mer turquoise, de superbes spots de snorkeling et de plongée, des falaises, du surf, une mangrove et même des champs de culture d’algues.
        Avec un peu de chance, vous pourrez y nager aux côtés des raies manta.
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={lembogan} alt="Bali plage" />
</div>

<div className="legend" >
    🌅 Magnifique coucher de soleil 🌅
</div>

<div className="bali-block" data-aos="fade-up">
        <p>
        Il y a aussi un détail qui change tout : 
        ici, il y a très <strong>peu de voitures</strong>, et quasiment plus du tout une fois passé le petit pont jaune menant à Nusa Ceningan.
        Là-bas, on <em>découvre des vues imprenables, de superbes plages de sable blanc, des zones de surf, des beatch club… </em>
        Bref, tout ce qu’il faut pour profiter, avec en prime beaucoup moins de touristes.
        </p>
</div>



<div className="picture" data-aos="fade-up">
    <img src={yellowbridge} alt="Bali plage" />
</div>

<div className="legend" >
    🏝️ Plages paradisiaques de sable fin 🌊
</div>

<div className="bali-block" data-aos="fade-up">
        <p>
        La location d’un scooter est <strong>presque indispensable</strong> pour explorer toute l’île. Elle regorge de plages secrètes accessibles uniquement en deux-roues.
         Et avec seulement <strong> 45 minutes de bateau depuis Sanur</strong>, Nusa Lembongan est, pour moi, un véritable coup de cœur.
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={plagelembogan} alt="Bali plage" />
</div>

<div className="legend" >
  🏝️ Spot de plage paradisiaques 🏝️
</div>



 <h1>───Nusa Penida───</h1>  
<div className="picture" data-aos="fade-up">
    <img src={penida} alt="Bali plage" />
</div>

<div className="legend" >
    🏖️ Célèbre plage de Nusa Penida 🏖️
</div>



<div className="bali-block" data-aos="fade-up">
        <p>
        À faire absolument : depuis Nusa Lembongan, Profitant de la proximité des 2 îles,
        il est possible de réserver une excursion à la journée pour découvrir les plus beaux spots de <strong>Nusa Penida</strong>.
        Le programme comprend généralement une session de <strong>snorkeling avec les raies manta</strong>, puis la visite de 3 à 4 lieux incontournables de l’île, avec un taxi qui vous récupère directement au port.
        La journée se termine par le retour sur Nusa Lembongan
        </p>

        <p>Puis retour à kuta, Pour notre retour sur l’île de Bali, et pour terminer notre séjour,
        nous avons choisi de revenir à Kuta, idéalement située à mi-chemin <strong>entre Canggu et Uluwatu</strong>.
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={fiin} alt="Bali plage" />
</div>

<div className="legend" >
    🌅 Magnifique coucher de soleil sur Canggu 🌊
</div>

<div className="bali-block" data-aos="fade-up">
        <p>
        Canggu est incontournable pour son ambiance branchée : on y trouve certains <em>des meilleurs beach clubs de Bali</em>,
         comme le <strong>célèbre Finns Beach Club</strong>, parfait pour siroter un cocktail face au coucher de soleil.
        </p>
</div>


<h1>───Uluwatu───</h1> 

<div className="bali-block" data-aos="fade-up">
        <p>
        De l’autre côté, <strong>Uluwatu</strong> est une véritable icône pour les surfeurs du monde entier, avec ses vagues spectaculaires,
         ses falaises impressionnantes et ses plages préservées <em>idéales pour une journée au bord de l’eau</em>.
        </p>
</div>

<div className="picture" data-aos="fade-up">
    <img src={uluwatu} alt="Bali plage" />
</div>

<div className="legend" >
    🌴 Vue panoramique sur la plage d'Uluwatu ⛵
</div>





<div className="bali-block" data-aos="fade-up">

    <h1>❋ Goûter Bali ❋</h1>

    <p>
    Ici, on mange pour seulement quelques euros, alors je vous conseille de goûter à un maximum de plats.
    Et si, comme moi, vous n’aimez pas la nourriture trop épicée, n’hésitez pas à le préciser : cela vous évitera quelques surprises.
Je vous recommande aussi de tester des restaurants plus traditionnels.
 Parfois, surtout sur les petites îles, le “restaurant” est en réalité la maison de l’habitant… et la cuisine y est tout aussi délicieuse, voire plus authentique.
    </p>
</div>


<div className="picture" data-aos="fade-up">
    <img src={fruit} alt="Bali plage" />
</div>

<div className="legend" >
Dégustation de fruits locaux
</div>


<div className="bali-block" data-aos="fade-up">

    <h1>❋❋ Mes ressentis sur Bali ❋❋</h1>
        <p>
        <em>Bali était pour moi mon premier voyage en Asie.</em>
        Je n’avais pas de point de comparaison à l’époque, mais maintenant, après avoir découvert la Thaïlande, je peux dire que Bali reste mon coup de cœur… et l’est encore aujourd’hui.
        Un véritable coup de cœur pour tout ce qu’elle représente : 
        <strong> la diversité de ses paysages, la gentillesse de ses habitants, ce sentiment de liberté et de vacances permanentes,
        et ce “mood” surf omniprésent sur l’île.</strong>
        </p>

        <p>
        <em>Côté points négatifs</em>, je dirais surtout <strong>les trajets</strong> : les distances se mesurent moins en kilomètres qu’en heures...
        On peut facilement mettre 1h30 à 2h pour parcourir seulement 20 kilomètres.
        Certains reprochent aussi à l’île de devenir trop superficielle, trop “instagrammable”, mais personnellement, cela ne m’a pas dérangé.
        </p>
</div>


<div className="picture" data-aos="fade-up">
    <img src={balancoire} alt="Bali plage" />
</div>

<div className="legend" >
    Beatch Club sur Nusa Lembogan
</div>

<div className="bali-block" data-aos="fade-up">

    <h1>▸▸Conseils pratiques◂◂</h1>

    <p>
    Si j’avais un conseil à donner pour Bali : restez environ deux jours dans chaque endroit afin de varier les découvertes,
    puis profitez un peu plus longtemps d’une île comme Nusa Lembongan !
    </p>

    <p>
    Meilleure période : d’avril à octobre (saison sèche)☀️🌡️.
    </p>

    <p>
    Transport : installez l’application Grab. Le scooter reste la meilleure option pour se déplacer🛵,
    sauf pour les longs trajets comme rejoindre Amed ou Ubud,
    où il vaut mieux opter pour un chauffeur🚗. Attention toutefois à la circulation⚠️!    
    </p>

    <p>
💶Budget : on peut vivre très confortablement avec 25 à 50 € par jour, selon son style de voyage.    
    </p>

</div>





  </div>
  );
}

export default Bali;