import "./reset.css";
import "./styles.css";
import Header from "./components//Header/Header.js";
import About from "./components/About/About.js";
import Offer from "./components/Offer/Offer.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Offer />
      </main>
      <Footer />
    </>
  );
}

export default App;
