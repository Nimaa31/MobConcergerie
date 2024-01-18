import React from 'react';
import './Reseaux.css';
import Trip2 from "../assets/yac8.jpg";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./FooterStyles.css";


const Reseaux = (props) => {
    const contactItem = MenuItems.find((item) => item.title === "Contact");
    return (
        <div className='links-reseau'>
            <h5 className='title'> Restons Connectés </h5>
            <h2>Suivez-nous sur les Réseaux Sociaux</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={Trip2} alt='About Image' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                        <a href="https://www.tiktok.com/@mobconciergerie" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-tiktok "></i>
                        </a>
                            <h5> TikTok</h5>
                            <small> @mobconciergerie </small>

                        </article>

                        <article className='about_card'>
                        <a href="https://www.instagram.com/mobconciergerie " target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram "></i>
                        </a>
                            <h5> Instagram</h5>
                            <small >@mobconciergerie </small>

                        </article>

                        <article className='about_card'>
                        <a href="https://t.snapchat.com/Q0kHFTxK" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-snapchat "></i>
                        </a>
                            <h5>SnapChat</h5>
                            <small>@mobdubai</small>

                        </article>

                        <article className='about_card'>
                        <a href="https://wa.me/+33652574318" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp "></i>
                        </a>
                            <h5>WhatSapp</h5>
                            <small> (+33)6.52.57.43.18 </small>

                        </article>

                    </div>
                    <p>
                    Besoin d'assistance ou d'informations ? Contactez-nous facilement sur nos réseaux sociaux ! Nous sommes là pour vous aider et rendre votre expérience exceptionnelle. 🌐✉️ #MobConciergerie #Dubai🌟
                    </p>

                    {contactItem && (
            <Link to={contactItem.url} className= "btn btn-primary">
              Contactez-nous
            </Link>
          )}
                </div>
            </div>

        </div>
    )
}

export default Reseaux ;