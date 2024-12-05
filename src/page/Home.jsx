import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../css/home.css";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import Banner from "../Components/Banner";
import Best from "../Components/Best";
import CategoryAlt from "../Components/CategoryAlt";
import styled from "styled-components";

const ArkaPlan = styled.div`
  background-color: #faf7f2;

  @media (max-width: 680px) {
    padding: 8px;
  }
`;
const OzelYazi = styled.h1`
  font-family: "Satisfy";
  font-size: 1.5rem;
  color: #fdc913;
  text-align: center;
  padding-bottom: 0px;

  @media (max-width: 680x) {
    font-size: 1.1rem;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <ArkaPlan>
        <div class="home">
          <OzelYazi>fırsatı kaçırma!</OzelYazi>
          <h2>KOD ACIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
          <Link to="/orderform">
            <button>ACIKTIM</button>
          </Link>
        </div>
        <Categories />
        <Banner />
        <main>
          <OzelYazi style={{ color: "#CE2829" }}>
            en çok paketlenen menüler!
          </OzelYazi>
          <h4
            style={{
              fontSize: "2rem",
              color: "black",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "10px",
            }}
          >
            Acıktıran Kodlara Doyuran Lezzetler
          </h4>
        </main>
        <CategoryAlt />
        <Best />
      </ArkaPlan>
      <Footer />
    </>
  );
};

export default Home;
