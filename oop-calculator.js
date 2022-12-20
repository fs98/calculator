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

  inputNumber = (number) => {
    // If operator is null it means we are still inputing value A
    if (!this.operator) {
      if (this.displayValue.length < 10) {
        this.displayValue += number;
        this.valueA = this.displayValue;
      }
    } else {
      if (!this.valueB) {
        this.displayValue = number;
        this.valueB = this.displayValue;
      } else {
        if (this.displayValue.toString().length < 10) {
          this.displayValue += number;
          this.displayValue = parseFloat(this.displayValue);
          this.valueB = this.displayValue;
        }
      }
    }

    this.updateDisplay();
  };

  inputSign = () => {
    this.displayValue = (this.displayValue * -1).toString();

    if (!this.valueB) {
      this.valueA = this.displayValue;
    } else {
      this.valueB = this.displayValue;
    }

    this.updateDisplay();
  };

  inputPercent = () => {
    this.displayValue = (this.displayValue / 100).toString();

    if (!this.valueB) {
      this.valueA = this.displayValue;
    } else {
      this.valueB = this.displayValue;
    }

    this.updateDisplay();
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

    this.updateDisplay();
  };

  inputEquals = () => {
    if (this.operator) {
      if (!this.valueB) {
        this.valueB = this.valueA; // If value B is empty consider it same as value A
      }
      this.handleResult();
    }

    this.updateDisplay();
  };

  inputBackspace = () => {
    this.displayValue = this.displayValue.toString().slice(0, -1);
    if (!this.valueB) {
      this.valueA = this.displayValue;
    } else {
      this.valueB = this.displayValue;
    }

    this.updateDisplay();
  };

  updateDisplay = () => {
    document.getElementById("display").innerText = this.displayValue
      ? this.displayValue
      : 0;
  };

  inputOperator = (operation) => {
    if (!this.valueB) {
      // This is a first operator
      this.valueA = this.displayValue ? this.displayValue : "0";
      this.operator = operation;
    } else {
      this.handleResult();
      this.operator = operation;
    }

    this.updateDisplay();
  };

  clearDisplay = () => {
    this.displayValue = "";
    this.valueA = "";
    this.valueB = "";
    this.operator = "";
    this.result = null;
    this.updateDisplay();
  };
}

const calculator = new Calculator();
calculator.updateDisplay();

calculator.valueA = "43.";
calculator.displayValue = "43.";

console.log("After operating", calculator.displayValue);
