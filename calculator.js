const operate = (valueA, valueB, operator) => {
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
