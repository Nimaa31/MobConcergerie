import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./HeroStyles.css";

function Home(props) {
  // Trouver l'élément "Contact" dans MenuItems
  const contactItem = MenuItems.find((item) => item.title === "Contact");

  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.HeroImg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>

          {contactItem && (
            <Link to={contactItem.url} className={props.btnClass}>
              {props.buttonText}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
