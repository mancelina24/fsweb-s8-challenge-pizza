import React from "react";
import { Link } from "react-router-dom";

const OrderForm = () => {
  return (
    <>
      <div>
        <h1>Teknolojik Yemekler</h1>
        <Link to="/">Anasayfa</Link>
        <Link to="/">Seçenekler</Link>
        <Link to="/orderform">Sipariş Oluştur</Link>
      </div>
      <div>
        <div>Position Absolute Acı Pizza</div>
        <div>
          <div>85.50-TL</div>
          <div>
            <span class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i> 4.8
            </span>
            <span>(200)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
