const VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "%",
  "+",
  "-",
  "*",
  "/",
  "Enter",
  "Escape",
  "Backspace",
];

// Keyboard support
document.addEventListener("keydown", (event) => {
  if (VALUES.includes(event.key)) {
    switch (event.key) {
      case ".":
        calculator.inputDecimal;
        break;

      case "%":
        calculator.inputPercent("%");
        break;

      case "+":
        calculator.inputOperator("+");
        break;

      case "-":
        calculator.inputOperator("-");
        break;

      case "*":
        calculator.inputOperator("*");
        break;

      case "/":
        calculator.inputOperator("/");
        break;

      case "Enter":
        calculator.inputEquals();
        break;

      case "Escape":
        calculator.clearDisplay();
        break;

      case "Backspace":
        calculator.inputBackspace();
        break;

      default:
        calculator.inputNumber(event.key);
        break;
    }
  }
  calculator.updateDisplay();
});
