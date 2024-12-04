import React, { useEffect } from "react";
import "../App.css";
import "../css/orderform.css";
import data from "../assets/data";
import { NavLink, useHistory } from "react-router-dom";
import useFormState from "../hooks/useState";
import { Checkbox } from "../Components/Checkbox";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import formbanner from "../../Assets/Iteration-2-aseets/pictures/formbanner.png";
import styled from "styled-components";

const ImageHeader = styled.img`
  background-color: #faf7f2;
  width: 40vw;
  height: 30vh;
`;
const ImageArka = styled.div`
  margin-top: 0;
`;
const Detail = styled.div`
  background-color: #faf7f2;
`;
const DetailAlt = styled.p`
  width: 40%;
  display: flex;
  justify-content: center;
  margin: 0 380px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const OrderForm = () => {
  const {
    boyut,
    setBoyut,
    hamur,
    setHamur,
    malzemeler,
    setMalzemeler,
    siparisNotu,
    setSiparisNotu,
    urunSayisi,
    setUrunSayisi,
    toplamTutar,
    setToplamTutar,
    isim,
    setIsim,
    isimError,
    setIsimError,
  } = useFormState();

  const handleBoyutChange = (e) => {
    setBoyut(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamur(e.target.value);
  };
  const handleCheckChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      if (malzemeler.length < 10) {
        setMalzemeler([...malzemeler, value]);
        setToplamTutar(toplamTutar + 5);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz!");
      }
    } else {
      setMalzemeler(malzemeler.filter((item) => item !== value));
      setToplamTutar(toplamTutar - 5);
    }
  };

  const malzemeTutar = malzemeler.length * 5;

  const handleSiparisNotuChange = (e) => {
    setSiparisNotu(e.target.value);
  };

  const increaseUrunSayisi = () => {
    setUrunSayisi(urunSayisi + 1);
    setToplamTutar(toplamTutar + 85.5);
  };

  const decreaseUrunSayisi = () => {
    if (urunSayisi > 1) {
      setUrunSayisi(urunSayisi - 1);
      setToplamTutar(toplamTutar - 85.5);
    }
  };

  const handleIsimChange = (e) => {
    setIsim(e.target.value);
  };
  const history = useHistory();

  const handleSiparisVer = async () => {
    // İsim doğrulaması yapılacak
    if (isim.length < 3 || boyut === "" || hamur === "") {
      // İsim hatası kontrolü
      if (isim.length < 3) {
        setIsimError("İsim en az 3 karakter olmalıdır.");
      } else {
        setIsimError("");
      }

      // Boyut ve hamur hatası kontrolü
      if (boyut === "") {
        alert("Lütfen bir boyut seçin.");
      }

      if (hamur === "") {
        alert("Lütfen bir hamur kalınlığı seçin.");
      }

      return; // Eksik bilgi varsa işlemi durdur
    }

    setIsimError(""); // Hata mesajını temizle

    const formData = {
      isim,
      boyut,
      hamur,
      malzemeler,
      malzemeTutar,
      toplamTutar,
    };

    // Send the POST request
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        // API'den gelen yanıtı konsola yazdır
        console.log("Sipariş Başarıyla Gönderildi", response.data);

        history.push({
          pathname: "/ordersuccess",
          state: {
            // Geçirilmesi gereken veriler
            isim,
            boyut,
            hamur,
            malzemeler,
            malzemeTutar,
            toplamTutar,
          },
        });
      })

      .catch((error) => {
        console.error("Sipariş gönderilirken bir hata oluştu!", error);
      });
  };

  return (
    <>
      <Header />
      <header>
        <div></div>
        <ImageArka>
          <ImageHeader src={formbanner} />
        </ImageArka>
        <div class="order-header">
          <NavLink exact to="/">
            Anasayfa
          </NavLink>
          <NavLink exact to="/">
            Seçenekler
          </NavLink>
          <NavLink exact to="/orderform">
            Sipariş Oluştur
          </NavLink>
        </div>
      </header>
      <section class="section-container">
        <div class="section-1">Position Absolute Acı Pizza</div>
        <div>
          <div class="section-2">{85.5 + "₺"}</div>
          <div>
            <span class="rating">4.9 {"     "}(200)</span>
          </div>
        </div>
      </section>
      <hero>
        <Detail>
          <DetailAlt>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </DetailAlt>
        </Detail>
      </hero>
      <main class="main-container">
        <div class="hamur-boyut">
          <div class="boyut">
            <h3>Boyut Seç</h3>
            {data.boyut.map((boyutTipi, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    name="boyut"
                    value={boyutTipi}
                    checked={boyut === boyutTipi}
                    onChange={handleBoyutChange}
                  />
                  {boyutTipi}
                </label>
              </div>
            ))}
          </div>
          <div class="hamur">
            <h3>Hamur Seç</h3>
            <select name="hamur" onChange={handleHamurChange} value={hamur}>
              <option value="">Hamur Kalınlığı</option>
              {data.hamur.map((hamurTipi, i) => (
                <option key={i} value={hamurTipi}>
                  {hamurTipi}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div class="checkbox-container">
          <div class="checkbox-text">
            <h3 style={{ padding: "10px 0", fontFamily: "Barlow" }}>
              Ek malzemeler
            </h3>
            <p style={{ padding: "10px 0", fontFamily: "Barlow" }}>
              En fazla 10 malzeme seçebilirsiniz 5₺
            </p>
          </div>
          <div class="checkbox-kutu">
            {data.malzemeler.map((value, i) => (
              <Checkbox
                key={i}
                handleCheckChange={handleCheckChange}
                isCheck={malzemeler.includes(value)}
                value={value}
                label={value}
              />
            ))}
          </div>
        </div>
        <div>
          <h3>İsim</h3>
          <input
            class="isim"
            type="text"
            value={isim}
            onChange={handleIsimChange}
            placeholder="İsminizi Girin (En az 3 karakter)"
          />
          {isimError && (
            <p style={{ color: "red", fontWeight: "bold" }}>{isimError}</p>
          )}
        </div>
        <form>
          <h3>Sipariş Notu</h3>
          <textarea
            value={siparisNotu}
            onChange={handleSiparisNotuChange}
            placeholder="Siparişine eklemek istediğin not var mı? (Max 100 karakter)"
            maxLength="100"
          />
        </form>
        <hr />
        <div class="siparisSonuc">
          <div class="urunSayisi">
            <button onClick={decreaseUrunSayisi} disabled={urunSayisi <= 1}>
              -
            </button>
            <span>{urunSayisi}</span>
            <button onClick={increaseUrunSayisi}>+</button>
          </div>
          <div class="hesap">
            <div class="siparistext">
              <h3>Sipariş Toplamı</h3>
            </div>
            <div class="secimler">
              <h4>Seçimler</h4>
              <p>{malzemeTutar}₺</p>
            </div>
            <div class="toplam2">
              <h4>Toplam</h4>
              <p>{toplamTutar}₺</p>
            </div>
            <button class=" buton" onClick={handleSiparisVer}>
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderForm;
