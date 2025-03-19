import { useState } from "react";

const NumberValidator = () => {
  const [number, setNumber] = useState("");

  const validateNumber = () => {
    return number > 10
      ? "El número es mayor a 10"
      : "El número es menor o igual a 10";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ingrese un número"
      />
      <p>{number !== "" && validateNumber()}</p>
    </div>
  );
};

export default NumberValidator;
