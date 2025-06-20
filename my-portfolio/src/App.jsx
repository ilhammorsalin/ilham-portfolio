import { Card } from "./components/Card";
import elamDP from "./assets/elamDP.png";
import sun from "./assets/sun scarecrow square.png";
import pulp from "./assets/pulp gif.gif";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-800 m-10 p-5 
      flex flex-row flex-wrap justify-evenly content-start">
      <Card image={elamDP} header="elam" text="lazy ass dude" btnText="Text" />

      <Card
        image={sun}
        header="naturelover55"
        text="watch a sunset with me"
        btnText="Text"
      />
      <Card image={pulp} header="s.jackson" text="that mf" btnText="Text" />
    </div>
  );
}

export default App;
