const operate = (operator, valueA, valueB) => {
  switch (operator) {
    case "+":
      return valueA + valueB;

    case "-":
      return valueA - valueB;

    case "*":
      return valueA * valueB;

    case "/":
      if (valueB === 0) {
        return "nope";
      }
      return valueA / valueB;

    default:
      break;
  }
};

let displayValue = 0;
let valueA = "";
let valueB = "";
let firstOperator = null;
let secondOperator = null;
let result = null;

const updateDisplay = () => {
  document.getElementById("display").innerText = displayValue;
};
updateDisplay();

const inputNumber = (number) => {
  // If first operator is null it means we are still inputing value A
  if (firstOperator === null) {
    displayValue === 0 ? (displayValue = number) : (displayValue += number);
  } else {
    displayValue === valueA
      ? (displayValue = number)
      : (displayValue += number);
  }
  updateDisplay();
};

const inputOperator = (operator) => {
  // Input first operator
  if (!firstOperator && !secondOperator) {
    valueA = displayValue;
    firstOperator = operator;
  }
  // Input second operator
  else if (firstOperator && !secondOperator) {
    // If displayValue is different than valueA then we did input valueB and this is a second operator, otherwise we are inputing new first operator
    if (displayValue !== valueA) {
      secondOperator = operator;
      valueB = displayValue;
      result = operate(firstOperator, Number(valueA), Number(valueB));
      displayValue = roundAccurately(result, 10).toString();
      valueA = displayValue;
      result = null;
    } else {
      firstOperator = operator;
    }
  }
  // Else we want a new second operator
  else if (firstOperator && secondOperator) {
    valueB = displayValue;
    result = operate(secondOperator, Number(valueA), Number(valueB));
    secondOperator = operator;
    displayValue = roundAccurately(result, 10).toString();
    valueA = displayValue;
    result = null;
  }
  updateDisplay();
};

const inputEquals = () => {
  //hitting equals doesn't display undefined before operate()
  if (firstOperator === null) {
    displayValue = displayValue;
  } else if (secondOperator != null) {
    //handles final result
    valueB = displayValue;
    result = operate(secondOperator, Number(valueA), Number(valueB));
    if (result === "nope") {
      displayValue = "nope";
    } else {
      displayValue = roundAccurately(result, 10).toString();
      valueA = displayValue;
      valueB = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    //handles first operation
    valueB = displayValue;
    result = operate(firstOperator, Number(valueA), Number(valueB));
    if (result === "nope") {
      displayValue = "nope";
    } else {
      displayValue = roundAccurately(result, 10).toString();
      valueA = displayValue;
      valueB = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
  updateDisplay();
};

const inputDecimal = (dot) => {
  if (displayValue === valueA || displayValue === valueB) {
    displayValue = "0";
    displayValue += dot;
  } else if (!displayValue.toString().includes(dot)) {
    displayValue += dot;
  }
  updateDisplay();
};

const inputPercent = () => {
  displayValue = (displayValue / 100).toString();
  updateDisplay();
};

const inputSign = () => {
  displayValue = (displayValue * -1).toString();
  updateDisplay();
};

const clearDisplay = () => {
  displayValue = 0;
  valueA = null;
  valueB = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
  updateDisplay();
};

const roundAccurately = (value, places) => {
  return parseFloat(Math.round(value + "e" + places) + "e-" + places);
};
