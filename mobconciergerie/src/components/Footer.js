import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MobConcergerie</h1>
          <p>Voyager avec nous</p>
        </div>
        <div>
          <a href="https://www.tiktok.com/@mobconciergerie" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok "></i>
          </a>
          <a href="https://www.instagram.com/mobconciergerie" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://t.snapchat.com/Q0kHFTxK" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-snapchat"></i>
          </a>
          <a href="https://wa.me/+33652574318" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>


        <ul className="bottom"> {/* Ajout de la balise ul pour la liste */}
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="copy">
          <p>
            &copy; 2024 MobConciergerie. Tous droits réservés. Site réalisé
            par <a href="/" target="_blank" rel="noopener noreferrer">EnidWeb</a>.
          </p>
        </div>
      </div>
  );
};

export default Footer;
