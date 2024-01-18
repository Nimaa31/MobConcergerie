import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Penth from "../assets/penthouse.jpg";
import Footer from "../components/Footer";
import Reseaux from "../components/Reseaux";

function Links (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImg={Penth}
        title=" Réseaux Sociaux"

        btnClass="hide"
        />
        <Reseaux />
        <Footer />
        </>
    )
}


export default Links;