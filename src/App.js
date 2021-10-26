import "./App.css";
import { useState } from "react";

function App() {
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("0");
  const [operation, setOperation] = useState("");

  function handleChange({ target }) {
    let but = target.innerHTML;

    if (but === "AC") {
      setLower("");
      setUpper("0");
      setOperation("");
    } else if (but === "=") {
      if (lower === "") {
        return;
      } else {
        compute(operation);

        setLower("");
      }
    } else if ("+-/*".indexOf(but) !== -1) {
      if (!lower) {
        if ("+-/*".indexOf(upper.slice(-1) === -1)) {
          setUpper(upper + but);
          setOperation(but);
        } else {
          setUpper(upper.slice(0, -1) + but);
        }
      } else {
        compute(operation);
        setUpper((upper) => upper.toString() + but);
        setOperation(but);
      }
      setLower("");
    } else if (but === ".") {
      if (lower.indexOf(but) === -1) {
        setLower(lower + but);
      }
    } else {
      if (but === "0" && lower === "") {
        return;
      }
      setLower(lower + but);
    }
  }

  function compute(operation) {
    switch (operation) {
      case "+":
        setUpper((upper) => (parseFloat(upper) + parseFloat(lower)).toString());
        break;
      case "-":
        setUpper((upper) => (parseFloat(upper) - parseFloat(lower)).toString());
        break;
      case "*":
        setUpper((upper) => (parseFloat(upper) * parseFloat(lower)).toString());
        break;
      case "/":
        setUpper((upper) => (parseFloat(upper) / parseFloat(lower)).toString());
        break;
      default:
        setUpper(lower);
    }
  }

  return (
    <div id="calculator">
      <div id="display">
        <div id="upper">{upper}</div>
        <div id="lower">{lower}</div>
      </div>
      <div onClick={handleChange} id="pad">
        <button id="clear">AC</button>
        <button id="divide">/</button>
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
  );
}

export default App;
