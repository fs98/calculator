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
  return parseFloat(Math.round(value + "e6") + "e-6").toString();
};

const operate = (valueA, valueB, operator) => {
  valueA = Number(valueA);
  valueB = Number(valueB);

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
  }
};

const inputNumber = (number) => {
  // If operator is null it means we are still inputing value A
  if (!operator) {
    displayValue += number;
    valueA = displayValue;
  } else {
    if (!valueB) {
      displayValue = number;
      valueB = displayValue;
    } else {
      displayValue += number;
      displayValue = parseFloat(displayValue);
      valueB = displayValue;
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
    valueA = displayValue;
  } else valueB = displayValue;

  updateDisplay();
};

const inputSign = () => {
  displayValue = (displayValue * -1).toString();

  if (!valueB) {
    valueA = displayValue;
  } else valueB = displayValue;

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
  result = operate(valueA, valueB, operator);
  displayValue = result;

  if (result !== "nope") {
    valueA = result;
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
    valueA = displayValue ? displayValue : "0";
    operator = operation;
  } else {
    handleResult();
    operator = operation;
  }
  updateDisplay();
};
