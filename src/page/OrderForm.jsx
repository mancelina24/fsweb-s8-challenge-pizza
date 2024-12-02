import React from "react";
import "../App.css";
import data from "../assets/data";
import { NavLink } from "react-router-dom";

const OrderForm = () => {
  return (
    <>
      <header class="order-header">
        <h1>Teknolojik Yemekler</h1>
        <NavLink activeStyle={{ color: "white" }} exact to="/">
          Anasayfa
        </NavLink>
        <NavLink activeStyle={{ color: "white" }} exact to="/">
          Seçenekler
        </NavLink>
        <NavLink activeStyle={{ color: "white" }} exact to="/orderform">
          Sipariş Oluştur
        </NavLink>
      </header>
      <header>
        <div>Position Absolute Acı Pizza</div>
        <div>
          <div>85.50₺</div>
          <div>
            <span class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i> 4.9
            </span>
            <span>(200)</span>
          </div>
        </div>
      </header>
      <main>
        <div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <div>
          <div>
            <label htmlFor="boyut">
              <h3>Boyut Seç</h3>
            </label>
          </div>
          <div>
            <h3>Hamur Seç</h3>
            <select
              name="hamur"
              onchange={(e) => {
                e.target.value;
              }}
              value={data.hamur}
            >
              <option value="">Hamur Kalınlığı</option>
              {data.hamur.map((hamurTipi, i) => (
                <option key={i} value={hamurTipi}>
                  {hamurTipi}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h3>Ek malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz 5₺</p>
        </div>
        <form action="">
          <h3>Sipariş Notu</h3>
          <input type="text" />
        </form>
        <div>adet ve sipariş toplam</div>
      </main>
    </>
  );
};

export default OrderForm;
