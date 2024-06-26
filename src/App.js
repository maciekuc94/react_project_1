import React from "react";
import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
