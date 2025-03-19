import BackgroundChanger from "./BackgroundChanger";
import TextModifier from "./TextModifier";
import NumberValidator from "./NumberValidator";
import ObjectDisplay from "./ObjectDisplay";
import ListFetcher from "./ListFetcher";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Prueba Técnica en React.js</h1>
      <BackgroundChanger />
      <TextModifier />
      <NumberValidator />
      <ObjectDisplay />
      <ListFetcher />
    </div>
  );
}

export default App;
