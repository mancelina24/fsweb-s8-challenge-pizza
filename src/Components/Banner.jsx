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
  gap: 30mpx;
  padding: 40px 300px;
`;

const Tek = styled.div`
  position: relative;
  width: 30vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cift = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  gap: 20px;
`;

const Image = styled.img`
  border-radius: 15px;
`;
const Text = styled.p`
  width: 30%;
  position: absolute;
  z-index: 2;
  flex-wrap: wrap;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  top: 1%;
  left: 20%;
  transform: translateX(-50%);
`;
const Text2 = styled.p`
  width: 30%;
  position: absolute;
  z-index: 2;
  flex-wrap: wrap;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  top: 1%;
  left: 20%;
  transform: translateX(-50%);
`;
const Text3 = styled.p`
  width: 30%;
  position: absolute;
  z-index: 2;
  flex-wrap: wrap;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  top: 50%;
  left: 20%;
  transform: translateX(-50%);
`;

const Span = styled.span`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 0.9rem;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const Red = styled.span`
  color: #ce2829;
`;

const Button = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 10%;
  transform: translateX(-10%);
  padding: 10px 10px;
  background-color: white;
  color: #ce2829;
  border: none;
  border-radius: 15px;
  font-family: Barlow;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;
const Button2 = styled.button`
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 10%;
  transform: translateX(-10%);
  padding: 10px 10px;
  background-color: white;
  color: #ce2829;
  border: none;
  border-radius: 15px;
  font-family: Barlow;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;
const Button3 = styled.button`
  position: absolute;
  z-index: 2;
  top: 80%;
  left: 10%;
  transform: translateX(-10%);
  padding: 10px 10px;
  background-color: white;
  color: #ce2829;
  border: none;
  border-radius: 15px;
  font-family: Barlow;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;

const Banner = () => {
  return (
    <BannerMain>
      <Tek>
        <Image src={kart1} width="360px" height:auto />
        <Text>Özel Lezzetus</Text>
        <Span>Position Absolute Acı Burger</Span>
        <Button>SİPARİŞ VER</Button>
      </Tek>
      <Cift>
        <div>
          <Image src={kart2} width="350px" height:auto />
          <Text2>Hackathlon Burger Menu</Text2>
          <Button2>SİPARİŞ VER</Button2>
        </div>
        <div>
          <Image src={kart3} width="350px" height:auto />
          <Text3>
            <Red>Çoook</Red> hızlı npm gibi kurye
          </Text3>
          <Button3>SİPARİŞ VER</Button3>
        </div>
      </Cift>
    </BannerMain>
  );
};

export default Banner;
