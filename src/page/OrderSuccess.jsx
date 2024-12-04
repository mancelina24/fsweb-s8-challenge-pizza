import React from "react";
import "../css/ordersuccess.css";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const { isim, boyut, hamur, malzemeler, malzemeTutar, toplamTutar } =
    location.state || {};
  return (
    <>
      <Header />
      <div className="successContainer">
        <div class="onbilgi">
          <h1>lezzetin yolda!</h1>
          <h2>SİPARİŞ ALINDI!</h2>
          <h3>{isim}</h3>
        </div>
        <div class="detaylar">
          <div>
            <h3>Position Absolute Acı Pizza</h3>
          </div>
          <div className="urunDetay">
            <ul>
              <li>
                Boyut :{"    "}
                <strong>
                  {boyut === "Büyük"
                    ? "L"
                    : boyut === "Küçük"
                    ? "S"
                    : boyut === "Orta"
                    ? "M"
                    : boyut}
                </strong>
              </li>
              <li>
                Hamur :{"    "} <strong>{hamur}</strong>
              </li>
              <li class="malzeme">
                Ek Malzemeler : {"    "}
                <strong>
                  {malzemeler && malzemeler.length > 0 ? (
                    malzemeler.join(", ")
                  ) : (
                    <span>Yok</span>
                  )}
                </strong>
              </li>
            </ul>
          </div>
          <div className="hesap">
            <div className="siparistext">
              <h3>Sipariş Toplamı</h3>
            </div>
            <div className="secimler">
              <h4>Seçimler</h4>
              <p>{malzemeTutar}₺</p>
            </div>
            <div className="toplam">
              <h4>Toplam</h4>
              <p>{toplamTutar}₺</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
