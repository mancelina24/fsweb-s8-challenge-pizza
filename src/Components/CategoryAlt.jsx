import a1 from "../assets/Iteration-2-aseets/icons/a1.svg";
import a2 from "../assets/Iteration-2-aseets/icons/a2.svg";
import a3 from "../assets/Iteration-2-aseets/icons/a3.svg";
import a4 from "../assets/Iteration-2-aseets/icons/a4.svg";
import a5 from "../assets/Iteration-2-aseets/icons/a5.svg";
import a6 from "../assets/Iteration-2-aseets/icons/a6.svg";
import styled from "styled-components";

const CategoryAltMain = styled.main`
  background-color: #faf7f2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  gap: 50px;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: Roboto Condensed;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;
const CategoryAltDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 7px;
  background-color: white;
  border-radius: 20px;
  color: black;
  width: 100px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const CategoryAltDetail2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 7px;
  background-color: #292929;
  border-radius: 20px;
  color: white;
  width: 100px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CategoryAlt = () => {
  return (
    <CategoryAltMain>
      <CategoryAltDetail>
        <img src={a1} width="30" height="30" />
        <p>Ramen</p>
      </CategoryAltDetail>
      <CategoryAltDetail2>
        <img src={a2} width="30" height="30" />
        <p>Pizza</p>
      </CategoryAltDetail2>
      <CategoryAltDetail>
        <img src={a3} width="30" height="30" />
        <p>Burger</p>
      </CategoryAltDetail>
      <CategoryAltDetail>
        <img src={a4} width="30" height="30" />
        <p>Frech Fries</p>
      </CategoryAltDetail>
      <CategoryAltDetail>
        <img src={a5} width="30" height="30" />
        <p>Fast Food</p>
      </CategoryAltDetail>
      <CategoryAltDetail>
        <img src={a6} width="30" height="30" />
        <p>Soft Drinks</p>
      </CategoryAltDetail>
    </CategoryAltMain>
  );
};

export default CategoryAlt;
