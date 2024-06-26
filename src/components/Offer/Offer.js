import React from "react";
import "../../styles.css";
import "./Offer.css";
import OfferBox from "../OfferBox/OfferBox.js";
import offers from "../../data/offers";

function Offer() {
  return (
    <section id="offer" className="offer">
      <div className="offer-container">
        <h2 className="offer-company">Czym zajmuje się nasza firma?</h2>
        <div className="offer-box">
          {offers.map((offer) => (
            <OfferBox key={offer.id} text={offer.text} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;
