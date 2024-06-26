import React from "react";
import "../../styles.css";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <ul className="nav-left-buttons">
            <li>moja firma</li>
          </ul>
          <ul className="nav-right-buttons">
            <li>
              <a href="#about">o nas</a>
            </li>
            <li>
              <a href="#offer">oferta</a>
            </li>
            <li className="kontakt">kontakt</li>
          </ul>
        </div>
      </nav>
      <section className="section-1">
        <div className="background">
          <div className="background-shadow"></div>
          <div className="background-container">
            <h1 className="background-title">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="background-description">
              Nie wierz nam na słowo - sprawdź
            </p>
            <a className="offer-button" href="#offer">
              oferta
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
