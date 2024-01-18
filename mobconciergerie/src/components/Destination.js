
import Moments from "../assets/moments.jpg";
import Telo from "../assets/telo.jpg";
import Yacth  from "../assets/yatch.jpg";
import Urus from "../assets/Urus.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
      <div className="destination">
        <h1>Conciergerie d'Exception à Dubaï </h1>
        <p className="sous-titre">Élevez Votre Expérience au Sommet du Luxe et de la Découverte</p>
  
        <DestinationData
          className="first-des"
          heading="Éclats de Luxe et Moments Inoubliables "
          text="
          Plongez dans une expérience de voyage sans égale, où le luxe rencontre la personnalisation. 
          Nous sommes fiers de vous offrir bien plus qu'une conciergerie  nous créons des moments inoubliables, 
          des aventures exclusives et un service exceptionnel, pour que chaque instant de votre séjour à Dubaï soit aussi exceptionnel que cette ville elle-même.
           "
          img1={Moments}
          img2={Urus}
        />
  
        <DestinationData
          className="first-des-reverse"
          heading="Votre Confort, Notre Priorité"
          text="Notre engagement envers votre bien-être ne se limite pas à satisfaire les attentes habituelles.
           Chez MobConciergerie, nous considérons chaque instant de votre séjour à Dubaï comme une occasion de créer des souvenirs exceptionnels. 
           Notre équipe dévouée s'efforce de transcender les normes pour vous offrir un accompagnement sur mesure, garantissant ainsi une expérience immersive, marquée par le confort et le raffinement."
          img1={Yacth}
          img2={Telo}
        />
      </div>
    );
  };
  
  export default Destination; 
