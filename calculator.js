let displayValue = "";
let valueA = "";
let valueB = "";
let operator = "";
let result = null;

const updateDisplay = () => {
  document.getElementById("display").innerText = displayValue
    ? displayValue
    : 0;
};

updateDisplay();

const round = (value) => {
  return parseFloat(Math.round(value + "e6") + "e-6");
};

const operate = (valueA, valueB, operator) => {
  switch (operator) {
    case "+":
      return round(valueA + valueB);

    case "-":
      return round(valueA - valueB);

    case "*":
      return round(valueA * valueB);

    case "/":
      if (valueB === 0) {
        return "nope";
      }
      return round(valueA / valueB);

    default:
      break;
  }
};

const inputNumber = (number) => {
  // If first operator is null it means we are still inputing value A
  if (!operator) {
    valueA += number;
    displayValue = valueA;
  } else {
    valueB += number;
    displayValue = valueB;
  }

  updateDisplay();
};

const inputDecimal = (dot) => {
  if (!displayValue) {
    valueA = "0";
    valueA += dot;
    displayValue = valueA;
  }

  if (!displayValue.includes(dot)) {
    if (displayValue === valueA) {
      valueA += dot;
      displayValue = valueA;
    } else if (displayValue === valueB) {
      valueB += dot;
      displayValue = valueB;
    }
  }

  updateDisplay();
};

const inputPercent = () => {
  displayValue = (displayValue / 100).toString();

  if (!operator) {
    valueA = displayValue;
  } else {
    valueB = displayValue;
  }

  updateDisplay();
};
