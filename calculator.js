let displayValue = 0;
let valueA = null;
let valueB = null;
let operator = null;
let result = null;

const updateDisplay = (() => {
  document.getElementById("display").innerText = displayValue;
})();

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
