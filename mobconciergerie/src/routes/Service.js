import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicetImg from "../assets/5.jpg";
import Footer from "../components/Footer";
import Services from "../components/Services.js";



function Service (){
    return(
        <>
        
        <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImg={ServicetImg}
        title="Nos Services"

        btnClass="hide"
        />
        <Services />
        <Footer />
        </>
    )
}


export default Service;