import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../css/home.css";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div class="home">
        <h2>KOD ACIKTIRIR</h2>
        <h2>PİZZA, DOYURUR</h2>

        <Link to="/orderform">
          <button>ACIKTIM</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
