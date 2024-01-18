import "./AboutUsStyles.css";
import Yac8 from "../assets/yac8.jpg";
import Yac4 from "../assets/10.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="content">
        <h1>Qui sommes Nous</h1>
        <p>
        Bienvenue chez MobConciergerie, une initiative portée par Ousama Majri, entrepreneur renommé dans le secteur de la coiffure, et Yacine Ouadah, diplômé d'une prestigieuse école de business en France.
         Ensemble, notre duo dynamique fusionne expérience et innovation pour créer une conciergerie exceptionnelle à Dubai, reflétant notre passion commune pour l'excellence et l'aventure. <br/> Accompagnés par une équipe dévouée,
          nous transformons chaque moment de votre séjour en une expérience inoubliable, offrant le summum du luxe, de la personnalisation et de l'aventure.
        </p>


      </div>
      <div className="image">
        <img alt="img" src={Yac4} />
        <img alt="img" src={Yac8} />
      </div>
    </div>
  );
}

export default AboutUs;
