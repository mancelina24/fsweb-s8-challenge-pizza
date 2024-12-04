import a1 from "../../Assets/Iteration-2-aseets/icons/a1.svg";
import a2 from "../../Assets/Iteration-2-aseets/icons/a2.svg";
import a3 from "../../Assets/Iteration-2-aseets/icons/a3.svg";
import a4 from "../../Assets/Iteration-2-aseets/icons/a4.svg";
import a5 from "../../Assets/Iteration-2-aseets/icons/a5.svg";
import a6 from "../../Assets/Iteration-2-aseets/icons/a6.svg";

const Categories = () => {
  return (
    <div>
      <div>
        <img src={a1} width="30" height="30" />
        <p>YENİ! Kore</p>
      </div>
      <div>
        <img src={a2} width="30" height="30" />
        <p>Pizza</p>
      </div>
      <div>
        <img src={a3} width="30" height="30" />
        <p>Burger</p>
      </div>
      <div>
        <img src={a4} width="30" height="30" />
        <p>Kızartmalar</p>
      </div>
      <div>
        <img src={a5} width="30" height="30" />
        <p>Fast Food</p>
      </div>
      <div>
        <img src={a6} width="30" height="30" />
        <p>Gazlı İçecekler</p>
      </div>
    </div>
  );
};

export default Categories;
