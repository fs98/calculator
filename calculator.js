const add = (valueA, valueB) => {
  return valueA + valueB;
};

const substract = (valueA, valueB) => {
  return valueA - valueB;
};

const multiply = (valueA, valueB) => {
  return valueA * valueB;
};

const divide = (valueA, valueB) => {
  return valueA / valueB;
};

const operate = (operator, valueA, valueB) => {
  switch (operator) {
    case "+":
      return add(valueA, valueB);

    case "-":
      return substract(valueA, valueB);

    case "*":
      return multiply(valueA, valueB);

    case "/":
      return divide(valueA, valueB);

    default:
      break;
  }
};
