import "./App.css";
import { useState } from "react";

function App() {
  const [lower, setLower] = useState("0");
  const [upper, setUpper] = useState("0");

  function handleChange({ target }) {
    let but = target.innerHTML;
    if (but === "AC") {
      setLower("0");
      setUpper("0");
    } else if (but === "=") {
    } else {
      setLower(but);
    }
  }

  return (
    <div className="App">
      <div id="calculator">
        <div id="display">
          <div>
            <p id="upper">{upper}</p>
          </div>
          <div>
            <p id="lower">{lower}</p>
          </div>
        </div>
        <div onClick={handleChange} id="pad">
          <button id="clear">AC</button>
          <button onClick={handleChange} id="divide">
            /
          </button>
          <button id="multiply">*</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="subtract">-</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="add">+</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="equals">=</button>
          <button id="zero">0</button>
          <button id="decimal">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
