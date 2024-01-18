import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/4.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";



function Contact (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Contact"

        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}


export default Contact;