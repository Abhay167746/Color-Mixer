import { useState } from "react";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.b : 0);

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ r, g, b }));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(" + r + ", " + g + " , " + b + ")",
          height: 200,
          width: 200,
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        value={r}
        type="range"
        onChange={(e) => setR(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        value={g}
        type="range"
        onChange={(e) => setG(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">blue</label>
      <input
        value={b}
        type="range"
        onChange={(e) => setB(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <button onClick={save}>Save Color Combination</button>
    </>
  );
}

export default App;
