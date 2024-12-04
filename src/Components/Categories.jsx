import a1 from "../../Assets/Iteration-2-aseets/icons/a1.svg";
import a2 from "../../Assets/Iteration-2-aseets/icons/a2.svg";
import a3 from "../../Assets/Iteration-2-aseets/icons/a3.svg";
import a4 from "../../Assets/Iteration-2-aseets/icons/a4.svg";
import a5 from "../../Assets/Iteration-2-aseets/icons/a5.svg";
import a6 from "../../Assets/Iteration-2-aseets/icons/a6.svg";
import styled from "styled-components";

const CategoryMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  background-color: white;
  gap: 50px;
  font-size: 0.7rem;
  font-weight: bold;
  font-family: Roboto Condensed;
`;
const CategoryDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border:1px solid white
  border-radius:20px
`;

const Categories = () => {
  return (
    <CategoryMain>
      <CategoryDetail>
        <img src={a1} width="30" height="30" />
        <p>YENİ! Kore</p>
      </CategoryDetail>
      <CategoryDetail>
        <img src={a2} width="30" height="30" />
        <p>Pizza</p>
      </CategoryDetail>
      <CategoryDetail>
        <img src={a3} width="30" height="30" />
        <p>Burger</p>
      </CategoryDetail>
      <CategoryDetail>
        <img src={a4} width="30" height="30" />
        <p>Kızartmalar</p>
      </CategoryDetail>
      <CategoryDetail>
        <img src={a5} width="30" height="30" />
        <p>Fast Food</p>
      </CategoryDetail>
      <CategoryDetail>
        <img src={a6} width="30" height="30" />
        <p>Gazlı İçecekler</p>
      </CategoryDetail>
    </CategoryMain>
  );
};

export default Categories;
