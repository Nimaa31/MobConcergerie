import Navbar from "../components/Navbar";
import Hero from "../components/HeroFormHome";
import HomeImg from "../assets/1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MenuItems } from "../components/MenuItems";

function Home () {
    const contactItem = MenuItems.find((item) => item.url === "/contact");
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        HeroImg={HomeImg}
        title="L'art de savoir faire voyages "
        text=" Votre conciergerie exclusive à Dubai pour un voyage d'exception"
        buttonText="Contactez-Nous"
        btnClass="show"
        />
        <Destination/>
        <Trip />
        
        <Footer />
        </>
    );
}


export default Home ;