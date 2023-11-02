import "./styles.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (event) => {
    let number = event.target.textContent;

    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    let operator = event.target.textContent;
    if (display === "0") {
      setDisplay(operator);
    } else {
      setDisplay(display + " " + operator + " ");
    }
  };

  const handleDecimal = (event) => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".") && isNaN(parseInt(lastElement)) === false) {
      setDisplay(display + ".");
    }
  };

  const handleAC = () => {
    setDisplay("0");
  };

  const handleC = () => {
    const array = display.split("");
    const lastElement = array.slice(0, display.length - 1);
    const remainingElements = lastElement.join("");
    if (display === "0") {
      setDisplay(display);
    } else {
      setDisplay(remainingElements);
    }
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  return (
    <div className="App">
      <div className="container">
        <div id="display">{display}</div>
        <button id="clear" onClick={handleAC}>
          AC
        </button>
        <button id="clear" onClick={handleC}>
          C
        </button>
        <div className="operators">
          <button id="divide" onClick={handleOperator}>
            /
          </button>
          <button id="multiply" onClick={handleOperator}>
            *
          </button>
          <button id="subtract" onClick={handleOperator}>
            -
          </button>
          <button id="add" onClick={handleOperator}>
            +
          </button>
        </div>
        <div className="numbers">
          <button id="seven" onClick={handleNumber}>
            7
          </button>
          <button id="eight" onClick={handleNumber}>
            8
          </button>
          <button id="nine" onClick={handleNumber}>
            9
          </button>
          <button id="four" onClick={handleNumber}>
            4
          </button>
          <button id="five" onClick={handleNumber}>
            5
          </button>
          <button id="six" onClick={handleNumber}>
            6
          </button>
          <button id="one" onClick={handleNumber}>
            1
          </button>
          <button id="two" onClick={handleNumber}>
            2
          </button>
          <button id="three" onClick={handleNumber}>
            3
          </button>
        </div>
        <button id="zero" onClick={handleNumber}>
          0
        </button>
        <button id="decimal" onClick={handleDecimal}>
          .
        </button>
        <button id="equal" onClick={handleEqual}>
          <a id="equals">=</a>
        </button>
      </div>
      <div id="text" className="first">
        Design and Coded By
      </div>
      <div id="text">Taha Zaib</div>
    </div>
  );
}

export default App;
