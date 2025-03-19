import { useState } from "react";

const TextModifier = () => {
  const [text1, setText1] = useState("Texto 1");
  const [text2, setText2] = useState("Texto 2");
  const [text3, setText3] = useState("Texto 3");

  const modifyTexts = () => {
    setText1("Nuevo Texto 1");
    setText2("Nuevo Texto 2");
    setText3("Nuevo Texto 3");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <button onClick={modifyTexts}>Modificar Textos</button>
    </div>
  );
};

export default TextModifier;
