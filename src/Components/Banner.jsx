import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import kart1 from "../../Assets/Iteration-2-aseets/cta/kart1.png";
import kart2 from "../../Assets/Iteration-2-aseets/cta/kart2.png";
import kart3 from "../../Assets/Iteration-2-aseets/cta/kart3.png";
import styled from "styled-components";

const BannerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const TekImage = styled.div`
  border-radius: 50px;
`;

const CiftImage = styled.div`
  border-radius: 50px;
`;

const Button = styled.button``;

const Banner = () => {
  return (
    <BannerMain>
      <TekImage>
        <img src={kart1} width="350" height="350" />
        <p>Özel Lezzetus</p>
        <Button />
      </TekImage>
      <CiftImage>
        <div>
          <img src={kart2} width="400" height="148" />
          <p>Hackathlon Burger Menu</p>
          <Button />
        </div>
        <div>
          <img src={kart3} width="400" height="148" />
          <p>Çoook hızlı npm gibi kurye</p>
          <Button />
        </div>
      </CiftImage>
    </BannerMain>
  );
};

export default Banner;
