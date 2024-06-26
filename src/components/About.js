import React from "react";
import harry from "../images/harry.jpg";
import "../styles.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="specialists">Nasi specjaliści</h2>
        <div className="departement">
          <div
            className="picture"
            style={{
              backgroundImage: `url(${harry})`,
              marginRight: "50px",
            }}></div>
          <div className="person">
            <h3>Imię Nazwisko [ dział ]</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
              fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nam
              aliquam sem et tortor.
            </p>
          </div>
        </div>
        <div className="departement">
          <div
            className="picture"
            style={{
              backgroundImage: `url(${harry})`,
              marginLeft: "50px",
            }}></div>
          <div className="person">
            <h3>Imię Nazwisko [ dział ]</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
              fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nam
              aliquam sem et tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
