import data from "../assets/data";

export const Checkbox = ({ handleCheckChange, isCheck, value, label }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckChange}
          checked={isCheck}
          value={value}
        />
        {label}
      </label>
    </div>
  );
};
