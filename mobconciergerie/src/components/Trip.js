import "./TripStyles.css";
import TripData from "./TripData";
import Logement  from "../assets/logement.jpg";
import Voiture from "../assets/voiture.jpg";
import Beach from "../assets/beach.jpg";
import Events from "../assets/events.jpg";

function Trip (){
    return(
        <div className="Trip">
            <h1>Découvrez l'art du service exceptionnel avec l'equipe MOB. </h1>
            <p> Imaginez-vous plonger dans un monde où chaque détail de votre séjour est pensé sur mesure, reflétant votre style et répondant à vos désirs les plus exquis. 
                Du transport élégant aux réservations dans les établissements les plus prestigieux, notre équipe dévouée est là pour anticiper vos besoins et rendre chaque étape de votre aventure à 
                Dubaï inoubliable.
            </p>
             <div className="tripcard">
                <TripData 
                    image={Logement}
                    heading="Résidences d'Exception "
                    text="Chaque résidence, soigneusement sélectionnée, allie confort et sophistication, offrant une expérience résidentielle exceptionnelle. 
                    Laissez l'equpe de Mob vous guider vers le refuge parfait, transformant votre séjour à Dubaï en une expérience de vie inoubliable."
                />

                <TripData 
                    image={Voiture}
                    heading=" Conduite Élégante "
                    text="Explorez la Conduite Élégante , notre expert en services de transport de luxe, 
                    pour des déplacements sophistiqués à Dubaï. Chaque véhicule, sélectionné avec soin, offre une expérience de conduite confortable et stylée."
                />

                <TripData 
                    image={Beach}
                    heading="Sable Privé, Vues Exclusives "
                    text="Explorez nos Plages Privées d'Élite, expert en expériences balnéaires exclusives. Chaque plage, sélectionné avec soin, offre une escapade exclusive où le luxe rencontre le littoral,
                     transformant votre séjour à Dubaï en une expérience balnéaire inoubliable"
                />

                <TripData 
                    image={Events}
                    heading="Occasion Spéciale "
                    text="Vos Rêves, Notre Réalité , nous sommes spécialisés dans la création d'événements exceptionnels.
                     Forts de nos connexions privilégiées, nous transformons vos rêves en réalité.
                     Que ce soit un mariage élégant, une soirée mémorable, ou tout autre événement spécial, confiez-nous vos aspirations, 
                     et laissez-nous orchestrer une expérience inoubliable."
                />
             </div>
        </div>
    );
}

export default Trip ; 