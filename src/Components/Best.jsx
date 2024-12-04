import styled from "styled-components";

import food1 from "../../Assets/Iteration-2-aseets/pictures/food1.png";
import food2 from "../../Assets/Iteration-2-aseets/pictures/food2.png";
import food3 from "../../Assets/Iteration-2-aseets/pictures/food3.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #faf7f2;
  gap: 25px;
`;
const BestUrun = styled.div`
  background-color: white;
  margin=20px
  align-items: center;
  text-align: left;
`;

const Best = () => {
  return (
    <Container>
      <BestUrun>
        <img src={food1} width="235" height="235" />
        <p>Terminal Pizza</p>
      </BestUrun>
      <BestUrun>
        <img src={food2} width="235" height="235" />
        <p>Position Absolute Acı Pizza</p>
      </BestUrun>
      <BestUrun>
        <img src={food3} width="235" height="235" />
        <p>useEffect Tavuklu Burger</p>
      </BestUrun>
    </Container>
  );
};

export default Best;
