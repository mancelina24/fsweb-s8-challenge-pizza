import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
      <header class="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <div class="home">
        <h2>KOD ACIKTIRIR</h2>
        <h2>PİZZA, DOYURUR</h2>

        <Link to="/orderform">
          <button>ACIKTIM</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
