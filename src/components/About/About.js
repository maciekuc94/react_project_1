import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>Nasi specjaliści</h2>
        <div className="departement">
          <div className="picture picture-one"></div>
          <div className="person">
            <h3 className="personName">Imię Nazwisko [ dział ]</h3>
            <p className="personDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
              fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nam
              aliquam sem et tortor.
            </p>
          </div>
        </div>
        <div className="departement">
          <div className="picture picture-two"></div>
          <div className="person">
            <h3 className="personName">Imię Nazwisko [ dział ]</h3>
            <p className="personDescription">
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
