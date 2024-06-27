import "./OfferBox.css";

function OfferBox({ text, isNew }) {
  return (
    <div className={`box ${isNew ? "box-new" : ""}`}>
      {isNew && <span className="circle"></span>}
      <p>{text}</p>
      {isNew && <p className="new-text">(nowość)</p>}
    </div>
  );
}

export default OfferBox;
