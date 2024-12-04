import styled from "styled-components";
import food1 from "../../Assets/Iteration-2-aseets/pictures/food1.png";
import food2 from "../../Assets/Iteration-2-aseets/pictures/food2.png";
import food3 from "../../Assets/Iteration-2-aseets/pictures/food3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #faf7f2;
  gap: 25px;
  padding: 50px 0px;
`;
const BestUrun = styled.div`
  background-color: white;
  margin=20px
  align-items: center;
  text-align: left;
  font-family:Barlow
  padding:0 10px;

`;
const Detail = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
`;

const Best = () => {
  const history = useHistory();

  const handleImageClick = () => {
    history.push("/orderform");
  };

  return (
    <Container>
      <BestUrun>
        <img src={food1} width="235" height="235" />
        <p>
          <strong>Terminal Pizza</strong>
        </p>
        <Detail>
          <span>4.9</span>
          <span>(200)</span>
          <span>
            <strong>60₺</strong>
          </span>
        </Detail>
      </BestUrun>
      <BestUrun>
        <img
          src={food2}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
          width="235"
          height="235"
        />
        <p>
          <strong>Position Absolute Acı Pizza</strong>
        </p>
        <Detail>
          <span>4.9</span>
          <span>(928)</span>
          <span>
            <strong>85₺</strong>
          </span>
        </Detail>
      </BestUrun>
      <BestUrun>
        <img src={food3} width="235" height="235" />
        <p>
          <strong>useEffect Tavuklu Burger</strong>
        </p>
        <Detail>
          <span>4.9</span>
          <span>(482)</span>
          <span>
            <strong>75₺</strong>
          </span>
        </Detail>
      </BestUrun>
    </Container>
  );
};

export default Best;
