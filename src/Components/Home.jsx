import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>KOD ACIKTIRIR</h2>
      <h2>PİZZA, DOYURUR</h2>

      <Link to="/OrderForm">
        <button>ACIKTIM</button>
      </Link>
    </>
  );
};

export default Home;
