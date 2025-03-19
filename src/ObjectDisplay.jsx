import { useState } from "react";

const ObjectDisplay = () => {
  const [show, setShow] = useState(false);
  const data = { nombre: "Juan", edad: 25, ciudad: "Bogotá" };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShow(!show)}>Mostrar Datos</button>
      {show && (
        <ul>
          <li>Nombre: {data.nombre}</li>
          <li>Edad: {data.edad}</li>
          <li>Ciudad: {data.ciudad}</li>
        </ul>
      )}
    </div>
  );
};

export default ObjectDisplay;
