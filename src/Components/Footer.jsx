import icon1 from "../../Assets/Iteration-2-aseets/footer/icons/icon1.png";
import icon2 from "../../Assets/Iteration-2-aseets/footer/icons/icon2.png";
import icon3 from "../../Assets/Iteration-2-aseets/footer/icons/icon3.png";
import li0 from "../../Assets/Iteration-2-aseets/footer/insta/li0.png";
import li1 from "../../Assets/Iteration-2-aseets/footer/insta/li1.png";
import li2 from "../../Assets/Iteration-2-aseets/footer/insta/li2.png";
import li3 from "../../Assets/Iteration-2-aseets/footer/insta/li3.png";
import li4 from "../../Assets/Iteration-2-aseets/footer/insta/li4.png";
import li5 from "../../Assets/Iteration-2-aseets/footer/insta/li5.png";
import logo from "../../Assets/Iteration-2-aseets/footer/icons/logo.svg";

import "../App.css";
import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <main class="footerMain">
        <address class="iletisim">
          <img src={logo} width="25" height="25" />
          <div class="adres">
            <img src={icon1} width="25" height="25" />
            <p class="Text">341 Londondery Road. Istanbul Türkiye</p>
          </div>
          <div class="adres">
            <img src={icon2} width="25" height="25" />
            <p class="Text">aciktim@teknolojikemekler.com</p>
          </div>
          <div class="adres">
            <img src={icon3} width="25" height="25" />
            <p class="Text">+90 216 123 4567</p>
          </div>
        </address>
        <div class="menu">
          <h3>Sıccacık Munüler</h3>
          <ul class="menuList">
            <li>Position Absolute Acı Burger</li>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
          </ul>
        </div>
        <div class="instagram">
          <h3>Instagram</h3>
          <div class="insResim">
            <img src={li0} width="50" height="50" />
            <img src={li1} width="50" height="50" />
            <img src={li2} width="50" height="50" />
            <img src={li3} width="50" height="50" />
            <img src={li4} width="50" height="50" />
            <img src={li5} width="50" height="50" />
          </div>
        </div>
      </main>
      <div>
        <p class="year">@ 2024 Teknolojik Yemekler </p>
      </div>
    </footer>
  );
};

export default Footer;
