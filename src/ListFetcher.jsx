import { useState } from "react";

const ListFetcher = () => {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    const dataList = ["Manzana", "Banana", "Naranja", "Uva", "Sandía"];
    setItems(dataList);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={fetchData}>Cargar Lista</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListFetcher;
