import React from "react";
import "../../styles.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-one">
      <div className="footer-one-container">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2024</p>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
