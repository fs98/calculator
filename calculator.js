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

const roundResult = (value) => {
  return parseFloat(Math.round(value + "e6") + "e-6");
};

const operate = (valueA, valueB, operator) => {
  switch (operator) {
    case "+":
      return roundResult(valueA + valueB);

    case "-":
      return roundResult(valueA - valueB);

    case "*":
      return roundResult(valueA * valueB);

    case "/":
      if (valueB === 0) {
        return "nope";
      }
      return roundResult(valueA / valueB);

    default:
      break;
  }
};

const inputNumber = (number) => {
  // If operator is null it means we are still inputing value A
  if (!operator) {
    displayValue += number;
    valueA = displayValue.toString();
  } else {
    if (!valueB) {
      displayValue = number;
      valueB = displayValue.toString();
    } else {
      displayValue += number;
      displayValue = parseFloat(displayValue);
      valueB = displayValue.toString();
    }
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

  if (!valueB) {
    valueA = displayValue.toString();
  } else valueB = displayValue.toString();

  updateDisplay();
};

const inputSign = () => {
  displayValue = (displayValue * -1).toString();

  if (!valueB) {
    valueA = displayValue.toString();
  } else valueB = displayValue.toString();

  updateDisplay();
};

const clearDisplay = () => {
  displayValue = "";
  valueA = "";
  valueB = "";
  operator = "";
  result = null;
  updateDisplay();
};

const handleResult = () => {
  result = operate(Number(valueA), Number(valueB), operator);
  displayValue = result.toString();

  if (result !== "nope") {
    valueA = result.toString();
    valueB = null;
    operator = null;
    result = null;
  }
};

const inputEquals = () => {
  if (operator) {
    if (!valueB) {
      valueB = valueA; // If value B is empty consider it same as value A
    }
    handleResult();
  }
  updateDisplay();
};

const inputOperator = (operation) => {
  if (!valueB) {
    // This is a first operator
    valueA = displayValue.toString() ? displayValue : "0";
    operator = operation;
  } else {
    handleResult();
    operator = operation;
  }
  updateDisplay();
};
