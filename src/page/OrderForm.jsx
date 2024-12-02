import React from "react";
import "../App.css";
import data from "../assets/data";
import { NavLink, useHistory } from "react-router-dom";
import useFormState from "../hooks/useState";
import { Checkbox } from "../Components/Checkbox";

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
  const history = useHistory();

  const handleSiparisVer = () => {
    history.push("/ordersuccess");
  };

  return (
    <>
      <header class="order-header">
        <img src="/assets/Iteration-1-assets/logo.svg" alt="hansel" />
        <NavLink activeStyle={{ color: "#FAF7F2" }} exact to="/">
          Anasayfa
        </NavLink>
        <NavLink activeStyle={{ color: "#FAF7F2" }} exact to="/">
          Seçenekler
        </NavLink>
        <NavLink activeStyle={{ color: "#FAF7F2" }} exact to="/orderform">
          Sipariş Oluştur
        </NavLink>
      </header>
      <header>
        <div>Position Absolute Acı Pizza</div>
        <div>
          <div>{85.5 + "₺"}</div>
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
          <div>
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
          <h3>Ek malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz 5₺</p>
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
        <form>
          <h3>Sipariş Notu</h3>
          <textarea
            value={siparisNotu}
            onChange={handleSiparisNotuChange}
            placeholder="Siparişine eklemek istediğin not var mı? (Max 100 karakter)"
            maxLength="100"
          />
        </form>
        <div>
          <div>
            <button onClick={decreaseUrunSayisi} disabled={urunSayisi <= 1}>
              -
            </button>
            <span>{urunSayisi}</span>
            <button onClick={increaseUrunSayisi}>+</button>
          </div>
          <div>
            <div>
              <h3>Sipariş Toplamı</h3>
            </div>
            <div>
              <h4>Seçimler</h4>
              <p>{malzemeTutar}₺</p>
            </div>
            <div>
              <h4>Toplam</h4>
              <p>{toplamTutar}₺</p>
            </div>
            <button onClick={handleSiparisVer}>SİPARİŞ VER</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderForm;
