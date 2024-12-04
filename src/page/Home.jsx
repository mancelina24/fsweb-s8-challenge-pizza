import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../css/home.css";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import Banner from "../Components/Banner";
import Best from "../Components/Best";
import CategoryAlt from "../Components/CategoryAlt";

const Home = () => {
  return (
    <>
      <Header />
      <div class="home">
        <h1>lezzetin yolda!</h1>
        <h2>KOD ACIKTIRIR</h2>
        <h2>PİZZA, DOYURUR</h2>
        <Link to="/orderform">
          <button>ACIKTIM</button>
        </Link>
      </div>
      <Categories />
      <main>
        <h1>lezzetin yolda!</h1>
        <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
      </main>
      <Banner />
      <CategoryAlt />
      <Best />
      <Footer />
    </>
  );
};

export default Home;
