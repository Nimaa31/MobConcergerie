import "./TripStyles.css";
import TripData from "./TripData";
import Desert from "../assets/desert.jpg";
import Zoo from "../assets/zoo.jpg";
import Tchops from "../assets/tchop.jpg";
import Yatche from "../assets/yatche.jpg" ;

function Services (){
    return(
        <div className="Trip">
            <h1>Notre palette de prestations </h1>
            <p>Chez Mob , notre engagement va bien au-delà de la 
                location de voitures. Nous nous efforçons de répondre à chacune de vos demandes, 
                même celles qui ne sont pas immédiatement apparentes. Nous assumons la responsabilité de mobiliser nos 
                vastes réseaux et contacts privilégiés pour satisfaire tous vos désirs. Que ce soit pour obtenir des réservations exclusives, 
                organiser des expériences sur mesure, ou débloquer des opportunités uniques, nous mettons nos relations au service de votre satisfaction.
                Parce que chez nous, la promesse est de faire de chaque séjour à Dubai une expérience exceptionnelle, dépassant vos attentes à chaque instant. 
            </p>
             <div className="tripcard">
                <TripData 
                    image={Desert }
                    heading="Explorez l'Exaltant Desert Safari à Dubai "
                    text="🌵Bienvenue à tous ! Découvrez nos passionnantes activités Desert Safari à Dubai. 
                    Une villa exclusive vous attend, équipée de Quad, Buggy, Moto-cross pour des moments inoubliables au cœur de ce désert magnifique. 
                    Préparez-vous à vivre une aventure mémorable avec nous !."
                />

                <TripData 
                    image={Zoo}
                    heading="  Explorez Notre Refuge Animalier Unique ! "
                    text="🦁 Laissez-vous séduire par la beauté des animaux sauvages tout en explorant la magie des Emirats  Rejoignez-nous pour 
                    une expérience exceptionnelle et découvrez des moments uniques au cœur de la nature !."
                />

                <TripData 
                    image={Tchops}
                    heading="Roulez avec Élégance  "
                    text="🚗Nous sommes enchantés de vous présenter notre nouveau service à Dubai en tant qu'agence de location de voitures,
                     offrant une gamme variée de véhicules pour rendre votre séjour encore plus mémorable ! Explorez Dubai à votre guise en conduisant 
                     l'une de nos voitures de luxe ou nos véhicules économiques. "
                />
                <TripData 
                    image={Yatche}
                    heading=" Frissons Aquatiques de Luxe"
                    text="🚤Explorez nos Frissons & Détente Aquatiques avec MOB, expert en expériences jet-ski et yachts exclusifs. 
                    Chaque jet-ski, minutieusement sélectionné, vous offre une aventure aquatique palpitante où le luxe se fusionne avec l'excitation. 
                    Laissez-nous vous guider vers une expérience jet-ski inoubliable et une croisière en yacht qui marquera vos souvenirs de manière indélébile."
                />


             </div>
        </div>
    );
}

export default Services ; 