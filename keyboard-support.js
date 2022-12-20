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
        inputDecimal;
        break;

      case "%":
        inputPercent("%");
        break;

      case "+":
        inputOperator("+");
        break;

      case "-":
        inputOperator("-");
        break;

      case "*":
        inputOperator("*");
        break;

      case "/":
        inputOperator("/");
        break;

      case "Enter":
        inputEquals();
        break;

      case "Escape":
        clearDisplay();
        break;

      case "Backspace":
        inputBackspace();
        break;

      default:
        inputNumber(event.key);
        break;
    }
  }
  updateDisplay();
});
