import styled from "styled-components";
import data from "../assets/data";
import "../css/CustomCheckbox.css";

export const Checkbox = ({ handleCheckChange, isCheck, value, label }) => {
  return (
    <label class="kcontainer">
      <input
        class="containerInput"
        type="checkbox"
        onChange={handleCheckChange}
        checked={isCheck}
        value={value}
      />
      <span class="checkmark"></span>
      {label}
    </label>
  );
};
