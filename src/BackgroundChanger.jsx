import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    setColor(color === "white" ? "lightblue" : "white");
  };

  return (
    <div
      style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
    >
      <button onClick={changeColor}>Cambiar Color</button>
    </div>
  );
};

export default BackgroundChanger;
