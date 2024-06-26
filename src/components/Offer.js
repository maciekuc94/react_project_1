import React from "react";
import "../styles.css";
import OfferBox from "./OfferBox";

const offers = [
  { id: 1, text: "Usługa 1", isNew: true },
  { id: 2, text: "Usługa 2", isNew: false },
  { id: 3, text: "Usługa 3", isNew: false },
  { id: 4, text: "Usługa 4", isNew: false },
  { id: 5, text: "Usługa 5", isNew: false },
  { id: 6, text: "Usługa 6", isNew: false },
];

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
