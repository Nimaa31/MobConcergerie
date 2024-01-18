import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImg={AboutImg}
        title="A propos de nous "

        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )
}


export default About;