class Calculator {
  constructor(displayValue, valueA, valueB, operator, result) {
    this.displayValue = displayValue;
    this.valueA = valueA;
    this.valueB = valueB;
    this.operator = operator;
    this.result = result;
  }

  roundResult = (value) => {
    return parseFloat(Math.round(value + "e6") + "e-6").toString();
  };

  operate = (valueA, valueB, operator) => {
    valueA = Number(valueA);
    valueB = Number(valueB);

    switch (operator) {
      case "+":
        return this.roundResult(valueA + valueB);

      case "-":
        return this.roundResult(valueA - valueB);

      case "*":
        return this.roundResult(valueA * valueB);

      case "/":
        if (valueB === 0) {
          return "nope";
        }
        return this.roundResult(valueA / valueB);
    }
  };

  handleResult = () => {
    const result = this.operate(this.valueA, this.valueB, this.operator);
    this.displayValue = result;

    if (result !== "nope") {
      this.valueA = result;
      this.valueB = null;
      this.operator = null;
      this.result = null;
    }
  };

  inputSign = () => {
    this.displayValue = (this.displayValue * -1).toString();

    if (!this.valueB) {
      this.valueA = this.displayValue;
    } else this.valueB = this.displayValue;
  };

  inputPercent = () => {
    this.displayValue = (this.displayValue / 100).toString();

    if (!this.valueB) {
      this.valueA = this.displayValue;
    } else this.valueB = this.displayValue;
  };

  inputDecimal = () => {
    if (!this.displayValue) {
      this.valueA = "0";
      this.valueA += ".";
      this.displayValue = this.valueA;
    }

    if (
      !this.displayValue.toString().includes(".") &&
      this.displayValue.toString().length <= 8
    ) {
      if (this.displayValue === this.valueA) {
        this.valueA += ".";
        this.displayValue = this.valueA;
      } else if (this.displayValue === this.valueB) {
        this.valueB += ".";
        this.displayValue = this.valueB;
      }
    }
  };
}

const calculator = new Calculator();

calculator.valueA = "43.";
calculator.displayValue = "43.";

console.log("After operating", calculator.displayValue);
