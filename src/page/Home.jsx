import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../css/home.css";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import Banner from "../Components/Banner";
import Best from "../Components/Best";

const Home = () => {
  return (
    <>
      <div>
        <div>
          {" "}
          <Header />
        </div>
        <div class="home">
          <h1>lezzetin yolda!</h1>
          <h2>KOD ACIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
          <Link to="/orderform">
            <button>ACIKTIM</button>
          </Link>
        </div>
        <div>
          <Categories />
        </div>
        <main></main>
        <div>
          <h1>lezzetin yolda!</h1>
          <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
        </div>
        <Banner />
        <Categories />
        <Best />
        <Footer />
      </div>
    </>
  );
};

export default Home;
